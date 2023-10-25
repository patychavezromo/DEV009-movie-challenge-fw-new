export default function VisualizadorDePeliculas(props) {
    const data = props.data;
    const resultado = data.results.map(pelicula => 
        <div key={pelicula.id}>
            <p>{pelicula.original_title}</p>
            <p>{pelicula.overview}</p>
        </div>
    )
    return resultado
}