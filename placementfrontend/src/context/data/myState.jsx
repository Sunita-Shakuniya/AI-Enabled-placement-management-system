import React, { useEffect, useState } from 'react';
import MyContext from './myContext';


function myState(props) {
const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  const [mode, setMode] = useState('light');
  return (
    <MyContext.Provider value={{
      mode, toggleMode, loading, setLoading, 
      products, setProducts, addProduct, product,user,
      edithandle: setProducts, updateProduct, deleteProduct, order,
      filterPrice, filterType, searchkey, setSearchkey, setFilterType, setFilterPrice,getUserData
    }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;