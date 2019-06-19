// 1. Color Border on Mouseover

const images = document.querySelectorAll('img');

    images.forEach((n) => {
        n.addEventListener('click', event => {
            event.target.style.border = 'thick solid lightblue';
        })
    })

// 2. & 3. Change First Heading Colors When Moused Over

const sectHeadings = document.querySelectorAll('h2');

    sectHeadings.forEach((n) => {
        n.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'lightblue';
            event.target.style.color = '#FFFFFF';
        })
        n.addEventListener('mouseleave', (event) => {
            event.target.style.backgroundColor = '';
            event.target.style.color = '';
        })
    })

// 4. & 5. Navigation 

const nav = document.querySelectorAll('.nav-link');

    nav.forEach((n) => {
        n.addEventListener('mouseover', event => {
            event.target.style.color = 'lightblue';
            event.target.style.fontSize = '2rem';
        })
        n.addEventListener('mouseleave', event => {
            event.target.style.color = '';
            event.target.style.fontSize = '';
        })
    })

// 6. Logo Heading

const logo = document.querySelector('.logo-heading');

    logo.addEventListener('mouseup', (event) => {
        event.target.style.color = 'yellow';
    })
