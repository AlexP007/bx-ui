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

    changeSlaveList(value) {
        let values = this.props.reduce((acc, cur) => {
            if (cur.FIRST_SELECT_FIELD_VALUE === value
                && !acc.includes(cur.SECOND_SELECT_FIELD_VALUE)
            ) {
                acc.push(cur.SECOND_SELECT_FIELD_VALUE);
            }
            return acc;
        }, []);
        this.selectContainers.forEach( (e) => e.changeSlaveList(values) );
    };

    setEventHandler() {
        let handler = BX.proxy(function (e) {
            e.stopPropagation();
            if (!e.detail.isSlave) {
                this.changeSlaveList(e.detail.value);
            } else {
                let [first, second] = this.getSelectValues();
                this.fireOuterEvent(first, second);
            }
        }, this);
        BX.bind(this.elt, 'a2c-select-set', handler);
    };

    getSelectValues() {
       return this.selectContainers.map(e => e.select.elt.value);
    };

    fireOuterEvent(first, second) {
        this.elt.dispatchEvent(new CustomEvent('a2c-select-selected', {
            bubbles: true,
            detail: {
                first,
                second,
            }
        }));
    }
}