import { getPeliculas } from '../../logica/themoviedb/cliente'
import { useQuery } from "react-query";
import VisualizadorDePeliculas from '../../componentes/visualizador-de-peliculas/VisualizadorDePeliculas';
import { useState } from 'react';
import ControlesPagina from '../../componentes/controles-pagina/ControlesPagina'

export default function Home() {
    const [ numeroDePagina, setNumeroDePagina ] = useState(1)
    const { data, status } = useQuery(["peliculas", numeroDePagina], () => getPeliculas(numeroDePagina));
    return (
        <>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && mostrarPeliculas(data, numeroDePagina, setNumeroDePagina)}
        </>
    )
}

function mostrarPeliculas(data, numeroDePagina, setNumeroDePagina) {
    const totalDePaginas = 500;
    return (<>
        <VisualizadorDePeliculas data={data}></VisualizadorDePeliculas>
        {/* <button onClick={() => setNumeroDePagina(paginaActual => paginaActual+1)}>Siguiente</button> */}
        <ControlesPagina
            paginaActual={numeroDePagina} 
            totalDePaginas={totalDePaginas} 
            setNumeroDePagina={setNumeroDePagina}
        ></ControlesPagina>
    </>)
}