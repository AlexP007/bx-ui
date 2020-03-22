export default class Basic {
    constructor(elt) {
        if (elt) {
            this.elt = elt;
            this.dataset = elt.dataset;
            this.id = elt.id;
        };
    }
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
    addClass(className) {
        this.elt.classList.add(className);
    };
    removeClass(className) {
        this.elt.classList.remove(className);
    };
    getData(name) {
        return this.dataset[name];
    }
}