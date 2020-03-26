import Counter from "./Counter";

export default class InputCounter extends Counter {
    increment() {
        if (this.max && this.counter >= this.max) {
            return;
        }
        this.getElement().value = ++this.counter;
    };

    decrement() {
        if (this.min && this.counter <= this.min) {
            return;
        }
        this.getElement().value = --this.counter;
    };
}