import Basic from './basic.js';

export default class List extends Basic {
    constructor({options, settings, setSelected}) {
        super();
        this.settings = settings.ul || {};
        let liSettings = settings.li || {};

        this.elt = BX.create('ul', {
            style: this.getStyle(),
            props: this.getProps(),
            children: this.createList(options, liSettings), //создадим список значений
            events: {
                click: this.setClickHandler(setSelected),
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
        }
    };
    getProps() {
        return this.settings.class ? {className: this.settings.class} : {};
    };
    createList(data, settings) {
        let props = settings.class ? {className: settings.class} : {};
        return data.map( (e) => BX.create('li', {
            text: e.text,
            props: props,
            dataset: {value: e.value},
        }))
    };
    setClickHandler(setSelected) {
        let list = this;
        return function(e) {
            if (e.target.tagName === 'LI') {
                list.value = e.target.dataset.value;
                setSelected(list.value);
            }
        };
    }
}
