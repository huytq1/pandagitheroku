import React, { Component } from "react";
import { flickrImages, shutterStockVideos } from "../Api/Api";
class MediaGallery extends Component {
  state = {};
  componentDidMount() {
    flickrImages("rain").then(images => console.log(images, "Images"));
    shutterStockVideos("rain").then(videos => console.log(videos, "Videos"));
  }
  render() {
    return <div>Media Gallery</div>;
  }
}

export default MediaGallery;
