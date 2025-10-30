const textarea = document.getElementById("tweet-input");
const counter = document.createElement("p");
counter.id = "counter";
counter.textContent = "0 / 140";
document.querySelector(".tweet-box").append(counter);

textarea.addEventListener("input", () => {
  counter.textContent = `${textarea.value.length} / 140`;
  counter.style.color = textarea.value.length > 140 ? "red" : "black";
});

btn.addEventListener("click", () => {
  const text = textarea.value.trim();
  if (text && text.length <= 140) {
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
    textarea.value = "";
    counter.textContent = "0 / 140";

    div.querySelector(".like").addEventListener("click", (e) => {
      e.target.classList.toggle("liked");
    });

    div.querySelector(".delete").addEventListener("click", () => div.remove());
  } else {
    alert("Tweet must be between 1 and 140 characters!");
  }
});
