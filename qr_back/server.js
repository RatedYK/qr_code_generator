const express = require('express');
const app = express();
const PORT = 8000;
const { exec } = require('child_process');
const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}));

app.use(express.static(__dirname + '/public'));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/qrcode', (req, res) => {
  try {
    const {url, size} = req.body


    const argumentsStr = `"${url}" ${size}`
    exec(`./scripts/qr_gen_script.py ${argumentsStr}`, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error generating QR code');
        return;
      }
      
      res.sendFile(`${__dirname}/public/qr_code.png`, (error) => {
        if (error) {
          console.error(error);
        }

        // Delete the file after sending it as a response
        exec(`rm ${__dirname}/public/qr_code.png`, (error, stdout, stderr) => {
          if (error) {
            console.error(error);
          }
        });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating QR code');
  }
});
