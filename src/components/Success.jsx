import React from "react";
import Icon from "../assets/images/successfully.svg";

export const Success = ({ onClose }) => {
  return (
    <div className="success__box">
      <img src={Icon} alt="Успешно" />
      <h3 className="success__title">Успешно отправлено!</h3>
      <p className="success__text">
        Все пользователи из списка были оповещены о вашем мероприятии
      </p>
      <button onClick={onClose} className="success__btn">
        Хорошо
      </button>
    </div>
  );
};
