import React from 'react';

const SeasonDisplay = (props) => {
    if (props.err && !props.lat) {
        return <div>{props.err}</div>;
    }

    if (!props.err && props.lat) {
        return <div>{props.lat}</div>;
    }

    return <div>Loading..</div>;
};

export default SeasonDisplay;