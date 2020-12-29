import React from 'react';
import SearchBar from './searchBar'
import axios from 'axios'

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('',{

        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }

}

export default App;