const express = require('express');
const qrcode = require('qrcode-terminal');
const generatePayload = require('promptpay-qr');
const prompt = require('prompt-sync')();

const app = express();

app.get('/', (req, res) => {
  const mobileNumber = prompt('What is your mobile phone number (xxx-xxx-xxxx)? ');
  const amount = +prompt('How much is the meal? ');
  const numberOfPeople = +prompt('How many people? ');
  const amountPerPerson = amount / numberOfPeople;
  const payload = generatePayload(mobileNumber, { amount: amountPerPerson });
  qrcode.generate(payload);
  res.send('QR code generated successfully!');
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
