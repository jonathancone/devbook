import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FaFileCodeO, FaFont } from 'react-icons/lib/fa'

export default function MarkupModeToolbar(props) {
    return (
        <ButtonGroup>
            <Button outline color="primary" active={props.htmlMode} onClick={() => props.onHtmlModeChange(true)}><FaFont /></Button>
            <Button outline color="primary" active={!props.htmlMode} onClick={() => props.onHtmlModeChange(false)}> <FaFileCodeO /></Button>
        </ButtonGroup>
    );
}


