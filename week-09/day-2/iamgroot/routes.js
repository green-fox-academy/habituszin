const express = require('express');
const app = express();

let iAmGroot = 'I am Groot!';

let cargo = {
  caliber25: 0,
  caliber30: 0,
  caliber50: 0,
  shipstatus: 'empty',
  ready: false
};

function shipChecker(){
  let totalBullet = cargo.caliber25 + cargo.caliber30 + cargo.caliber50;

  if (totalBullet == 0) {
    cargo.ready = false
    cargo.shipstatus = 'empty'
  } else if (totalBullet > 0 && totalBullet < 12500) {
    cargo.ready = false
    cargo.shipstatus = `${Math.floor(totalBullet / 12500 * 100)}%`
  } else if (totalBullet > 12500 ) {
    cargo.ready = true
    cargo.shipstatus = 'overloaded'
  } else if (totalBullet == 12500) {
    cargo.shipstatus = '100%'
    cargo.ready = true
  }  
}

app.get('/groot', (req, res) => {
  let message = req.query.message;
  if (!message || message == '') {
    res.status(400).json({ 'error': iAmGroot })
    return
  }
  res.status(200).json({ 'message': message, 'translate': iAmGroot })
});

app.get('/yondu', (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  let speed = distance / time;
  if (time <= 0) {
    res.status(400).json({ 'error': 'teleport' })
    return
  }
  if (!distance || distance == NaN || !time || time == NaN) {
    res.status(400).json({ 'error': 'PLsss, be pretty' })
    return
  }
  res.status(200).json({ "distance": distance, "time": time, "speed": speed })
})

app.get('/rocket', (req, res) => {
  res.status(200).json(cargo)
})

app.get('/rocket/fill', (req, res) => {
  let caliber = 'caliber' + req.query.caliber.split('.')[1];
  let amount = Number(req.query.amount);

  Object.keys(cargo).forEach((element) => {
    if (element == caliber) {
      cargo[caliber] += amount 
    }
  })

  shipChecker();
  res.status(200).json({"caliber": req.query.caliber, "amount": amount, "shipstatus": cargo.shipstatus, "ready": cargo.ready})
})


module.exports = app;