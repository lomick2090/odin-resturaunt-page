export function createLive(content) {

    let liveDiv = document.createElement('div');
    liveDiv.className = 'liveDiv';
    content.appendChild(liveDiv);

    let liveAbout = document.createElement('div');
    liveAbout.className = 'liveAbout';
    liveAbout.textContent = `Every Friday and Saturday in our bar we host live musicians 
        playing from 9pm to 2am in our bar area. In addition, we sometimes host 
        live performances Sundays in the summer on our patio, or on occasion in our main 
        dining room. Our customer's have an eclectic music taste and so do our performances! 
        From jazz and classical music to electronic dance to british rock and roll we have a 
        bit of it all.`;

    liveDiv.appendChild(liveAbout);

    let upcomingShows = document.createElement('ul');
    upcomingShows.className = 'upcomingShows';

    let li1 = document.createElement('li');
    li1.textContent = `Friday, Dec 17th 9pm - 2am: Guitarist, Rod Mullen`;
    let li2 = document.createElement('li');
    li2.textContent = `Saturday, Dec 18th 9pm - 2am: Franklin Peters and Friends (Jazz Quartet)`;

    upcomingShows.appendChild(li1);
    upcomingShows.appendChild(li2);

    liveDiv.appendChild(upcomingShows);
}
