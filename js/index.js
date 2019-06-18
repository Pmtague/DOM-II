// 1. Color Border on Mouseover

const images = document.querySelectorAll('img');

    images[0].addEventListener('dblclick', (event) => {
        event.target.style.border = 'thick solid lightblue';
    });

    images[1].addEventListener('click', (event) => {
        event.target.style.border = 'thick solid lightblue';
    });

    images[2].addEventListener('click', (event) => {
        event.target.style.border = 'thick solid lightblue';
    });

    images[3].addEventListener('click', (event) => {
        event.target.style.border = 'thick solid lightblue';
    });

// 2. Change First Heading Colors When Moused Over

const sectHeadings = document.querySelectorAll('h2');

    sectHeadings[0].addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'lightblue';
        event.target.style.color = '#FFFFFF';
    });

    sectHeadings[0].addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = '#FFFFFF';
        event.target.style.color = '#212529';
    });

// 3. Navigation Animation

const nav = document.querySelectorAll('.nav');

    nav.addEventListener('mousedown', (event) => {
        target.style.backgroundImage = "url('adventure.jpg')";
    });

// Copy Pop-up When a Selection is Made

// const para = document.querySelectorAll('p');

//     para[0].addEventListener('select', (event) => {

//     })
