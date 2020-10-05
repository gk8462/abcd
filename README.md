# Yoloj Platform

## Running

### Backend 

- Make sure that you have an instance of MongoDb Running
- All configurations are written at `/Config` folder in `/backend`.
- User logs are captured using `winston` in `/logs` folder.
- Authentication and API security is managed by `JWT` tokens.
- Before starting your server instance, run following commands to dump data to MongoDB

```mongoimport --db poc --collection countries --file ~/infi/accelerate-POC-portal/backEnd/countries.json --jsonArray```<br/>
```mongoimport --db poc --collection businesstypes --file C:\Users\pc\Desktop\acc\accelerate-POC-portal/backEnd/businessTypes.json --jsonArray```<br />
```mongoimport --db poc --collection services --file C:\Users\pc\Desktop\acc\accelerate-POC-portal/backEnd/financialServices.json --jsonArray```


- Start your Db instance by `npm start` or `node app.js` or using `pm2`
- PM2 configurations are written in `run.sh` file.

### Frontend

- Start your application by `npm start` in your terminal.
- The server will start at `localhost:3000`

- If you are getting proxy warnings from the React dev server. Please remove `proxy` from the `package.json`