import React from "react";
import { render } from "@testing-library/react";
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

    const barra = getByTestId("side-componente");

    expect(barra).toBeInTheDocument();
  });
});
