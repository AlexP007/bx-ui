import Basic from "../basic.js";
import List from './list.js';

export default class SelectContainer extends Basic {
    constructor({elt, changeSlaveValues}) {
        super();
        this.elt = elt;
        this.icon = BX.findChild(elt, {
            attribute: {'data-type': 'a2c-select-icon'}
        });
        this.select = BX.findChild(elt, {tag: 'select'});
        this.options = Array.from(this.select.options).map( (e) => {
            return {
                value: e.value,
                text: e.textContent,
            };
        });
        this.changeSlaveValues = changeSlaveValues;
        this.renderList(
            this.options,
            this.changeSlaveValues,
            this.setSelected(),
            );
        // Выставим относительное позиционирование
        this.elt.style.position = 'relative';
    };
    renderList(options, changeSlaveValues, setSelected) {
        let type = this.select.dataset.type;
        this.list = new List({
            data: Array.from(options),
            settings: {
                ul: {
                    class: this.select.dataset.listClass,
                }
            },
            changeSlaveValues,
            setSelected,
            type
        });
        this.elt.append(this.list.getElement());
        this.setClickHandler();
    }
    getOutClickHandler() {
        let elt = this.elt;
        let list = this.list;
        let toggleIcon = this.toggleIcon();
        let outClick = BX.proxy(function(e) {
            if (!elt.contains(e.target) ) {
                list.hide();
                toggleIcon();
                BX.unbind(window, 'click', outClick);
            }
        }, this);
        return outClick;
    };
    setClickHandler() {
        let outClick = this.getOutClickHandler();
        let toggleIcon = this.toggleIcon();
        let list = this.list;
        BX.bind(this.elt, 'click', function() {
            if (list.isDisabled() ) {
                return;
            }
            list.toggle();
            toggleIcon();
            if (!list.isHidden() ) {
                BX.bind(window, 'click', outClick)
            }
        });
    };
    toggleIcon() {
        let icon = this.icon;
        return () => {
            icon.className = icon.className === icon.dataset.opened
                ? icon.dataset.closed
                : icon.dataset.opened;
        }
    };
    changeValues(values) {
        let filteredOptions = this.options.filter( (e) => {
            return values.includes(e.value);
        });
        this.list.remove();
        this.renderList(filteredOptions, this.changeSlaveValues, this.setSelected());
        this.list.setEnabled();
    };
    setSelected() {
        let selectOptions = this.select.options;
        return (value) => {
            let options = Array.from(selectOptions).filter((e) => {
                return e.value === value;
            })[0];
            options.selected = true;
        }
    }
}
