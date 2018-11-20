import React, { Component } from "react";
class VideoPage extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-6">
        <h2> Videos </h2>
        <div className="select-video">
          <div key={this.props.selectedVideo.id}>
            <h6 className="title">{this.props.selectedVideo.description}</h6>
            <video
              controls
              src={this.props.selectedVideo.mediaUrl}
              alt={this.props.selectedVideo.title}
            />
          </div>
        </div>
        <div className="video-thumbnail">
          {this.props.videos.map((video, i) => (
            <div
              key={i}
              onClick={this.props.onHandleSelectVideo.bind(this, video)}
            >
              <video controls src={video.mediaUrl} alt={video.description} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VideoPage;
