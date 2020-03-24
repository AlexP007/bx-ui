import MultiSelect from "./src/component/MultiSelect";
import SliderFrame from "./src/component/SliderFrame";
import Cta from './src/component/Cta';
import Counter from "./src/component/Counter";
import Dismiss from "./src/component/Dismiss";
import Constants from "./src/util/const";

BX.ready(handler);

function handler() {
    // найдем все multiSelect
    const multiSelects = BX.findChild(document.body, {
        attribute: {'data-type': Constants.multiSelect.container}
    }, true, true);
    // Для каждого MultiSelect выполним логику
    multiSelects.forEach(elt => {new MultiSelect(elt)});

    // Найдем все cta
    const cta = BX.findChild(document.body, {
        attribute: {'data-type': Constants.cta.type}
    }, true, true);
    // Для каждого Cta
    cta.forEach(elt => {new Cta(elt)});

    // Найдем все Counter
    const counters = BX.findChild(document.body, {
        attribute: {'data-type': Constants.counter.type}
    }, true, true);
    // Для каждого Counter
    counters.forEach(elt => {new Counter(elt)});

    // Найдем все dismiss
    const dismisses =  BX.findChild(document.body, {
        attribute: {'data-type': Constants.dismiss.type}
    }, true, true);
    // Для каждого dismiss
    dismisses.forEach(elt => {new Dismiss(elt)});

    // Найдем все SliderFrame
    const sliderFrames =  BX.findChild(document.body, {
        attribute: {'data-type': Constants.sliderFrame.container}
    }, true, true);
    // Для каждого SliderFrame
    sliderFrames.forEach(elt => {new SliderFrame(elt)});
}