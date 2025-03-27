import express from "express";
const app = express();
const port = 3000; //specifiying the port in the express server 

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
