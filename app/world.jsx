import React from 'react';
import ReactDOM from 'react-dom';


class World extends React.Component {
    render() {
        return <h1>World!!! Word  !!!</h1>;
    }
}

ReactDOM.render(<World />, document.getElementById('world'));