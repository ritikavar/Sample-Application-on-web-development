const mongoose = require("mongoose");

const BlogSchema =mongoose.Schema({
	title:String,
	text: String,
	category: String

});

module.exports = Blog = mongoose.model('blog', BlogSchema);

