import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resList from "../../utils/mockData";
import "@testing-library/jest-dom"

it("", () => {

    render(
        <RestaurantCard resData={resList[0]} />
    );

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();

});