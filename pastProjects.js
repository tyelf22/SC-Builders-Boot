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
