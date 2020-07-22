console.log("gallery connected")

let commercialBtn = document.querySelector('#commercialBtn');
let residentialBtn = document.querySelector('#residentialBtn');

let exteriorImages = document.querySelectorAll('.com');
let interiorImages = document.querySelectorAll('.res');

commercialBtn.style.borderBottom = '3px solid red';


interiorImages.forEach(img => {
    img.style.display = "none";
})


commercialBtn.addEventListener('click', () => {

    exteriorImages.forEach(img => {
        img.style.display = "block";
    })

    interiorImages.forEach(img => {
        img.style.display = "none";
    })
    

    commercialBtn.style.borderBottom = '3px solid red';
    residentialBtn.style.borderBottom = 'none';
})


residentialBtn.addEventListener('click', () => {

    exteriorImages.forEach(img => {
        img.style.display = "none";
    })

    interiorImages.forEach(img => {
        img.style.display = "block";
    })
    

    commercialBtn.style.borderBottom = 'none';
    residentialBtn.style.borderBottom = '3px solid red';

})


const projects = [
    {
        title: "All Star Lanes Draper 1",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, ",
        image: "./images/allStarDraper.jpg"
    },
    {
        title: "All Star Lanes Draper 2",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/allStarDraper.jpg"
    },
    {
        title: "All Star Lanes Draper 3",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/allStarDraper.jpg"
    },
    {
        title: "All Star Lanes Draper 4",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/allStarDraper.jpg"
    },
    {
        title: "All Star Lanes Draper 5",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/allStarDraper.jpg"
    },
    {
        title: "All Star Lanes Draper 6",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/allStarDraper.jpg"
    },
    {
        title: "All Star Lanes Draper 7",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
    {
        title: "All Star Lanes Draper 8",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
    {
        title: "All Star Lanes Draper 9",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
    {
        title: "All Star Lanes Draper 10",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
    {
        title: "All Star Lanes Draper 11",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
    {
        title: "All Star Lanes Draper 12",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
    {
        title: "All Star Lanes Draper 11",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
    {
        title: "All Star Lanes Draper 12",
        description: "Fully remodeled interior and exterior.We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed,",
        image: "./images/homeBGLarge.jpg"
    },
]


const modal = document.querySelector("#projectsModal");

const projectTitle = document.querySelector("#projectTitle");
const projectDescription = document.querySelector("#projectDescription");
const projectImg = document.querySelector(".projectsModalImg");

//functions
function projectPopUp(projectNum) {
    modal.style.display = "block";
    projectTitle.innerText = projects[projectNum].title
    projectDescription.innerText = projects[projectNum].description
    projectImg.setAttribute('src', projects[projectNum].image)
}

//Buttons
const button1 = document.querySelector('#project1')
button1.addEventListener('click', () => {
    console.log('you pressed button1')
    console.log(projects[0])
    projectPopUp(0)
})
const button2 = document.querySelector('#project2')
button2.addEventListener('click', () => {
    projectPopUp(1)
})
const button3 = document.querySelector('#project3')
project3.addEventListener('click', () => {
    projectPopUp(2)
})
const button4 = document.querySelector('#project4')
project4.addEventListener('click', () => {
    projectPopUp(3)
})
const button5 = document.querySelector('#project5')
project5.addEventListener('click', () => {
    projectPopUp(4)
})
const button6 = document.querySelector('#project6')
project6.addEventListener('click', () => {
    projectPopUp(5)
})
const button7 = document.querySelector('#project7')
project7.addEventListener('click', () => {
    projectPopUp(6)
})
const button8 = document.querySelector('#project8')
project8.addEventListener('click', () => {
    projectPopUp(7)
})
const button9 = document.querySelector('#project9')
project9.addEventListener('click', () => {
    projectPopUp(8)
})
const button10 = document.querySelector('#project10')
project10.addEventListener('click', () => {
    projectPopUp(9)
})
const button11 = document.querySelector('#project11')
project11.addEventListener('click', () => {
    projectPopUp(10)
})
const button12 = document.querySelector('#project12')
project12.addEventListener('click', () => {
    projectPopUp(11)
})
