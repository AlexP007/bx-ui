import Basic from "./Basic";
import Select from "./Select";
import Constants from "../util/const";

export default class SliderFrame extends Basic {
    constructor(elt) {
        super(elt);
        this.insertFrame();
    };

    getUrl() {
        return this.getData('url');
    };

    createFrame() {
        return BX.create('iframe', {
            attr: {
                src: this.getUrl(),
                frameborder: 0,
            }
        })
    };

    insertFrame() {
        BX.findChild(this.getElement(), {attribute: {'data-type': Constants.sliderFrame.body}})
    };
}
