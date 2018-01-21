import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardHeader, CardBody, CardText, InputGroup } from 'reactstrap';
import { FaEdit } from 'react-icons/lib/fa';


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
                    <div>
                        
                    {
                            this.props.htmlMode ?
                                <div>
                                    {this.props.document.html}
                                </div>
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
