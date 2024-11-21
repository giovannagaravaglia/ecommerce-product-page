import { useState, useEffect } from "react"

function GalleryFullScreen ({mainImages, thumbImages, productImages, setGalleryFSVisible}){

    const imageCount =4;

    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(mainImages[currentIndex])

    const nextImage = () =>{
        console.log('next')

        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageCount)
    }

    const previousImage = () =>{
        console.log('previous')

        setCurrentIndex ((prevIndex) => (prevIndex - 1 + imageCount) % imageCount)
    }

    const selectedImage = () =>{
        setCurrentIndex(index)
    }

    const closePhoto = () =>{
        setGalleryFSVisible(false)
    }

    useEffect (()=>{
        setCurrentImage(mainImages[currentIndex])
    }, [currentIndex])

    return(
      <div className="galleryFS-wrapper">

        <div className="galleryFS-wrapper__container">

            <div className="galleryFS-imgClose" onClick={closePhoto}>
                <svg className="galleryFS-imgClose__img" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
            </div>

            <div className="galleryFS-mainPhoto">

                <div onClick={previousImage} className="galleryFS-icon__wrapper galleryFS-icon-previous">
                    <svg className="galleryFS-icon" viewBox="0 0 14 18"  xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>

                </div>

                
                
                <img src={currentImage} alt="" className="galleryFS-mainPhoto__img" />

                <div onClick={nextImage} className="galleryFS-icon__wrapper galleryFS-icon-next">
                    <svg className="galleryFS-icon" viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </div>
            </div>

            <div className="galleryFS-thumbnails">
                {
                productImages.map((productImage, index) =>{
                    return(
                        <div key={index} onClick={()=> setCurrentIndex(index)} className={`galleryFS-thumbnails__wrapper ${currentIndex === index ? 'galleryFS-selectedThumb__wrapper' : ''}`}>
                            <img src={productImage.thumbImage} alt="" className={`galleryFS-thumbnails__img ${currentIndex === index ? 'galleryFS-selectedThumb' : ''}`} />
                        </div>
                    )
                })  
                }
            </div>

        </div>

      </div>
    )
}

export default GalleryFullScreen