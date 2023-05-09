const axios = require("axios");

interface api {
  data: {
    data: {
      children: [
        {
          data: {
            url: string;
          };
        }
      ];
    };
  };
}

async function getMeme1(): Promise<string> {
  let randInt: number = Math.floor(Math.random() * 25);

  const res1: api = await axios.request({
    method: "get",
    url: "https://www.reddit.com/r/Animemes/top/.json",
  });

  let url = res1.data.data.children[randInt].data.url;
  return url;
}
async function getWaifu1(): Promise<string> {
  let randInt = Math.floor(Math.random() * 25);

  const res1: api = await axios.request({
    method: "get",
    url: "https://www.reddit.com/r/Animewallpaper/top/.json",
  });

  let url = res1.data.data.children[randInt].data.url;
  return url;
}

module.exports = { getMeme1, getWaifu1 };
