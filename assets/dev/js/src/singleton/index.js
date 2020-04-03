let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class Singleton {

    constructor(enforcer) {
        if (enforcer !== singletonEnforcer)
            throw "Instantiation failed: use Singleton.getInstance() instead of new.";
        // код конструктора
    }

    static get instance() {
        if (!this[singleton])
            this[singleton] = new this(singletonEnforcer);
        return this[singleton];
    }

    static set instance(v) { throw "Can't change constant property!" }
}