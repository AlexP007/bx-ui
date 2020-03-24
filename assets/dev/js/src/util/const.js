export default {
    multiSelect: {
        container: "bx-ui-multiselect-container",
        setEvent: "bx-ui-multiselect-set",
        icon: "bx-ui-select-icon",
        slave: "bx-ui-select-slave",
        master: "bx-ui-select-master",
    },
    select: {
        container: "bx-ui-select-container",
        setEvent: "bx-ui-select-set",
    },
    cta: {
        type: "bx-ui-cta",
        event: {
            enable: "bx-ui-cta-enable",
            disable: "bx-ui-cta-disable",
            outer: "bx-ui-cta-click",
        }
    },
    counter: {
        type: "bx-ui-counter",
        event: {
            increment: "bx-ui-counter-inc",
            decrement: "bx-ui-counter-dec",
        }
    },
    dismiss: {
        type: "bx-ui-dismiss",
        data: {
            dismiss: "Y"
        },
    },
    sliderFrame: {
        container: "bx-ui-sliderframe-container",
        body: "bx-ui-sliderframe-body",
    }
}