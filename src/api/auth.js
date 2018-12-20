import { Request, Response } from 'express'
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const signIn = (req, res) => {
    res.status(200).json({ data: "This is method signIn" })
}
const authApi = {
    signIn
}


export default authApi

