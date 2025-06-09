const MAIN_DIV = document.createElement('div');
const ARTICLE_LIST_DIV = document.createElement('div');
const LIST_DIV = document.createElement('div');
const ALL_ARTICLES = [...ARTICLES];
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
    displayArticleList(ARTICLES.sort((a, b) => b.date - a.date), true);
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
        const ELEM = document.createElement('a');

        const ELEM_ATTRS = [
            { attr: 'id', val: `dropdown-item-${cat.ref}` },
            { attr: 'class', val: `dropdown-item-type dropdown-item ${cat.ref == SELECTED.LIST_TYPE ? 'hidden' : ''}` },
            { attr: 'href', val: '#' },
            { attr: 'value', val: cat.ref },
            { attr: 'onClick', val: `filterArticles('${cat.ref}', 'type')` },
        ];

        ELEM.innerHTML = cat[SELECTED.LANG];
        setAttrs(ELEM_ATTRS, ELEM);
        appendElem(ELEM, TYPE_LIST);
    }

    for (const [i, age] of ARTICLES_AGE.entries()) {
        const ELEM = document.createElement('a');

        const ELEM_ATTRS = [
            { attr: 'id', val: `dropdown-item-${age.ref}` },
            { attr: 'class', val: `dropdown-item-age dropdown-item ${age.ref == SELECTED.LIST_AGE ? 'hidden' : ''}` },
            { attr: 'href', val: '#' },
            { attr: 'value', val: age.ref },
            { attr: 'onClick', val: `filterArticles('${age.ref}', 'age')` }
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
    const LIST_DIV_ATTRS = [
        { attr: 'id', val: 'articles-list' },
        { attr: 'class', val: 'articles-list' }
    ];

    setAttrs(LIST_DIV_ATTRS, LIST_DIV);
    appendElem(LIST_DIV, ARTICLE_LIST_DIV);
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

function filterArticles(val, filter) {
    let FINAL_ARRAY = [];
    const PREVIOUS_LIST_TYPE = SELECTED.LIST_TYPE;
    const PREVIOUS_LIST_AGE = SELECTED.LIST_AGE;
    SELECTED.LIST_TYPE = filter == 'type' ? val : SELECTED.LIST_TYPE;
    SELECTED.LIST_AGE = filter == 'age' ? val : SELECTED.LIST_AGE;

    removeDropdown();

    switch (SELECTED.LIST_TYPE) {
        case 'all':
            ALL_ARTICLES.splice(0, ALL_ARTICLES.length);
            ARTICLES.forEach(e => ALL_ARTICLES.push(e));
            FINAL_ARRAY = ALL_ARTICLES;
            break;
        default:
            FINAL_ARRAY = ALL_ARTICLES.filter(d => d.categories.includes(ARTICLES_CATEGORIES.map(e => e.ref).indexOf(SELECTED.LIST_TYPE)));
            break;
    }

    switch (SELECTED.LIST_AGE) {
        case 'oldest':
            FINAL_ARRAY.sort((a, b) => a.date - b.date);
            break;
        case 'curyear':
            FINAL_ARRAY = FINAL_ARRAY.filter(d => d.date.getFullYear() == new Date().getFullYear()).sort((a, b) => b.date - a.date);
            break;
        case 'recent':
            FINAL_ARRAY.sort((a, b) => b.date - a.date);
            break;
    }

    if (filter == 'type') {
        document.getElementById('dropdown-button-type').innerHTML = `${ARTICLES_CATEGORIES[ARTICLES_CATEGORIES.map(e => e.ref).indexOf(SELECTED.LIST_TYPE)][SELECTED.LANG]} ↓`;
        document.getElementById(`dropdown-item-${PREVIOUS_LIST_TYPE}`).classList.toggle('hidden');
        document.getElementById(`dropdown-item-${SELECTED.LIST_TYPE}`).classList.toggle('hidden');
    }

    if (filter == 'age') {
        document.getElementById('dropdown-button-age').innerHTML = `${ARTICLES_AGE[ARTICLES_AGE.map(e => e.ref).indexOf(SELECTED.LIST_AGE)][SELECTED.LANG]} ↓`;
        document.getElementById(`dropdown-item-${PREVIOUS_LIST_AGE}`).classList.toggle('hidden');
        document.getElementById(`dropdown-item-${SELECTED.LIST_AGE}`).classList.toggle('hidden');
    };

    displayArticleList(FINAL_ARRAY);
}

function displayArticleList(data, firstTime = false) {
    if (!firstTime) {
        const container = document.getElementById('articles-list');
        container.innerHTML = '';
    }

    for (const [i, article] of data.entries()) {
        const ARTICLE_LINK = document.createElement('a');
        const ARTICLE_LINK_2 = document.createElement('a');
        const ARTICLE_CONTAINER = document.createElement('div');
        const ARTICLE_IMAGE = document.createElement('img');
        const ARTICLE_DETAILS = document.createElement('div');
        const ARTICLE_TITLE = document.createElement('h2');
        const ARTICLE_SUMMARY = document.createElement('p');
        const ARTICLE_DATE = document.createElement('p');
        const ARTICLE_CATEGORIES = document.createElement('p');

        const ARTICLE_LINK_ATTRS = [
            { attr: 'class', val: 'article-link' },
            { attr: 'href', val: `../../pages/articles/${article.file}.html` },
        ]

        const ARTICLE_CONTAINER_ATTRS = [
            { attr: 'id', val: `article-container-${article.file}` },
            { attr: 'class', val: `article-container article-container-${article.file}` }
        ];

        const ARTICLE_IMAGE_ATTRS = [
            { attr: 'id', val: `article-image-${article.file}` },
            { attr: 'class', val: `article-image article-image-${article.file}` },
            { attr: 'src', val: `../../media/images/${article.file}/ref_pic.png` }
        ];

        const ARTICLE_DETAILS_ATTRS = [
            { attr: 'id', val: `article-details-${article.file}` },
            { attr: 'class', val: `article-details article-details-${article.file}` }
        ];

        const ARTICLE_TITLE_ATTRS = [
            { attr: 'id', val: `article-title-${article.file}` },
            { attr: 'class', val: `article-title article-title-${article.file}` }
        ];

        const ARTICLE_SUMMARY_ATTRS = [
            { attr: 'id', val: `article-summary-${article.file}` },
            { attr: 'class', val: `article-summary article-summary-${article.file}` }
        ];

        const ARTICLE_DATE_ATTRS = [
            { attr: 'id', val: `article-date-${article.file}` },
            { attr: 'class', val: `article-date article-date-${article.file}` }
        ];

        const ARTICLE_CATEGORIES_ATTRS = [
            { attr: 'id', val: `article-categories-${article.file}` },
            { attr: 'class', val: `article-categories article-categories-${article.file}` }
        ];

        for (const [j, cat] of article.categories.entries()) {
            const CATEGORY = document.createElement('span');

            const CATEGORY_ATTRS = [
                { attr: 'id', val: `category${cat}` },
                { attr: 'class', val: `category category${cat}` },
                { attr: 'onClick', val: `filterArticles('${ARTICLES_CATEGORIES[cat].ref}', 'type')` }
            ];

            CATEGORY.innerHTML = ARTICLES_CATEGORIES[cat][SELECTED.LANG];
            setAttrs(CATEGORY_ATTRS, CATEGORY);
            appendElem(CATEGORY, ARTICLE_CATEGORIES);
        }

        ARTICLE_TITLE.innerHTML = article.name;
        ARTICLE_SUMMARY.innerHTML = article.summ;
        ARTICLE_DATE.innerHTML = `${article.date.getDate()} ${MOIS.PART[article.date.getMonth()]} ${article.date.getFullYear()}`;

        setAttrs(ARTICLE_LINK_ATTRS, ARTICLE_LINK);
        setAttrs(ARTICLE_LINK_ATTRS, ARTICLE_LINK_2);
        setAttrs(ARTICLE_CONTAINER_ATTRS, ARTICLE_CONTAINER);
        setAttrs(ARTICLE_IMAGE_ATTRS, ARTICLE_IMAGE);
        setAttrs(ARTICLE_DETAILS_ATTRS, ARTICLE_DETAILS);
        setAttrs(ARTICLE_TITLE_ATTRS, ARTICLE_TITLE);
        setAttrs(ARTICLE_SUMMARY_ATTRS, ARTICLE_SUMMARY);
        setAttrs(ARTICLE_DATE_ATTRS, ARTICLE_DATE);
        setAttrs(ARTICLE_CATEGORIES_ATTRS, ARTICLE_CATEGORIES);

        appendElem(ARTICLE_CONTAINER, document.getElementById('articles-list'));
        appendElem(ARTICLE_LINK, ARTICLE_CONTAINER);
        appendElem(ARTICLE_IMAGE, ARTICLE_LINK);
        appendElem(ARTICLE_DETAILS, ARTICLE_CONTAINER);
        appendElem(ARTICLE_LINK_2, ARTICLE_DETAILS);
        appendElem(ARTICLE_TITLE, ARTICLE_LINK_2);
        appendElem(ARTICLE_SUMMARY, ARTICLE_DETAILS);
        appendElem(ARTICLE_DATE, ARTICLE_DETAILS);
        appendElem(ARTICLE_CATEGORIES, ARTICLE_DETAILS);
    }
}

constructArticleList();