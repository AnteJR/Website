// CONSTANTES
const SELECTED = {
    LANG: 'fr',
    LIST_TYPE: 'all',
    LIST_AGE: 'recent',
}

const ARTICLES = [
    { file: 'article-1', name: 'my first article', categories: [1, 7] },
    { file: 'article-2', name: 'my second article', categories: [2, 6] },
];

const ARTICLES_CATEGORIES = [
    { fr: 'Tous', en: 'All', ref: 'all' }, // 0
    { fr: 'Culture Internet', en: 'Internet culture', ref: 'internet' }, // 1
    { fr: 'Films', en: 'Movies', ref: 'movies' }, // 2
    { fr: 'Jeux vidéo', en: 'Video games', ref: 'videogames' }, // 3
    { fr: 'Histoire', en: 'History', ref: 'historyv' }, // 4
    { fr: 'Politique', en: 'Politics', ref: 'politics' }, // 5
    { fr: 'Critiques', en: 'Reviews', ref: 'reviews' }, // 6
    { fr: 'Analyse', en: 'Analysis', ref: 'analysis' }, // 7
    { fr: 'Divers', en: 'Others', ref: 'others' } // 8
];

const ARTICLES_AGE = [
    { fr: 'Les plus récents', en: 'Most recent', ref: 'recent' }, // 0
    { fr: 'Les plus anciens', en: 'Oldest', ref: 'oldest' }, // 1
    { fr: 'Cette année', en: 'This year', ref: 'curyear' }, // 2
];

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