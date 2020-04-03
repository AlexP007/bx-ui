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
            set: "bx-ui-counter-set",
        }
    },
    inputCounter: {
        type: "bx-ui-inputcounter",
    },
    counterControl: {
        type: "bx-ui-counter-control",
    },
    dismiss: {
        type: "bx-ui-dismiss",
        data: {
            dismiss: "Y"
        },
        event: {
            dismissed: 'bx-ui-dismiss-dismissed'
        }
    },
    sliderFrame: {
        container: "bx-ui-sliderframe-container",
        body: "bx-ui-sliderframe-body",
        iframe: "bx-ui-sliderframe-iframe",
        event: {
            show: "bx-ui-sliderframe-show",
            hide: "bx-ui-sliderframe-hide",
            refresh: "bx-ui-sliderframe-refresh",
        },
    },
    opener: {
        type: "bx-ui-opener",
    },
    modalOpener: {
        type: "bx-ui-modalopener",
    },
    modal: {
        overlay: "bx-ui-modal-overlay",
    },
    tooltip: {
        type: "bx-ui-tooltip",
        style: {
            tooltip: {
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 8,
                paddingRight: 8,
            },
            arrow: {
                bottom: -5,
                top: -5,
            }
        }
    }
}
