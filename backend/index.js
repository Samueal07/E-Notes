const notes=require('./data/notes');
const express=require("express");
const dotenv=require('dotenv');
const app=express();

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`listening on port ${PORT}`));

app.get("/api/notes",(req, res) => {

    res.send(notes);

});



app.get("/api/notes/:id",(req, res) => {

    const note=notes.find((n)=> n._id=== req.params.id);
    res.send(note);

})


