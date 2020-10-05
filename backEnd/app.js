/**
 * @fileoverview Server main file
 * @author Jithin Zacharia
 * 
 * @changelog
 * - 0.0.1
 *      Server stable version
 * - 0.2.0
 *      Unit tests 40%
 * - 0.2.1
 *      Unit tests 70%
 */

var app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require("cors"),
    chalk = require("chalk"),
    compression = require("compression"),
    helmet = require("helmet"),
    serverPortConfiguration = require("./config/serverPortConfig"),
    mongoDbConfig = require("./config/mongoDBConfig"),
    winston = require("./config/winstonConfig"),
    auth = require('./routers/auth'),
    common = require('./routers/common'),
    admin = require('./routers/admin'),
    provider = require('./routers/provider'),
    user = require('./routers/user');

//Middlewares
app.use(cors());
mongoDbConfig.connect();
app.options("*", cors());
app.use(helmet());
app.use(compression());
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.hidePoweredBy({ setTo:"PHP 4.2.2" }));
app.use(require("morgan")("combined", { stream: winston.stream }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//Routes
app.use('/api/auth', auth);
app.use('/api/user', user);
app.use('/api/common', common);
app.use('/api/admin', admin);
app.use('/api/provider', provider);

app.use(function(err, req, res, next) {
    console.log(err)
    return res.status(500).send({ error: err });
});

app.use("*", (req,res)=> {
    res.status(404).json("The route you requested has not been found");
});

app.listen(serverPortConfiguration.port,serverPortConfiguration.host,()=> { 
    console.log(`%s Yoloj running on ${serverPortConfiguration.port}`, chalk.green('✓')) 
});
