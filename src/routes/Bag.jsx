// Bag.js
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag); // The full item objects

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;