/**
 * Find a way to
 * Store/Restore commands inbetween sessions;
 * Manage commands using only Twitch Chat
 *      !addcommand <command> <body>
 *      !delcommand <command>
 *      !editcommand <command>
 */

const translations = {
    caller: {
        regex:  /$(\d+)/,
        eval:   ()=>"context['display-name']"
    }
}
// {
//     'badge-info': null,
//     badges: { moderator: '1' },
//     'client-nonce': '456e5c0def1716bac61522b82850bbac',
//     color: '#8A2BE2',
//     'display-name': 'RationalLies',
//     emotes: null,
//     flags: null,
//     id: '0fa9abb3-f6ca-4e42-88a5-3a41afe2ef1f',
//     mod: true,
//     'room-id': '63668865',
//     'tmi-sent-ts': '1618374658968',
//     turbo: false,
//     'user-id': '70824680',
//     'user-type': 'mod',
//     'emotes-raw': null,
//     'badge-info-raw': null,
//     'badges-raw': 'moderator/1',
//     username: 'rationallies',
//     'message-type': 'chat'
//   }

function replace(context, string) {
    return string;
}