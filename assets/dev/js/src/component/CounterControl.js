import Basic from "./Basic";
import Constants from "../util/const";

export default class CounterControl extends Basic {
    constructor(elt) {
        super(elt);

        this.role = this.getData('role');
        this.counterId = this.getData('counter-id');
        this.step = this.getData('step');

        const onClick = BX.proxy(this.onClick, this);
        BX.bind(this.getElement(), 'click', onClick);
    };

    onClick() {
        let eventName = null;

        if (this.role === 'inc') {
            eventName = Constants.counter.event.increment;
        } else if (this.role === 'dec') {
            eventName = Constants.counter.event.decrement;
        }

        if (!eventName) {
            return;
        }
        this.getElement().dispatchEvent(new CustomEvent(eventName, {
            bubbles: true,
            detail: {
                id: this.counterId,
                step: this.step,
            }
        }));
    };
}