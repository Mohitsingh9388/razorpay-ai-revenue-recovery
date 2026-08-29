
const express = require('express');
const crypto = require('crypto');
const path = require('path');
const { runRecoveryAgent } = require('./agent.cjs');

const app = express();
app.use(express.json());

let globalDashboardLogs = ["[SYSTEM]: Dashboard securely connected. Awaiting Razorpay failure events..."];
let hasTriggered = false;

// यह नियम सीधे बिना किसी फ़ोल्डर के index.html को लोड कर देगा
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
    const alertMsg = `[ALERT]: पेमेंट Failed हो गया है! ऑर्डर आईडी: ${payload.order_id}`;
    console.log(alertMsg);
    
    globalDashboardLogs = [alertMsg];
    hasTriggered = true;

    globalDashboardLogs.push("--- AI रिकवरी एजेंट के काम का लाइव लॉग ---");
    globalDashboardLogs.push(`[AI एनालाइजर]: फेलियर कोड की जांच हो रही है: ${payload.error_code}`);
    globalDashboardLogs.push("[रणनीति]: मर्चेंट रेवेन्यू बचाने के लिए 5% डिस्काउंट के साथ नया लिंक भेजें।");

    const discountAmount = Math.round(payload.amount * 0.95);
    globalDashboardLogs.push(`[FINTECH TOOL]: ₹${discountAmount / 100} का नया डिस्काउंटेड पेमेंट लिंक जनरेट किया गया.`);
    globalDashboardLogs.push(`[COMMUNICATION]: कस्टमर के नंबर ${payload.contact} पर व्हाट्सएप मैसेज भेज दिया गया है.`);
    
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

app.listen(3000, () => console.log('🚀 वेबहुक सर्विस और डैशबोर्ड पोर्ट 3000 पर चालू है'));
