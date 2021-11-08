import React, {useContext, useEffect} from "react";
import Context from './context/context'


const HomePage = () => {
  useEffect(()=>{
    setValue('uchechhe')
  },[])
  const { message, setValue } = useContext(Context)
  return (
    <div>
      <h1>{message}</h1>
      <div><button>Change world</button></div>
    </div>
  );
};

export default HomePage;
