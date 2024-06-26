import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Body from "../Body";
import data from "../../utils/mock";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    });
});

it("", async () => {

    await act(async () => render(

        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target : {value : "burger"}});
    fireEvent.click(searchBtn);
    const cards = screen.getAllByTestId("resCard");
    //expect(cards.length).toBe(18);

    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    const cardss = screen.getAllByTestId("resCard");
    expect(cardss.length).toBe(16);


});