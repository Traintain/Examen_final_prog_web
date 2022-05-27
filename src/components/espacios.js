import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Espacio from "./espacio";

const Espacios = (props) => {
  const [espacios, setEspacios] = useState([]);
  const [cuartos, setCuartos] = useState([]);
  const [selectedHouseId, setSelectedHouse] = useState("");
  console.log(props.lang);
  let url =
    "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
  let urlEspacios =
    "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log("response", res);
        setEspacios(res);
      });
  }, []);

  useEffect(() => {
    fetch(urlEspacios)
      .then((res) => res.json())
      .then((res) => {
        console.log("cuartos", res);
        setCuartos(res);
      });
  }, []);

  const filtrarCuartos = (id) => {
    let ans = [];
    cuartos.map((c) => {
      if (c.homeId === id) {
        ans.push(c);
      }
    });
    return ans;
  };

  return (
    <div className="row">
      {espacios.map((e, i) => (
        <Espacio key={i} espacio={e} cuartos={filtrarCuartos(e.id)} />
      ))}
    </div>
  );
};

export default Espacios;
