import Basic from './Basic.js';

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
            html: `<span>${e.text}</span>`,
            props: props,
            dataset: {
                value: e.value,
                activeClass: settings.active.class, // переданный класс для активного эл-та
            },
        }))
    };
    setClickHandler(setSelected) {
        let list = this;
        return function(e) {
            if (e.target.tagName === 'LI' || e.target.parentElement.tagName === 'LI') {
                var li = e.target.closest('li');
                // всем эл-там удалим класс
                let listItems = BX.findChild(list.elt, {tag: 'li'}, false, true);
                listItems.forEach( (li) => {li.className = ''});
                // установим класс активному эл-ту
                li.className = li.dataset.activeClass;
                list.value = li.dataset.value;
                var text = li.firstElementChild.textContent;
                setSelected(list.value, text);
            }
        };
    }
}
