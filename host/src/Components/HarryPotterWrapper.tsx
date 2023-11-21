import React, { useEffect, useRef } from "react";
import { mount } from "harryPotterMCF/harry";
const HarryPotterWrapper = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current, { language: "en" });
  }, []);

  return <div ref={ref}></div>;
};

export default HarryPotterWrapper;
