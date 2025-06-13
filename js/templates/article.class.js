class Article {
    constructor(ref) {
        this.article = ARTICLES.find(a => a.ref === ref);
        this.tags = this.article.categories;
        this.file = this.article.file;
        this.title = this.article.name;
        this.date = this.article.date;
        this.count = 0;
        this.addMainDiv();
    }

    addMainDiv() {
        const MAIN = document.createElement('div');

        const MAIN_ATTRS = [
            { attr: 'id', val: 'main_div' },
            { attr: 'class', val: 'main_div article_div' }
        ];

        setAttrs(MAIN_ATTRS, MAIN);
        appendElem(MAIN);

        this.parent = MAIN;
    }

    addTitle() {
        const TITLE = document.createElement('h1');
        const TITLE_ATTRS = [
            { attr: 'id', val: 'title_article' },
            { attr: 'class', val: 'title_article content_title' }
        ];

        TITLE.innerHTML = this.title;
        setAttrs(TITLE_ATTRS, TITLE);
        appendElem(TITLE, this.parent);
        return this;
    }

    addFirstParagraph({ text = '' } = {}) {
        const PARAGRAPH = document.createElement('p');
        const PARAGRAPH_ATTRS = [
            { attr: 'id', val: 'first_paragraph_article' },
            { attr: 'class', val: 'first_paragraph_article content_first_paragraph' }
        ];

        PARAGRAPH.innerHTML = text;
        setAttrs(PARAGRAPH_ATTRS, PARAGRAPH);
        appendElem(PARAGRAPH, this.parent);
        return this;
    }

    addDate() {
        const DATE = document.createElement('p');
        const DATE_ATTRS = [
            { attr: 'id', val: 'date_article' },
            { attr: 'class', val: 'date_article content_date' }
        ];

        DATE.innerHTML = `${this.date.getDate()} ${MOIS.FULL[this.date.getMonth()]} ${this.date.getFullYear()}`;
        setAttrs(DATE_ATTRS, DATE);
        appendElem(DATE, this.parent);
        return this;
    }

    addSectionTitle({ text = '', uniqueId = null } = {}) {
        if (uniqueId == null) uniqueId = this.setId();

        const SECTION = document.createElement('h2');
        const SECTION_ATTRS = [
            { attr: 'id', val: `section_article_${uniqueId} ${uniqueId}` },
            { attr: 'class', val: `section_article_${uniqueId} content_section_title` }
        ];

        SECTION.innerHTML = text;
        setAttrs(SECTION_ATTRS, SECTION);
        appendElem(SECTION, this.parent);
        return this;
    }

    addParagraph({ text = '', uniqueId = null, links = null } = {}) {
        if (uniqueId == null) uniqueId = this.setId();

        const PARAGRAPH = document.createElement('p');
        const PARAGRAPH_ATTRS = [
            { attr: 'id', val: `paragraph_article_${uniqueId}` },
            { attr: 'class', val: `paragraph_article_${uniqueId} content_paragraph` }
        ];

        
        if (links != null) {
            text = text.split('XLINKX');
            
            text.map((txt, i) => {
                if (i == text.length - 1) return txt;
                return txt + `<a href="${links[i].url}" target="blank">${links[i].text}</a>`;
            }).join('');
        }

        text = text.replace(/XEMSX/g, '<em>');
        text = text.replace(/XEMEX/g, '</em>');
        text = text.replace(/XBSX/g, '<b>');
        text = text.replace(/XBEX/g, '</b>');
        text = text.replace(/XBRX/g, '<br/>');


        PARAGRAPH.innerHTML = text;
        setAttrs(PARAGRAPH_ATTRS, PARAGRAPH);
        appendElem(PARAGRAPH, this.parent);
        return this;
    }

    addImage({ href = '', uniqueId = null, caption = null } = {}) {
        if (uniqueId == null) uniqueId = this.setId();

        const IMAGE = document.createElement('img');
        const IMAGE_ATTRS = [
            { attr: 'id', val: `image_article_${uniqueId}` },
            { attr: 'class', val: `image_article_${uniqueId} content_image` },
            { attr: 'src', val: `../../../media/images/articles/${this.file}/${href}` }
        ];

        setAttrs(IMAGE_ATTRS, IMAGE);
        appendElem(IMAGE, this.parent);

        if (caption == null) return this;

        const CAPTION = document.createElement('span');
        const CAPTION_ATTRS = [
            { attr: 'id', val: `caption_article_${uniqueId}` },
            { attr: 'class', val: `caption_article_${uniqueId} content_image_caption` },
        ];

        CAPTION.innerHTML = caption;
        setAttrs(CAPTION_ATTRS, CAPTION);
        appendElem(CAPTION, this.parent);
        return this;
    }
    
    addYouTubeEmbed({ link = '', uniqueId = null, caption = null } = {}) {
        if (uniqueId == null) uniqueId = this.setId();
        const EMBED = document.createElement('iframe');

        const EMBED_ATTRS = [
            { attr: 'id', val: `yt_embed_${uniqueId}` },
            { attr: 'class', val: `yt_embed_${uniqueId} content_yt_embed` },
            { attr: 'width', val: 560 },
            { attr: 'height', val: 315 },
            { attr: 'title', val: 'YouTube video player' },
            { attr: 'frameborder', val: 0 },
            { attr: 'allow', val: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' },
            { attr: 'referrerpolicy', val: 'strict-origin-when-cross-origin' },
            { attr: 'src', val: link },
        ];

        setAttrs(EMBED_ATTRS, EMBED);
        appendElem(EMBED, this.parent);

        if (caption == null) return this;

        const CAPTION = document.createElement('span');
        const CAPTION_ATTRS = [
            { attr: 'id', val: `caption_article_${uniqueId}` },
            { attr: 'class', val: `caption_article_${uniqueId} content_image_caption` },
        ];

        CAPTION.innerHTML = caption;
        setAttrs(CAPTION_ATTRS, CAPTION);
        appendElem(CAPTION, this.parent);
        return this;
    }

    setId() {
        this.count++;
        return this.count;
    }
}