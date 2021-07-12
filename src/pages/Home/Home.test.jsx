import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from ".";

describe("O componente Home", () => {
    it("reinderiza sem problemas", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        const home = getByTestId("homeComponente");

        expect(home).toBeInTheDocument();
    });

    it("deve conter um button", () => {
        render(<Home />);

        const buttonStart = screen.getByRole("button");

        expect(buttonStart).toBeInTheDocument();
    });
});
