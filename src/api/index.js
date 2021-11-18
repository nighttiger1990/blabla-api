import { Request, Response } from 'express'
import authApi from './auth';
import os from 'os'
import rootConfig from '../config';
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const defaultAPI = (req, res) => {
    res.status(200).json({ data: "This is GET api", hostname:  os.hostname(), env: rootConfig.env})
}
const rootApi = {
    defaultAPI,
    ...authApi
}


export default rootApi

