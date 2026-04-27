const express = require("express");
const app = express();

//Common global user data (In memory database)
const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

let allKidneys = users[0].kidneys;

//Get method
app.get("/", (req, res) => {
  const johnKidneys = allKidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = johnKidneys.filter(
    (item) => item.healthy === true,
  ).length;
  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.use(express.json()); // so that body can sen post request in json

//Post method
// whenever throught postman body is sent inside isHealthy is sent a healthy kidney is added
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  allKidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done !",
  });
});

//Put request we have to change all kidneys to healthy using put method
app.put("/", (req, res) => {
  if (!allKidneys.healthy === false) {
    allKidneys.forEach((a) => {
      return (a.healthy = true);
    });
    res.json({});
  } else {
    res.status(411).json({msg:"Already kidney is healthy"})
  }
});

//Delete method we have to delete all unhealthy kidneys
app.delete("/", (req, res) => {
  //adding validations
  if (isThereUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < allKidneys.length; i++) {
      if (allKidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    allKidneys = newKidneys;
    res.json({ msg: "Done!" });
  } else {
    res.status(411).json({ msg: "You have no unhealthy kidneys" });
  }
});

function isThereUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < allKidneys.length; i++) {
    if (!allKidneys[i].healthy) {
      atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney;
}

app.listen(3000);
