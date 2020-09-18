import React from 'react';

export default class PopupWithForm extends React.Component {

  render() {
    return (

      <section className={`popup popup_${this.props.name} ${
        this.props.isOpen && 'popup_opened'
        }`}>
        <div className="popup__container popup-mouse">
          <button className="popup__close popup-edit-close" onClick={this.props.onClose} />
          <div className="popup__content">
            <h2 className="popup__heading">{this.props.title}</h2>
            <form className={`popup__form popup-${this.props.name}`} noValidate>
              {this.props.children}
              <button className="popup__save popup-edit-save">
                <div className="popup__save_loading">Сохранение...</div>
                <div className="popup__save_default">{this.props.submit}</div>
              </button>
            </form>
          </div>
        </div>
      </section>

    );
  }
}