import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, InputGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'

class EditorModeToolbar extends Component {

    static defaultProps = {
        commandState: {
            bold: false,
            italic: false,
            underline: false
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            createLinkModalOpen: false,
            createLinkText: "",
            selectedRange: null
        };
    }
    handleCreateLinkModal = (event) => {

        const selection = window.getSelection();
        const range = window.getSelection().getRangeAt(0);

        console.log(range);

        this.setState({
            createLinkModalOpen: !this.state.createLinkModalOpen,
            createLinkText: selection.toString(),
            selectedRange: range
        });
    }

    handleCreateLink = (event) => {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(this.state.selectedRange);

        this.props.onDocumentCommand(event, 'createLink', this.state.createLinkText);

        this.handleCreateLinkModal(event);
    }

    handleCreateLinkText = (event) => {
        this.setState({ ...this.state, createLinkText: event.target.value });
    }

    hasActiveSelection = () => {
        const selection = window.getSelection().getRangeAt(0);

        if (selection.startContainer === selection.endContainer) {
            return selection.startOffset !== selection.endOffset;
        }

        return true;


    }


    renderLinkModal() {
        return (
            <Fragment>
                <Modal isOpen={this.state.createLinkModalOpen} toggle={this.handleCreateLinkModal}>
                    <ModalHeader toggle={this.handleCreateLinkModal}>Create Hyperlink</ModalHeader>
                    <ModalBody>
                        <InputGroup>
                            <Input autoFocus placeholder="e.g. http://www.google.com" onChange={this.handleCreateLinkText} value={this.state.createLinkText} />
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleCreateLink} active={false}>Create</Button>{' '}
                        <Button color="secondary" onClick={this.handleCreateLinkModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        );
    }

    render() {
        return (
            <Fragment>
                <ButtonGroup>
                    <Button outline active={this.props.commandState.bold} onClick={(event) => this.props.onDocumentCommand(event, 'bold')}><FontAwesome.FaBold /></Button>
                    <Button outline active={this.props.commandState.italic} onClick={(event) => this.props.onDocumentCommand(event, 'italic')}><FontAwesome.FaItalic /></Button>
                    <Button outline active={this.props.commandState.underline} onClick={(event) => this.props.onDocumentCommand(event, 'underline')}><FontAwesome.FaUnderline /></Button>
                    <Button outline active={this.props.commandState.header} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'h1')}><FontAwesome.FaHeader size={16} /></Button>
                    <Button outline active={this.props.commandState.header} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'h2')}><FontAwesome.FaHeader size={12} /></Button>
                    <Button outline active={this.props.commandState.header} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'h3')}><FontAwesome.FaHeader size={8} /></Button>
                    <Button outline active={this.props.commandState.pre} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'pre')}><FontAwesome.FaCode /></Button>
                    <Button outline active={this.props.commandState.ol} onClick={(event) => this.props.onDocumentCommand(event, 'insertOrderedList')}><FontAwesome.FaListOl /></Button>
                    <Button outline active={this.props.commandState.ul} onClick={(event) => this.props.onDocumentCommand(event, 'insertUnorderedList')}><FontAwesome.FaListUl /></Button>
                    <Button outline active={this.props.commandState.link} onClick={this.handleCreateLinkModal}><FontAwesome.FaChain /></Button>
                    <Button outline active={this.props.commandState.eraser} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'div')}><FontAwesome.FaEraser /></Button>
                </ButtonGroup>
                {this.renderLinkModal()}
            </Fragment>
        );
    }
}

export default EditorModeToolbar;
