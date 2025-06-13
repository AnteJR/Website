const MAIN_DIV = document.createElement('div');
const SOURCES_DIV = document.createElement('div');
const PAGE_TEXTS = {
    subtitle: {
        fr: 'Vous trouverez ici une liste de sources que je cite à travers mes articles. Considérez cette page comme ma bibliographie générale.',
        en: 'Here you will find sources I cite throughout my articles. Consider this page like my main bibliography.'
    }
}

function constructSourcesList() {
    appendMainDiv();
}

function appendMainDiv() {
    const TITLE = document.createElement('h1');
    const SUB_TITLE = document.createElement('p');

    const MAIN_DIV_ATTRS = [
        { attr: 'id', val: 'main_div' },
        { attr: 'class', val: 'main_div sources' }
    ];

    const TITLE_ATTRS = [
        { attr: 'id', val: 'title_sources' },
        { attr: 'class', val: 'title_sources content_title' }
    ];

    const SUB_TITLE_ATTRS = [
        { attr: 'id', val: 'sub_title_sources' },
        { attr: 'class', val: 'sub_title_sources content_sub_title' }
    ];

    const SOURCES_DIV_ATTRS = [
        { attr: 'id', val: 'content_div_sources' },
        { attr: 'class', val: 'content_div_sources content_div' }
    ];

    TITLE.innerHTML = 'Sources';
    SUB_TITLE.innerHTML = PAGE_TEXTS.subtitle[SELECTED.LANG];
    setAttrs(MAIN_DIV_ATTRS, MAIN_DIV);
    setAttrs(SOURCES_DIV_ATTRS, SOURCES_DIV);
    setAttrs(TITLE_ATTRS, TITLE);
    setAttrs(SUB_TITLE_ATTRS, SUB_TITLE);
    appendElem(MAIN_DIV, document.body);
    appendElem(TITLE, MAIN_DIV);
    appendElem(SUB_TITLE, MAIN_DIV);
    appendElem(SOURCES_DIV, MAIN_DIV);
}

constructSourcesList();