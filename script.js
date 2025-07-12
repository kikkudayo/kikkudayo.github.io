const image = document.getElementById('soul');
const container = document.querySelector('.kikkudayo');

let topPos = 97;  // Match initial top in CSS
let leftPos = 468; // Match initial left in CSS

const step = 10;
image.style.top = `${topPos}px`;
image.style.left = `${leftPos}px`;

let soul_move = new Audio('sounds/soul_move.mp3');

let keyHeld = false;
let menuVisible = 0;
document.addEventListener('keydown', function (event) {
    if (keyHeld) return;
    keyHeld = true;

    switch (event.key) {
        case 'ArrowUp':
            if (menuVisible > 0) {
                if (menuVisible == 2) {
                    menuVisible--;

                } else if (menuVisible == 3) {
                    menuVisible--;
                }
            } else {

                topPos -= step;
            }
            break;
        case 'ArrowDown':
            if (menuVisible > 0) {
                if (menuVisible == 1) {
                    menuVisible++;
                } else if (menuVisible == 2) {
                    menuVisible++;
                }
            } else {
                
                topPos += step;
            }
            break;
        case 'ArrowLeft':
            
        if(menuVisible == 0){
            leftPos -= step;

        }
            break;
        case 'ArrowRight':
            if (menuVisible == 0) {
                leftPos += step;
            }
            break;
        case 'c':

            if (menuVisible) {
                document.getElementById("menu-image").style.visibility = "hidden";
                menuVisible = 0;
                return;
            } else {
                document.getElementById("menu-image").style.visibility = "visible";
                menuVisible = 1;


                break;
            }

        default:
            keyHeld = false;
            return;
    }
    document.getElementById("menu-image").src = `images/menu-${menuVisible}.png`;

    console.log(menuVisible)
    soul_move.play();
    image.style.top = `${topPos}px`;
    image.style.left = `${leftPos}px`;
});

document.addEventListener('keyup', function () {
    keyHeld = false;
});