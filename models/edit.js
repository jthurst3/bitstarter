var mongoose = require("mongoose");

// create a new edit
var EditSchema = mongoose.Schema({
	user: {
		type: String,
		required: true
	},
    problem: {
	type: String,
	required: true,
    },
    problemName: {
    	type: String,
    	required: true
    },
    oldSection: {
	type: String,
	required: true,
    },
    section: {
	type: String,
	required: true,
    },
    sectionName: {
    	type: String,
    	required: true
    },
    date: {
	type: Date,
	required: true,
    },
	oldText: {
		type: String
	},
	newText: {
		type: String
	}
});


module.exports = mongoose.model('Edit', EditSchema);