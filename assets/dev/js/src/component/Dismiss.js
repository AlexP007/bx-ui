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
        const dismissible = this.dismissible;
        BX.bind(this.getElement(), 'click', function() {
            BX.hide(dismissible);
        })
    };

    fireOuterEvent(e) {
        this.elt.dispatchEvent(new CustomEvent(Constants.multiSelect.setEvent, {
            bubbles: true,
            detail: {
                e,
                dismissible: this.dismissible,
            }
        }));
    }
}