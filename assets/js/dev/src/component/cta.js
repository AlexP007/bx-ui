import Basic from './basic'
import Constants from '../util/const'

export default class Cta extends Basic {
    constructor(elt) {
        super(elt);
        this.id = elt.id;
        if (this.id) {
            this.addEventListeners();
        } else {
            this.handlerPointer = BX.proxy(this.clickHandler, this);
            BX.bind(this.getElement(), 'click', this.handlerPointer)
        }
    };

    addEventListeners() {
        const enableHandler = BX.proxy(this.enableHandler, this);
        const disableHandler = BX.proxy(this.disableHandler, this);
        const event = Constants.cta.event;

        BX.bind(document.body, event.enable, enableHandler);
        BX.bind(document.body, event.disable, disableHandler);
    };

    disableHandler(e) {
        if (e.detail.id !== this.id) {
            return;
        }
        this.removeClass(this.getData('active'));
        this.disable();

        BX.unbind(this.getElement(), 'click', this.handlerPointer);
    };

    enableHandler(e) {
        if (e.detail.id !== this.id) {
            return;
        }
        this.enable();
        this.enableClick();
        this.handlerPointer = BX.proxy(this.clickHandler, this);

        BX.bind(this.getElement(), 'click', this.handlerPointer)
    };

    clickHandler() {
        const cta = this;
        const active = this.getData('active');

        cta.addClass(active);
        BX.unbind(cta.getElement(), 'click', cta.handlerPointer);
        cta.id && cta.dispatchOuterEvent(); // только если есть id
        cta.disableClick();

        cta.timer = setTimeout(() => {
            cta.removeClass(active);
            BX.bind(cta.getElement(), 'click', cta.handlerPointer);
            cta.enableClick();
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
        BX.unbind(this.getElement(), 'click', this.disableClickHandler);
    };

    disableClickHandler(e) {
        e.preventDefault();
        e.stopPropagation();
    };

    dispatchOuterEvent() {
        this.getElement().dispatchEvent(new CustomEvent(Constants.cta.event.outer, {
            bubbles: true,
            detail: {
                elt: this.getElement(),
            }
        }));
    };
}