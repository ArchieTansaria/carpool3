const express = require("express");
const app = express();
const PORT  = 5001;



app.get('/' , (req , res) => {
  res.send("app is connected")
})





app.listen(PORT , console.log(`app is listening on PORT ${PORT}`))