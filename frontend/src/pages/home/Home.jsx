import React from "react";
import AddTask from "../../component/addTask/AddTask";
import NaveBar from "../../component/naveBar/NaveBar";
import Taskes from "../../component/taskes/Taskes";

const Home = () => {
  return (
    <>
      <NaveBar />
      <Taskes />
      <AddTask />
    </>
  );
};

export default Home;
