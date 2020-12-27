const express = require('express');
const app = express();


app.use("/users/",require("./routes/userRoute"));

app.listen(3002,()=>{
    console.log('Listening on port 3002');
})