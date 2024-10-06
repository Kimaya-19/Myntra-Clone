import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  
  // Check if the item is already in the bag using its ID
  const elementFound = bagItems.some(bagItem => bagItem.id === item.id);

  const handleAddToBag = () => {
    console.log("Adding to bag:", item);
    dispatch(bagActions.addToBag(item)); // Add the item to the bag
  };

  const handleRemove = () => {
    console.log("Removing from bag:", item.id);
    dispatch(bagActions.removeFromBag(item.id)); // Remove the item by ID
  };

  return (
    <div className="item-container" key={item.id}>
      <img className="item-image" src={item.image} alt={item.item_name} />
      <div className="rating">
        {item.rating?.stars} ⭐ | {item.rating?.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemove}>
          <AiFillDelete /> Remove
        </button>
      ) : (
        <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}>
          <GrAddCircle /> Add to Bag
        </button>
      )}
    </div>
  );
};

export default ItemCard;
