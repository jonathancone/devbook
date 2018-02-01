import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'

class EditorModeToolbar extends Component {

    static defaultProps = {
        commandState: {
            bold: false,
            italic: false,
            underline: false
        }
    };

    render() {
        return (
            <ButtonGroup>
                <Button outline active={this.props.commandState.bold} onClick={(event) => this.props.onDocumentCommand(event, 'bold')}><FontAwesome.FaBold /></Button>
                <Button outline active={this.props.commandState.italic} onClick={(event) => this.props.onDocumentCommand(event, 'italic')}><FontAwesome.FaItalic /></Button>
                <Button outline active={this.props.commandState.underline} onClick={(event) => this.props.onDocumentCommand(event, 'underline')}><FontAwesome.FaUnderline /></Button>
                <Button outline active={this.props.commandState.header} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'h1')}><FontAwesome.FaHeader size={16}/></Button>
                <Button outline active={this.props.commandState.header} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'h2')}><FontAwesome.FaHeader size={12}/></Button>
                <Button outline active={this.props.commandState.header} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'h3')}><FontAwesome.FaHeader size={8}/></Button>
                <Button outline active={this.props.commandState.preBlock} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'code')}><FontAwesome.FaTerminal /></Button>
                <Button outline active={this.props.commandState.pre} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'pre')}><FontAwesome.FaCode /></Button>
                <Button outline active={this.props.commandState.ol} onClick={(event) => this.props.onDocumentCommand(event, 'insertOrderedList')}><FontAwesome.FaListOl /></Button>
                <Button outline active={this.props.commandState.ul} onClick={(event) => this.props.onDocumentCommand(event, 'insertUnorderedList')}><FontAwesome.FaListUl /></Button>
                <Button outline active={this.props.commandState.link} onClick={(event) => this.props.onDocumentCommand(event, 'createLink')}><FontAwesome.FaChain /></Button>
                <Button outline active={this.props.commandState.eraser} onClick={(event) => this.props.onDocumentCommand(event, 'formatBlock', 'div')}><FontAwesome.FaEraser /></Button>
            </ButtonGroup>
        );
    }
}

export default EditorModeToolbar;
