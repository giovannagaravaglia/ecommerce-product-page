import GalleryDefaultScreen from "./GalleryDefaultScreen";
import InfoProduct from "./infoProduct";
import Menu from "./menu";


function PageMain({imageCount, thumbImages, mainImages, product, setProduct, addProduct, productImages, setGalleryFSVisible}){
    return(
        <div className="pageMain-wrapper">
            <GalleryDefaultScreen imageCount={imageCount} thumbImages={thumbImages} mainImages={mainImages} productImages={productImages} setGalleryFSVisible={setGalleryFSVisible}></GalleryDefaultScreen>
            <InfoProduct product={product} setProduct={setProduct} addProduct={addProduct}></InfoProduct>
        </div>
    )
}

export default PageMain