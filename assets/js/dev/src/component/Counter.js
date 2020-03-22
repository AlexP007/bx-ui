import Basic from "./Basic";
import Constants from "../util/const";

export default class Counter extends Basic {
    constructor(elt) {
        super(elt);
        this.counter = +elt.textContent;
        this.min = this.getData('min');
        this.max = this.getData('max');
    };

    addEventListeners() {
        const incrementHandler = BX.proxy(this.incrementHandler, this);
        const decrementHandler = BX.proxy(this.disableHandler, this);
        const event = Constants.counter.event;

        BX.bind(document.body, event.increment, incrementHandler);
        BX.bind(document.body, event.decrement, decrementHandler);
    };

    incrementHandler(e) {
        e.detail.id === this.id && this.increment();
    };

    decrementHandler(e) {
        e.detail.id === this.id && this.decrement();
    };

    increment() {
        if (this.max && this.counter >= this.max) {
            return;
        }
        this.getElement().textContent = ++this.counter;
    };

    decrement() {
        if (this.min && this.counter <= this.min) {
           return;
        }
        this.getElement().textContent = --this.counter;
    };
}