// Require the necessary discord.js classes
const { Client, Intents,Collection } = require('discord.js');
const { token,prefix } = require('./config.json');

// Create a new client instance
const client = new Client({ intents:  [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MESSAGES] });


//create the data structure
/*let i=0;
let sources=["https://www.openclassrooms.com","https://www.hackerearth.com","https://www.hackerrank.com","https://www.codewars.com","https://www.codechef.com","https://leetcode.com","https://challenges.reply.com"];
// When the client is ready, run this code (only once)*/

client.commands=new Collection();
client.event=new Collection();
['commands','events'].forEach(handler=>{
    require(`./handlers/${handler}`)(client);
})


/*client.on('messageCreate', message => {
    
	if(message.content===prefix+"platform"){
        message.reply(sources[i]);
        i++;
        if(i>6){i=0;}
    }
    
});
client.on('messageCreate', message => {
    
	if(message.content===prefix+"alarm"){
        client.commands.get('alarm').run(message,args);
    }
    
});*/
// Login to Discord with your client's token

client.login(token);