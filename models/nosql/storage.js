const moongose = require("mongoose");
const mongooseDelete = require("mongoose-delete")

const StorageScheme = new moongose.Schema(
    {
        url:{
            type:String,
        },
        filename:{
            type:String,
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

StorageScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = moongose.model("storages", StorageScheme)