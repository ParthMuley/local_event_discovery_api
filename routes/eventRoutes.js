const express= require('express');
const{addEvent, getEvents, getEventById}=require('../controllers/eventControllers');
const{protect}=require('../middlewares/authMiddlewares'); 

const router= express.Router();

router.get('/',getEvents);
router.get('/:id',getEventById);

router.post('/add',protect,addEvent);

module.exports = router;