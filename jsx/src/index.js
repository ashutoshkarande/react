import React from 'react';
import ReactDOM from 'react-dom';

const App = function(){
    //return <div>Hi There!</div>;

    const buttonText = 'Click me!';

    return <div>
        <label className="label" htmlFor="name">Enter Name: </label>
        <input type="text" id="name"/>
        <button style={{backgroundColor:'red',color:'white'}}>{buttonText}</button>
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);