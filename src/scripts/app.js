import gsap from 'gsap'


const body = document.getElementById('body')
const menuButton = document.getElementById('menuButton')
const menu = document.getElementById('menu')
const closeButton = document.getElementById('closeButton')

// let state = false;

const open = () => {
    // console.log(state)
    // state = true
    // menuButton.id = 'closeButton'
    menuButton.classList.add('hide')
    closeButton.classList.add('show')
    gsap.timeline()
    .to(".img", 
        // {
        //     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        // },
        {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
        }
    )
    .to('.titleText', 
        {
            y: '100%'
        }
    )
    .to('.subtitle', 
    {
        opacity: 0,
        onComplete: () => {
            body.classList.add('hide')
            menu.classList.add('show')
        }
    })
    .fromTo('.menuLink p', 
    {
        y: '100%'
    },
    {
        y: 0
    })
    .fromTo('.menuImg',
    {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
    }, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    })
    // console.log(state)
}


const close = () => {
    // console.log(state)
    // state = false
    // closeButton.id = 'menuButton'
    menuButton.classList.remove('hide')
    closeButton.classList.remove('show')
    gsap.timeline()
    .fromTo('.menuImg',
    {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
    }, {
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
    })
    .fromTo('.menuLink p', 
    {
        y: 0
    },
    {
        y: '100%',
        onComplete: () => {
            menu.classList.remove('show')
            body.classList.remove('hide')
        }
    })
    .fromTo('.titleText', 
        {
            y: '100%'
        },
        {
            y: 0
        }
    )
    .fromTo(".img", 
        {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
        },
        {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        }
    )
    
    .fromTo('.subtitle', 
    {
        opacity: 0,
    },{
        opacity: 1
    })
    // console.log(state)
    
}


// if (state == false ) {
// menuButton.addEventListener('click', open)
// } else if (state == true) {
//     menuButton.addEventListener('click', close)
// } else {
//     menuButton.addEventListener('click', open)
// }

menuButton.addEventListener('click', open)
closeButton.addEventListener('click', close)