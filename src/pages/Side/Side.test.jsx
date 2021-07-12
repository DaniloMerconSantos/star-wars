import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Side from ".";

describe("O componente Side", () => {
    it("renderiza sem problemas", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Side />
            </MemoryRouter>
        );

        const barra = getByTestId("sideComponente");

        expect(barra).toBeInTheDocument();
    });

    it("deve conter buttons", () => {
        render(<Side />);

        const buttonBack = screen.getByRole("button", { name: /back/i });
        const buttonRestart = screen.getByRole("button", {
            name: /choose your path again, Padawan/i,
        });

        expect(buttonBack).toBeInTheDocument();
        expect(buttonRestart).toBeInTheDocument();
    });
});
