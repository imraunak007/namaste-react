import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
        const timer = setInterval(() => {
            console.log("OP");
        },10);
        return (() => {
            clearInterval(timer);
        });
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json?.data);
    };
    return resInfo;
};

export default useRestaurantMenu;