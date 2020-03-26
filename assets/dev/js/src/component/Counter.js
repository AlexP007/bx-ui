import Basic from "./Basic";
import Constants from "../util/const";

export default class Counter extends Basic {
    constructor(elt) {
        super(elt);
        this.counter = +elt.textContent || +elt.value;
        this.min = this.getData('min');
        this.max = this.getData('max');
        this.addEventListeners();
    };

    addEventListeners() {
        const incrementHandler = BX.proxy(this.incrementHandler, this);
        const decrementHandler = BX.proxy(this.decrementHandler, this);
        const event = Constants.counter.event;

        BX.bind(document.body, event.increment, incrementHandler);
        BX.bind(document.body, event.decrement, decrementHandler);
    };

    incrementHandler(e) {
        e.detail.id === this.id && this.increment(e.detail.step);
    };

    decrementHandler(e) {
        e.detail.id === this.id && this.decrement(e.detail.step);
    };

    increment(step) {
        if (this.max && this.counter >= this.max) {
            return;
        }
        step = step || 1;
        this.counter += step;

        this.getElement().textContent = this.counter;
    };

    decrement(step) {
        if (this.min && this.counter <= this.min) {
           return;
        }
        step = step || 1;
        this.counter -= step;

        this.getElement().textContent = this.counter;
    };
}