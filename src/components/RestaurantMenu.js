import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);

    const [showIndex, setShowIndex] = useState(0);

    if (resInfo === null){
        return <Shimmer />;
    }
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {
        name,
        cuisines,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
        return (c.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    });
    console.log(categories);

    return (
        <div className="text-center">
            <h1 className=" font-bold my-6 text-2xl">{name}</h1>
            <p className=" font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <h2>Menu</h2> */}
            {/* <ul>
                {itemCards.map((item) => {
                    return <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price}</li>;
                })}
            </ul> */}
            {categories.map((category, index) => {
                return (<RestaurantCategory setShowIndex={() => setShowIndex(index)} showItems={index === showIndex ? true : false} key={category?.card?.card.title} data = {category?.card?.card} />)
            })}
        </div>
    );
};

export default RestaurantMenu;