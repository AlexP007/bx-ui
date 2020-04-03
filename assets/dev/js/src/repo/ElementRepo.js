import Singleton from "../singleton";

const repo = Symbol();

export default class ElementRepo extends Singleton {
    set(key, elt) {
        this[repo] || this.createRepo();
        if (this[repo][key]) {
            throw "This key is already set";
        }

        this[repo][key] = elt;
    };

    get(name) {
        this[repo] || this.createRepo();
        return this[repo][name];
    }

    createRepo() {
        this[repo] = {}
    };
}