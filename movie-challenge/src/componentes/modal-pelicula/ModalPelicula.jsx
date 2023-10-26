import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import styles from './ModalPelicula.module.css'

export default function ModalPelicula({open, onClose, pelicula}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={styles.modal}>
                <img className={styles.poster} src={'https://image.tmdb.org/t/p/w300/' + pelicula.poster_path}></img>
                <h1>{pelicula.original_title}</h1>
                <p>{pelicula.overview}</p>
            </div>
        </Modal>
    )
}

ModalPelicula.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    pelicula: PropTypes.object
}