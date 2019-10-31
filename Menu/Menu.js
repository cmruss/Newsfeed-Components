/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector('.header');

header.appendChild(createMenu(menuItems));

function createMenu(array) {

    const menu = document.createElement('div');
    const menuList = document.createElement('ul');
    for (var i in array) {
        var listItem = document.createElement('li');
        listItem.id = array[i];
        listItem.innerHTML = array[i];
        menuList.appendChild(listItem);
    }

    menu.appendChild(menuList);


    menu.classList.add('menu');

    menu.style.opacity = '0';
    menu.style.visibility = 'hidden';

    const menuButton = document.querySelector('.menu-button');


    var fade = function(item) {
        (function reveal(val) {
            item.style.opacity = val;
            if (val < 1) setTimeout(reveal, 1, val + 0.02);
        })(0);
    }

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
        menu.style.opacity = '1';
        fade(menu);
        menu.style.visibility = 'visible';

    });

    return menu;
};