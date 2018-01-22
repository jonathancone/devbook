import React from 'react';

export default class RichEditor extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.inputElement.innerHTML = this.props.document.html;
    }

    componentDidUpdate() {
        this.inputElement.innerHTML = this.props.document.html;
        this.moveCaret(false);
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
                onInput={this.props.onDocumentInput} />
        );
    }
}