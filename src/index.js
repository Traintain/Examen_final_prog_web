import React, { useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import { IntlProvider } from "react-intl";
import Cuartos from "./components/cuartos";

import Espacios from "./components/espacios";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const getLocale = () => {
  return navigator.language || navigator.userLanguage;
};

const selectHouse = (id) => {
  console.log("Seleccionar casa: ", id);
};
let selectedHouseId = "";

root.render(
  <IntlProvider locale={getLocale()}>
    <div class="container">
      <Espacios lang={getLocale()} onClick={selectHouse} />
      <hr></hr>
      <Cuartos id={selectHouse} />
    </div>
  </IntlProvider>
);
