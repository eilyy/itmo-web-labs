const navMenu = document.querySelector('.nav');
if(document.location.pathname === '/itmo-web-labs/') {
    navMenu.querySelector('#main-btn').classList.add('nav__link_current')
}
if(document.location.pathname === '/itmo-web-labs/contacts/') {
    navMenu.querySelector('#contacts-btn').classList.add('nav__link_current')
}
if(document.location.pathname === '/itmo-web-labs/notes/') {
    navMenu.querySelector('#schedule-btn').classList.add('nav__link_current')
}