import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register User" });
  });

export { authUser, registerUser };
