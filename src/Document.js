
export default class Document {
    static defaultHtml = "<div></div>";
    constructor(key = 0, title = "No Title", html = "<div><br></div>", markup = "") {
        this.title = title;
        this.key = key;
        this.html = html;
        this.markup = markup;
    }
}