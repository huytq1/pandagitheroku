import React, { Component } from "react";
class PhotoPage extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-6">
        <h2> Images </h2>
        <div className="selected-image">
          <div key={this.props.selectedImage.id}>
            <h6>{this.props.selectedImage.title}</h6>
            <img
              src={this.props.selectedImage.mediaUrl}
              alt={this.props.selectedImage.title}
            />
          </div>
        </div>
        <div className="image-thumbnail">
          {this.props.images.map((image, i) => (
            <div
              key={i}
              onClick={this.props.onHandleSelectImage.bind(this, image)}
            >
              <img src={image.mediaUrl} alt={image.title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PhotoPage;
