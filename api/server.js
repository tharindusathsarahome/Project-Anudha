const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Mailjet = require('node-mailjet');

const app = express();
const PORT = process.env.PORT || 3001;

const mailjet = new Mailjet({
    apiKey: "32b021f0216bf2df4d14e0974a2324a7",
    apiSecret: "a6910308390e30d8d4426dd9cf3ab2b2"
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    mailjet.post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "anudha@rungel.net",
                        "Name": "Anudha"
                    },
                    "To": [
                        {
                            "Email": email,
                            "Name": "Subscriber"
                        }
                    ],
                    "Subject": "Welcome to DEV@Deakin!",
                    "TextPart": "Thank you for subscribing to our daily insider.",
                    "HTMLPart": "<strong>Thank you for subscribing to our daily insider.</strong>",
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
        .then((result) => {
            // console.log(result);
            res.status(200).send('Welcome email sent successfully!');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending welcome email');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
