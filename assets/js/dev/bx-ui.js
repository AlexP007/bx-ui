import MultiSelect from "./src/component/multiSelect.js";
import Constants from "./src/util/const.js";

BX.ready(handler);

function handler() {
    let containers = BX.findChild(document.body, {
        attribute: {
            'data-type': Constants.multiSelect.container
        }
    }, true, true);
// Для каждого контейнера выполним логику
    containers.forEach(function (elt) {
        new MultiSelect(elt);
    });
}