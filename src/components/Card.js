import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    return (
      <div>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <div>
          <p data-testid="attr1-card">
            Atttr01..................
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            Attr02..................
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            Attr03..................
            { cardAttr3 }
          </p>
        </div>
        <span data-testid="rare-card">{ cardRare }</span>
        { cardTrunfo ? <p data-testid="trunfo-card">Super Trunfo</p> : null }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
