const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// const connectdb = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URL);
//     console.log("Database connected successfully");

//     const fetchedData = mongoose.connection.db.collection("food_items");

//     fetchedData.find({}).toArray(async (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         global.food_items = data;

//         const foodCategory = mongoose.connection.db.collection("food_category");
//         foodCategory.find({}).toArray(async(err, categoryData) => {
//           if (err) {
//             console.error(err);
//           } else {
//             global.food_category = categoryData;
//             console.log("Database fetch completed");
//           }
//         });
//       }
//     });
//   } catch (error) {
//     console.error("Error connecting to the database:", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectdb;

// Example of connectdb with async/await
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");

    const fooditemsData = await mongoose.connection.db.collection("food_items").find({}).toArray();
    const categoryData = await mongoose.connection.db.collection('food_category').find({}).toArray();

    global.food_items = fooditemsData;
    global.food_category = categoryData;

    console.log("Data fetched successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error; // Propagate the error
  }
};

module.exports = connectdb;
