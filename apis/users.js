const express = require('express');
const router = express.Router();
const users = require('../Users.js');
const uuid = require('uuid');

//get method
router.get('/',(req,res)=>{
    res.json(users);
});
router.get('/:id',(req,res)=>{
//get single member
const found = users.some(user=>user.id === parseInt(req.params.id));
if(found){
       res.json(users.filter(user=>user.id === parseInt(req.params.id)));
}else{
   res.status(400).json({msg:'file not found'});
}});

//post method
router.post('/',(req,res)=>{
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status:'active'
    };

    if(!newUser.name || !newUser.email){
        res.status(400).json({mg:'fill both the entries'});
    }
    users.push(newUser);
    res.json(users);

})


//put method
router.put('/:id',(req,res)=>{
    const found = users.some(user=>user.id === parseInt(req.params.id));
    if(found){
         const update = req.body;
        res.json(users.forEach(user=>{
            user.id===parseInt(req.params.id);
            user.name = update.name?update.name:user.name;
            user.email = update.email?update.email:user.email;
            res.json({mgs:'member updated', user});
        }))
    }else{
       res.status(400).json({msg:'file not found'});
    }});







module.exports = router;