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
    const user = new User(body);
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
    const instance: any = await user;
    instance.update(body);
    res.status(200).json({ user: instance });
 
  } catch (error) {
    res.status(500).send({ message: (error as Error).message })
  }
  
}

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params
  res.json({
    msg: 'deleteUser',
    id
  })
}