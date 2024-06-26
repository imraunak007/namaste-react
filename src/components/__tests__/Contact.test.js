import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("", () => {

    beforeAll(() => {
        console.log("beforeAll")
    });

    beforeEach(() => {
        console.log("beforeEach")
    });

    afterAll(() => {
        console.log("afterAll")
    });

    afterEach(() => {
        console.log("afterEach")
    });

    it("", () => {

        render(<Contact />);
        const heading = screen.getByText("Contact");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("", () => {
    
        render(<Contact />);
        const heading = screen.getAllByRole("heading");
    
        expect(heading.length).toBe(2);
    });
});