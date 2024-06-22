import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    //const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

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

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => {
                            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                        });
                        setFilteredRestaurants(filteredRestaurant);
                        console.log(searchText);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res?.info?.avgRating === 4.3);
                    console.log(filteredList);
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => {
                    return (<Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}><RestaurantCard resData={restaurant}/></Link>)
                })}
            </div>
        </div>
    );
};

export default Body;