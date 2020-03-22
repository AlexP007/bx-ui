import MultiSelect from "./src/component/multiSelect";
import Cta from './src/component/cta'
import Constants from "./src/util/const";

BX.ready(handler);

function handler() {
    // найдем все multiSelect
    const multiSelects = BX.findChild(document.body, {
        attribute: {
            'data-type': Constants.multiSelect.container
        }
    }, true, true);
    // Для каждого multiSelect выполним логику
    multiSelects.forEach(function (elt) {
        new MultiSelect(elt);
    });

    // Найдем все cta
    const cta = BX.findChild(document.body, {
        attribute: {
            'data-type': Constants.cta.type
        }
    }, true, true);
    // Для каждого cta
    multiSelects.forEach(function (elt) {
        new Cta(elt);
    });
}