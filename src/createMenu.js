export function createMenu(content) {
    let menuDiv = document.createElement('div');
    menuDiv.className = 'menuDiv';

    let foodMenu = document.createElement('div');
    foodMenu.className = 'foodMenu';

    let menuTitle = document.createElement('h1');
    menuTitle.textContent = 'Our Menu:';
    

    for (let i=1; i <= 15; i++) {
        let menuItem = document.createElement('div');
        menuItem.className = 'menuItem';
        menuItem.id = `item${i}`;


        let menuImg = document.createElement('img');
        menuImg.src = `./item${i}.jpg`;
        let menuDescription = document.createElement('p');
        menuItem.appendChild(menuImg);
        menuItem.appendChild(menuDescription);
        foodMenu.appendChild(menuItem);
    }

    menuDiv.appendChild(menuTitle);
    menuDiv.appendChild(foodMenu);
    content.appendChild(menuDiv);

}