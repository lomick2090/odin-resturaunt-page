export function createAboutUs(content) {

    let aboutUsDiv = document.createElement('div');
    aboutUsDiv.className = 'aboutUsDiv'

    let aboutDiv = document.createElement('div');
    aboutDiv.className = 'aboutDiv';

    let aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'Who Are We?';
    aboutDiv.appendChild(aboutTitle);
   

    let aboutContent = document.createElement('div');
    aboutContent.textContent = `Bella's Bistro is the best Italian fine dining establishment you can find in Putnam, CT.
    Every item on the menu has been carefully crafted by Albert Grandburger, the owner and 
    head chef of Bella's Bistro. With a master's in fine cuisine from Italy's top cooking 
    school and 20 years of kitchen cooking experience, Albert has brought every thing he's 
    learned together for this high quality experience.`
    aboutDiv.appendChild(aboutContent);

    let hoursDiv = document.createElement('ul');
    hoursDiv.className = 'hoursDiv';
    let hoursTitle = document.createElement('h2');
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


    let teamDiv = document.createElement('div');
    teamDiv.className = 'teamDiv';
    let teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Meet Our Team:'
    teamDiv.appendChild(teamTitle);
    let teamCards = document.createElement('div');
    teamCards.className = 'teamCards';

    for (let i=1; i<=9; i++) {
        let newTeamCard = document.createElement('div');
        newTeamCard.id = i;
        let newTeamImg = document.createElement('img');
        newTeamImg.src = `./${i}.jpg`;
        let newTeamAbout = document.createElement('div');
        newTeamCard.appendChild(newTeamImg);
        newTeamCard.appendChild(newTeamAbout);
        teamCards.appendChild(newTeamCard);
    }

    teamDiv.appendChild(teamCards);

    



    aboutUsDiv.appendChild(aboutDiv);
    aboutUsDiv.appendChild(hoursDiv);
    aboutUsDiv.appendChild(teamDiv);
    content.appendChild(aboutUsDiv); 
}