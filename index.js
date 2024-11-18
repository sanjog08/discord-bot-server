require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');

// Create a new Discord client instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

// Your bot token (replace with your bot token)
const TOKEN = process.env.DISCORD_TOKEN;
// const TOKEN = require('./token');

// Event: Bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Event: Respond to messages
client.on('messageCreate', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;
    
    // Add more commands as needed
    if (message.content === 'name some projects made by him' || 
        message.content === 'what are the projects made by him?') {
        message.channel.send('Sanjog made many projects using Flutter, Node.js, Express.js, MongoDB, even this DISCORD-BOT is also a project made by him to talk to people on his behalf other projects such as Market Trail App, Real Time Stock Price, Student Registration App and many. Ask about any project and I will give you it\'s discription.');
    }

    if (message.content === 'what are the programming languages known by him?' || 
        message.content === 'programming languages known by Sanjog?') {
        message.channel.send('There are various languages and technologies known by him, they are --> C++, Node.js, Express.js, MongoDB, Flutter, DBMS, WebDevelopment, Dart, Java, Python, Numpy, Pandas, Tensorflow and more others.');
    }

    if (message.content === 'favorite colour of Sanjog?' || 
        message.content === 'what is the favorite colour of Sanjog?') {
        message.channel.send('He loves the colour Blue the most.');
    }
    
    if (message.content === 'what Sanjog is doing?' || 
        message.content === 'what he is doing?') {
        message.channel.send('He is persuing his Engineering from IET DAVV Indore in Computer Science.');
    }
    
    if (message.content === 'where does Sanjog lives?' ||
        message.content === 'Sanjog lives' || 
        message.content === 'where does he lives' ||
        message.content === 'Sanjog where do you live?') {
        message.channel.send('He lives in the Barwaha from Madhaya Pradesh.');
    }
    
    if (message.content === 'what is the gender of Sanjog?' || 
        message.content === 'what is his gender?') {
        message.channel.send('Male!');
    }
    
    if (message.content === 'motivate' || 
        message.content === 'motivate me') {
        message.channel.send('"The only way to do great work is to love what you do.” - Steve Jobs');
    }
    
    if (message.content === 'hello' || 
        message.content === 'hi' || 
        message.content === 'hii' ||
        message.content === 'hey') {
        message.channel.send(`Hello, ${message.author.username}! 👋`);
    }

    if (message.content === 'ping') {
        message.channel.send('Pong! 🏓');
    }
});

// Login to Discord with your bot's token
client.login(TOKEN);