import React, { Component } from 'react';
import Contents from './Contents';
import Editor from './Editor';

import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      documents: [{
        key: 0,
        title: "No Title",
        html: "",
        markdown: ""
      }],
      index: 0
    }
  }

  handleAddDocument = () => {
    const documents = this.state.documents.slice();

    documents.push({
      key: documents.length + 1,
      title: "No Title",
      html: "",
      markdown: ""
    });

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
            />
          </main>
        </div>
      </div >
    );
  }
}

