console.log('floorplans Connected')

let numBeds
let numBaths
let numSf


//bed buttons
let bedAnyBtn = document.querySelector('#bedAny')

bedAnyBtn.addEventListener('click', () => {
    numBeds = false
    bedChangeColor(bedAnyBtn)
    ourFilter(numBeds, numBaths, numSf)
})

let bedTwoBtn = document.querySelector('#bedTwo')

bedTwoBtn.addEventListener('click', () => {
    numBeds = 2
    bedChangeColor(bedTwoBtn)
    ourFilter(numBeds, numBaths, numSf)
})

let bedThreeBtn = document.querySelector('#bedThree')

bedThreeBtn.addEventListener('click', () => {
    numBeds = 3
    bedChangeColor(bedThreeBtn)
    ourFilter(numBeds, numBaths, numSf)
});
let bedFourBtn = document.querySelector('#bedFour')

bedFourBtn.addEventListener('click', () => {
    numBeds = 4
    bedChangeColor(bedFourBtn)
    ourFilter(numBeds, numBaths, numSf)
});


let bedFiveBtn = document.querySelector('#bedFive')

bedFiveBtn.addEventListener('click', () => {
    numBeds = 5
    bedChangeColor(bedFiveBtn)
    ourFilter(numBeds, numBaths, numSf)
});


//bath buttons
let bathAnyBtn = document.querySelector('#bathAny')
bathAnyBtn.addEventListener('click', () => {
    numBaths = false
    bathChangeColor(bathAnyBtn)
    ourFilter(numBeds, numBaths, numSf)
});

let bathOneBtn = document.querySelector('#bathOne')
bathOneBtn.addEventListener('click', () => {
    numBaths = 1
    bathChangeColor(bathOneBtn)
    ourFilter(numBeds, numBaths, numSf)
});

let bathTwoBtn = document.querySelector('#bathTwo')
bathTwoBtn.addEventListener('click', () => {
    numBaths = 2
    bathChangeColor(bathTwoBtn)
    ourFilter(numBeds, numBaths, numSf)
});

let bathThreeBtn = document.querySelector('#bathThree')
bathThreeBtn.addEventListener('click', () => {
    numBaths = 3
    bathChangeColor(bathThreeBtn)
    ourFilter(numBeds, numBaths, numSf)
});

//square feet buttons
let sfAnyBtn = document.querySelector('#sfAny')
sfAnyBtn.addEventListener('click', () => {
    numSf = false
    sfChangeColor(sfAnyBtn)
    ourFilter(numBeds, numBaths, numSf)
    
});
let sfOneBtn = document.querySelector('#sfOne')
sfOneBtn.addEventListener('click', () => {
    numSf = [0, 1499]
    sfChangeColor(sfOneBtn)
    ourFilter(numBeds, numBaths, numSf)
});
let sfTwoBtn = document.querySelector('#sfTwo')
sfTwoBtn.addEventListener('click', () => {
    numSf = [1500, 1999]
    sfChangeColor(sfTwoBtn)
    ourFilter(numBeds, numBaths, numSf)
});
let sfThreeBtn = document.querySelector('#sfThree')
sfThreeBtn.addEventListener('click', () => {
    numSf = [2000, 2499]
    sfChangeColor(sfThreeBtn)
    ourFilter(numBeds, numBaths, numSf)
});
let sfFourBtn = document.querySelector('#sfFour')

sfFourBtn.addEventListener('click', () => {
    numSf = [2500, 2999]
    sfChangeColor(sfFourBtn)
    ourFilter(numBeds, numBaths, numSf)
});

//Change bed button colors
function bedChangeColor(btn) {
    bedAnyBtn.style.background = "none"
    bedTwoBtn.style.background = "none"
    bedThreeBtn.style.background = "none"
    bedFourBtn.style.background = "none"
    bedFiveBtn.style.background = "none"


    bedAnyBtn.style.color = 'black'
    bedTwoBtn.style.color = 'black'
    bedThreeBtn.style.color = 'black'
    bedFourBtn.style.color = 'black'
    bedFiveBtn.style.color = 'black'



    btn.style.background = 'red'
    btn.style.color = 'white'
}

//change bath button colors
function bathChangeColor(btn) {
    bathAnyBtn.style.background = "none"
    bathOneBtn.style.background = "none"
    bathTwoBtn.style.background = "none"
    bathThreeBtn.style.background = "none"

    bathAnyBtn.style.color = 'black'
    bathOneBtn.style.color = 'black'
    bathTwoBtn.style.color = 'black'
    bathThreeBtn.style.color = 'black'


    btn.style.background = 'red'
    btn.style.color = 'white'
}

//change sf button colors
function sfChangeColor(btn) {
    sfAnyBtn.style.background = "none"
    sfOneBtn.style.background = "none"
    sfTwoBtn.style.background = "none"
    sfThreeBtn.style.background = "none"
    sfFourBtn.style.background = "none"

    sfAnyBtn.style.color = 'black'
    sfOneBtn.style.color = 'black'
    sfTwoBtn.style.color = 'black'
    sfThreeBtn.style.color = 'black'
    sfFourBtn.style.color = 'black'


    btn.style.background = 'red'
    btn.style.color = 'white'
}

const presidents = [
    {
        name: 'Lincoln',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1800,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Washington',
        style: 'ss',
        bed: 4,
        bath: 3,
        sf: 2000,
        image: "./images/aboutimage1.jpg"
    },
    {
        name: 'Adams',
        style: 'ss',
        bed: 2,
        bath: 1,
        sf: 2900,
        image: "./images/aboutimage2.jpg"
    },
    {
        name: 'Jefferson',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1500,
        image: "./images/aboutimage3.jpg"
    },
    {
        name: 'Trump',
        style: 'ss',
        bed: 5,
        bath: 3,
        sf: 2950,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Reagan',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1900,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Harrison',
        style: 'ss',
        bed: 2,
        bath: 3,
        sf: 2300,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Kennedy',
        style: 'ss',
        bed: 3,
        bath: 3,
        sf: 1500,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Bush',
        style: 'ss',
        bed: 2,
        bath: 3,
        sf: 1600,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Roosevelt',
        style: 'ss',
        bed: 3,
        bath: 2,
        sf: 1500,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Truman',
        style: 'ss',
        bed: 2,
        bath: 2,
        sf: 1500,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Nixon',
        style: 'ss',
        bed: 4,
        bath: 3,
        sf: 2000,
        image: "./images/homeRendering.jpg"
    },
]

function ourFilter(numBeds, numBaths, numSf) {
    console.log('numBeds = ' + numBeds)
    console.log('numBaths = ' + numBaths)
    console.log('numSf = ' + numSf)

    let lincoln = document.querySelector('.lincoln').style.display = 'none'
    let washington = document.querySelector('.washington').style.display = 'none'
    let adams = document.querySelector('.adams').style.display = 'none'
    let jefferson = document.querySelector('.jefferson').style.display = 'none'
    let trump = document.querySelector('.trump').style.display = 'none'
    let reagan = document.querySelector('.reagan').style.display = 'none'
    let harrison = document.querySelector('.harrison').style.display = 'none'
    let kennedy = document.querySelector('.kennedy').style.display = 'none'
    let bush = document.querySelector('.bush').style.display = 'none'
    let roosevelt = document.querySelector('.roosevelt').style.display = 'none'
    let truman = document.querySelector('.truman').style.display = 'none'
    let nixon = document.querySelector('.nixon').style.display = 'none'

    if(numBeds && numBaths && numSf){
        console.log('all three')
        const bedBathSfResult = presidents.filter(pres => {
            return pres.bed == numBeds && pres.bath == numBaths && pres.sf >= numSf[0] && pres.sf <= numSf[1];
        })

        bedBathSfResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'
        })

    }else if(numSf && numBaths){
        console.log('numSf and numbaths')
        const sfBathResult = presidents.filter(pres => {
            return pres.sf >= numSf[0] && pres.sf <= numSf[1] && pres.bath == numBaths;
        })

        sfBathResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })

    }else if(numSf && numBeds){
        console.log('numSf and numbeds')
        const sfBedResult = presidents.filter(pres => {
            return pres.sf >= numSf[0] && pres.sf <= numSf[1] && pres.bed == numBeds;
        })

        sfBedResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })

    }else if(numBaths && numBeds){
        console.log('numBaths and numBeds')
        const bathBedResult = presidents.filter(pres => {
            return pres.bed == numBeds && pres.bath == numBaths;
        })

        bathBedResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })

    }else if(numSf){
        console.log('numSf ' + numSf)
        const sfResult = presidents.filter(pres => {
            console.log(pres.sf >= numSf[0] && pres.sf <= numSf[1])
            console.log('pres ' + pres.sf)
            return pres.sf >= numSf[0] && pres.sf <= numSf[1];
        })

        sfResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })

    }else if(numBaths){
        console.log('numBaths')
        const bathResult = presidents.filter(pres => {
            return pres.bath == numBaths;
        })

        bathResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })

    }else if(numBeds) {
        console.log('numBeds')
        const bedResult = presidents.filter(pres => {
            return pres.bed == numBeds;
        })

        bedResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })

    }else {
        let lincoln = document.querySelector('.lincoln').style.display = 'block'
        let washington = document.querySelector('.washington').style.display = 'block'
        let adams = document.querySelector('.adams').style.display = 'block'
        let jefferson = document.querySelector('.jefferson').style.display = 'block'
        let trump = document.querySelector('.trump').style.display = 'block'
        let reagan = document.querySelector('.reagan').style.display = 'block'
        let harrison = document.querySelector('.harrison').style.display = 'block'
        let kennedy = document.querySelector('.kennedy').style.display = 'block'
        let bush = document.querySelector('.bush').style.display = 'block'
        let roosevelt = document.querySelector('.roosevelt').style.display = 'block'
        let truman = document.querySelector('.truman').style.display = 'block'
        let nixon = document.querySelector('.nixon').style.display = 'block'
    }

}


/****************** MODAL POPUP ******************/

// Get the modal
const modal = document.querySelector("#myModal");

// Get the <span> element that closes the modal
const span = document.querySelector(".close");

// Get the tags
const nameTag = document.querySelector('#nameTag')
const bedTag = document.querySelector('#bedTag')
const bathTag = document.querySelector('#bathTag')
const sfTag = document.querySelector('#sfTag')
const modalImg = document.querySelector('.modalImg')

//functions
function popUp(presNum) {
    modal.style.display = "block";
    nameTag.innerText = presidents[presNum].name
    bedTag.innerText = presidents[presNum].bed
    bathTag.innerText = presidents[presNum].bath
    sfTag.innerText = presidents[presNum].sf
    modalImg.setAttribute('src', presidents[presNum].image)
}

//Buttons
const lincolnBtn = document.querySelector('#lincolnBtn')
lincolnBtn.addEventListener('click', () => {
    popUp(0)
})

const washingtonBtn = document.querySelector('#washingtonBtn')
washingtonBtn.addEventListener('click', () => {
    popUp(1)
})

const adamsBtn = document.querySelector('#adamsBtn')
adamsBtn.addEventListener('click', () => {
    popUp(2)
})

const jeffersonBtn = document.querySelector('#jeffersonBtn')
jeffersonBtn.addEventListener('click', () => {
    popUp(3)
})

const trumpBtn = document.querySelector('#trumpBtn')
trumpBtn.addEventListener('click', () => {
    popUp(4)
})

const reaganBtn = document.querySelector('#reaganBtn')
reaganBtn.addEventListener('click', () => {
    popUp(5)
})

const harrisonBtn = document.querySelector('#harrisonBtn')
harrisonBtn.addEventListener('click', () => {
    popUp(6)
})

const kennedyBtn = document.querySelector('#kennedyBtn')
kennedyBtn.addEventListener('click', () => {
    popUp(7)
})

const bushBtn = document.querySelector('#bushBtn')
bushBtn.addEventListener('click', () => {
    popUp(8)
})

const rooseveltBtn = document.querySelector('#rooseveltBtn')
rooseveltBtn.addEventListener('click', () => {
    popUp(9)
})

const trumanBtn = document.querySelector('#trumanBtn')
trumanBtn.addEventListener('click', () => {
    popUp(10)
})

const nixonBtn = document.querySelector('#nixonBtn')
nixonBtn.addEventListener('click', () => {
    popUp(11)
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







