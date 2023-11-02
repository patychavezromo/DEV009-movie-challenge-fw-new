import PropTypes from 'prop-types';

const paginasPorSeccion = 13;

export default function ControlesPagina({paginaActual, totalDePaginas, setNumeroDePagina}) {
    const [primerPaginaDeSeccion, ultimaPaginaDeSeccion] = getPaginasAMostrar(paginaActual, totalDePaginas);
    const botonesNumericos = getBotonesNumericos(primerPaginaDeSeccion, ultimaPaginaDeSeccion, setNumeroDePagina);
    const [botonInicial, botonFinal] = getBotonPrimeroYUltimo(totalDePaginas, setNumeroDePagina)
    const [botonSiguiente, botonAnterior] = getBotonSiguienteYAnterior(paginaActual, totalDePaginas, setNumeroDePagina)
    return (<div>
        {botonInicial}
        {botonSiguiente}
        {botonesNumericos}
        {botonAnterior}
        {botonFinal}
    </div>)
}

function getBotonesNumericos(primerPaginaDeSeccion, ultimaPaginaDeSeccion, setNumeroDePagina) {
    let botonesNumericos = [];
    for(let i = primerPaginaDeSeccion; i <= ultimaPaginaDeSeccion; i++) {
        botonesNumericos.push(<button key={'pagina' + i} onClick={() => setNumeroDePagina(i)}>
            {i}
        </button>)
    }
    return botonesNumericos
}

function getBotonPrimeroYUltimo(totalDePaginas, setNumeroDePagina) {
    return [
        <button key='pagina-inicial' onClick={() => setNumeroDePagina(1)}>
            primera
        </button>,
        <button key='pagina-final' onClick={() => setNumeroDePagina(totalDePaginas)}>
            ultima
        </button>
    ]
}

function getBotonSiguienteYAnterior(paginaActual, totalDePaginas, setNumeroDePagina) {
    const paginaAnterior = Math.max(paginaActual-1, 1);
    const paginaSieguiente = Math.min(paginaActual+1, totalDePaginas)
    return [
        <button key='pagina-anterior' onClick={() => setNumeroDePagina(paginaAnterior)}>
            anterior
        </button>,
        <button key='pagina-siguiente' onClick={() => setNumeroDePagina(paginaSieguiente)}>
            siguiente
        </button>
    ]
}

function getPaginasAMostrar(paginaActual, totalDePaginas) {
    const seccionActual = Math.trunc((paginaActual - 1) / paginasPorSeccion);
    const primerPaginaDeSeccion = (seccionActual * paginasPorSeccion) + 1;
    const ultimaPaginaDeSeccion = Math.min(primerPaginaDeSeccion + paginasPorSeccion - 1, totalDePaginas)
    return [primerPaginaDeSeccion, ultimaPaginaDeSeccion]
}

ControlesPagina.propTypes = {
    paginaActual: PropTypes.number,
    totalDePaginas: PropTypes.number,
    setNumeroDePagina: PropTypes.func
}