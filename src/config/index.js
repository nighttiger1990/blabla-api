import dotenv from 'dotenv'
import jwtConfig from "./jsonwebtoken";

dotenv.config()

const app = {
    port: process.env.PORT || 8000,
    env: process.env.NODE_ENV || "development"
}

const rootConfig = {
    jwtConfig,
    ...app
}

export default rootConfig