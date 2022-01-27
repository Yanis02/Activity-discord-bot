const fs=require('fs');
const ascii = require('ascii-table');

let table= new ascii('commands');
table.setHeading('commands','Load Status');
module.exports=(client)=>{
    fs.readdirSync('./commands').forEach((folder)=>{
        const commandFiles=fs.readdirSync(`./commands/${folder}`).filter(file=>file.endsWith('.js'));
        for(file of commandFiles){
            let command=require(`../commands/${folder}/${file}`);
            if(command.name){
                client.commands.set(command.name,command);
                table.addRow(file,'work');
            }else{
                table.addRow(file,'NOT work');
                continue;
            }
        }
    });
    console.log(table.toString());
}