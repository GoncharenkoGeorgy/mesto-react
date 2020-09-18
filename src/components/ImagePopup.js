import React from 'react';

export default class ImagePopup extends React.Component {

  render() {
    return (

      <section className={`popup ${this.props.isOpen && 'popup_opened'}`}>
        <figure className="element__container popup-mouse">
          <button className="popup__close popup-pic-close" onClick={this.props.onClose} />
          <img className="element__pic element__pic_active element-pic-full" src={this.props.link} alt={this.props.name} />
          <figcaption className="element__name element__name_active element-name-full">{this.props.name}</figcaption>
        </figure>
      </section>
    );
  }
}