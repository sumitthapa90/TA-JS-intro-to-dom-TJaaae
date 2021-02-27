let parentDiv = document.querySelector(".container");

let gotPeople = got.houses.map((e) => e.people).flat();
console.log(gotPeople);

// <!-- <div class="one">
// <div class="box">
//   <div class="img-box">
//     <img src="./IMG_20200614_172845.jpg" alt="" />
//   </div>
//   <h2>Eddard "Ned" Stark</h2>
// </div>
// <p>
//   "Lord of Winterfell - Warden of the North - Hand of the King -
//   Married to Catelyn (Tully) Stark",
// </p>
// <button>Learn More</button>
// </div>

gotPeople.forEach((person) => {
  let one = document.createElement("div");
  one.classList.add("one");
  let box = document.createElement("div");
  box.classList.add("box");
  let imgBox = document.createElement("div");
  imgBox.classList.add("img-box");
  let img = document.createElement("img");
  img.src = person.image;
  let h2 = document.createElement("h2");
  h2.innerText = person.name;
  let p = document.createElement("p");
  p.innerText = person.description;
  let button = document.createElement("button");
  button.innerText = "Learn More";
  imgBox.append(img);
  box.append(imgBox, h2);
  one.append(box, p, button);
      parentDiv.append(one)   
});
