const sliderImages = [
    'rocket', 'space', 'telescope',
];

const dataBuckets = sliderImages.map( ( sliderImage ) => ( {
    sliderImage,
    fullImage: `./images/${sliderImage}-full.jpg`,
    thumbElement: document.createElement( 'img' ),
} ) );

let currentIndex = null;
const lastIndex = sliderImages.length - 1;

const firstLoad = () => {
    setNav( 0 );
    document.querySelector( '#prev-btn' ).addEventListener( 'click', setNavPrev );
    document.querySelector( '#next-btn' ).addEventListener( 'click', setNavNext );
};

const setMainImage = ( index ) => {
    document.querySelector( '#main-image' ).src = dataBuckets[index].fullImage;
    console.log( dataBuckets[index] );
};

const setNav = ( index ) => {
    currentIndex = index;
    setMainImage( currentIndex );
};

const setNavNext = () => {
    const nextIndex = ( currentIndex == lastIndex ) ? 0 : currentIndex + 1;
    setNav( nextIndex );
    stopAutoRotation();
};

const setNavPrev = () => {
    const prevIndex = ( currentIndex == 0 ) ? lastIndex : currentIndex - 1;
    setNav( prevIndex );
    stopAutoRotation();
};

const rotateInterval = 7000;
let autoRotateTimer;

const startAutoRotation = () => {
    autoRotateTimer = setInterval( () => {
        setNavNext();
    }, rotateInterval );
};

const stopAutoRotation = () => {
    clearInterval( autoRotateTimer );
    startAutoRotation();
};

window.addEventListener( 'load', () => {
    firstLoad();
    startAutoRotation();
} );

const hamburgerMenu = document.querySelector( '.menu-icon' );
hamburgerMenu.addEventListener( 'click', () => {
    document.querySelector( '.nav-open-overlay' ).style.display = 'block';
    document.querySelector( '.nav-sidebar' ).style.display = 'block';
} );

document.querySelector( '#closeMenuBtn' ).addEventListener( 'click', () => {
    document.querySelector( '.nav-open-overlay' ).style.display = 'none';
    document.querySelector( '.nav-sidebar' ).style.display = 'none';
} );

// Lexi Dugo A01348881 2024
