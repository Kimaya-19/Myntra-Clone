import React from "react";
import BagSummary from "./BagSummary"; // Assuming it's in the same folder
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from '../store/bagSlice';
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
const HomeItem = ({ item }) => {

const dispatch=useDispatch();
const bagItems=useSelector(store=>store.bag);
const elementFound=bagItems.indexOf(item.id) >= 0;
console.log(item.id,elementFound)


const handleAddToBag=()=>{
  dispatch(bagActions.addToBag(item.id));
}

const handleRemove=()=>{
  dispatch(bagActions.removeFromBag(item.id));
}


  return (
    <div className="home-bag-container">
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
        <button
          type="button"
          className="btn btn-add-bag btn-danger" onClick={handleRemove}>
          <AiFillDelete /> Remove
        </button>
        ):(
        <button
          type="button"
          className="btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          <GrAddCircle /> Add to Bag
        </button>
        )}
      </div>

     
    </div>
  );
};

export default HomeItem;
