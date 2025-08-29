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
    const load = document.querySelector(".op");
    load.style.display = "none";
    const img = document.querySelector(".o");
    img.style.display = "none";
    }
    done();
}, 4000
);


 setTimeout(() => {
    function lo() {
      const img = document.createElement("img");
        img.src = "img/okok.png";
        img.classList.add("o");
        document.body.appendChild(img);
        img.style.width = "100%";
        img.style.maxWidth = "800px";
        img.style.height = "600px";
        img.style.alignContent ="center";
        const text = document.createElement("p");
        text.classList.add("op");
        text.innerHTML = "May WAIT Kar rha hoon";
        document.body.appendChild(text);
        text.style.fontSize = "30px"; 
    text.style.color = "black";
    text.style.fontWeight = "bold";
    text.styele.fontSize ="100px";
    text.style.textDecoration = "underline";}
    lo();
 
}, 1000
);

