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

// 6. Logo Heading Turns Yellow on Mouse Release

const logo = document.querySelector('.logo-heading');

    logo.addEventListener('mouseup', (event) => {
        event.target.style.color = 'yellow';
    })

// 7. Footer Background Image on Click

const footer = document.querySelector('.footer');

    footer.addEventListener('click', event => {
        event.target.style.backgroundImage = "url('sunset-ocean.jpg')";
        event.target.style.fontSize = '2rem';
        event.target.style.color = 'lightblue';
    })

// 8. Paragraph Background Color After Dragging

const para = document.querySelectorAll('p');

    para.forEach((n) => {
        n.addEventListener('drag', event => {
            event.target.style.backgroundColor = 'lightblue';
        })
    })

// 9. H4 Disappears When Right-Clicked

const headerFour = document.querySelectorAll('h4');

    headerFour.forEach((n) => {
        n.addEventListener('contextmenu', event => {
            event.target.style.display = 'none';
        })
    })

// 10. Buttons

const buttons = document.querySelectorAll('.btn');

    buttons.forEach((n) => {
        n.addEventListener('dblclick', event => {
            alert('You clicked a button!');
        })
    })



