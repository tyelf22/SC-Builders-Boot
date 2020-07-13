console.log('floorplans Connected')

//bed buttons
let bedAnyBtn = document.querySelector('#bedAny');
let bedTwoBtn = document.querySelector('#bedTwo');
let bedThreeBtn = document.querySelector('#bedThree');
let bedFourBtn = document.querySelector('#bedFour');
let bedFiveBtn = document.querySelector('#bedFive');


//bath buttons
let bathAnyBtn = document.querySelector('#bathAny');
let bathTwoBtn = document.querySelector('#bathTwo');
let bathThreeBtn = document.querySelector('#bathThree');

//square feet buttons
let sfAnyBtn = document.querySelector('#sfAny');
let sfOneBtn = document.querySelector('#sfOne');
let sfTwoBtn = document.querySelector('#sfTwo');
let sfThreeBtn = document.querySelector('#sfThree');
let sfFourBtn = document.querySelector('#sfFour');



const presidents = [
    {
        name: 'Lincoln',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1800
    },
    {
        name: 'Washington',
        style: 'ss',
        bed: 4,
        bath: 3,
        sf: 2000
    },
    {
        name: 'Adams',
        style: 'ss',
        bed: 2,
        bath: 1,
        sf: 2900
    },
    {
        name: 'Jefferson',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1500
    },
    {
        name: 'Trump',
        style: 'ss',
        bed: 5,
        bath: 3,
        sf: 2950
    },
    {
        name: 'Reagan',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1900
    },
    {
        name: 'Harrison',
        style: 'ss',
        bed: 2,
        bath: 3,
        sf: 2300
    },
    {
        name: 'Kennedy',
        style: 'ss',
        bed: 3,
        bath: 3,
        sf: 1500
    },
    {
        name: 'Bush',
        style: 'ss',
        bed: 2,
        bath: 3,
        sf: 1600
    },
    {
        name: 'Roosevelt',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1500
    },
    {
        name: 'Truman',
        style: 'ss',
        bed: 2,
        bath: 2,
        sf: 1500
    },
    {
        name: 'Nixon',
        style: 'ss',
        bed: 4,
        bath: 3,
        sf: 2000
    },

]


const result = presidents.filter(pres => {
    pres.style = 'ss'
    pres.bed = 2
    pres.bath = 2
    pres.sf = 1500
});






/* const lincoln = {
    style: 'ss',
    bed: 3,
    bath: 2,
    sf: 1800
}

const washington = {
    style: 'ss',
    bed: 4,
    bath: 3,
    sf: 2000
}

const adams = {
    style: 'ss',
    bed: 2,
    bath: 1,
    sf: 2900
}
const jefferson = {
    style: 'ss',
    bed: 3,
    bath: 2,
    sf: 1500
}
const trump = {
    style: 'ss',
    bed: 5,
    bath: 3,
    sf: 2950
}
const reagan = {
    style: 'ss',
    bed: 3,
    bath: 2,
    sf: 1900
}
const harrison = {
    style: 'ss',
    bed: 2,
    bath: 3,
    sf: 2300
}
const kennedy = {
    style: 'ss',
    bed: 3,
    bath: 3,
    sf: 1500
}
const bush = {
    style: 'ss',
    bed: 2,
    bath: 3,
    sf: 1600
}
const roosevelt = {
    style: 'ss',
    bed: 3,
    bath: 2,
    sf: 1500
}
const truman = {
    style: 'ss',
    bed: 2,
    bath: 2,
    sf: 1500
}
const nixon = {
    style: 'ss',
    bed: 4,
    bath: 3,
    sf: 2000
} */

