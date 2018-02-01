import React from 'react';
import './RichEditor.css'

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
            this.moveCaret(this.inputElement, false);
        }

        this.createBaseChildIfNeeded(this.inputElement)
    }

    moveCaret(element, start) {
        const range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(start);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    setInputElement(inputElement) {
        this.inputElement = inputElement
    }

    createBaseChildIfNeeded(parent) {
        return; // Not needed for now.

        if (parent.firstElementChild && parent.firstElementChild.tagName.toLowerCase() !== 'div') {
            parent.removeChild(parent.firstChild);
        }

        if (!parent.firstChild) {
            const div = document.createElement('div');
            const br = document.createElement('br');

            div.appendChild(br);
            parent.appendChild(div);

            this.moveCaret(div, true);
        }

    }

    handleDocumentChange = (event) => {
        const target = event.target;

        this.createBaseChildIfNeeded(target);

        if (this.props.document.html !== target.innerHTML) {
            this.props.onDocumentChange(event);
        }

    }

    render() {
        return (
            <div contentEditable className={'rich-editor-text-area'}
                ref={input => this.setInputElement(input)}
                onInput={this.handleDocumentChange}
                onFocus={this.props.onDocumentCursorChange}
                onClick={this.props.onDocumentCursorChange}
                onKeyUp={this.props.onDocumentCursorChange}
                style={{ height: '50vh' }}>
            </div>
        );
    }
}