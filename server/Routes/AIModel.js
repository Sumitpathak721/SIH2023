const express = require("express");

const router = express.Router();

const { execSync } = require('child_process');

// Input data (example: a JSON string)
// const inputData = JSON.stringify([]); // Replace with your input data

// Run the Python script and capture its output
// const command = `python tensorflow_model.py '${inputData}'`;
router.get("/",(req,res)=>{
    const command = `python init.py`;
    const output = execSync(command).toString();
    console.log("output",output);
    res.send("ok");
})
// Parse the output (assuming it's a JSON string)
// const predictions = JSON.parse(output);

// console.log('Predictions:', predictions);


module.exports = router;