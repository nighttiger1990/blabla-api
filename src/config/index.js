import jwtConfig from "./jsonwebtoken";

const app = {
    port: 8080
}

const rootConfig = {
    jwtConfig,
    ...app
}

export default rootConfig