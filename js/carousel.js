const buttons = document.querySelectorAll("[data-carousel-button]")
const closeBtn = document.getElementById("close")
const showBtn = document.getElementById("showPhotos")
const galleryContainer = document.getElementById("galleryContainer")
const fastLink = document.querySelectorAll("[data-fastChoise]")

let nextOrPrev = (button) => {
    offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        nextOrPrev(button)
    })
})

function fullscreen() {
    console.log("fullscreen called");
    galleryContainer.style.visibility = "visible";
    galleryContainer.style.display = "flex";
    galleryContainer.style.height = "100hv";
    galleryContainer.style.width = "100vw";
    // galleryContainer.style.zIndex = "400000"

}

fastLink.forEach(link => {
    link.addEventListener("click", (e) => {
        console.log("fast hit", link.dataset.fastchoise);
        window.location.href = "#" + link.dataset.fastchoise

        // if (link.dataset.fastchoise === "photo") {
        //     console.log("Graphics fast hit");
        //     window.location.href = "#" + link.dataset.fastchoise
        //     console.log(document.querySelector("#photo").parentNode);
        //     let tmp = document.querySelector("#photo").parentNode;

        //     document.querySelector("#photo").parentNode.style.border = "10px white solid"
        //     document.querySelector("#photo").parentNode.addEventListener("mouseout", (e) => { 
        //     document.querySelector("#photo").parentNode.style.border = "none";
        //     console.log("e",e);
        //     })
        // }
        // if (link.dataset.fastchoise === "scroll") {
        //     window.location.href = "#single-line menu"
        // }
        // if (link.dataset.fastchoise === "ix" ||
        //     link.dataset.fastchoise === "js" ||
        //     link.dataset.fastchoise === "nodejs") {
        //     window.location.href = "#coding"
        // }
        // if (link.dataset.fastchoise === "ski") {
        //     window.location.href = "#skiCard"
        // }
        // if (link.dataset.fastchoise === "soc") {
        //     window.location.href = "#pædagog"
        // }

        setTimeout(() => {
            if (link.dataset.fastchoise !== "singleLineMenu")
            window.scrollBy(0, -100)
        }, 1000);
    })
})

// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.mozRequestFullScreen) { /* Firefox */
//         elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE/Edge */
//         elem.msRequestFullscreen();
//     }
// }


// function closeFullscreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     } else if (document.mozCancelFullScreen) { /* Firefox */
//         document.mozCancelFullScreen();
//     } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//         document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) { /* IE/Edge */
//         document.msExitFullscreen();
//     }
// }

// nok en løsning på fullscreen
// document.addEventListener('fullscreenchange', exitHandler);
// document.addEventListener('webkitfullscreenchange', exitHandler);
// document.addEventListener('mozfullscreenchange', exitHandler);
// document.addEventListener('MSFullscreenChange', exitHandler);

// function exitHandler() {
//     if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
//         ///fire your event
//     }
// }  

showBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("should show gallery in 100% x 100%")
    fullscreen()

    // galleryContainer.style.visibility = "visible";
    // galleryContainer.style.display = "flex";

    // galleryContainer.webkitRequestFullscreen();
})


closeBtn.addEventListener('click', () => {
    // closeFullscreen();
    galleryContainer.style.visibility = "hidden";
    galleryContainer.style.display = "none";
})

document.onkeydown = function (evt) {
    console.log("key:", evt);
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        // alert("Escape"); 
        galleryContainer.style.visibility = "hidden";
        galleryContainer.style.display = "none";
    }
}