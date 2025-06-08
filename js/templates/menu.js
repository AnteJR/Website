// constantes
const HEADER = document.createElement('header');

// fonctions
function constructHeader() {
    appendHeader();
    appendMainDivs();
    appendHamburger();
    appendTitle();
    appendMenu();
}

function appendHeader() {
    const ATTRS = [
        { attr: 'id', val: 'main_header' },
        { attr: 'width', val: window.innerWidth },
        { attr: 'height', val: window.innerHeight / 10 }
    ];

    setAttrs(ATTRS, HEADER);
    appendElem(HEADER);
}

function appendMainDivs() {
    const MAIN = document.createElement('div');
    const TOP = document.createElement('div');
    const BOT = document.createElement('div');

    const MAIN_ATTRS = [
        { attr: 'id', val: 'header_div' },
        { attr: 'class', val: 'header main_header' }
    ];

    const TOP_ATTRS = [
        { attr: 'id', val: 'top_header' },
        { attr: 'class', val: 'header top_header' }
    ];

    const BOT_ATTRS = [
        { attr: 'id', val: 'bot_header' },
        { attr: 'class', val: 'header bot_header' }
    ];

    setAttrs(MAIN_ATTRS, MAIN);
    setAttrs(TOP_ATTRS, TOP);
    setAttrs(BOT_ATTRS, BOT);

    appendElem(MAIN, HEADER);
    appendElem([TOP, BOT], MAIN);
}

function appendTitle() {
    const LOGO = document.createElement('img'); // not used right now cause i don't have a logo :(
    const TITLE = document.createElement('h1');
    const DIV = document.getElementById('top_header');

    TITLE.id = 'site_title';
    TITLE.innerHTML='mon site';

    appendElem(TITLE, DIV);
}

function appendMenu() {
    const MENU_ITEMS = [
        { fr: 'accueil', en: 'home', ref: 'home' },
        { fr: 'articles', en: 'articles', ref: 'articles' },
        { fr: 'sources', en: 'sources', ref: 'sources' },
        { fr: 'à propos', en: 'about', ref: 'about' },
    ];

    for (const [i, menu] of MENU_ITEMS.entries()) {
        const TXT = document.createElement('p');
        const LINK = document.createElement('a');
        const DIV = document.getElementById('bot_header');

        const MENU_ATTRS = [
            { attr: 'id', val: `menu_txt_${menu.ref}` },
            { attr: 'class', val: `menu_txt txt_${menu.ref}` },
        ];

        const LINK_ATTR = [
            { attr: 'id', val: `menu_a_${menu.ref}` },
            { attr: 'class', val: `menu_a a_${menu.ref}` },
            { attr: 'href', val: `${menu.ref === 'home' ? '../../index.html' : `../../pages/${menu.ref}.html`}` }
        ]

        LINK.innerHTML = menu[SELECTED.LANG];

        setAttrs(MENU_ATTRS, TXT);
        setAttrs(LINK_ATTR, LINK);
        appendElem(TXT, DIV);
        appendElem(LINK, TXT);
    }
}

function appendHamburger() {
    const HAMBURGER = document.createElement('div');
    HAMBURGER.id = 'hamburger';

    for (let i = 0; i < 3; i++) {
        const BAR = document.createElement('div');
        HAMBURGER.appendChild(BAR);
    }

    appendElem(HAMBURGER, HEADER);

    HAMBURGER.addEventListener('click', () => {
        const MENU = document.getElementById('bot_header');
        HAMBURGER.classList.toggle('active');
        MENU.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// appel
constructHeader();