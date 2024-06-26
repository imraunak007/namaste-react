import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    //let btnName = "Login";

    const cart = useSelector((store) => {
        console.log(store);
        return store.cart.items});
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const { loggedInUser } = useContext(UserContext);

    console.log("Header render");

    useEffect(() => {
        console.log("useEffect called");
    }, [btnNameReact]);
    // }, [btnName]);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus === false ? "❌" : "✅"}</li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/cart">Cart - ({cart.length}) items</Link></li>
                    <button className="login" onClick={() => {
                        //btnName = "Logout";
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}>{btnNameReact}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;