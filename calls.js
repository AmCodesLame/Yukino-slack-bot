const axios = require("axios");

async function getMeme() {
  let randInt = Math.floor(Math.random() * 26);

  const res1 = await axios.request({
    method: "get",
    url: "https://www.reddit.com/r/Animemes/top/.json",
  });

  url = res1.data.data.children[randInt].data.url;
  return url;
}
async function getWaifu() {
  let randInt = Math.floor(Math.random() * 26);

  const res1 = await axios.request({
    method: "get",
    url: "https://www.reddit.com/r/Animewallpaper/top/.json",
  });

  url = res1.data.data.children[randInt].data.url;
  return url;
}

module.exports = { getMeme, getWaifu };
