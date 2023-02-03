const listElem = document.querySelectorAll(".item");
console.log(`Number of categories: ${listElem.length}`);

listElem.forEach((element) => {
console.log("Category:", element.querySelector("h2").textContent);
console.log("Elements:", element.querySelectorAll("li").length)
})