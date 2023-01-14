const moongose = require("mongoose");
const mongooseDelete = require("mongoose-delete")



const UserScheme = new moongose.Schema(
    {
        name:{
            type:String,
        },
        age:{
            type:Number,
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            select: false
        },
        role:{
            type:["user", "admin"],
            default:"user"
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

UserScheme.plugin(mongooseDelete, {overrideMethods: 'all'})
module.exports = moongose.model("users", UserScheme)