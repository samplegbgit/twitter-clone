const btn = document.getElementById("tweet-btn");
const feed = document.getElementById("feed");

btn.addEventListener("click", () => {
  const input = document.getElementById("tweet-input");
  const text = input.value.trim();

  if (text) {
    const div = document.createElement("div");
    div.className = "tweet";
    div.innerHTML = `
      <p>${text}</p>
      <div class="actions">
        <button class="like">❤️ Like</button>
        <button class="delete">🗑️ Delete</button>
      </div>
    `;
    feed.prepend(div);
    input.value = "";

    div.querySelector(".like").addEventListener("click", (e) => {
      e.target.classList.toggle("liked");
    });

    div.querySelector(".delete").addEventListener("click", () => {
      div.remove();
    });
  }
});
