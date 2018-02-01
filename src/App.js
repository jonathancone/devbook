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
      index: 0,
      commandState: {
        bold: false,
        italic: false,
        underline: false
      }
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

  handleDocumentChange = (event) => {

    let newState = { ...this.state };

    newState.documents[newState.index].html = event.target.innerHTML;

    this.handleCommandStateUpdate(null, newState);

  }

  buildCurrentCommandState() {
    const newCommandState = {};

    Object.keys(this.state.commandState)
      .forEach(cmd => {
        newCommandState[cmd] = document.queryCommandState(cmd);
      });

    return newCommandState;
  }

  handleCommandStateUpdate = (event, proposedState) => {

    proposedState = proposedState || this.state;

    const newCommandState = this.buildCurrentCommandState();

    let finalState = proposedState;

    if (newCommandState !== proposedState.commandState) {
      finalState = { ...proposedState, commandState: newCommandState };
    }

    this.setState(finalState);
  }

  static commands = ['bold', 'italic', 'underline'];

  handleDocumentCommand = (event, command, value) => {

      
      const enabled = document.queryCommandState('formatBlock', value);

    console.log(`${command}: ${value} - ${enabled}`);

    document.execCommand(command, false, value);



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
          <div class="col-3">
            <Contents documents={this.state.documents}
              index={this.state.index}
              onAddDocument={this.handleAddDocument}
              onSelectDocument={this.handleSelectDocument}
            />
          </div>
          <main class="col-8">
            <Editor document={this.state.documents[this.state.index]}
              commandState={this.state.commandState}
              onDocumentCursorChange={this.handleCommandStateUpdate}
              onDocumentTitleChange={this.handleDocumentTitleChange}
              onDocumentChange={this.handleDocumentChange}
              onDocumentCommand={this.handleDocumentCommand}
            />
          </main>
        </div>
      </div >
    );
  }
}

