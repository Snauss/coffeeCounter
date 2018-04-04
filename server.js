const express = require ('express');
const app = express();
const PORT = process.env.PORT || 4200;

app.use(express.static(__dirname + '/dist'));
app.listen(PORT,function(){
    console.log("listening on "+PORT);
});
