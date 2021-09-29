const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema (
    {
        name: String,
        trim: true,
        required: 'Enter name for transaction'
    },
    {
        value: {
            type: Number,
            required: 'Enter an Amount'
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
);

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;