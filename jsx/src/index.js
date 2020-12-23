import React from 'react';
import ReactDOM from 'react-dom';

const App = function(){
    //return <div>Hi There!</div>;

    return <div>
        <label for="name">Enter Name</label>
        <input type="text" id="name"/>
        <button style={{backgroundColor:'red',color:'white'}}>Submit</button>
    </div>
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);