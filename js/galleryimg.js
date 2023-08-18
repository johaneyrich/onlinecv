const galleryImage = document.querySelectorAll(".gallery-image img")

function showLargeImage(path) {
    try {
        const frame = document.querySelector('.largeImage');
        const removeImg = document.querySelector('.largeImage img');
        if(removeImg) frame.removeChild(removeImg)
        let img = document.createElement('img');
        img.src = path;
        // frame.innerHTML = `<img src="${path}" />`;
        frame.appendChild(img)
        // frame.style.height = "80%";
        // frame.clientHeight = "80%";
        // frame.setAttribute.height = "80%";
        // frame.setAttribute("style", 'height:90%')


    } catch (error) {
        console.log('showLargeImage error', error);
    }
}

function getParent(element) {
    try {
        return element.parentNode;
    } catch (error) {
        console.log("getParent error", error);
        return false;
    }
}

const photos = document.querySelectorAll('.gallery-image img')
for(i = 0;i <photos.length;i++){
photos[i].addEventListener('click', function (e) {
    try {
        e.preventDefault();
        let list = e.target.parentNode.parentNode.classList
        console.log("list", list);
        console.log(list[0]);
        for (x = 0; x < list.length; x++) {
            if (list[x] == "gallery-image") {
                console.log("img src", e.target.src);
                showLargeImage(e.target.src)
            }
        }
    } catch (error) {
        console.log('error', error);
    }

})
}
