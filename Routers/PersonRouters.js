let express  = require('express')
let TodoModel  =  require("../modules/todoListSchema");
let router  =  express.Router();


router.post("/", async(req, res) => {
    try {
          let todo =  new TodoModel(req.body);
          let response  = await todo.save();
          console.log("Todo has been Saved!!" , response);
          res.status(200).json(response);
    } catch (error) {
          console.log(error);
          res.status(500).json({error: error.mesasge});    
    }
  });
  router.get("/", async(req, res) => {
    try {
      let todos =  await TodoModel.find()
          res.status(200).json({todos});
    } catch (error) {
          console.log(error);
          res.status(500).json({error: error.mesasge});    
    }
  });

  module.exports = router 