module.exports={
    name:"alarm",
    execute(client,message,args){
        const discord = require("discord.js")
        const ms = require("ms")
        
          
          
          let time = args[0]
          if(!time)return message.reply("Please set time for your next alarm")
          if(ms(time) > ms("1d"))return message.reply("you can't have a one day alarm")
          
          
          let reason = args.slice(1).join(' ')
          if(!reason)return message.reply("please introduce the challenge's name")
          
          const embed = new discord.MessageEmbed()
          .setAuthor({
            name:  `${message.author.tag} has set an alarm`,
             iconURL:message.author.displayAvatarURL(),
        })
          .setColor("RANDOM")
          .setDescription(`Time: \`${time}\`\nChallenge: \`${reason}\``)
          .setTimestamp()
          message.channel.send({embeds:[embed]})
          
          setTimeout(() => {
            const embed = new discord.MessageEmbed()
            .setAuthor({
                name:  `${message.author.tag} Your time has been ended `,
                 iconURL:message.author.displayAvatarURL(),
            })
          .setColor("RANDOM")
          .setDescription(`Time: \`${time}\`\nChallenge: \`${reason}\`\nServer: \`${message.guild.name}\``)
          .setTimestamp()
          message.author.send({embeds:[embed]})
          }, ms(time))
          
        }
}
