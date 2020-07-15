console.log('floorplans Connected')


let numBeds
let numBaths
let numSf


//bed buttons
let bedAnyBtn = document.querySelector('#bedAny').addEventListener('click', () => {
    numBeds = false
    ourFilter(numBeds, numBaths, numSf)
});
let bedTwoBtn = document.querySelector('#bedTwo').addEventListener('click', () => {
    numBeds = 2
    ourFilter(numBeds, numBaths, numSf)
})
let bedThreeBtn = document.querySelector('#bedThree').addEventListener('click', () => {
    numBeds = 3
    ourFilter(numBeds, numBaths, numSf)
});
let bedFourBtn = document.querySelector('#bedFour').addEventListener('click', () => {
    numBeds = 4
    ourFilter(numBeds, numBaths, numSf)
});
let bedFiveBtn = document.querySelector('#bedFive').addEventListener('click', () => {
    numBeds = 5
    ourFilter(numBeds, numBaths, numSf)
});


//bath buttons
let bathAnyBtn = document.querySelector('#bathAny').addEventListener('click', () => {
    numBaths = false
    ourFilter(numBeds, numBaths, numSf)
});
let bathOneBtn = document.querySelector('#bathOne').addEventListener('click', () => {
    numBaths = 1
    ourFilter(numBeds, numBaths, numSf)
});
let bathTwoBtn = document.querySelector('#bathTwo').addEventListener('click', () => {
    numBaths = 2
    ourFilter(numBeds, numBaths, numSf)
});
let bathThreeBtn = document.querySelector('#bathThree').addEventListener('click', () => {
    numBaths = 3
    ourFilter(numBeds, numBaths, numSf)
});

//square feet buttons
let sfAnyBtn = document.querySelector('#sfAny').addEventListener('click', () => {
    numSf = false
    ourFilter(numBeds, numBaths, numSf)
    
});
let sfOneBtn = document.querySelector('#sfOne').addEventListener('click', () => {
    numSf = [0, 1499]
    ourFilter(numBeds, numBaths, numSf)
});
let sfTwoBtn = document.querySelector('#sfTwo').addEventListener('click', () => {
    numSf = [1500, 1999]
    ourFilter(numBeds, numBaths, numSf)
});
let sfThreeBtn = document.querySelector('#sfThree').addEventListener('click', () => {
    numSf = [2000, 2499]
    ourFilter(numBeds, numBaths, numSf)
});
let sfFourBtn = document.querySelector('#sfFour').addEventListener('click', () => {
    numSf = [2500, 2999]
    ourFilter(numBeds, numBaths, numSf)
});


const aoPresidents = [
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
            return pres.sf >= numSf && pres.sf <= numSf && pres.bed == numBeds;
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




