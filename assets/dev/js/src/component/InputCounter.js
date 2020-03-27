import Counter from "./Counter";

export default class InputCounter extends Counter {
    addEventListeners() {
        super.addEventListeners();
        const onChange = BX.proxy(this.onChange, this);

        BX.bind(this.getElement(), 'change', onChange);
    };

    onChange(e) {
        let val = +e.target.value;
        if (val > this.max) {
            val = this.max;
        } else if (val < this.min) {
            val = this.min;
        }

        this.counter = val;
        this.getElement().value = +val;
    };

    increment(step) {
        if (this.max && this.counter >= this.max) {
            return;
        }
        step = step || 1;
        this.counter += step;

        if (this.max && this.counter > this.max) {
            this.counter = this.max;
        }

        this.getElement().value = this.counter;
        this.dispatchChange();
    };

    decrement(step) {
        if (this.min && this.counter <= this.min) {
            return;
        }
        step = step || 1;
        this.counter -= step;

        if (this.min && this.counter < this.min) {
            this.counter = this.min;
        }

        this.getElement().value = this.counter;
        this.dispatchChange();
    };

    dispatchChange() {
        let event = new Event('change', {bubbles: true, cancelable: true});
        this.getElement().dispatchEvent(event);
    };

    set(value) {
        if (this.min && this.max) {
            if (value >= this.min) {
                this.counter = value;
            }
            if (value <= this.max) {
                this.counter = value;
            }
        } else {
            this.counter = value;
        }

        this.getElement().value = this.counter;
        this.dispatchChange();
    }
}