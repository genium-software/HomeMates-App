import React, { Fragment, useState, useEffect } from "react";
import HomeScreen from "./components/HomeScreen";
import { getHouses } from "../../middleware/firebase";

const DashboardView = props => {
  const [house, setHouse] = useState(undefined);
  // This is the method to retrieve data from Firebase in the Frontend.
  useEffect(() => {
    const getHousesFromFirestore = async () => {
      const houses = await getHouses();
      setHouse(houses[0]); //set only first house. TODO: find it based on houseID of owner perspective
      console.log(houses);
    };
    getHousesFromFirestore();
  }, []);
  return (
    <Fragment>
      <HomeScreen house={house} />
    </Fragment>
  );
};

export default DashboardView;
