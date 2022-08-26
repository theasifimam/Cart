import React from "react";

const items = ({ description, title, img, price, quantity }) => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="product image" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder={quantity} />
          <i className="fas fa-plus add"></i>
        </div>

        <div className="price">
          <h2>Rs {price}</h2>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" />
        </div>
      </div>

      <hr />
    </>
  );
};

export default items;
