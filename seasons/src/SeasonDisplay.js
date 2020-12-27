import './SeasonDisplay.css'
import React from 'react';
import Spinner from './Spinner'

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
    const icon = season === 'winter' ? 'snowflake' : 'sun'

    if (props.err && !props.lat) {
        return <div> {props.err} </div>;
    }

    if (!props.err && props.lat) {
        return (
            <div className={`${season}`}>
                <i className={`icon-left massive ${icon} icon`} />
                <h1 className="season-display"> {text} </h1>
                <i className={`icon-right massive ${icon} icon`} />
            </div>
        );
    }

    return <div><Spinner message="please allow location" /></div>;
};

export default SeasonDisplay;