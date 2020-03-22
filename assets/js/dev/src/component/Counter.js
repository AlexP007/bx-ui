import Basic from "./Basic";
import Constants from "../util/const";

export default class Counter extends Basic {
    constructor(elt) {
        super(elt);
        this.counter = +elt.textContent;
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
        this.getElement().textContent = ++this.counter;
    };

    decrement() {
        this.getElement().textContent = --this.counter;
    };
}