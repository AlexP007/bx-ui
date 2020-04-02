import Basic from "./Basic";
import Constants from '../util/const';
import {enableBodyScroll} from "../util/bodyScrollLock";

export default class Dismiss extends Basic {
    constructor(elt) {
        super(elt);
        this.role = this.getData('role');
        this.dismissible = new Basic(this.findDismissible() ); // Обернем в basic, чтобы добавить полезных методов
        this.addEventListener();
    };

    findDismissible() {
        const val = Constants.dismiss.data.dismiss;
        return BX.findParent(this.getElement(), {attribute: {'data-dismiss': val}})
    };

    addEventListener() {
        const dismiss = this;
        const dismissible = this.dismissible;
        if (dismissible.getElement()) {
            BX.bind(this.getElement(), 'click', function(e) {
                dismiss.fireOuterEvent(e);
                if (dismissible.dataset.type === Constants.modal.overlay) {
                    enableBodyScroll(dismissible.getElement() );
                }
                if (dismiss.role === 'hide') {
                    dismissible.hide()
                }
                if (dismiss.role === 'remove') {
                    dismissible.remove();
                }
            })
        }
    };

    fireOuterEvent(e) {
        this.elt.dispatchEvent(new CustomEvent(Constants.dismiss.event.dismissed, {
            bubbles: true,
            detail: {
                e,
                dismissible: this.dismissible.getElement(),
            }
        }));
    }
}