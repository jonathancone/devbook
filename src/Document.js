
export default class Document {
    constructor(key = 0, title = "No Title", html = "", markup = "") {
        this.title = title;
        this.key = key;
        this.html = html;
        this.markup = markup;
    }
}