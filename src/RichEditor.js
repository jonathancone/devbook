import React from 'react';

export default class RichEditor extends React.Component {

    componentDidMount() {
        this.updateHtml();
    }

    componentDidUpdate() {
        this.updateHtml();
    }

    updateHtml() {
        if (this.inputElement.innerHTML !== this.props.document.html) {
            this.inputElement.innerHTML = this.props.document.html;
            this.moveCaret(false);
        }
    }

    moveCaret(start) {
        const range = document.createRange();
        range.selectNodeContents(this.inputElement);
        range.collapse(start);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    setInputElement(inputElement) {
        this.inputElement = inputElement
    }

    render() {
        return (
            <div contentEditable
                ref={input => this.setInputElement(input)}
                onInput={this.props.onDocumentInput}
                style={{ height: '50vh' }} />
        );
    }
}