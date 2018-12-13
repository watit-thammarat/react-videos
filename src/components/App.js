import React, { Component } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './ViedoDetail';
import youtube from '../apis/youtube';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onTermSubmit = async term => {
    try {
      const { data } = await youtube.get('/search', { params: { q: term } });
      this.setState({ videos: data.items, selectedVideo: data.items[0] });
    } catch (err) {
      console.error(err);
    }
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
