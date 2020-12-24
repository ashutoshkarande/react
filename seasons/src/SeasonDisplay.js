import React from 'react';

const SeasonDisplay = (props) => {
    return (
        <div>
            Season Display : {props.lat}<br />
            <hr />
            {props.err}
        </div>
    );
};

export default SeasonDisplay;