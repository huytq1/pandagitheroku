import React, { Component } from "react";
import { connect } from "react-redux";
import {
  selectImageAction,
  searchMediaAction,
  selectVideoAction
} from "../actions/mediaActions";
import PhotoPage from "../Components/photoPage";
import VideoPage from "../Components/videoPage";
class MediaGallery extends Component {
  state = {};
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(searchMediaAction("rain"));
  }

  // Dispatches *selectImageAction* when any image is clicked
  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage));
  }

  // Dispatches *selectvideoAction* when any video is clicked
  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo));
  }

  // Dispatches *searchMediaAction* with query param.
  // We ensure action is dispatched to the store only if query param is provided.
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = "";
    }
  }

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
    console.log(videos, "Videos");
    return (
      <div className="container-fluid">
        {images || videos ? (
          <div>
            <input type="text" ref={ref => (this.query = ref)} />
            <input
              type="submit"
              className="btn btn-primary"
              value="Search Library"
              onClick={this.handleSearch}
            />

            <div className="row">
              {images && selectedImage ? (
                <div className="col-ms-6">
                  <PhotoPage
                    images={images}
                    selectedImage={selectedImage}
                    onHandleSelectImage={this.handleSelectImage}
                  />
                </div>
              ) : (
                <div className="col-ms-6"> Cannot Loading Images </div>
              )}
              {videos && selectedVideo ? (
                <div className="col-ms-6">
                  <VideoPage
                    videos={videos}
                    selectedVideo={selectedVideo}
                    onHandleSelectVideo={this.handleSelectVideo}
                  />
                </div>
              ) : (
                <div className="col-ms-6"> Cannot Loading Videos </div>
              )}
            </div>
          </div>
        ) : (
          "loading ...."
        )}
      </div>
    );
  }
}
// Subscribe component to redux store and merge the state into
// component's props
const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGallery);
