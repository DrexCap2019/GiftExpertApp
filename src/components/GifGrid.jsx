
import {GiftItem} from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>

            { isLoading && (<h2>Cargando...</h2>) }

            <div className="card-grid">
                {
                    images.map( image => (
                        <GiftItem
                            key={image.id}
                            { ...image } // Cuando viene muchas propiedades y la sparse en el componente
                        />
                    ))
                }
            </div>
        </>
    )
};