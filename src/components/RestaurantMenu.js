import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    if (resInfo === null){
        return <Shimmer />;
    }
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {
        name,
        cuisines,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => {
                    return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price}</li>;
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;