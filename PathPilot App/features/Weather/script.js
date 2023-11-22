const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message.toLowerCase();

    let botMessage;

    if (userMessage.includes('weather')) {
        // Extract location from the user's message (you may need a more sophisticated method)
        const location = userMessage.split('weather')[1].trim();

        // Use OpenWeatherMap API to get weather information
        const apiKey = '80e710b73359355af2a0071361f174fb';
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        try {
            const response = await axios.get(weatherURL);
            const weatherData = response.data;
            
            // Extract relevant weather information
            const description = weatherData.weather[0].description;
            const temperature = weatherData.main.temp;
            
            botMessage = `The weather in ${location} is ${description} with a temperature of ${temperature}°C.`;
        } catch (error) {
            console.error(error);
            botMessage = 'Sorry, I couldn\'t retrieve the weather information.';
        }
    } else {
        // Handle other user messages
        // ...

        botMessage = 'I am a simple assistant and cannot understand that request.';
    }

    res.json({ message: botMessage });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
