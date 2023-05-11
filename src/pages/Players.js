import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPlayer } from "../redux-toolkit/player/PlayerSlice";

const Players = () => {
const [count , setCount] = useState(0);
  const dispatch = useDispatch();
  const { player, isLoading } = useSelector((state) => state?.player);
  console.log(123, player, isLoading);

  useEffect(() => {
    setTimeout(()=>{
        dispatch(allPlayer());
    },2000)
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h5>Player List Here</h5>
        </>
      )}
    </>
  );
};

export default React.memo(Players);
