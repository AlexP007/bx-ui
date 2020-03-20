import Basic from "./basic.js";
import List from "./list.js";

export default class Select extends Basic {
    constructor(elt) {
        super(elt);
        this.__setOptions();
        this.dataset = this.elt.dataset;
        this.type = this.dataset.type;

        this.isSlave() || this.createList(this.options);
    }
    __setOptions() {
        this.options = [];
        Array.from(this.elt.options).forEach( (e) => {
            if (e.disabled) {
                this.prompt = e.textContent;
            } else {
                this.options.push({
                    value: e.value,
                    text: e.textContent,
                });
            }
        });
    }
    getPrompt() {
        return this.prompt;
    }
    isSlave() {
        return this.type === 'a2c-select-slave';
    };
    getList() {
        return this.list;
    };
    setSelected(value, textContent) { // колбэк для списка, устанавливающий выбранное значение
        let option = Array.from(this.elt.options).filter((e) => {
            return e.value === value;
        })[0];
        option.selected = true;
        this.fireSetEvent(value, textContent);
    };
    createList(options) {
        this.list && this.list.remove();

        this.list = new List({
            options,
            settings: {
                ul: {
                    class: this.dataset.listClass,
                },
                li: {
                    active: {
                        class: this.dataset.listActive,
                    }
                }
            },
            setSelected: BX.proxy(this.setSelected, this),
        });
    };
    fireSetEvent(value, textContent) {
        this.prompt = textContent;
        this.elt.dispatchEvent(new CustomEvent('a2c-select-set', {
            bubbles: true,
            detail: {
                value,
                textContent,
                isSlave: this.isSlave(),
            }
        }));
    }
}