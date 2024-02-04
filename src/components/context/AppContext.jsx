import React, { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const appContext = createContext();

const AppContext = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [showExpolore, setShowExplore] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const menuIconColor = ()=>{ 
    if(open){
      return 'open'
    }
    if(showExpolore){
      return 'dark'
    }
    if(useLocation().pathname == '/contact'){
      return 'dark'
    }
    if(useLocation().pathname == '/about'){
      return 'dark'
    }
    if(useLocation().pathname == '/products'){
      return 'dark'
    }
  }

  return (
    <appContext.Provider
      value={{
        open,
        setOpen,
        showExpolore,
        setShowExplore,
        showLinks,
        setShowLinks,
        menuIconColor
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContext;
