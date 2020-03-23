import Basic from "./Basic";
import Constants from '../util/const';

export default class Dismiss extends Basic {
    constructor(elt) {
        super(elt);
        this.dismissible = this.findDismissible();
        this.addEventListener();
    };

    findDismissible() {
        const attrKey = Constants.dismiss.dataDismissAttr;
        const attr = {};
        attr[attrKey] = Constants.dismiss.dataDismissValue;
        return BX.findParent(this.getElement(), {attribute: attr})
    };

    addEventListener() {
        const dismissible = this.dismissible;
        BX.bind(this.getElement(), 'click', function() {
            BX.hide(dismissible);
        })
    };
}