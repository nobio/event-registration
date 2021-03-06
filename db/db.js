var db_config = require('./db-conf.json');



/**
 * adding the contains method to the String object
 */
if (!String.prototype.contains) {
    String.prototype.contains = function(arg) {
        return !!~this.indexOf(arg);
    };
}

// Here you can find the schema definition of noodle data.
// The top element always is a 'noodle' which represents an appointment

console.log("init database");


var mongoose = require('mongoose');
var schema = mongoose.Schema;
mongoose.Promise = global.Promise;


// Registration
var EventRegistration = new schema({
    entry_date: { type: Date, required: true, default: Date.now, index: true },
    last_changed: { type: Date, default: Date.now, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, required: true },
    count: { type: Number, required: true }
});
mongoose.model('EventRegistration', EventRegistration);

var mongodb_url = 'mongodb://' + db_config.mlab.user + ':' + db_config.mlab.password + '@' + db_config.mlab.uri;
var monoddb_options = db_config.mlab.options;

console.log('connecting to mongodb on ' + mongodb_url + ' with options ' + JSON.stringify(monoddb_options));
mongoose.connect(mongodb_url, monoddb_options).then(
    () => { console.log("mongodb is ready to use.") },
    err => { console.log("error while connecting mongodb:" + err) }
);
exports.closeConnection = () => {
    mongoose.connection.close(
        () => { console.log("mongodb is closed.") },
        err => { console.log("error while closing connection mongodb:" + err) }
    );
}
