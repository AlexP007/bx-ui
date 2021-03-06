import Basic from "./Basic.js";
import SelectContainer from './SelectContainer.js';
import Constants from "../util/const.js";

export default class MultiSelect extends Basic {
    constructor(elt) {
        super(elt);
        this.props = BX.parseJSON(elt.dataset.props);
        this.selectContainers = BX.findChild(elt, {
            attribute: {'data-type': Constants.select.container}
        }, false, true)
            .map( (elt) => new SelectContainer(elt) );

        this.setEventHandler();
    };

    changeSlaveList(value) {
        let values = this.props.reduce((acc, cur) => {
            if (cur.first_value === value
                && !acc.includes(cur.second_value)
            ) {
                acc.push(cur.second_value);
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
            }
            let [first, second] = this.getSelectValues();
            this.fireOuterEvent(first, second);
        }, this);
        BX.bind(this.elt, Constants.select.setEvent, handler);
    };

    getSelectValues() {
       return this.selectContainers.map(e => e.select.elt.value);
    };

    fireOuterEvent(first, second) {
        this.elt.dispatchEvent(new CustomEvent(Constants.multiSelect.setEvent, {
            bubbles: true,
            detail: {
                id: this.getElement().id,
                first,
                second,
            }
        }));
    }
}