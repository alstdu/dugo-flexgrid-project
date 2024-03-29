import Glide, {Autoplay, Controls} from '../node_modules/@glidejs/glide/dist/glide.modular.esm.js';

const hamburgerMenu = document.querySelector( '.menu-icon' );
hamburgerMenu.addEventListener( 'click', () => {
    document.querySelector( '.nav-open-overlay' ).style.display = 'block';
    document.querySelector( '.nav-sidebar' ).style.display = 'block';
} );

const closeNav = () => {
    document.querySelector( '.nav-open-overlay' ).style.display = 'none';
    document.querySelector( '.nav-sidebar' ).style.display = 'none';
};

document.querySelector( '#closeMenuBtn' ).addEventListener( 'click', closeNav );
document.querySelector( '.nav-open-overlay' ).addEventListener( 'click', closeNav );

new Glide( '.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 'center',
} ).mount( {Autoplay, Controls} );

sal();

// Lexi Dugo A01348881 2024
