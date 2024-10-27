import mongoose from 'mongoose';

// Define the schema for the user model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Create the model using the schema
const UserModel = mongoose.model('User', UserSchema);

// Export the model
export default UserModel;
