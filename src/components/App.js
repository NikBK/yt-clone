import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import ErrorMessage from "./ErrorMessage";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, error: null };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async (term) => {
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });

      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
        error: null
      });
    }
    catch (e) {
      this.setState({
        videos: [],
        selectedVideo: null,
        error: e,
      })
      console.log(this.state.error)
    }
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {this.state.error ? <ErrorMessage message={this.state.error} /> : <VideoDetail video={this.state.selectedVideo} />}
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
