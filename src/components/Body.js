import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    //const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        //console.log("useEffect Called");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            // https://corsproxy.io/
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        //console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // if (listOfRestaurants.length === 0) {
    //     //return <h1>Loading.....</h1>;
    //     return <Shimmer />;
    // }
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return <h1>You are Offline!!!</h1>;

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="p-4 m-4">
                    <input type="text" className="border border-black border-solid" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => {
                            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        });
                        setFilteredRestaurants(filteredRestaurant);
                        console.log(searchText);
                    }}>Search</button>
                </div>
                <div className="p-4 m-4 flex items-center">
                <button className="px-4 py-2 m-4 bg-gray-100" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating === 4.3);
                    console.log(filteredList);
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
                </div>
                <div className="p-4 m-4 flex items-center">
                <input type="text" className="border border-black border-solid" value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => {
                    return (<Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
                        {restaurant?.info?.locality === "Kasba" ? <RestaurantCard resData={restaurant}/> : <RestaurantCardPromoted resData={restaurant} />}
                        </Link>)
                })}
            </div>
        </div>
    );
};

export default Body;