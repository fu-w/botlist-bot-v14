let { ActivityType} = require("discord.js")

module.exports = {

    name: 'ready',
    
	once: true,
	execute(client) {
       console.log(`${client.user.tag} Aktif Oldu!`)
        client.user.setStatus("dnd")
        let activities = [ `furkibu tarafından yapıldı`, `discord.gg/anjudev!` ], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type : ActivityType.Streaming , url : `https://www.twitch.tv/sanctusfurki` }), 22000);

      
    }
}
