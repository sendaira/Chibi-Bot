const Discord = require("chibi-bot.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("SuperSecretBotTokenHere");

// This will create the webhook with the name "Example Webhook" and an example avatar.
message.channel.createWebhook("Ruling Chibi", "https://i.pinimg.com/originals/e4/46/0d/e4460d4eab8b35ffc1d8e5e336d0f64d.png")
// This will actually set the webhooks avatar, as mentioned at the start of the guide.
.then(webhook => webhook.edit("Ruling Chibi", "https://i.pinimg.com/originals/e4/46/0d/e4460d4eab8b35ffc1d8e5e336d0f64d.png")
// This will get the bot to DM you the webhook, if you use this in a selfbot,
// change it to a console.log as you cannot DM yourself
.then(wb => message.author.send(`Here is your webhook https://discordapp.com/api/webhooks/371418792745762816/qhJz_z5ek8_LCO5yPGjsOHAcEfNlKwPb_G9yUwWC8o0SS4XXIUVKMrkzqb4Bm6yntaXy/${wb.id}/${wb.token}`)).catch(console.error))

let prefix = "~";
client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "createHook")) {
    message.channel.createWebhook("Chibi Ruler", "https://i.imgur.com/p2qNFag.png")
      .then(webhook => webhook.edit("Chibi Ruler", "https://i.imgur.com/p2qNFag.png")
        .then(wb => message.author.send(`Here is your webhook https://discordapp.com/api/webhooks/371418792745762816/qhJz_z5ek8_LCO5yPGjsOHAcEfNlKwPb_G9yUwWC8o0SS4XXIUVKMrkzqb4Bm6yntaXy/${wb.id}/${wb.token}`))
        .catch(console.error))
      .catch(console.error);
  }
});

const nameAvatar = args.join(" ");
const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg)/gi;
if (!linkCheck.test(nameAvatar)) return message.reply("https://i.pinimg.com/originals/e4/46/0d/e4460d4eab8b35ffc1d8e5e336d0f64d.png");
const avatar = nameAvatar.match(linkCheck)[0];
const name = nameAvatar.replace(linkCheck, "");
message.channel.createWebhook(name, avatar)
  .then(webhook => webhook.edit(name, avatar)
    .catch(error => console.log(error)))
  .then(wb => message.author.send(`Here is your webhook https://discordapp.com/api/webhooks/371418792745762816/qhJz_z5ek8_LCO5yPGjsOHAcEfNlKwPb_G9yUwWC8o0SS4XXIUVKMrkzqb4Bm6yntaXy/${wb.id}/${wb.token}\n\nPlease keep this safe, as you could be exploited.`)
    .catch(error => console.log(error)))
  .catch(error => console.log(error));