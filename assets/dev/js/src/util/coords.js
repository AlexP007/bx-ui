function getX(elt) {
    let box = elt.getBoundingClientRect();
    return box.x + pageXOffset;
}

function getY(elt) {
    let box = elt.getBoundingClientRect();
    return box.y + pageYOffset;
}

export {getX, getY};
