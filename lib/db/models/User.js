const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: String,

    resetPasswordLink: {
      data: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    // create temp varaible called _password
    this._password = password;

    // generate salt (timestamp)
    // using custom function
    // this.salt refers to salt in schema
    // this.salt = this.makeSalt();

    // generate salt (timestamp)
    // using uuid package
    this.salt = uuidv4();
    // encrypt password
    // this.hashed_password is hassed-password in schema
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });


userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
