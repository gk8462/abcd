/**
* @fileoverview JWT secrets 
*/
const secret = "winter is coming";
const signOptions = {
  issuer: "poc",
  subject: "JWT",
  audience: "poc-users",
  expiresIn: "12h",
  algorithm: "RS256"
};

var verifyOptions = {
  issuer: "poc",
  subject: "JWT",
  audience: "poc-users",
  expiresIn: "12h",
  algorithm: ["RS256"]
 };

module.exports = {
  secret: secret,
  signOptions: signOptions,
  verifyOptions: verifyOptions
}