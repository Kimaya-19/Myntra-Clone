import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import { DEFAULT_ITEMS } from "../data/items"; // Import your items

const Home = () => {
    const items = useSelector((store)=>store.items);
    return (
        <main>
            <div className="items-container">
                {DEFAULT_ITEMS.map(item => (
                    <HomeItem key={item.id} item={item} /> // Map over items and pass each item
                ))}
            </div>
        </main>
    );
};

export default Home;
