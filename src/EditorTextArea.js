import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';


class EditorTextArea extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <input type="text" value={this.props.document.title} onChange={this.props.onDocumentTitleChange} />
                </CardHeader>
                <CardBody>
                    <CardText>
                        {
                            this.props.htmlMode ?
                                <span>
                                    {this.props.document.html}
                                </span>
                                :
                                <span>
                                    {this.props.document.markdown}
                                </span>
                        }
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

export default EditorTextArea;
