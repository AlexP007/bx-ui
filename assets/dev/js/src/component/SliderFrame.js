import Basic from "./Basic";
import Constants from "../util/const";

export default class SliderFrame extends Basic {
    constructor(elt) {
        super(elt);
    };

    addEventListeners() {
        const show = BX.proxy(this.show, this);
        const hide = BX.proxy(this.hide, this);
        const event = Constants.sliderFrame.event;

        BX.bind(document.body, event.show, show);
        BX.bind(document.body, event.hide, hide);
    };

    show() {
        if (e.detail.id !== this.id) {
            return;
        }

        this.body || this.setBody();
        this.frame || this.insertFrame();

        super.show();
    };

    hide() {
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

    createFrame() {
        return BX.create('iframe', {
            props: {
                src: this.getUrl(),
            },
            style: {
                width: '100%',
            }
        })
    };

    setBody() {
       this.body = BX.findChild(this.getElement(), {attribute: {'data-type': Constants.sliderFrame.body}})
    };

    insertFrame() {
        this.frame = this.createFrame();
        this.body.append(this.frame);
    };
}
