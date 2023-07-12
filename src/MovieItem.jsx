import PropTypes from "prop-types";

function MovieItem(props) {
    return (
<div className="row mt-3 d-flex justify-content-center">
    <div className="col-md-6 ">
        <p>Movie Title: {props.title}</p>
        <p>Description: {props.description}</p>
        <p>Year: {props.year}</p>
        <p>Genre: {props.genre}</p>
    </div>
</div>
    )
}

MovieItem.defaultProps = {
    text: "Untitled To Do Item"
}

MovieItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MovieItem;