import Basic from "./Basic";
import Constants from "../util/const";

export default class SliderFrame extends Basic {
    constructor(elt) {
        super(elt);
        this.addEventListeners();
    };

    addEventListeners() {
        const show = BX.proxy(this.show, this);
        const hide = BX.proxy(this.hide, this);
        const event = Constants.sliderFrame.event;

        BX.bind(document.body, event.show, show);
        BX.bind(document.body, event.hide, hide);
    };

    show(e) {
        if (e.detail.id !== this.id) {
            return;
        }

        this.body || this.setBody();
        this.frame || this.setFrame();

        super.show();
    };

    hide(e) {
        if (e.detail.id !== this.id) {
            return;
        }

        super.hide();
    };

    getUrl() {
        const url = new URL(this.getData('url'), location.origin);
        url.searchParams.append('IFRAME', 'Y');
        return url.href;
    };

    setBody() {
       this.body = BX.findChild(this.getElement(), {attribute: {'data-type': Constants.sliderFrame.body}});
    };

    setFrame() {
        this.frame = BX.findChild(this.body, {attribute: {'data-type': Constants.sliderFrame.iframe}});
        this.frame.src = this.getUrl();
    };
}
