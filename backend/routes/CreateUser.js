const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const { body, validationResult } = require("express-validator");
const bcrypt=  require('bcryptjs');
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();

const jwtSecret = process.env.JwtSecret;
// for signup
// router.post(
//   "/createUser",
//   [
//     body("email", "enter valid email-id").isEmail(),
//     body("password", "minimum 6 charcters are required").isLength({ min: 6 }),
//     body("name", "minimum 5 charcters are required").isLength({ min: 5 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
// const salt = await bcrypt.genSalt(10);
//     let hashedPassword=await bcrypt.hash(req.body.password,salt);
//     try {
//       await User.create({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashedPassword,
//         location: req.body.location,
//       });

//       res.json({ success: true });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

// // for login

// router.post(
//   "/loginUser",
//   [
//     body("email", "enter valid email-id").isEmail(),
//     body("password", "minimum 6 charcters are required").isLength({ min: 6 }),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     let email = req.body.email;
//     try {
//       let userData = await User.findOne({ email });
//       if (!userData) {
//         return res.status(400).json({ errors: "User does not exist" });
//       }

//       /****normally without bcrypt */
//       // if (req.body.password !== userData.password) {
//       //   return res.status(400).json({ errors: "Invalid password" });
//       // }

//       /* after bcrypt**/

//       const comparePassword= await bcrypt.compare(req.body.password,userData.password)
//  if (!comparePassword) {
//         return res.status(400).json({ errors: "Invalid password" });
//       }

//       //payload for jwt
// const data= {
// user:{
//   id:userData.id
// }
// }
// const authToken= jwt.sign(data,jwtSecret)

//       return res.status(200).json({ success: true, authToken:authToken });
//     } catch (error) {
//       console.log(error);
//       res.json({ success: false });
//     }
//   }
// );

router.post(
  "/createUser",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
    body("name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    // console.log(req.body)
    // let user = await User.findOne({email:req.body.email})
    const salt = await bcrypt.genSalt(10);
    let securePass = await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        // password: req.body.password,  first write this and then use bcryptjs
        password: securePass,
        email: req.body.email,
        location: req.body.location,
      })
        .then((user) => {
          const data = {
            user: {
              id: user.id,
            },
          };
          const authToken = jwt.sign(data, jwtSecret);
          success = true;
          res.json({ success, authToken });
        })
        .catch((err) => {
          console.log(err);
          res.json({ error: "Please enter a unique value." });
        });
    } catch (error) {
      console.error(error.message);
    }
  }
);

// Authentication a User, No login Requiered
router.post(
  "/loginUser",
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email }); //{email:email} === {email}
      if (!user) {
        return res
          .status(400)
          .json({ success, error: "Try Logging in with correct credentials" });
      }

      const pwdCompare = await bcrypt.compare(password, user.password); // this return true false.
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ success, error: "Try Logging in with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true;
      const authToken = jwt.sign(data, jwtSecret);
      res.json({ success, authToken });
    } catch (error) {
      console.error(error.message);
      res.send("Server Error");
    }
  }
);

// Get logged in User details, Login Required.
router.post("/getuser", fetch, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password"); // -password will not pick password from db.
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});


module.exports = router;
