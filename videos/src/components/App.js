import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './videoList';
const KEY = "AIzaSyCg1RABoD--d_iNeAk4V8fM3NfrnLkpL5o";

class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        console.log(term);
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                key: KEY
              }
        });
        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }

}

export default App;