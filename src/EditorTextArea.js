import 'bootstrap/dist/css/bootstrap.css';
import './EditorTextArea.css';

import React, { Component } from 'react';
import { Card, CardHeader, CardBody, InputGroup } from 'reactstrap';
import RichEditor from './RichEditor';

class EditorTextArea extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <InputGroup>
                        <input type="text" class="form-control" value={this.props.document.title} onChange={this.props.onDocumentTitleChange} />
                    </InputGroup>
                </CardHeader>
                <CardBody className="editor-text-area">
                    <div style={{ overflow: "overlay" }}>

                        {
                            this.props.htmlMode ?
                                <RichEditor document={this.props.document}
                                    onDocumentCursorChange={this.props.onDocumentCursorChange}
                                    onDocumentChange={this.props.onDocumentChange} />
                                :
                                <div>
                                    {this.props.document.markdown}
                                </div>
                        }
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default EditorTextArea;
