import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import ItemCard from "./ItemCard"; // Import the reusable component
import { DEFAULT_ITEMS } from "../data/beauty"; // Adjust the path accordingly

const Beauty = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const items = useSelector((store) => store.items) || []; // Default to an empty array
  const dispatch = useDispatch();

  useEffect(() => {
    // Exit if fetch has already been completed
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    
    fetch("http://localhost:8080/beauty", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(({ items }) => {
        dispatch(itemsActions.addInitialItems(items)); // Add all items from the API
        dispatch(fetchStatusActions.markFetchDone());
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        // Fallback to default items if fetching fails
        dispatch(itemsActions.addInitialItems(DEFAULT_ITEMS));
      })
      .finally(() => {
        dispatch(fetchStatusActions.markFetchingFinished());
      });

    return () => {
      controller.abort(); // Clean up the fetch request on unmount
    };
  }, [fetchStatus.fetchDone, dispatch]);

  return (
    <div className="home-bag-container">
      {items.length > 0 ? (
        items.map((item) => <ItemCard key={item.id} item={item} />)
      ) : (
        <p>No items available.</p>
      )}
    </div>
  );
};

export default Beauty;
