/** Dynamically sets the href attribute of elements of the class 'home_link' to the root. */

let home_links = document.getElementsByClassName("home_link");

for (let i = 0; i < home_links.length; i++) {
    home_links[i].setAttribute('href', '../index.html');
}

