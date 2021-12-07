/** Dynamically sets the href attribute of elements of the class 'home_link' to the root. */

let home_links = document.getElementsByClassName("home_link");
console.log(home_links);


for (let i = 0; i < home_links.length; i++) {
    home_links[i].setAttribute('href', '../index.html');
}

console.log(home_links);