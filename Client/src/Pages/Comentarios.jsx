import { useParams } from "react-router-dom";


const Comentarios = () => {
    const { id } = useParams();

    return(
        <div className="pt-10">{id}</div>
    )
}

export default Comentarios;