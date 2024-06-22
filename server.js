// server.js
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-sms', async (req, res) => {
  const { sender, mobile, content } = req.body;

  try {
    const response = await axios.post('https://api.releans.com/v2/message', 
      {
        sender,
        mobile,
        content
      },
      {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ImQ4NzE4MGI2LTFkMmQtNGUzMS1hYjQ0LTQxOTczMmNlYWY0YiIsImlhdCI6MTcxNzQ0ODc4OSwiaXNzIjoxOTIzNn0.k0ksA-WDTwJQx5K74zDtxjwxykhgEB7fcRJdIEQ7fOE`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error('Error sending SMS:', error);
    res.status(500).send('Failed to send SMS');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
