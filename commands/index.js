const commands = require("./commands");

module.exports = {
    ...commands.bot_commands,
    ...commands.text_commands,
    load: commands.update.loadCommands,
    save: commands.update.saveCommands
};