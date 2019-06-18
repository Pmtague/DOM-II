// 1. Color Border on Mouseover

const images = document.querySelectorAll('img');

images.forEach((n) => {
    n.addEventListener('click', event => {
        event.target.style.border = 'thick solid lightblue';
    })
})

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

// 3. Navigation 

const nav = document.querySelectorAll('.nav-link');

    // nav.addEventListener('mouseover', (event) => {
    //     target.style.fontSize = '2rem';
    // });

    nav.forEach((n) => {
        n.addEventListener('mouseover', event => {
            event.target.style.color = 'lightblue';
        })
        n.addEventListener('mouseleave', event => {
            event.target.style.color = '';
        })
    })

    // nav.forEach((n) => {
    //     n.addEventListener('mouseleave', event => {
    //         event.target.style.color = '';
    //     })
    // })

// Copy Pop-up When a Selection is Made

// const para = document.querySelectorAll('p');

//     para[0].addEventListener('select', (event) => {

//     })
