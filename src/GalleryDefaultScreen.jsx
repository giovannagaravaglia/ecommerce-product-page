import { useState, useEffect } from "react";


function GalleryDefaultScreen ( {imageCount, thumbImages, mainImages, productImages, setGalleryFSVisible}){


  


  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState(mainImages[currentIndex])

  useEffect(() =>{
    setCurrentImage(mainImages[currentIndex])
  }, [currentIndex])

  const openPhoto = () =>{
    setGalleryFSVisible(true)
  }

  const nextImage = () =>{
    setCurrentIndex((prevIndex) => (prevIndex +1 ) % imageCount)
  }
  

  const previousImage = () =>{
    setCurrentIndex((prevIndex) => (prevIndex - 1 +imageCount ) % imageCount)
  }

  return(
    <div className="gallery-wrapper">
      <div className="gallery-mainPhoto">
        <img className="icon-previous icon" src="./images/icon-previous.svg" onClick={previousImage} alt="" />
        
        <img className="gallery-mainPhoto__img" src={currentImage} alt="shoes" onClick={openPhoto}/>
        <img className="icon-next icon" src="./images/icon-next.svg" onClick={nextImage} alt="" />

      </div>

      <div className="gallery-thumbnails">
        {
          productImages.map((productImage, index)=>{

            return(

              <div className={`gallery-thumbnail__wrapper ${currentIndex === index ? 'gallery-selectedThumb__wrapper' : ''}`}>
              <img
              key={index}
              className={`gallery-thumbnails__img ${currentIndex === index ? 'gallery-selectedThumb' : ''}`}
              src={productImage.thumbImage}
              onClick ={() => setCurrentIndex (index)}
              alt="shoes" /></div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default GalleryDefaultScreen