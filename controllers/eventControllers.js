const Event=require('../models/eventModels');

//Add new event
const addEvent=async(req,res)=>{
    try{
        const{name,location,date,description,category }=req.body;
        const newEvent=new Event({
            name,
            location,
            date,
            description,
            category,
            createdBy:req.user.id,
        });

        const savedEvent=await newEvent.save();
        res.status(201).json(savedEvent);
    }catch (error){
        res.status(500).json({message:"Server error"});
    }
};

const getEvents=async(req,res)=>{
    try{
        const events=await Event.find();
        res.json(events);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

const getEventById=async(req,res)=>{
    try{
        const event=await event.findById(req.params.id);
        if(!event){
            return res.status(404).json({message:"Event not found"});
        }
        res.json(event);
    }catch(error){
        res.status(500).json({message:"Server error"});
    }
};

module.exports={addEvent, getEvents, getEventById};