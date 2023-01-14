const { default: mongoose } = require("mongoose");
const mongooseDelete = require("mongoose-delete")
const moongose = require("mongoose");

const TracksScheme = new moongose.Schema(
    {
        name:{
            type:String,
        },
        album:{
            type:String,
        },
        cover:{
            type:String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            }
        },
        artist:{
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration:{
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

TracksScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = moongose.model("tracks", TracksScheme)