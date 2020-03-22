import Basic from './basic'
import Constants from '../util/const'

export default class Cta extends Basic {
    constructor(elt) {
        super(elt);
        this.addEventListeners();
    };

    addEventListeners() {
        const enableHandler = BX.proxy(this.enableHandler, this);
        const disableHandler = BX.proxy(this.disableHandler, this);
        const event = Constants.btn.event;

        BX.bind(this.getElement(), event.enable, enableHandler);
        BX.bind(this.getElement(), event.disable, disableHandler);
    };

    disableHandler() {
        this.timer && clearTimeout(this.timer);
        this.disable();
        BX.unbind(this.getElement(), 'click', this.clickHandler);
    };

    enableHandler() {
        this.enable();
        const handler = BX.proxy(this.clickHandler, this);

        BX.bind(this.getElement(), 'click', handler)
    };

    clickHandler() {
        const btn = this;
        const active = this.getData('active');

        btn.addClass(active);
        BX.unbind(btn.getElement(), 'click', btn.clickHandler);
        btn.disableClick();

        btn.timer = setTimeout(() => {
            btn.removeClass(active);
            BX.bind(btn.getElement(), 'click', btn.clickHandler);
            btn.enableClick();
            }, 300);
    };

    enable() {
        this.getElement().disabled = false;
    };

    disable() {
        this.getElement().disabled = true;
    };

    disableClick() {
        BX.bind(this.getElement(), 'click', this.disableClickHandler)
    };

    enableClick() {
        BX.unbind(this.getElement(), 'click', this.clickHandler);
    };

    disableClickHandler(e) {
        e.preventDefault();
        e.stopPropagation();
    };
}