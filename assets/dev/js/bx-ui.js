import MultiSelect from "./src/component/MultiSelect";
import SliderFrame from "./src/component/SliderFrame";
import Cta from './src/component/Cta';
import Counter from "./src/component/Counter";
import InputCounter from "./src/component/InputCounter";
import CounterControl from "./src/component/CounterControl";
import Dismiss from "./src/component/Dismiss";
import Opener from "./src/component/Opener";
import ModalOpener from "./src/component/ModalOpener";
import Tooltip from "./src/component/Tooltip";
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

    // Найдем все InputCounter
    const inputCounters = BX.findChild(document.body, {
        attribute: {'data-type': Constants.inputCounter.type}
    }, true, true);
    // Для каждого InputCounter
    inputCounters.forEach(elt => {new InputCounter(elt)});

    // Найдем все CounterControl
    const counterControls = BX.findChild(document.body, {
        attribute: {'data-type': Constants.counterControl.type}
    }, true, true);
    // Для каждого InputCounter
    counterControls.forEach(elt => {new CounterControl(elt)});

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

    // Найдем все Opener
    const openers =  BX.findChild(document.body, {
        attribute: {'data-type': Constants.opener.type}
    }, true, true);
    // Для каждого Opener
    openers.forEach(elt => {new Opener(elt)});

    // Найдем все ModalOpener
    const modalOpeners =  BX.findChild(document.body, {
        attribute: {'data-type': Constants.modalOpener.type}
    }, true, true);
    // Для каждого Opener
    modalOpeners.forEach(elt => {new ModalOpener(elt)});

    // Найдем все Tooltip
    const tooltips =  BX.findChild(document.body, {
        attribute: {'data-type': Constants.tooltip.type}
    }, true, true);
    // Для каждого Opener
    tooltips.forEach(elt => {new Tooltip(elt)});
}