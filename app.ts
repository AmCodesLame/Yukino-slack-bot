const { App } = require("@slack/bolt");
let { getMeme1: getMeme, getWaifu1: getWaifu } = require("./calls.ts");

//dotenv config
const dotenv = require("dotenv");

dotenv.config();

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

// Listens to incoming messages
//will only catch msgs starting with "yukino"
interface msg {
  user: object;
}

app.message(
  /^yukino hello/,
  async ({ message, say }: { message: msg; say: Function }) => {
    await say(
      `Hellowo <@${message.user}> san,\n type:'yukino help' for help b-d`
    );
  }
);

app.message(
  /^yukino meme/,
  async ({ message, say }: { message: msg; say: Function }) => {
    const url: string = await getMeme();
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `your funny material, <@${message.user}> senpai`,
          },
        },
        {
          type: "image",
          image_url: `${url}`,
          alt_text: "hehe",
        },
      ],
    });
  }
);
app.message(
  /^yukino waifu/,
  async ({ message, say }: { message: msg; say: Function }) => {
    const url: string = await getWaifu();
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `presenting you today's waifu <@${message.user}> '~'`,
          },
        },
        {
          type: "image",
          image_url: `${url}`,
          alt_text: "kawaii",
        },
      ],
    });
  }
);

app.message(
  /^yukino help/,
  async ({ message, say }: { message: msg; say: Function }) => {
    // say() sends a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `Here are all my commands, <@${message.user}> sama`,
          },
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "make sure to call me by *writing my name first*",
          },
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: ">>meme: get a random anime meme UwU",
          },
        },
        {
          type: "section",
          text: {
            type: "plain_text",
            text: ">>waifu: will show you a random waifu >.<",
          },
        },
      ],
    });
  }
);

(async () => {
  // Start app
  await app.start();

  console.log("yukino chan is up and runnin");
})();
