const MAIN_DIV = document.createElement('div');
const ARTICLE_LIST_DIV = document.createElement('div');
const LIST_DIV = document.createElement('div');
const PAGE_TEXTS = {
    subtitle: {
        fr: 'Vous trouverez ici une liste des articles que j\'ai écrits, du plus récent au plus ancien.',
        en: 'Here is a list of the articles I wrote, from most recent to oldest.'
    },
    button_type: {
        default: {
            fr: 'Tous',
            en: 'All'
        }
    },
    button_age: {
        default: {
            fr: 'Les plus récents',
            en: 'Most recent'
        }
    }
}

function constructArticleList() {
    appendArticleDiv();
    appendListControllers();
    appendListDiv();
}

function appendArticleDiv() {
    const TITLE = document.createElement('h1');
    const SUB_TITLE = document.createElement('p');

    const MAIN_DIV_ATTRS = [
        { attr: 'id', val: 'main_div' },
        { attr: 'class', val: 'main_div article_list' }
    ];

    const TITLE_ATTRS = [
        { attr: 'id', val: 'title_article_list' },
        { attr: 'class', val: 'title_article_list content_title' }
    ];

    const SUB_TITLE_ATTRS = [
        { attr: 'id', val: 'sub_title_article_list' },
        { attr: 'class', val: 'sub_title_article_list content_sub_title' }
    ];

    const ARTICLE_LIST_DIV_ATTRS = [
        { attr: 'id', val: 'sub_title_article_list' },
        { attr: 'class', val: 'sub_title_article_list content_sub_title' }
    ];

    TITLE.innerHTML = 'Articles';
    SUB_TITLE.innerHTML = PAGE_TEXTS.subtitle[SELECTED.LANG];
    setAttrs(MAIN_DIV_ATTRS, MAIN_DIV);
    setAttrs(ARTICLE_LIST_DIV_ATTRS, ARTICLE_LIST_DIV);
    setAttrs(TITLE_ATTRS, TITLE);
    setAttrs(SUB_TITLE_ATTRS, SUB_TITLE);
    appendElem(MAIN_DIV, document.body);
    appendElem(TITLE, MAIN_DIV);
    appendElem(SUB_TITLE, MAIN_DIV);
    appendElem(ARTICLE_LIST_DIV, MAIN_DIV);
}

function appendListControllers() {
    const CONTROLLER_DIV = document.createElement('div');
    const CONTROLLER_TYPE = document.createElement('div');
    const CONTROLLER_AGE = document.createElement('div');
    const CONTROLLER_BUTTON_TYPE = document.createElement('button');
    const CONTROLLER_BUTTON_AGE = document.createElement('button');
    const TYPE_LIST = document.createElement('div');
    const AGE_LIST = document.createElement('div');

    const CONTROLLER_DIV_ATTRS = [
        { attr: 'id', val: 'list-controllers' },
        { attr: 'class', val: 'list-controllers' }
    ];

    const CONTROLLER_TYPE_ATTRS = [
        { attr: 'id', val: 'controller-type' },
        { attr: 'class', val: 'controller-type controller-div' }
    ];

    const CONTROLLER_AGE_ATTRS = [
        { attr: 'id', val: 'controller-age' },
        { attr: 'class', val: 'controller-age controller-div' }
    ];

    const CONTROLLER_BUTTON_TYPE_ATTRS = [
        { attr: 'id', val: 'dropdown-button-type' },
        { attr: 'class', val: 'dropdown-button-type dropdown-button' },
        { attr: 'onClick', val: 'dropdownType()' }
    ];

    const CONTROLLER_BUTTON_AGE_ATTRS = [
        { attr: 'id', val: 'dropdown-button-age' },
        { attr: 'class', val: 'dropdown-button-age dropdown-button' },
        { attr: 'onClick', val: 'dropdownAge()' }
    ];

    const TYPE_LIST_ATTRS = [
        { attr: 'id', val: 'dropdown-list-type' },
        { attr: 'class', val: 'dropdown-list-type dropdown-list' }
    ];

    const AGE_LIST_ATTRS = [
        { attr: 'id', val: 'dropdown-list-age' },
        { attr: 'class', val: 'dropdown-list-age dropdown-list' }
    ];

    for (const [i, cat] of ARTICLES_CATEGORIES.entries()) {
        if (cat.ref == SELECTED.LIST_TYPE) continue;
        const ELEM = document.createElement('a');

        const ELEM_ATTRS = [
            { attr: 'class', val: 'dropdown-item-type, dropdown-item' },
            { attr: 'href', val: '#' },
            { attr: 'value', val: cat.ref },
            { attr: 'onClick', val: `filterArticlesByType('${cat.ref}')` },
        ];

        ELEM.innerHTML = cat[SELECTED.LANG];
        setAttrs(ELEM_ATTRS, ELEM);
        appendElem(ELEM, TYPE_LIST);
    }

    for (const [i, age] of ARTICLES_AGE.entries()) {
        if (age.ref == SELECTED.LIST_AGE) continue;
        const ELEM = document.createElement('a');

        const ELEM_ATTRS = [
            { attr: 'class', val: 'dropdown-item-age, dropdown-item' },
            { attr: 'href', val: '#' },
            { attr: 'value', val: age.ref },
            { attr: 'onClick', val: `filterArticlesByAge('${age.ref}')` },
        ];

        ELEM.innerHTML = age[SELECTED.LANG];
        setAttrs(ELEM_ATTRS, ELEM);
        appendElem(ELEM, AGE_LIST);
    }

    CONTROLLER_BUTTON_TYPE.innerHTML = `${PAGE_TEXTS.button_type.default[SELECTED.LANG]} ↓`;
    CONTROLLER_BUTTON_AGE.innerHTML = `${PAGE_TEXTS.button_age.default[SELECTED.LANG]} ↓`;

    setAttrs(CONTROLLER_DIV_ATTRS, CONTROLLER_DIV);
    setAttrs(CONTROLLER_TYPE_ATTRS, CONTROLLER_TYPE);
    setAttrs(CONTROLLER_AGE_ATTRS, CONTROLLER_AGE);
    setAttrs(CONTROLLER_BUTTON_TYPE_ATTRS, CONTROLLER_BUTTON_TYPE);
    setAttrs(CONTROLLER_BUTTON_AGE_ATTRS, CONTROLLER_BUTTON_AGE);
    setAttrs(TYPE_LIST_ATTRS, TYPE_LIST);
    setAttrs(AGE_LIST_ATTRS, AGE_LIST);

    appendElem(CONTROLLER_DIV, ARTICLE_LIST_DIV);
    appendElem(CONTROLLER_TYPE, CONTROLLER_DIV);
    appendElem(CONTROLLER_AGE, CONTROLLER_DIV);
    appendElem(CONTROLLER_BUTTON_TYPE, CONTROLLER_TYPE);
    appendElem(CONTROLLER_BUTTON_AGE, CONTROLLER_AGE);
    appendElem(TYPE_LIST, CONTROLLER_TYPE);
    appendElem(AGE_LIST, CONTROLLER_AGE);
}

function appendListDiv() {
    
}

function dropdownType() {
    if (!document.getElementById("dropdown-list-type").classList.contains('show')) removeDropdown();
    document.getElementById("dropdown-list-type").classList.toggle("show");
}

function dropdownAge() {
    if (!document.getElementById("dropdown-list-age").classList.contains('show')) removeDropdown();
    document.getElementById("dropdown-list-age").classList.toggle("show");
}

function removeDropdown() {
    const DROPDOWNS = document.getElementsByClassName("dropdown-list");
    Array.prototype.forEach.call(DROPDOWNS, (e) => e.classList.remove("show"));
}

function filterArticlesByType(type) {
    SELECTED.LIST_TYPE = type;
    alert(type);
}

function filterArticlesByAge(age) {
    SELECTED.LIST_AGE = age;
    alert(age);
}

constructArticleList();