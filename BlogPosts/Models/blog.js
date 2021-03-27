const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogtitle: {
    type: String,
    required: true,
  },
  blogcategory: {
    type: String,
    required: true,
  },
  blogcontent: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
