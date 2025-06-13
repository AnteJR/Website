// CONSTANTES
const SELECTED = {
    LANG: 'fr',
    LIST_TYPE: 'all',
    LIST_AGE: 'recent',
}

const ARTICLES = [
    // ref, file, name, summ, categories, date
    { ref: 'pixels-hitman-absolution', file: 'pixels/hitman-absolution', name: 'Hitman: Absolution', summ: 'En parcourant le weekend passé le magasin Steam, je suis tombé devant le nouvel opus de la saga Hitman ...', categories: [3, 6], date: new Date('2016-03-24') },
];

const ARTICLES_CATEGORIES = [
    { fr: 'Tous', en: 'All', ref: 'all' }, // 0
    { fr: 'Culture Internet', en: 'Internet culture', ref: 'internet' }, // 1
    { fr: 'Films', en: 'Movies', ref: 'movies' }, // 2
    { fr: 'Jeux vidéo', en: 'Video games', ref: 'videogames' }, // 3
    { fr: 'Histoire', en: 'History', ref: 'history' }, // 4
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

const MOIS = {
    FULL: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    PART: ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sep.', 'Oct.', 'Nov.', 'Déc.']
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