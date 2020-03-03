import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [ update, setUpdate ] = useState([]);
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axiosWithAuth()
        .get('colors')
        .then(res => {
            console.log(res.data)
            setColorList(res.data)
            setUpdate(false);
        })
        .catch(err => console.log(`There was an error.`, err.response ))
}, [update])
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setUpdate={setUpdate} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
