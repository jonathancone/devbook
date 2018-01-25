import 'bootstrap/dist/css/bootstrap.css';
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
                <CardBody>
                    <div style={{overflow: "overlay"}}>

                        {
                            this.props.htmlMode ?
                                <RichEditor document={this.props.document}
                                    onDocumentInput={this.props.onDocumentHtmlInput} />
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
