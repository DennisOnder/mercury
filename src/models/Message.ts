// tslint:disable:no-console
// tslint:disable:quotemark

// Imports
import mongoose = require('mongoose');
import IMessage = require('../interfaces/IMessage');

interface IMessageModel extends IMessage, mongoose.Document { }

const messageSchema = new mongoose.Schema({
    message: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    }
});

const Message = mongoose.model<IMessageModel>('Message', messageSchema);

export = Message;
