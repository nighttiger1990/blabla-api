import { Request, Response } from 'express'
import authApi from './auth';
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const defaultAPI = (req, res) => {
    res.status(200).json({ data: "This is GET api" })
}
const rootApi = {
    defaultAPI,
    ...authApi
}


export default rootApi

