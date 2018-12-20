import { Express, Request, Response } from 'express'
import { Router } from 'express'
import rootApi from '../api';

const APIRouter = Router()
APIRouter.get('/login', rootApi.signIn)

export default APIRouter