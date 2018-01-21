import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa'

class EditorModeToolbar extends Component {
    render() {
        return (
            <ButtonGroup>
                <Button outline><FontAwesome.FaBold /></Button>
                <Button outline><FontAwesome.FaItalic /></Button>
                <Button outline><FontAwesome.FaUnderline /></Button>
                <Button outline><FontAwesome.FaHeader /></Button>
                <Button outline><FontAwesome.FaTerminal /></Button>
                <Button outline><FontAwesome.FaCode /></Button>
                <Button outline><FontAwesome.FaListOl /></Button>
                <Button outline><FontAwesome.FaListUl /></Button>
                <Button outline><FontAwesome.FaCheckSquareO /></Button>
                <Button outline><FontAwesome.FaChain /></Button>
                <Button outline><FontAwesome.FaTable /></Button>
                <Button outline><FontAwesome.FaEraser /></Button>
            </ButtonGroup>
        );
    }
}

export default EditorModeToolbar;
