import functions = require("firebase-functions");
// const { google } = require("googleapis");
import admin = require("firebase-admin");

admin.initializeApp();

// module.exports = { functions, google, admin };

export {admin, functions};
