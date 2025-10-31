const toggle = document.createElement("button");
toggle.textContent = "🌙 Dark Mode";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
document.body.append(toggle);

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

let tweetCount = 0;
const tweetCounter = document.createElement("div");
tweetCounter.id = "tweet-counter";
tweetCounter.textContent = "Tweets: 0";
tweetCounter.style.textAlign = "center";
tweetCounter.style.fontWeight = "bold";
document.body.prepend(tweetCounter);

btn.addEventListener("click", () => {
  const text = textarea.value.trim();
  if (text && text.length <= 140) {
    tweetCount++;
    tweetCounter.textContent = `Tweets: ${tweetCount}`;
  }
});
