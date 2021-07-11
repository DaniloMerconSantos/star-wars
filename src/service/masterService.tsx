import React from "react";

interface IResponse {
  name: string;
}

// eslint-disable-next-line import/prefer-default-export
export const getMaster = (): Promise<IResponse> => {
  const getDarkSide = fetch("https://swapi.dev/api/people/4");
  const getLightSide = fetch("https://swapi.dev/api/people/1");

  return Promise.any([getDarkSide, getLightSide])
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
