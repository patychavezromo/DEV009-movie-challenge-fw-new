import styles from './VisualizadorDePeliculas.module.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import ModalPelicula from '../modal-pelicula/ModalPelicula'


export default function VisualizadorDePeliculas({data}) {
    const [ openModal, setOpenModal ] = useState(false)
    const [ peliculaSeleccionada, setPeliculaSeleccionada ] = useState({})
    const resultado = data.results.map(pelicula => {
        const onClickPelicula = () => {
            setOpenModal(true)
            setPeliculaSeleccionada(pelicula)
        }
        return <div key={pelicula.id} className={styles.tarjetaDePelicula} onClick={onClickPelicula}>
            <img className={styles.poster} src={'https://image.tmdb.org/t/p/w200/' + pelicula.poster_path}></img>
            <p>{pelicula.original_title}</p>
            <p>{pelicula.release_date}</p>
        </div>
    })
    return (<>
        <div className={styles.contenedorDeTarjetas}>{resultado}</div>
        <ModalPelicula 
            open={openModal} 
            onClose={() => setOpenModal(false)}
            pelicula={peliculaSeleccionada}
        />
        dfdsaffs
    </>)
}

VisualizadorDePeliculas.propTypes = {
    data: PropTypes.object
}