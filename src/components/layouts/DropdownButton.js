import React from 'react';

class DropdownButton extends React.Component{
    render() {
        const { buttonText, dropdownContent } = this.props;

        return (
            <div className="dropdown-container">
                <button className="btn-dropdown btn-white">{buttonText}</button>
                <div className="dropdown-content">
                    {dropdownContent}
                </div>
            </div>
        )
    }
};

export default DropdownButton;