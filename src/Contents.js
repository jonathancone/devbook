import React from 'react'
import { Button, Card, CardText, CardTitle, CardBody, CardSubtitle } from 'reactstrap';
import { FaFileTextO, FaStickyNoteO } from 'react-icons/lib/fa';

class Contents extends React.Component {

    chopString(string, length) {
        return string.substring(0, length) + (string.length > length ? '...' : '');
    }

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
                                    <CardSubtitle><FaStickyNoteO />{' '}{this.chopString(doc.title, 25)}</CardSubtitle>
                                    <CardText className="small pt-2">{this.chopString(doc.html, 75)}</CardText>
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