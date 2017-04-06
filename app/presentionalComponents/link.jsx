import React, { PropTypes } from 'react';

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const activeLink = <span>{this.props.children}</span>
        const inActiveLink = <a href="#" onClick={e => {
            e.preventDefault();
            this.props.onClick();
        }}>{this.props.children}</a>;

        if(this.props.active) {
            return (
                <div>{activeLink}</div>
            );
        }

        return (
            <div>{inActiveLink}</div>
        );
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;

