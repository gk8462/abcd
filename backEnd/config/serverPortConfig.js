/**
* @fileoverview port configuration
*/

const port = 4000;
const host = process.env.HOST;
const sessionSecret = "AeaZ/hzLJqpvkiyjKQRnibGCdbqZJPNw+S9bMh0He4RN788wPsLJAAImvWJhcepVouN7AWI//EXC5/TUowMFMqBevFA4A6YOO+BD9y/38bCz7hzJbgISFNHE+x5RMdz7I4Eo/GOMdbMKFgtzRK473Pa12iRA9NLPCNpsWRhBOkQ=";
const mongoDBPort = process.env.DBPORT;
const mongoHost = process.env.MONGO_HOST;
const mongoDBName = process.env.MONGO_DB_NAME;

module.exports = {
  port,
  host,
  sessionSecret,
  mongoDBPort,
  mongoHost,
  mongoDBName
}