const {Client, Events, GatewayIntentBits, EmbedBuilder,SlashCommandBuilder,PermissionsBitField, Permissions} = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on(Events.ClientReady, (x) => {
    console.log("Bot is ready!");
    client.user.setActivity(`Type /help for help`);

    const help = new SlashCommandBuilder()
    .setName ('help')
    .setDescription('This is a help command!');

    const ping = new SlashCommandBuilder()
    .setName ('ping')
    .setDescription('This is a hello command!');
    .addUserOption(Option=>
        Option
        .setName('user')
        .setDescription('The user to say hi to')
        .setRequired(false)
        )


    const bye = new SlashCommandBuilder()
    .setName ('bye')
    .setDescription('This is a bye command!');
    
    client.application.commands.create(help);
    client.application.commands.create(ping);
    client.application.commands.create(pong);
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;
    if(interaction.commandName==='help') {
        interaction.reply('yes?');
    }
    if(interaction.commandName==='ping') {
        const UserOption = interaction.options.getUser('user')
        if(UserOption){
            interaction.reply{`Hello, ${UserOption.toString()}!`}
        }
        else {
            interaction.reply('Hello!');
        }
    }
    if(interaction.commandName==='bye') {
        interaction.reply('ok');
    }
});

client.login(process.env.TOKEN);