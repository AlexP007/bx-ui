function documentHeight(document) {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}

function documentWidthWithoutScroll(document) {
    return Math.max(
        document.body.clientWidth, document.documentElement.clientWidth
    );
}

function elementWidth(parent, elt) {
    let position = elt.style.position;
    elt.style.position = 'static';

    parent.append(elt);

    let width = elt.offsetWidth();

    elt.style.position = position;
    elt.remove();

    return width;
}

function elementHeight(parent, elt) {
    parent.append(elt);
    let height = elt.offsetHeight;
    elt.remove();
    return height;
}

export {
    documentHeight,
    documentWidthWithoutScroll,
    elementWidth,
    elementHeight,
};