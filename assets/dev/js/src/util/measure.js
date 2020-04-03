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
    parent.append(elt);
    let width = e.offsetWidth();
    elt.remove();
    return width;
}

function elementHeight(parent, elt) {
    parent.append(elt);
    let height = e.offsetHeight();
    elt.remove();
    return height;
}

export {
    documentHeight,
    documentWidthWithoutScroll,
    elementWidth,
    elementHeight,
};