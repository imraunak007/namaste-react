import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {

    const { loggedInUser } = useContext(UserContext);
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info;

    const { deliveryTime } = sla;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img className=" rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className=" font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    );
};

// higher oreder component

 export const withPromotedLabel = (RestaurantCard) => {

    return (props) => {
        // console.log(props);
        // console.log({...props});
        return (
            <div>
                <label className="bg-black text-white m-2 p-2 rounded-lg absolute">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;