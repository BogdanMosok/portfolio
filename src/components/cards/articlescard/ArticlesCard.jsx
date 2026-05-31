import React from 'react';

const ArticlesCard = ({
  title,
  descr,
  date,
  image,
  onClick
}) => (
  <div className="articlescard" onClick={onClick}>
    <div className="articlescard__image-box">
      <img 
        className="articlescard__image" 
        src={image} 
        alt={title} 
      />
    </div>

    <div className="articlescard__content">
      <span className="articlescard__date">
        {date}
      </span>

      <h3 className="articlescard__title">
        {title}
      </h3>

      {descr && (
        <p className="articlescard__descr">
          {descr}
        </p>
      )}
    </div>
  </div>
);

export default ArticlesCard;