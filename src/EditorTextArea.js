import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';


class EditorTextArea extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <div>
                        Click to add title
                    </div>
                </CardHeader>
                <CardBody>
                    <CardText>
                        {
                            this.props.htmlMode ?
                                <div>
                                    HTML Content
                                </div>
                                :
                                <div>
                                    Markdown Content
                                </div>
                        }
                    </CardText>
                </CardBody>
            </Card>
        );
    }
}

export default EditorTextArea;
