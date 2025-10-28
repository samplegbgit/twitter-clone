const btn = document.getElementById("tweet-btn");
const feed = document.getElementById("feed");

btn.addEventListener("click", () => {
  const input = document.getElementById("tweet-input");
  const text = input.value.trim();
  if (text) {
    const div = document.createElement("div");
    div.className = "tweet";
    div.textContent = text;
    feed.prepend(div);
    input.value = "";
  }
});
