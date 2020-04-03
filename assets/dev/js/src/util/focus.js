const FOCUSABLE_SELECTORS = 'a[href]:not([data-type=bx-ui-dismiss]), area[href], input:not([disabled]):not([data-type=bx-ui-dismiss]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]):not([data-type=bx-ui-dismiss]), iframe, object, embed, *[tabindex], *[contenteditable]';

// Принимает элемент и фокусируется на его первом доступном к фокусировке ребенка
// Ставит запрет для фокусировки на все элементы вне переданного
function focus(elt) {
    // Фокусируемся на первом элементе внутри елемента
    elt.querySelector(FOCUSABLE_SELECTORS).focus();

    // Уберем табиндекс у всех элементов вне элемента
    const focusableElements = document.body.querySelectorAll(FOCUSABLE_SELECTORS);
    focusableElements.forEach(e =>
        elt.contains(e) || e.setAttribute('tabindex', '-1')
    );
}

// Снимает запрет на все элементы
// Ставит фокус на переданный элемент
function unFocus(elt) {
    const focusableElements = document.body.querySelectorAll(FOCUSABLE_SELECTORS);
    focusableElements.forEach(e => e.removeAttribute('tabindex'));

    elt.focus();
}

export {focus, unFocus};