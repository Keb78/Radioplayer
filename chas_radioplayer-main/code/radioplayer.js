// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'


const channelList = document.querySelector("#channelconteiner");


async function getRadioPlayer() {
    const response = await fetch("http://api.sr.se/api/v2/channels?format=json&size=100");
    const data = await response.json();
    console.log(data);

    

    data.channels.forEach(channel => {
        const div = document.createElement("div");
        div.style.backgroundColor = `#${channel.color}`;
        div.innerHTML = `<img src="${channel.image}"><h1> ${channel.name} </h1>
       
        <audio src="${channel.liveaudio.url}" controls type="audio/mpeg"></audio> `;
        channelcontainer.appendChild(div);
        
        
    });
    

}

getRadioPlayer();
// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
