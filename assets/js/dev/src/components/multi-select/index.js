import Basic from "../basic.js";
import SelectContainer from './selectContainer.js';

export default class MultiSelect extends Basic {
    constructor(elt) {
        super();
        this.props = BX.parseJSON(elt.dataset.props);
        this.selects = BX.findChild(elt, {
            attribute: {'data-type': "a2c-select-single-container"}
        }, false, true).map( (elt) => new SelectContainer({
            elt,
            changeSlaveValues: this.setSelectValueHook()
        }) );
        this.slave = this.selects.filter( (e) => {
            return e.select.dataset.type === 'a2c-select-slave';
        } )[0];
    };
    setSelectValueHook() {
        let MultiSelect = this;
        return function(value, isMaster) {
            isMaster && MultiSelect.changeSlaveValue(value);
        }
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
        let slave = this.slave;
        slave.changeValues(values);
    }
}