import React from 'react'
import { Nav, NavItem } from 'reactstrap';
import { FaStickyNoteO } from 'react-icons/lib/fa';

class Contents extends React.Component {
    render() {
        return (
            <div>
                <h4>Recent Notes</h4>
                <Nav vertical>
                    <NavItem>
                        <FaStickyNoteO />Some Note
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Contents;