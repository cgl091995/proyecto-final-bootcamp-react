import React from "react";
import "./ExpandedCard.css";

export const ExpandedCard = ({ title, description, instructions, difficulty, preparation_time, ingredients, fotos }) => {
  return (
    <div className="expanded-card">
      <img src={fotos} alt={title} className="expanded-card__image" />
      <div className="expanded-card__content">
        <h1 className="expanded-card__title">{title}</h1>
        <p className="expanded-card__description">{description}</p>
        <h3>Ingredientes:</h3>
        { <ul className="expanded-card__ingredients">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul> }
        <h3>Instrucciones:</h3>
        <p className="expanded-card__instructions">{instructions}</p>
        <div className="expanded-card__details">
          <p><strong>Dificultad:</strong> {difficulty}</p>
          <p><strong>Tiempo de preparación:</strong> {preparation_time} minutos</p>
        </div>
        <button className="expanded-card__button" onClick={() => window.history.back()}>Volver</button>
      </div>
    </div>
  );
};
