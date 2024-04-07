<<<<<<< HEAD
// doc setup
console.log('---app.js---')
const body = document.body;
console.log(body)
const bodyChildren = [...body.children]
console.log(bodyChildren)

//header
const section=document.createElement('header');
section.setAttribute('class','header');
console.log(section)
body.appendChild(section)

const anchor = document.createElement('a');
anchor.setAttribute('class', 'logo')
anchor.textContent = "portfolio";
section.appendChild(anchor);
console.log(anchor)

const i = document.createElement('i');
i.setAttribute('class','bx bx-menu')
i.setAttribute('id','menu-icons')
console.log(i)

section.appendChild(i)



//navbar
const navbar = document.createElement('nav');
navbar.setAttribute('class','navbar')
section.appendChild(navbar)
console.log(navbar)


const aboutAnchor = document.createElement('a');
aboutAnchor.textContent = "about";
navbar.appendChild(aboutAnchor);
console.log(aboutAnchor)

const svcAnchor = document.createElement('a');
svcAnchor.textContent = "Services";
navbar.appendChild(svcAnchor)
console.log(svcAnchor)

const portAnchor = document.createElement('a');
portAnchor.textContent = "Portfolio";
navbar.appendChild(portAnchor);
console.log(portAnchor);

const contactAnchor = document.createElement('a');
contactAnchor.textContent = "Contact";
navbar.appendChild(contactAnchor);
console.log(contactAnchor)


//home
const home = document.createElement('section');
home.setAttribute('class','home');
home.setAttribute('id','home');
body.appendChild(home);

//home content
const homecontent = document.createElement('Div');
homecontent.setAttribute('class','home-content');
home.appendChild(homecontent);

const h3 = document.createElement('h3');
h3.textContent = "Hello it's Me";
homecontent.appendChild(h3)

const h1 = document.createElement('h1');
h1.textContent = "Mike Nims";
homecontent.appendChild(h1);

const title = document.createElement('h3')
title.textContent = "I'm a frontend engineer"
homecontent.appendChild(title);

const para = document.createElement("p");
para.textContent = ` Lorem, ipsum dolor sit amet consectetur
adipisicing elit. Eaque nihil id at soluta, 
illum sequi. Maxime, rem`
homecontent.appendChild(para)

//social-media
const socialMedia = document.createElement('div');
socialMedia.setAttribute('class','social-media');
body.appendChild(socialMedia);

//fb
const facebook = document.createElement("a")
facebook.href = "#";
socialMedia.append(facebook);

const facebookClass = document.createElement("i");
facebookClass.className = "bx bx1-facebook";
facebook.append(facebookClass);


//twitter
const twitter = document.createElement("a")
twitter.href = "#";
socialMedia.append(twitter);

const twitterClass = document.createElement("i");
twitterClass.className = "bx bx1-twitter";
twitter.append(twitterClass);

//ig
const instagram = document.createElement("a")
instagram.href = "#";
socialMedia.append(instagram);

const instagramClass = document.createElement("i");
instagramClass.className = "bx bx1-instagram";
instagram.append(instagramClass);

//Linkedin
const Linkedin = document.createElement("a")
Linkedin.href = "#";
socialMedia.append(Linkedin);

const LinkedinClass = document.createElement("i");
LinkedinClass.className = "bx bx1-Linkedin";
Linkedin.append(LinkedinClass);

/*==================== toggle icon navbar ====================*/

=======
// //——— app.js
// // doc setup
// console.log('---app.js---')
// const body = document.body;
// console.log(body)
// const bodyChildren = [...body.children]
// console.log(bodyChildren)

// //header
// const section=document.createElement('header');
// section.setAttribute('class','header');
// console.log(section)
// body.appendChild(section)

// const anchor = document.createElement('a');
// anchor.setAttribute('class', 'logo')
// anchor.textContent = "portfolio";
// section.appendChild(anchor);
// console.log(anchor)

// const i = document.createElement('i');
// i.setAttribute('class','bx bx-menu')
// i.setAttribute('id','menu-icons')
// console.log(i)

// section.appendChild(i)



// //navbar
// const navbar = document.createElement('nav');
// navbar.setAttribute('class','navbar')
// section.appendChild(navbar)
// console.log(navbar)


// const aboutAnchor = document.createElement('a');
// aboutAnchor.textContent = "about";
// navbar.appendChild(aboutAnchor);
// console.log(aboutAnchor)

// const svcAnchor = document.createElement('a');
// svcAnchor.textContent = "Services";
// navbar.appendChild(svcAnchor)
// console.log(svcAnchor)

// const portAnchor = document.createElement('a');
// portAnchor.textContent = "Portfolio";
// navbar.appendChild(portAnchor);
// console.log(portAnchor);

// const contactAnchor = document.createElement('a');
// contactAnchor.textContent = "Contact";
// navbar.appendChild(contactAnchor);
// console.log(contactAnchor)


// //home
// const home = document.createElement('section');
// home.setAttribute('class','home');
// home.setAttribute('id','home');
// body.appendChild(home);

// //home content
// const homecontent = document.createElement('Div');
// homecontent.setAttribute('class','home-content');
// home.appendChild(homecontent);

// const h3 = document.createElement('h3');
// h3.textContent = "Hello it's Me";
// homecontent.appendChild(h3)

// const h1 = document.createElement('h1');
// h1.textContent = "Mike Nims";
// homecontent.appendChild(h1);

// const title = document.createElement('h3')
// title.textContent = "I'm a frontend engineer"
// homecontent.appendChild(title);

// const para = document.createElement("p");
// para.textContent = ` Lorem, ipsum dolor sit amet consectetur
// adipisicing elit. Eaque nihil id at soluta, 
// illum sequi. Maxime, rem`
// homecontent.appendChild(para)

// //social-media
// const socialMedia = document.createElement('div');
// socialMedia.setAttribute('class','social-media');
// body.appendChild(socialMedia);

// //fb
// const facebook = document.createElement("a")
// facebook.href = "#";
// socialMedia.append(facebook);

// const facebookClass = document.createElement("i");
// facebookClass.className = "bx bx1-facebook";
// facebook.append(facebookClass);


// //twitter
// const twitter = document.createElement("a")
// twitter.href = "#";
// socialMedia.append(twitter);

// const twitterClass = document.createElement("i");
// twitterClass.className = "bx bx1-twitter";
// twitter.append(twitterClass);

// //ig
// const instagram = document.createElement("a")
// instagram.href = "#";
// socialMedia.append(instagram);

// const instagramClass = document.createElement("i");
// instagramClass.className = "bx bx1-instagram";
// instagram.append(instagramClass);

// //Linkedin
// const Linkedin = document.createElement("a")
// Linkedin.href = "#";
// socialMedia.append(Linkedin);

// const LinkedinClass = document.createElement("i");
// LinkedinClass.className = "bx bx1-Linkedin";
// Linkedin.append(LinkedinClass);

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
>>>>>>> mike
/*==================== scroll sections active link ====================*/

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Engineer', 'Backend Engineer', 'FullStack Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000, 
    loop: true
});


