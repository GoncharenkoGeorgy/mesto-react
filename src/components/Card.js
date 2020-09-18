import React from 'react';

export default class Card extends React.Component {

  handleClick = () => {
    this.props.onCardClick(this.props);
  };

  render() {
    const { card } = this.props;
    return (

      <li className="element">
        <img className="element__pic" src={card.link} alt={card.name} onClick={this.handleClick} />
        <button className="element__remove" />
        <div className="element__content">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__counter">
            <button className="element__heart" />
            <p className="element__heart-counter">{card.likes.length}</p>
          </div>
        </div>
      </li>

    );
  }
}