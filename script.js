document.getElementsByClassName('slideshowImage')

const nextImage = function () {
    // Find current image
    /** @type {HTMLImageElement}  */
    const currentImage = document.querySelector('.show')

    // Find the next image to show 
    let nextImage = currentImage.nextElementSibling
        if (!nextImage){
            /** @type {HTMLDivElement}  */
            const slideshowContainer = document.querySelector('.slideshowContainer')
            nextImage = slideshowContainer.firstElementChild
        }
    // remove "show" from current image
    currentImage.classList.remove('show')
    
    // add "show" to next image, to become the current image
    nextImage.classList.add('show')
}

setInterval(nextImage,5000)