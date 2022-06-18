let links = [
  [
    "purple",
    "minivan",
    "registration",
    "capacity",
    "capacity",
    "capacity",
    "capacity",
  ],
  ["red", "station wagon", "registration", "capacity"],
  ["red", "station wagon", "registration", "capacity", "capacity"],
  ["red", "station wagon", "registration", "capacity"],
  ["red", "station wagon", "registration", "capacity"],
];

let list = document.querySelector(".menu-col-1");
console.log(list);

let remainingnodes = 14;
let totalnodes = 0;
let linkIndex = 0;

links.forEach((element) => {
  let newNode = document.createElement("h3");
  newNode.appendChild(document.createTextNode("Category"));
  remainingnodes--;
  newNode.classList.add("menu-category");
  list.appendChild(newNode);
  newNode = document.createElement("ul");

  links[linkIndex].forEach((element) => {
    innerlist = newNode.appendChild(document.createElement("li"));
    innerlist.appendChild(document.createTextNode(element));
    remainingnodes--;
  });

  list.appendChild(newNode);
  linkIndex++;
  console.log(links[linkIndex]?.length);
  if (remainingnodes < links[linkIndex]?.length) {
    console.log("in if");
    list = document.querySelector(".menu-col-" + linkIndex);
    console.log(list);
    remainingnodes = 14;
  }
});

/*
li.classList.add("pill-holder");
li.setAttribute("data-role", selectedElements[i].id);
li.appendChild(document.createTextNode(selectedElements[i].value));
li.insertAdjacentHTML(
  "beforeend",
  "<i data-deleterole='false' class='fa fa-times' aria-hidden='true'></i>"
);
let selectedcount = selected.querySelectorAll(".pill-holder");
if (selectedcount.length > 0)
  list.insertBefore(newNode, list.children[list.children.length - 1]);

  
list.insertBefore(li, list.children[list.children.length - 1]);
list = selected.querySelector(".role-options.active");
*/
