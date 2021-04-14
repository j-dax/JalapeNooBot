'use strict';
const fs = require("fs");

function loadCommands() {
    const raw = fs.readFileSync("commands.json");
    return JSON.parse(raw);
}

function saveCommands(commands) {
    console.log(commands);
    const raw = JSON.stringify(commands);
    fs.writeFileSync("./commands.json", raw);
    return raw;
}

function dice() {
    const sides = 6;
    const num = Math.floor(Math.random() * sides) + 1;

    return `You rolled a ${num}`;
}

function scared() {
    return "Good strim monkaS 👍";
}

function ban(args) {
    return `/me bans ${args}`;
}

function _false() {
    return "falsen't";
}

function shoot(from, to) {
    return `${from} shoots ${to}`;
}

const wake = `Young ${self} is ready. https://bit.ly/329SdpS`;

module.exports = {
    bot_commands: {dice, scared, ban, _false, shoot},
    update: {loadCommands, saveCommands},
    text_commands: {wake}
}