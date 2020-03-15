import MultiSelect from "./src/components/multiSelect.js";

let containers = BX.findChild(document.body, {
    attribute: {
        'data-type': "a2c-select-main-container"
    }
}, true, true);
// Для каждого контейнера выполним логику
containers.forEach(function(elt) {
   new MultiSelect(elt);
});