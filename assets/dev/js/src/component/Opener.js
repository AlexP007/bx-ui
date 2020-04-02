import Basic from "./Basic.js";

export default class Opener extends Basic {
    constructor(elt) {
        super(elt);
        const target = this.getData('target');
        this.target = new Basic(BX(target) );
        this.addEventListener();
    };

    addEventListener() {
        const onClick = BX.proxy(this.onClick, this);
        BX.bind(this.getElement(), 'click', onClick);
    };

    onClick(e) {
        e.preventDefault();
        this.target.show();
    };
}