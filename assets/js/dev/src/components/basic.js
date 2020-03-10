export default class Basic {
    toggle() {
        BX.toggle(this.elt);
    };
    hide() {
        BX.hide(this.elt);
    };
    show() {
        BX.show(this.elt);
    };
    isHidden() {
        return BX.isNodeHidden(this.elt);
    };
    remove() {
        this.elt.remove();
    };
    getElement() {
        return this.elt;
    };
}