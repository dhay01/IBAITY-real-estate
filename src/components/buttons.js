
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import '../style/index.css';

function ButtonDropdown() {
    return (
        <DropdownButton title="English"  id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">arabic</Dropdown.Item>
            <Dropdown.Item eventKey="2">english</Dropdown.Item>
        </DropdownButton>

    );
}

export default ButtonDropdown;