console.log('floorplans Connected')

let numBeds
let numBaths
let numSf
let style


//style buttons
let sfBtn = document.querySelector('#sf')

sfBtn.addEventListener('click', () => {
    style = 1
    styleChangeColor(sfBtn)
    ourFilter(style, numBeds, numBaths, numSf)
})

let thBtn = document.querySelector('#th')

thBtn.addEventListener('click', () => {
    style = 2
    styleChangeColor(thBtn)
    ourFilter(style, numBeds, numBaths, numSf)
})


//bed buttons
let bedAnyBtn = document.querySelector('#bedAny')

bedAnyBtn.addEventListener('click', () => {
    numBeds = false
    bedChangeColor(bedAnyBtn)
    ourFilter(style, numBeds, numBaths, numSf)
})

let bedTwoBtn = document.querySelector('#bedTwo')

bedTwoBtn.addEventListener('click', () => {
    numBeds = 2
    bedChangeColor(bedTwoBtn)
    ourFilter(style, numBeds, numBaths, numSf)
})

let bedThreeBtn = document.querySelector('#bedThree')

bedThreeBtn.addEventListener('click', () => {
    numBeds = 3
    bedChangeColor(bedThreeBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});
let bedFourBtn = document.querySelector('#bedFour')

bedFourBtn.addEventListener('click', () => {
    numBeds = 4
    bedChangeColor(bedFourBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});


let bedFiveBtn = document.querySelector('#bedFive')

bedFiveBtn.addEventListener('click', () => {
    numBeds = 5
    bedChangeColor(bedFiveBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});


//bath buttons
let bathAnyBtn = document.querySelector('#bathAny')
bathAnyBtn.addEventListener('click', () => {
    numBaths = false
    bathChangeColor(bathAnyBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});

let bathOneBtn = document.querySelector('#bathOne')
bathOneBtn.addEventListener('click', () => {
    numBaths = 1
    bathChangeColor(bathOneBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});

let bathTwoBtn = document.querySelector('#bathTwo')
bathTwoBtn.addEventListener('click', () => {
    numBaths = 2
    bathChangeColor(bathTwoBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});

let bathThreeBtn = document.querySelector('#bathThree')
bathThreeBtn.addEventListener('click', () => {
    numBaths = 3
    bathChangeColor(bathThreeBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});

//square feet buttons
let sfAnyBtn = document.querySelector('#sfAny')
sfAnyBtn.addEventListener('click', () => {
    numSf = false
    sfChangeColor(sfAnyBtn)
    ourFilter(style, numBeds, numBaths, numSf)
    
});
let sfOneBtn = document.querySelector('#sfOne')
sfOneBtn.addEventListener('click', () => {
    numSf = [0, 1499]
    sfChangeColor(sfOneBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});
let sfTwoBtn = document.querySelector('#sfTwo')
sfTwoBtn.addEventListener('click', () => {
    numSf = [1500, 1999]
    sfChangeColor(sfTwoBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});
let sfThreeBtn = document.querySelector('#sfThree')
sfThreeBtn.addEventListener('click', () => {
    numSf = [2000, 2499]
    sfChangeColor(sfThreeBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});
let sfFourBtn = document.querySelector('#sfFour')

sfFourBtn.addEventListener('click', () => {
    numSf = [2500, 2999]
    sfChangeColor(sfFourBtn)
    ourFilter(style, numBeds, numBaths, numSf)
});

//Reset Btn
let resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', () => {
    sfBtn.style.borderColor = '#DFDFDF'
    thBtn.style.borderColor = '#DFDFDF'
    bedAnyBtn.style.borderColor = '#DFDFDF'
    bedTwoBtn.style.borderColor = '#DFDFDF'
    bedThreeBtn.style.borderColor = '#DFDFDF'
    bedFourBtn.style.borderColor = '#DFDFDF'
    bedFiveBtn.style.borderColor = '#DFDFDF'
    bathAnyBtn.style.borderColor = '#DFDFDF'
    bathOneBtn.style.borderColor = '#DFDFDF'
    bathTwoBtn.style.borderColor = '#DFDFDF'
    bathThreeBtn.style.borderColor = '#DFDFDF'
    sfAnyBtn.style.borderColor = '#DFDFDF'
    sfOneBtn.style.borderColor = '#DFDFDF'
    sfTwoBtn.style.borderColor = '#DFDFDF'
    sfThreeBtn.style.borderColor = '#DFDFDF'
    sfFourBtn.style.borderColor = '#DFDFDF'


    numBeds = false
    numBaths = false
    numSf = false
    style = false

    ourFilter(style, numBeds, numBaths, numSf)
})

//Change style button colors
function styleChangeColor(btn) {
    sfBtn.style.borderColor = '#DFDFDF'
    thBtn.style.borderColor = '#DFDFDF'

    btn.style.borderColor = 'black'
}

//Change bed button colors
function bedChangeColor(btn) {
    bedAnyBtn.style.borderColor = '#DFDFDF'
    bedTwoBtn.style.borderColor = '#DFDFDF'
    bedThreeBtn.style.borderColor = '#DFDFDF'
    bedFourBtn.style.borderColor = '#DFDFDF'
    bedFiveBtn.style.borderColor = '#DFDFDF'

    btn.style.borderColor = 'black'
}

//change bath button colors
function bathChangeColor(btn) {

    bathAnyBtn.style.borderColor = '#DFDFDF'
    bathOneBtn.style.borderColor = '#DFDFDF'
    bathTwoBtn.style.borderColor = '#DFDFDF'
    bathThreeBtn.style.borderColor = '#DFDFDF'

    btn.style.borderColor = 'black'
}

//change sf button colors
function sfChangeColor(btn) {
    sfAnyBtn.style.borderColor = '#DFDFDF'
    sfOneBtn.style.borderColor = '#DFDFDF'
    sfTwoBtn.style.borderColor = '#DFDFDF'
    sfThreeBtn.style.borderColor = '#DFDFDF'
    sfFourBtn.style.borderColor = '#DFDFDF'


    btn.style.borderColor = 'black'
}

const presidents = [
    {
        name: 'Lincoln',
        style: 1,
        bed: 3,
        bath: 2,
        sf: 1800,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Washington',
        style: 1,
        bed: 4,
        bath: 3,
        sf: 2000,
        image: "./images/aboutimage1.jpg"
    },
    {
        name: 'Adams',
        style: 1,
        bed: 2,
        bath: 1,
        sf: 2900,
        image: "./images/aboutimage2.jpg"
    },
    {
        name: 'Jefferson',
        style: 1,
        bed: 3,
        bath: 2,
        sf: 1500,
        image: "./images/aboutimage3.jpg"
    },
    {
        name: 'Trump',
        style: 1,
        bed: 5,
        bath: 3,
        sf: 2950,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Reagan',
        style: 1,
        bed: 3,
        bath: 2,
        sf: 1900,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Harrison',
        style: 1,
        bed: 2,
        bath: 3,
        sf: 2300,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Kennedy',
        style: 1,
        bed: 3,
        bath: 3,
        sf: 1500,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Bush',
        style: 1,
        bed: 2,
        bath: 3,
        sf: 1600,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Roosevelt',
        style: 1,
        bed: 3,
        bath: 2,
        sf: 1500,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Truman',
        style: 1,
        bed: 2,
        bath: 2,
        sf: 1500,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Nixon',
        style: 1,
        bed: 4,
        bath: 3,
        sf: 2000,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Carter',
        style: 2,
        bed: 4,
        bath: 3,
        sf: 2999,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Ford',
        style: 2,
        bed: 3,
        bath: 2,
        sf: 1500,
        image: "./images/homeRendering.jpg"
    },
    {
        name: 'Hoover',
        style: 2,
        bed: 2,
        bath: 1,
        sf: 1300,
        image: "./images/homeRendering.jpg"
    },
]

function ourFilter(style, numBeds, numBaths, numSf) {
    console.log('style = ' + style)
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
    let carter = document.querySelector('.carter').style.display = 'none'
    let ford = document.querySelector('.ford').style.display = 'none'
    let hoover = document.querySelector('.hoover').style.display = 'none'
    
    if(style && numBeds && numBaths && numSf){
        console.log('all Four')
        const sytleBedBathSfResult = presidents.filter(pres => {
            return pres.style == style && pres.bed == numBeds && pres.bath == numBaths && pres.sf >= numSf[0] && pres.sf <= numSf[1];
        })

        sytleBedBathSfResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'
        })
    }else if(numBeds && numBaths && numSf){
        console.log('bed bath sf')
        const bedBathSfResult = presidents.filter(pres => {
            return pres.bed == numBeds && pres.bath == numBaths && pres.sf >= numSf[0] && pres.sf <= numSf[1];
        })

        bedBathSfResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'
        })

    }else if(style && numBeds && numBaths){
        console.log('style bed bath')
        const styleBedBathResult = presidents.filter(pres => {
            return pres.style == style && pres.bed == numBeds && pres.bath == numBaths
        })

        styleBedBathResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'
        })
    }else if(style && numBeds && numSf) {
        console.log('style bed sf')
        const styleBedSfResult = presidents.filter(pres => {
            return pres.style == style && pres.bed == numBeds && pres.sf >= numSf[0] && pres.sf <= numSf[1];
        })

        styleBedSfResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'
        })
    }else if(style && numBaths && numSf){
        console.log('style bath sf')
        const styleBathSfResult = presidents.filter(pres => {
            return pres.style == style && pres.bath == numBaths && pres.sf >= numSf[0] && pres.sf <= numSf[1];
        })

        styleBathSfResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'
        })
    } else if(numSf && numBaths){
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

    }else if(style && numSf){
        console.log('style and numSf')
        const styleSfResult = presidents.filter(pres => {
            return pres.sf >= numSf[0] && pres.sf <= numSf[1] && pres.style == style;
        })

        styleSfResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })
    }
    else if(style && numBaths){
        console.log('style and numBaths')
        const styleBathResult = presidents.filter(pres => {
            return pres.bath == numBaths && pres.style == style;
        })

        styleBathResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            selectedPres.style.display = 'block'

        })
    }else if(style && numBeds){
        console.log('style and numBeds')
        const styleBedResult = presidents.filter(pres => {
            return pres.bed == numBeds && pres.style == style;
        })

        styleBedResult.forEach(res => {
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

    }else if(style){
        console.log('style')
        const styleResult = presidents.filter(pres => {
            return pres.style == style;
        })

        console.log('style result ', styleResult)

        styleResult.forEach(res => {
            let presName = res.name.toLowerCase()
            let selectedPres = document.querySelector(`.${presName}`)
            console.log('selected pres ', selectedPres)
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
        let carter = document.querySelector('.carter').style.display = 'block'
        let ford = document.querySelector('.ford').style.display = 'block'
        let hoover = document.querySelector('.hoover').style.display = 'block'
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







