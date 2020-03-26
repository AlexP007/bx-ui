import Counter from "./Counter";

export default class InputCounter extends Counter {
    addEventListeners() {
        super.addEventListeners();
        const onChange = BX.proxy(this.onChange, this);

        BX.bind(this.getElement(), 'change', onChange);
    };

    onChange(e) {
        let val = 0;
        if (e.target.value > this.max) {
            val = this.max;
        } else if (e.target.value < this.min) {
            val = this.min;
        }

        this.counter = +val;
        this.getElement().value = +val;
    };

    increment(step) {
        if (this.max && this.counter >= this.max) {
            return;
        }
        step = step || 1;
        this.counter += step;

        if (this.counter > this.max) {
            this.counter = this.max;
        }

        this.getElement().value = this.counter;
    };

    decrement(step) {
        if (this.min && this.counter <= this.min) {
            return;
        }
        step = step || 1;
        this.counter -= step;

        if (this.counter < this.min) {
            this.counter = this.min;
        }

        this.getElement().value = this.counter;
    };
}