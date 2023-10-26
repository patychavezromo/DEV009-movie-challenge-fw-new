import { getPeliculas } from '../../logica/themoviedb/cliente'
import { useQuery } from "react-query";
import VisualizadorDePeliculas from '../../componentes/visualizador-de-peliculas/VisualizadorDePeliculas';

export default function Home() {
    const { data, status } = useQuery("peliculas", getPeliculas);
    return (
        <div>
            {status === "error" && <p>Error fetching data</p>}
            {status === "loading" && <p>Fetching data...</p>}
            {status === "success" && (
                <VisualizadorDePeliculas data={data}></VisualizadorDePeliculas>
            )}
        </div>
    )
}