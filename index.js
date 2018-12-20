import express from 'express'
import AppRouter from './src/route';
import JWT, {SignOptions} from 'jsonwebtoken'

import fs from 'fs'
import rootConfig from './src/config';

//Khởi tạo app
var app = express()

//Đăng ký router cho App

const token = JWT.sign({prop1: "prop1"}, rootConfig.jwtConfig.privateKEY, rootConfig.jwtConfig.signOptions)
JWT.verify(token, rootConfig.jwtConfig.publicKEY, rootConfig.jwtConfig.signOptions, (err,decode)=>{console.log(decode)})
//Add middleware check authentication
app.use((req, res, next) => {
    console.log("====> in-here")
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Blabla') {
        JWT.verify(req.headers.authorization.split(' ')[1], rootConfig.jwtConfig.publicKEY, {...rootConfig.jwtConfig.signOptions}, function (err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
})
app.use(AppRouter)
//Run server
app.listen(rootConfig.port, () => {
    console.log(`Server is listening port: ${rootConfig.port}`)
})