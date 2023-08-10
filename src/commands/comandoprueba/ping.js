module.exports={
    name: 'ping',
    description: 'indica tu caga de ping',


    callback: (client, interaction)=>{
        interaction.reply(`Tu caga de ping es ${client.ws.ping}ms`);
    },
};