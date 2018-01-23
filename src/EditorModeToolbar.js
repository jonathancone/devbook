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
                <Button outline active={this.props.commandState.header} onClick={(event) => this.props.onDocumentCommand(event, 'header')}><FontAwesome.FaHeader /></Button>
                <Button outline active={this.props.commandState.preBlock} onClick={(event) => this.props.onDocumentCommand(event, 'preBlock')}><FontAwesome.FaTerminal /></Button>
                <Button outline active={this.props.commandState.pre} onClick={(event) => this.props.onDocumentCommand(event, 'pre')}><FontAwesome.FaCode /></Button>
                <Button outline active={this.props.commandState.ol} onClick={(event) => this.props.onDocumentCommand(event, 'ol')}><FontAwesome.FaListOl /></Button>
                <Button outline active={this.props.commandState.ul} onClick={(event) => this.props.onDocumentCommand(event, 'ul')}><FontAwesome.FaListUl /></Button>
                <Button outline active={this.props.commandState.link} onClick={(event) => this.props.onDocumentCommand(event, 'link')}><FontAwesome.FaChain /></Button>
                <Button outline active={this.props.commandState.eraser} onClick={(event) => this.props.onDocumentCommand(event, 'eraser')}><FontAwesome.FaEraser /></Button>
            </ButtonGroup>
        );
    }
}

export default EditorModeToolbar;
