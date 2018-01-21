import React, { Component } from 'react';
import EditorTextArea from './EditorTextArea';
import EditorModeToolbar from './EditorModeToolbar';
import MarkupModeToolbar from './MarkupModeToolbar';

import 'bootstrap/dist/css/bootstrap.css';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            htmlMode: true
        };
    }

    handleHtmlModeChange = (htmlMode) => {
        this.setState(Object.assign({}, this.state, { htmlMode: htmlMode }));
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <EditorModeToolbar htmlMode={this.state.htmlMode} />
                    </div>
                    <div class="col-2">
                        <MarkupModeToolbar htmlMode={this.state.htmlMode} onHtmlModeChange={this.handleHtmlModeChange} />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <hr />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <EditorTextArea htmlMode={this.state.htmlMode} />
                    </div>
                </div>
            </div>
        );
    }
}

