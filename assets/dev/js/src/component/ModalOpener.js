import Opener from "./Opener";
import ElementRepo from "../repo/ElementRepo";
import Constants from '../util/const';
import {disableBodyScroll} from "../util/bodyScrollLock";
import {focus} from "../util/focus";

export default class ModalOpener extends Opener {
    constructor(elt) {
        super(elt);
    };

    onClick(e) {
        if (this.target.getData('type') !== Constants.modal.overlay) {
            return;
        }
        disableBodyScroll(this.target.getElement() );
        super.onClick(e);

        // Наведем фокус на элемент внутри модалки
        focus(this.target.getElement() );

        // Сохраним открывающий элемент в модалке
        this.target.opener = this.getElement(); //todo: вынести модалку в отдельный компонент
        // Установим открывающий элемент в репозиторий
        ElementRepo.instance.set(this.target.id, this.target);
    };
}
