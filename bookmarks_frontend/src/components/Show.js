import React from 'react';

class Show extends React.Component {
    render() {
        return (
            <div className="details">
                <h2>{this.props.name}</h2>

            </div>
        )
    }
}

export default Show;