import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar.component';
import VideoList from './components/video-list.component';
import VideoDetail from './components/video-detail.component';

const apiKey = 'AIzaSyBJOVL9hyTHepSwSbAGI44Ver730i6zMcE';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('brules rules');
  }

  videoSearch(term) {
    YTSearch({ key: apiKey, term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChanged={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelected={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
