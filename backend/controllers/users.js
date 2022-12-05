import User from "../models/users.js";
import argon2 from "argon2";

export const getUsers = (req, res) => {};

export const getUserById = (req, res) => {};

export const createUser = async (req, res) => {
  const { name, email, password, confPassword, role } = req.body;
  if (password !== confPassword)
    return res.status(400).json({ msg: "Need PASSWORD" });
  const hashPassword = await argon2.hash(password);
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ msg: "REGISTRADO" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateUser = (req, res) => {};

export const deleteUser = (req, res) => {};
