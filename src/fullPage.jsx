import { useState, useEffect } from "react";
import Menu from "./menu";
import PageMain from "./pageMain";
import Cart from "./cart";
import GalleryFullScreen from "./galleryFullScreen";

function FullPage(){

    const [cartVisible, setCartVisible] = useState (false);

    const [galleryFSVisible, setGalleryFSVisible] = useState(false)

    

    const imageCount = 4;

    const mainImages = Array.from ({ length: imageCount }, (_, i) => `./images/image-product-${i + 1}.jpg`);

    const thumbImages = Array.from ({ length: imageCount },(_, i) => `./images/image-product-${i + 1}-thumbnail.jpg`);

    const [product, setProduct] = useState({name: "Fall Limited Edition Sneakers", price: 125, quantity: 0});

    const productImages = thumbImages.map((thumbImage, index) =>({
        thumbImage,
        mainImage: mainImages[index]
      }))

      useEffect (() =>{

        const mediaQuery = window.matchMedia('(min-width: 1000px)')

        if(mediaQuery.matches){
            if(galleryFSVisible){
                document.body.style.overflow = 'hidden'
                window.scrollTo(0, 0);
            } else {
                document.body.style.overflow = 'auto'
            }
        }

        return () =>{
            document.body.style.overflow = 'auto'
        }
    
      }, [galleryFSVisible])

    



    return(
        <div className="fullPage-wrapper">


            {
                galleryFSVisible && <GalleryFullScreen productImages={productImages} mainImages={mainImages} thumbImages={thumbImages} setGalleryFSVisible={setGalleryFSVisible}></GalleryFullScreen>
            }

            


            <Menu cartVisible={cartVisible} setCartVisible={setCartVisible} product={product}></Menu>

            
              
                {
                    cartVisible && <Cart product={product} setProduct={setProduct} thumbImages={thumbImages}></Cart>

                }
                


            
            
            <PageMain imageCount={imageCount} mainImages={mainImages} thumbImages={thumbImages} product={product} setProduct={setProduct} productImages={productImages} setGalleryFSVisible={setGalleryFSVisible}></PageMain>
            
        </div>
    )
}

export default FullPage