import React, { useEffect, useRef } from "react";

import { mount } from "rickMortyMCF/rick";
const RickyMortyWrapper = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, { language: "en" });
  }, []);

  return <div ref={ref}></div>;
};

export default RickyMortyWrapper;
