import Basic from "./Basic";
import Constants from '../util/const';

export default class Dismiss extends Basic {
    constructor(elt) {
        super(elt);
        this.dismissible = this.findDismissible();
        this.addEventListener();
    };

    findDismissible() {
        const val = Constants.dismiss.data.dismiss;
        return BX.findParent(this.getElement(), {attribute: {'data-dismiss': val}})
    };

    addEventListener() {
        const dismiss = this;
        const dismissible = this.dismissible;
        if (dismissible) {
            BX.bind(this.getElement(), 'click', function(e) {
                BX.hide(dismissible);
                dismiss.fireOuterEvent(e);
            })
        }
    };

    fireOuterEvent(e) {
        this.elt.dispatchEvent(new CustomEvent(Constants.dismiss.event.dismissed, {
            bubbles: true,
            detail: {
                e,
                dismissible: this.dismissible,
            }
        }));
    }
}