import Basic from "./Basic";
import Select from "./Select";
import Constants from "../util/const";

export default class SliderFrame extends Basic {
    constructor(elt) {
        super(elt);
        this.setBody();
        this.insertFrame();
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
        this.body.append(this.createFrame() );
    };
}
