import Basic from "./basic.js";
import SelectContainer from './selectContainer.js';

export default class MultiSelect extends Basic {
    constructor(elt) {
        super(elt);
        this.props = BX.parseJSON(elt.dataset.props);
        this.selectContainers = BX.findChild(elt, {
            attribute: {'data-type': "a2c-select-single-container"}
        }, false, true)
            .map( (elt) => new SelectContainer(elt) );

        this.setEventHandler();
    };
    changeSlaveValue(value) {
        let values = this.props.reduce((acc, cur) => {
            if (cur.FIRST_SELECT_FIELD_VALUE === value
                && !acc.includes(cur.SECOND_SELECT_FIELD_VALUE)
            ) {
                acc.push(cur.SECOND_SELECT_FIELD_VALUE);
            }
            return acc;
        }, []);
        this.selectContainers.forEach( (e) => e.changeSlaveValue(values) );
    };
    setEventHandler() {
        let handler = BX.proxy(function (e) {
            e.stopPropagation();
            this.changeSlaveValue(e.detail.value);
        }, this);
        BX.bind(this.elt, 'a2c-select-set', handler)
    }
}