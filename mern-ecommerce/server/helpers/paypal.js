const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AX4LQETilufSu2PBcgEUuCWl-kfCH3jL3i53Xw9HnF-SPdO1_3wFO0A2ffDK-7iVA6AnYxa1BVRL2Jzf",
  client_secret: "EHY_C4r3crLWPvv_ORS1G868H8xLWFj4liG8XhCvtpK6dGPaudiux0Rotq9l1D4ofgYaFN1GgOmyD15S",
});

module.exports = paypal;
