import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Article extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  showImage = () => {
    const { image, title, storyline } = this.props;
    // Logica
    return (
      <img src={image} alt="" />
    )
  }

  render() {
    const { image, title, storyline } = this.props;
    console.log(image);
    
    return (
      <article>
      { image && this.showImage() }
      {}
      </article>
    );
  }
}

Article.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  storyline: PropTypes.string,
}.isRequired;

export default Article;