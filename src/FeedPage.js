import React, {useContext, useEffect} from "react";
import Context from './context/context'


const FeedPage = () => {
  const {message, setValue} = useContext(Context)
  useEffect(()=>{
    setValue('THIS IS FEED')
  },[])
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default FeedPage;
