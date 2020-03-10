import Basic from '../basic.js';

export default class List extends Basic {
    constructor({
        data,
        settings,
        changeSlaveValues,
        setSelected,
        type
    }) {
        super();
        this.type = type;
        if (this.type === 'a2c-select-slave') {
            this.setDisabled();
        }
        this.settings = settings.ul || {};
        let liSettings = settings.li || {};
        this.elt = BX.create('ul', {
            style: this.getStyle(),
            props: {className: this.settings.class},
            children: this.createList(data, liSettings), //создадим список значений
            events: {
                click: this.setClickHandler(changeSlaveValues, setSelected),
            }
        });
    }
    getStyle() {
        return {
            display: 'none',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            transform: 'translateY(100%)',
            border: '1px solid #ddddd7',
            borderBottomLeftRadius: '5%',
            borderBottomRightRadius: '5%',
            borderTop: 'none',
        }
    };
    createList(data, settings) {
        return data.map( (e) => BX.create('li', {
            text: e.text,
            props: {className: settings.class},
            dataset: {value: e.value},

        }))
    };
    setClickHandler(changeSlaveValues, setSelected) {
        let list = this;
        return function(e) {
            if (e.target.tagName === 'LI') {
                list.value = e.target.dataset.value;
                setSelected(list.value);
                changeSlaveValues(list.value, list.type === 'a2c-select-master');
            }
        };
    }
    setDisabled() {
        this.disabled = true;
    }
    setEnabled() {
        this.disabled = false;
    }
    isDisabled() {
        return this.disabled;
    }
}