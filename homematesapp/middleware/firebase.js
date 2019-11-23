import db from "../firebase";

/**
 * Retrieve the whole houses from firestore "houses" collection
 */
export const getHouses = async () => {
  const houses = [];
  try {
    const houseRef = await db.collection("houses").get();
    if (houseRef.empty) {
      console.log("No houses.");
      return;
    }
    houseRef.forEach(house => {
      const data = house.data();
      houses.push(data);
    });
    return houses;
  } catch (err) {
    console.log(err);
  }
};

// cloud functions
// owner login = 1 call (get house)
// house automatically populated
// gas { paid/not, price, description, tenants }, rent,
