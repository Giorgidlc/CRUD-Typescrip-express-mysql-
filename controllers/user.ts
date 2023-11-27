import { Request, Response } from "express"
import User from "../models/user"

export const getUsers = async (req: Request, res: Response) => {
  try { 
    const users = await User.findAll();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) { 
      res.status(404).json(`user with ${id} not found`)
    } else {res.status(200).json({ user })} 
  } catch (error) {
    res.status(500).send({ message: (error as Error).message })
  }
}

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const existingEmail = await User.findOne({
      where: { email_user: body.email_user } });
    if (existingEmail) {
      res.status(400).json(`Email already exists: ${body.email_user}`)
    }
    const user = User.build(body);
    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message })
  }
}

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body} = req;
  try {
    const user = User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: `user with ${id} not found` });
    } 
    const updateUser = await user;
    (updateUser)?.update(body);
    (updateUser)?.save();
    res.status(200).json({ user: updateUser });
 
  } catch (error) {
    res.status(500).send({ message: (error as Error).message })
  }
  
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const user = User.findByPk(id)
    if (!user) {
      return res.status(404).json({ message: `user with ${id} not found`})
    } 
    const deleteUser = await user;
    (deleteUser)?.destroy()
    res.status(200).json({ message: 'Deleted successfully'})
  } catch (error) {
    res.status(500).send({ message: (error as Error).message })
  }
  res.json({
    msg: 'deleteUser',
    id
  })
}