import React from 'react';
import { api } from '../utils/api.js';
import Card from './Card.js';

export default class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    };
  }

  componentDidMount() {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userData, cardData]) => {
        this.setState({
          userName: userData.name,
          userDescription: userData.about,
          userAvatar: userData.avatar,
          cards: cardData,
        });
      })
      .catch(console.error)
  }

  onCardClick = (card) => {
    this.props.handleCardClick(card);
  };

  render() {
    return (

      <main className="content">
        <section className="profile">
          <div className="profile__content">
            <button className="profile__avatar-button"><img className="profile__avatar" src={this.state.userAvatar}
              onClick={this.props.onEditAvatar} alt="Avatar" /></button>
            <div className="profile__info-container">
              <div className="profile__info">
                <h1 className="profile__info-heading">{this.state.userName}</h1>
                <button className="profile__info-edit" onClick={this.props.onEditProfile} />
              </div>
              <p className="profile__info-text">{this.state.userDescription}</p>
            </div>
          </div>
          <button className="profile__add-button popup-add-place" onClick={this.props.onAddPlace} />
        </section>

        <section className="elements-section">
          <ul className="elements">
            {this.state.cards.map((card) => (
              <Card key={card._id} card={card} onCardClick={this.onCardClick} />))}
          </ul>
        </section>
      </main>

    );
  }
}