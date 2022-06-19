import { useParams } from "react-router-dom";
import { connect } from "react-redux";

function Detail({toDos}) {
    const id = useParams().id;
    console.log(id);

    const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
    console.log(toDo);

    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created At: {toDo?.id}</h5>
        </>
    ); 
}

function mapStateToProps(state) {
    return {toDos: state};
}

export default connect(mapStateToProps)(Detail);