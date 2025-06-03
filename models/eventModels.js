const mongoose=require ('mongoose');

const eventSchema=new mongoose.Schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    date:{type:Date,required:true},
    description:{type:String},
    category:{type:String},
    createdBy:{type:mongoose.Schema.Types.ObjectId, ref: 'User'},
});

module.exports=mongoose.model('Event', eventSchema);