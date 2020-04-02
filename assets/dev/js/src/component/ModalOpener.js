import Opener from "./Opener";
import Constants from '../util/const';
import {disableBodyScroll} from "../util/bodyScrollLock";

export default class ModalOpener extends Opener {
    constructor(elt) {
        super(elt);
    }

    onClick(e) {
        if (this.target.getData('type') !== Constants.modal.overlay) {
            return;
        }
        disableBodyScroll(this.target.getElement() );
        super.onClick(e);
    }
}