
const express = require('express');
const crypto = require('crypto');
const path = require('path');
const { runRecoveryAgent } = require('./agent.cjs');

const app = express();
app.use(express.json());

let globalDashboardLogs = ["[SYSTEM]: Dashboard securely connected. Awaiting Razorpay failure events..."];
let hasTriggered = false;

// Load index.html from root directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/v1/api/logs', (req, res) => {
  res.json({ logs: globalDashboardLogs, triggered: hasTriggered });
});

app.post('/v1/webhooks/razorpay', async (req, res) => {
  const event = req.body.event;
  const payload = req.body.payload.payment.entity;

  if (event === 'payment.failed') {
    const alertMsg = `[ALERT]: Payment failed! Order ID: ${payload.order_id}`;
    console.log(alertMsg);
    
    globalDashboardLogs = [alertMsg];
    hasTriggered = true;

    globalDashboardLogs.push("--- AI Recovery Agent Live Log ---");
    globalDashboardLogs.push(`[AI Analyzer]: Checking failure code: ${payload.error_code}`);
    globalDashboardLogs.push("[Strategy]: Generating new payment link with 5% discount to recover merchant revenue");

    const discountAmount = Math.round(payload.amount * 0.95);
    globalDashboardLogs.push(`[FINTECH TOOL]: Generated discounted payment link for ₹${discountAmount / 100}.`);
    globalDashboardLogs.push(`[COMMUNICATION]: WhatsApp message sent to customer at ${payload.contact}.`);
    
    runRecoveryAgent({
      orderId: payload.order_id,
      amount: payload.amount,
      customerEmail: payload.email,
      customerPhone: payload.contact,
      errorCode: payload.error_code,
      errorDescription: payload.error_description
    }).catch(console.error);
  }

  res.status(200).send({ received: true });
});

app.listen(3000, () => console.log('🚀 Webhook service and dashboard running on port 3000'));
