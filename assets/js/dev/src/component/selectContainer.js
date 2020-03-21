import Basic from "./basic.js";
import Select from "./select.js";
import Constants from "../util/const.js";

export default class SelectContainer extends Basic {
    constructor(elt) {
        super(elt);
        this.icon = BX.findChild(elt, {
            attribute: {'data-type': Constants.multiSelect.icon}
        });
        this.iconOpened = true;
        this.select = new Select(BX.findChild(elt, {tag: 'select'}) );
        // Выставим относительное позиционирование
        this.elt.style.position = 'relative';
        this.list = this.select.getList();
        if (this.list) {
            this.elt.append(this.list.getElement());
        }
        this.setClickHandler();
        // Найдем спан для заглушки
        this.promptElt =  BX.findChild(elt, {
            tag: 'span'
        });
        this.setEventHandler();
    };

    setPrompt() {
        this.promptElt.textContent = this.select.getPrompt();
    };

    getOutClickHandler() {
        let outClick = BX.proxy(function(e) {
            if (!this.elt.contains(e.target) ) {
                this.list.hide();
                this.iconOpened && this.toggleIcon();
                BX.unbind(window, 'click', outClick);
            }
        }, this);
        return outClick;
    };

    setClickHandler() {
        let self = this;
        BX.bind(self.elt, 'click', function() {
            if (self.list) {
                self.list.toggle();
                self.toggleIcon();
                if (!self.list.isHidden()) {
                    BX.bind(window, 'click', self.getOutClickHandler())
                }
            }
        });
    };

    toggleIcon() {
        let icon = this.icon;
        icon.className = icon.className === icon.dataset.opened
            ? icon.dataset.closed
            : icon.dataset.opened;
    };

    changeSlaveList(values) {
        if (this.select.isSlave() ) {
            let filteredOptions = this.select.options.filter( (e) => {
                return values.includes(e.value);
            });
            this.select.createList(filteredOptions);
            this.list = this.select.getList();

            if (this.list) {
                this.elt.append(this.list.getElement());
            }
        }
    };

    setEventHandler() {
        let handler = BX.proxy(function (e) {
            this.setPrompt();
        }, this);
        BX.bind(this.elt,  Constants.select.setEvent, handler)
    };
}
