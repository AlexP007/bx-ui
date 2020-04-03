import Basic from "./Basic";
import {getX, getY} from "../util/coords";
import Constants from '../util/const';

import {documentWidthWithoutScroll} from "../util/measure";

export default class Tooltip extends Basic {
    constructor(elt) {
        super(elt);
        this.create();
        this.addEventListeners();
    };

    addEventListeners() {
        const elt = this.getElement();

        const insert = BX.proxy(this.insertTooltip, this);
        const remove = BX.proxy(this.removeTooltip, this);

        if (this.getData('event') === 'hover') {
            BX.bind(elt, 'mouseenter', insert);
            BX.bind(elt, 'touchstart', insert);
            BX.bind(elt, 'mouseleave', remove);
            BX.bind(elt, 'touchend', remove);
        } else {
            const handleOutClick = (e) => {
                if(this.elt.contains(e.target)) {
                    return;
                }
                remove();
            };
            BX.bind(elt, 'click', insert);
            BX.bind(document.body, 'click', handleOutClick);
        }
    };

    insertTooltip() {
        document.body.append(this.tooltip);
        this.setCoords();
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
            'transform': 'translateX(-50%)',
            'z-index': 1009,
        };

        if (this.getData('position') === 'top') {
            arrowStyles['bottom'] = Constants.tooltip.style.arrow.bottom + 'px';
            arrowStyles['border-top'] = '10px solid ' + this.getData('background');
        } else {
            arrowStyles['top'] = Constants.tooltip.style.arrow.top + 'px';
            arrowStyles['border-bottom'] = '10px solid ' + this.getData('background');
        }

        this.dialog = BX.create('div', {
            text: this.getData('tooltip'),
            style: {
                'font-family': this.getData('fontFamily'),
                'font-size': this.getData('fontSize'),
                'color': this.getData('color'),
                'position' : 'relative',
                'z-index': 1010,
            }
        });
        this.arrow = BX.create('div', {
            style: arrowStyles,
        });
        this.tooltip = BX.create('div', {
            style: {
                'position': 'absolute',
                'background': this.getData('background'),
                'border-radius': '4px',
                'padding-bottom': tooltipStyles.paddingBottom + 'px',
                'padding-top': tooltipStyles.paddingTop + 'px',
                'padding-left': tooltipStyles.paddingLeft + 'px',
                'padding-right': tooltipStyles.paddingRight + 'px',
                'z-index': 1011,
            },
            children: [this.dialog, this.arrow],
        });
    };

    setCoords() {
        // для начала вычислим ширину документа
        let docWidth = documentWidthWithoutScroll(document);

        // теперь получим координаты элемента
        let coords = this.getElement().getBoundingClientRect();
        coords.x = getX(this.getElement());
        coords.y = getY(this.getElement());

        // Теперь рассчитаем координаты тултипа
        let tooltipHeight = this.tooltip.offsetHeight;
        let tooltipWidth = this.tooltip.offsetWidth;

        let tooltipCoords = {
            x: coords.x,
        };
        // Вначале y
        if (this.getData('position') === 'top') {
            tooltipCoords.y =  coords.y - tooltipHeight + Constants.tooltip.style.arrow.bottom;
        } else {
            tooltipCoords.y =  coords.y + coords.height - Constants.tooltip.style.arrow.top;
        }

        // Теперь x
        // Если расстояние от до окна слева меньше чем расстояние элемента минус паддинг тултипа
        let offset = (tooltipWidth - coords.width)/2;

        if (coords.x - offset <= 0) {
            tooltipCoords.x = 2;
        } else if (coords.x - offset + tooltipWidth >= docWidth) { // если от тултип не умещается в доступное расстояние до правого конца
            tooltipCoords.x = docWidth - tooltipWidth - 2;
        } else {
            tooltipCoords.x = coords.x - offset;
        }

        BX.style(this.tooltip, 'top', tooltipCoords.y + 'px');
        BX.style(this.tooltip, 'left', tooltipCoords.x + 'px');

        // установим стрелку
        // получим середину элемента
        let middle = coords.x - tooltipCoords.x + coords.width/2;
        this.arrow.style.left = middle  + 'px'; //todo разобраться со стрелкой впритык к окну
    };
}
