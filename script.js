async function data() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts");
  const y = await x.json();
  const grid = document.querySelector(".ok");
  console.log(y);

  y.forEach((posts) => {
    console.log(posts);
    const div = document.createElement("div");
    div.innerHTML = `<h1>ID:_${posts.id}</h1> <p>Title:${posts.title}</p> <p>Body:${posts.body}</p>`;
    grid.appendChild(div);
    div.style.backgroundColor = "rgba(224, 214, 204, 0.8)";
    div.style.border = "5px solid black";
    div.style.padding = "20px";
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(3,1fr)";
    grid.style.gap = "10px";
  });
}
 setTimeout(() => {
    function done() {
    data();
    }
    done();
}, 5000);
