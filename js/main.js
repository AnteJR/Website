// CONSTANTES
const SELECTED = {
    LANG: 'fr',
}

// FONCTIONS
function setAttrs(attributes, pageElement) {
    for (const [i, a] of attributes.entries()) {
        if (!Array.isArray(pageElement)) pageElement.setAttribute(a.attr, a.val);
        else pageElement.forEach(e => e.setAttribute(a.attr, a.val));
    }
}

function appendElem(childElem = false, parentElem = false) {
    if (!parentElem) {
        if (!Array.isArray(childElem)) document.body.appendChild(childElem);
        else childElem.forEach(c => document.body.appendChild(c));
    } else if (!Array.isArray(parentElem)) {
        if (!Array.isArray(childElem)) parentElem.appendChild(childElem);
        else childElem.forEach(c => parentElem.appendChild(c));
    } else {
        if (!Array.isArray(childElem)) parentElem.forEach(p => p.appendChild(childElem));
        else childElem.forEach(c => parentElem.forEach(p => p.appendChild(c)));
    }
}