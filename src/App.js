import React, { Component } from 'react';
import Contents from './Contents';
import Editor from './Editor';
import Document from './Document';

import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      documents: [new Document()],
      index: 0
    }
  }

  getCurrentDocument() {
    return this.state.documents[this.state.index];
  }

  handleAddDocument = () => {
    const documents = this.state.documents.concat(new Document(this.state.documents.length + 1));

    this.setState({ ...this.state, documents: documents });
  }

  handleSelectDocument = (index) => {
    this.setState({ ...this.state, index: index });
  }

  handleDocumentTitleChange = (event) => {

    const documents = this.state.documents.slice();

    documents[this.state.index].title = event.target.value;

    this.setState({ ...this.state, documents: documents });
  }

  handleDocumentHtmlInput = (event) => {
    const input = event.target;
    const html = input.innerHTML;
    const newState = { ...this.state };

    newState.documents[newState.index].html = html;

    this.setState(newState);
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row pb-4">
          <div class="col">
            <h1>Markdown Editor</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <Contents documents={this.state.documents}
              index={this.state.index}
              onAddDocument={this.handleAddDocument}
              onSelectDocument={this.handleSelectDocument}
            />
          </div>
          <main class="col-8">
            <Editor document={this.state.documents[this.state.index]}
              onDocumentTitleChange={this.handleDocumentTitleChange}
              onDocumentHtmlInput={this.handleDocumentHtmlInput}
            />
          </main>
        </div>
      </div >
    );
  }
}

