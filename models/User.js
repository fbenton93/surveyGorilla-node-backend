const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
})

// The values in the keys of this object should only be data class types, like:
// Number, String, Boolean, etc.

mongoose.model('users', userSchema)

// The first argument is the name of the collection as we want it represented
// in the database. The second argument is the schema we dessigned for that collection
