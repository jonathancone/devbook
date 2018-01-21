import React, { Component } from 'react';
import Contents from './Contents';
import Editor from './Editor';

import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <h1>Markdown Editor</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <Contents />
          </div>
          <main class="col-8">
            <Editor />
          </main>
        </div>
      </div >
    );
  }
}

