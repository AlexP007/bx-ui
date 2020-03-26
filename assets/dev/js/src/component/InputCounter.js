import Counter from "./Counter";

export default class InputCounter extends Counter {
    increment(step) {
        if (this.max && this.counter >= this.max) {
            return;
        }
        step = step || 1;
        this.counter += step;

        this.getElement().value = this.counter;
    };

    decrement(step) {
        if (this.min && this.counter <= this.min) {
            return;
        }
        step = step || 1;
        this.counter -= step;

        this.getElement().value = this.counter;
    };
}