import Basic from "./Basic";
import Constants from '../util/const';

import {documentWidthWithoutScroll, elementHeight} from "../util/measure";

export default class Tooltip extends Basic {
    constructor(elt) {
        super(elt);
        this.create();
        this.addEventListeners();
    };

    addEventListeners() {
        const insert = BX.proxy(this.insertTooltip, this);
        const remove = BX.proxy(this.removeTooltip, this);

        BX.bind(elt, 'mouseenter', insert);
        BX.bind(elt, 'touchstart', insert);
        BX.bind(elt, 'mouseleave', remove);
        BX.bind(elt, 'touchend', remove);
    };

    insertTooltip() {
        this.setCoords();
        document.append(this.tooltip);
    };

    removeTooltip() {
        this.tooltip.remove();
    };

    create() {
        let tooltipStyles = Constants.tooltip.style.tooltip;
        let arrowStyles =  {
            'position': 'absolute',
            'width': 0,
            'height': 0,
            'border-left': '10px solid transparent',
            'border-right': '10px solid transparent',
            'left': '50%',
            'transform': 'translateX(-50%)',
        };

        if (this.getData('position') === 'top') {
            arrowStyles['bottom'] = Constants.tooltip.style.arrow.bottom;
            arrowStyles['border-top'] = '10px solid ' + this.getData('background');
        } else {
            arrowStyles['top'] = Constants.tooltip.style.arrow.top;
            arrowStyles['border-bottom'] = '10px solid ' + this.getData('background');
        }

        this.dialog = BX.create('div', {
            text: this.getData('tooltip'),
            style: {
                'background': this.getData('background'),
                'position': 'absolute',
                'border-radius': '4px',
                'padding-bottom': tooltipStyles.paddingBottom + 'px',
                'padding-top': tooltipStyles.paddingTop + 'px',
                'padding-left': tooltipStyles.paddingLeft + 'px',
                'padding-right': tooltipStyles.paddingRight + 'px',
                'font-family': this.getData('fontFamily'),
                'font-size': this.getData('fontSize'),
                'color': this.getData('color'),
            }
        });
        this.arrow = BX.create('div', {
            style: arrowStyles,
        });
        this.tooltip = BX.create('div', {
            style: {
                'position': 'absolute',
            },
            children: [this.dialog, this.arrow],
        });
    };

    setCoords() {
        // для начала вычислим ширину документа
        let docWidth = documentWidthWithoutScroll(document);

        // теперь получим координаты элемента
        let coords = this.getElement().getBoundingClientRect();

        // Теперь рассчитаем координаты тултипа
        let tooltipStyles = Constants.tooltip.style.tooltip;
        let tooltipHeight = elementHeight(document, this.tooltip);
        let tooltipCoords = {
            x: coords.x,
        };

        if (this.getData('position') === 'top') {
            tooltipCoords.y =  coords.y - tooltipHeight - Constants.tooltip.style.arrow.bottom;
        } else {
            tooltipCoords.y =  coords.y + tooltipHeight - Constants.tooltip.style.arrow.top;
        }
        // Ширина тултипа не должна быть больше элеметна + паддинг, но не больше окна
        let tooltipMaxWidth = coords.width + tooltipStyles.paddingRight > docWidth
            ? coords.width + tooltipStyles.paddingRight
            : coords.width;

        BX.style(this.tooltip, 'max-width', tooltipMaxWidth + 'px');
        BX.style(this.tooltip, 'top', tooltipCoords.y + 'px');
        BX.style(this.tooltip, 'left', tooltipCoords.x + 'px');
    };
}
