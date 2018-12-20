import { SignOptions } from 'jsonwebtoken'
import fs from 'fs'
const privateKEY = fs.readFileSync("./src/key/id_rsa.private.key", 'utf8');
const publicKEY = fs.readFileSync('./src/key/id_rsa.public.key', 'utf8');

const i = 'LuV Offical';          // Issuer 
const s = 'blabla';        // Subject 
const a = 'LuV Team'; // Audience
const refreshTokenLife = 86400 //seconds
const tokenLife = 3600
/**
 * @type {SignOptions}
 */
const signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: tokenLife,
    algorithm: "RS256"
};

const refreshTokenOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: refreshTokenLife,
    algorithm: "RS256"
}

const jwtConfig = {
    privateKEY,
    publicKEY,
    signOptions,
    refreshTokenOptions
}

export default jwtConfig