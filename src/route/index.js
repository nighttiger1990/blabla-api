import { Express, Request, Response } from 'express'
import { Router } from 'express'
import rootApi from '../api';
import APIRouter from './api';

const AppRouter = Router()
AppRouter.get('/', rootApi.defaultAPI)
AppRouter.use('/api', APIRouter)

export default AppRouter