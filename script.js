document.getElementById('f1').addEventListener('submit', function(event) {
    event.preventDefault();
    fantasy();
});

document.getElementById('form2').addEventListener('submit', function(event) {
    event.preventDefault();
    action();
});


function fantasy() {
    const name1 = document.getElementById('name').value.trim();
    const gender1 = document.getElementById('gender').value.trim().toLowerCase();
    const adjective1 = document.getElementById('adjective').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim();
    const gender2 = document.getElementById('gender2').value.trim().toLowerCase();
    const adjective2 = document.getElementById('adjective2').value.trim().toLowerCase();
    const place = document.getElementById('place').value.trim();
    const item = document.getElementById('item').value.trim();

    let pronoun1_1, pronoun1_2, pronoun1_3, gender1_noun;
    if (gender1 === 'boy') {
        pronoun1_1 = 'he';
        pronoun1_2 = 'him';
        pronoun1_3 = 'his';
        gender1_noun = 'boy';
    } else if (gender1 === 'girl') {
        pronoun1_1 = 'she';
        pronoun1_2 = 'her';
        pronoun1_3 = 'her';
        gender1_noun = 'girl';
    } else {
        pronoun1_1 = 'they';
        pronoun1_2 = 'them';
        pronoun1_3 = 'their';
        gender1_noun = 'person';
    }

    let pronoun2_1, pronoun2_2, pronoun2_3, gender2_noun;
    if (gender2 === 'boy') {
        pronoun2_1 = 'he';
        pronoun2_2 = 'him';
        pronoun2_3 = 'his';
        gender2_noun = 'boy';
    } else if (gender2 === 'girl') {
        pronoun2_1 = 'she';
        pronoun2_2 = 'her';
        pronoun2_3 = 'her';
        gender2_noun = 'girl';
    } else {
        pronoun2_1 = 'they';
        pronoun2_2 = 'them';
        pronoun2_3 = 'their';
        gender2_noun = 'person';
    }

    const name1Cap = name1.charAt(0).toUpperCase() + name1.slice(1);
    const name2Cap = name2.charAt(0).toUpperCase() + name2.slice(1);
    const placeCap = place.charAt(0).toUpperCase() + place.slice(1);

    const story1 = `${name1Cap} was a very ${adjective1} ${gender1_noun} who loved to explore new places. One day, ${pronoun1_1} decided to visit ${placeCap}. ${pronoun1_1.charAt(0).toUpperCase() + pronoun1_1.slice(1)} saw a bright ${item} at the corner of ${pronoun1_3} eye. Curious, ${pronoun1_1} decided to take a closer look. At ${placeCap}, ${name1Cap} met ${name2Cap}, a ${adjective2} ${gender2_noun}. Together, they discovered that the ${item} was no ordinary object. It held the key to a hidden realm filled with magic and wonder. ${pronoun1_1.charAt(0).toUpperCase() + pronoun1_1.slice(1)} and ${pronoun2_1} embarked on an incredible adventure, discovering new worlds and forging a friendship that would last forever.`;

    document.getElementById('story-1').textContent = story1;
    document.getElementById('story').style.display = 'block';
    document.getElementById('t-story').textContent = `${name1Cap}'s Adventure at ${placeCap}`;
}

function action() {
    const name2 = document.getElementById('name3').value;
    const adjective2 = document.getElementById('adjective3').value;
    const npc2 = document.getElementById('npc3').value;
    const place2 = document.getElementById('place3').value;
    const item2 = document.getElementById('item3').value;
    const treasure2 = document.getElementById('treasure3').value;
    const animal2 = document.getElementById('animal3').value;
    const verb2 = document.getElementById('verb3').value;

    const story2 = `One day, ${name2.charAt(0).toUpperCase() + name2.slice(1)} went into the ${place2.charAt(0).toUpperCase() + place2.slice(1)}. Suddenly, a ${adjective2} ${animal2} ran into their path. thinking quickly, they used a ${item2} to scare the creature away. They ${verb2} continued their journey to the hidden ${npc2.charAt(0).toUpperCase() + npc2.slice(1)}. After a fierce battle with a group of enemies, they were able to secure the ${treasure2}. The quest was complete, and ${name2.charAt(0).toUpperCase() + name2.slice(1)} returned home a hero.`;


    document.getElementById('story-1').textContent = story2;
    document.getElementById('story').style.display = 'block';
    document.getElementById('t-story').textContent = `${name2.charAt(0).toUpperCase() + name2.slice(1)} captures ${treasure2}`;
}


function openStory(event, storyName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(storyName).style.display = "block";
    event.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-link").click();
});
