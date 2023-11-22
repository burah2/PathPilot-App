const express = require('express');
const bodyParser = require('body-parser');
const { SessionsClient } = require('dialogflow');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

// Handle POST requests to /chat
app.post('/chat', async (req, res) => {
    const { message, sessionId } = req.body;

    // Create a new Dialogflow session
    const sessionClient = new SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(
        'fir-page-8a722',
        sessionId
    );

    // Send user message to Dialogflow
    const responses = await sessionClient.detectIntent({
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'en-US',
            },
        },
    });

    // Get the response from Dialogflow
    const result = responses[0].queryResult;
    const botMessage = result.fulfillmentText;

    // Send the bot's response to the frontend
    res.json({ message: botMessage });
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
