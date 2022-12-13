export function createAboutUs(content) {

    let contentDiv = document.createElement('div');
    contentDiv.className = 'contentDiv'

    let aboutDiv = document.createElement('div');
    aboutDiv.className = 'aboutDiv';
    aboutDiv.textContent = `Bella's Bistro is the best Italian fine dining establishment you can find in Putnam, CT.
    Every item on the menu has been carefully crafted by Albert Grandburger, the owner and 
    head chef of Bella's Bistro. With a master's in fine cuisine from Italy's top cooking 
    school and 20 years of kitchen cooking experience, Albert has brought every thing he's 
    learned together for this high quality experience.`

    let hoursDiv = document.createElement('ul');
    hoursDiv.className = 'hoursDiv';
    let hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours:'
    hoursTitle.style = 'text-align: center; margin-top: 0px;';
    let li1 = document.createElement('li');
    li1.textContent = `Mon -Wed: 10am - 9pm`;
    let li2 = document.createElement('li');
    li2.textContent = 'Thu - Sat: 10am - 2am';
    let li3 = document.createElement('li');
    li3.textContent = 'Sun: 9am - 8pm';
    let li4 = document.createElement('li');
    li4.textContent = 'Kitchen: Closes as 9pm each day';
    let li5 = document.createElement('li');
    li5.textContent = 'Bar: Opens at 4pm and stays open until close';

    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(li1);
    hoursDiv.appendChild(li2);
    hoursDiv.appendChild(li3);
    hoursDiv.appendChild(li4);
    hoursDiv.appendChild(li5);
    



    contentDiv.appendChild(aboutDiv)
    contentDiv.appendChild(hoursDiv)
    content.appendChild(contentDiv); 
}