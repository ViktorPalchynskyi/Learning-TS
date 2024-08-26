"use strict";
function triple(value) {
    if (typeof value === 'number') {
        return value * 3;
    }
    return value.repeat(3);
}
