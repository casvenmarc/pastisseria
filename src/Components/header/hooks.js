import React, { useState, useEffect, createContext } from "react";
export const OpenContext = React.createContext();

export function OpenContextProvider(props) {


  //HEADER
  const [estadoHeadercat, setHeadercat] = React.useState(0);
  const [estadoHeaderesp, setHeaderesp] = React.useState(0);
  const [estadoHeadereng, setHeadereng] = React.useState(0);

  //FOOTER
  const [estadoFootercat, setFootercat] = React.useState(0);
  const [estadoFooteresp, setFooteresp] = React.useState(0);
  const [estadoFootereng, setFootereng] = React.useState(0);

  return (
    <OpenContext.Provider
      value={{

        estadoHeadercat,
        estadoHeaderesp,
        estadoHeadereng,
        estadoFootercat,
        estadoFooteresp,
        estadoFootereng,
        setHeaderesp,
        setHeadercat,
        setHeadereng,
        setFooteresp,
        setFootercat,
        setFootereng,
   
      }}
    >
      {props.children}
    </OpenContext.Provider>
  );
}
