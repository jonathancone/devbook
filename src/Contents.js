import React from 'react'
import { Button, Card, CardText, CardTitle } from 'reactstrap';
import { FaFileTextO } from 'react-icons/lib/fa';

class Contents extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="row justify-content-begin">
                    <div class="col-9">
                        <h4>Documents</h4>
                    </div>
                    <div class="col-2">
                        <Button outline onClick={() => this.props.onAddDocument()}><FaFileTextO /></Button>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <hr />
                    </div>
                </div>
                {
                    this.props.documents.map((doc, index) => {
                        return (
                            <div class="row mb-2" key={doc.key}>
                                <Card inverse={index === this.props.index} color={index === this.props.index ? 'primary' : ''} body onClick={() => this.props.onSelectDocument(index)}>
                                    <CardTitle>{doc.title}</CardTitle>
                                    <CardText>{doc.body}</CardText>
                                </Card>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Contents;