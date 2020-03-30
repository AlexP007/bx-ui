import Basic from "./Basic.js";
import {disableBodyScroll} from "../util/bodyScrollLock";

export default class Opener extends Basic {
    constructor(elt) {
        super(elt);
        const modalId = this.getData('modal');
        this.modal = new Basic(BX(modalId) );
    };

    addEventListener() {
        const onClick = BX.proxy(this.onClick, this);
        BX.bind(this.getElement(), 'click', onClick);
    };

    onClick(e) {
        e.preventDefault();
        disableBodyScroll(this.modal.getElement() );
        this.modal.show();
    };
}