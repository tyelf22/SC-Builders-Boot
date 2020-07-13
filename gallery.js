console.log("gallery connected")

let exteriorBtn = document.querySelector('#exteriorBtn');
let interiorBtn = document.querySelector('#interiorBtn');
let bathroomBtn = document.querySelector('#bathroomBtn');
let KitchenBtn = document.querySelector('#kitchenBtn');

let exteriorImages = document.querySelectorAll('.ext');
let interiorImages = document.querySelectorAll('.int');
let bathroomImages = document.querySelectorAll('.bath');
let kitchenImages = document.querySelectorAll('.kitch');


exteriorBtn.style.borderBottom = '3px solid red';


interiorImages.forEach(img => {
    img.style.display = "none";
})

bathroomImages.forEach(img => {
    img.style.display = "none";
})

kitchenImages.forEach(img => {
    img.style.display = "none";
})

exteriorBtn.addEventListener('click', () => {

    exteriorImages.forEach(img => {
        img.style.display = "block";
    })

    interiorImages.forEach(img => {
        img.style.display = "none";
    })
    
    bathroomImages.forEach(img => {
        img.style.display = "none";
    })

    kitchenImages.forEach(img => {
        img.style.display = "none";
    })

    exteriorBtn.style.borderBottom = '3px solid red';
    interiorBtn.style.borderBottom = 'none';
    bathroomBtn.style.borderBottom = 'none';
    kitchenBtn.style.borderBottom = 'none';
})


interiorBtn.addEventListener('click', () => {

    exteriorImages.forEach(img => {
        img.style.display = "none";
    })

    interiorImages.forEach(img => {
        img.style.display = "block";
    })
    
    bathroomImages.forEach(img => {
        img.style.display = "none";
    })

    kitchenImages.forEach(img => {
        img.style.display = "none";
    })

    exteriorBtn.style.borderBottom = 'none';
    interiorBtn.style.borderBottom = '3px solid red';
    bathroomBtn.style.borderBottom = 'none';
    kitchenBtn.style.borderBottom = 'none';

})

bathroomBtn.addEventListener('click', () => {

    exteriorImages.forEach(img => {
        img.style.display = "none";
    })

    interiorImages.forEach(img => {
        img.style.display = "none";
    })
    
    bathroomImages.forEach(img => {
        img.style.display = "block";
    })

    kitchenImages.forEach(img => {
        img.style.display = "none";
    })

    exteriorBtn.style.borderBottom = 'none';
    interiorBtn.style.borderBottom = 'none';
    bathroomBtn.style.borderBottom = '3px solid red';
    kitchenBtn.style.borderBottom = 'none';
})

kitchenBtn.addEventListener('click', () => {

    exteriorImages.forEach(img => {
        img.style.display = "none";
    })

    interiorImages.forEach(img => {
        img.style.display = "none";
    })
    
    bathroomImages.forEach(img => {
        img.style.display = "none";
    })

    kitchenImages.forEach(img => {
        img.style.display = "block";
    })


    exteriorBtn.style.borderBottom = 'none';
    interiorBtn.style.borderBottom = 'none';
    bathroomBtn.style.borderBottom = 'none';
    kitchenBtn.style.borderBottom = '3px solid red';
})