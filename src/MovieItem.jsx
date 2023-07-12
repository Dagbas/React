import PropTypes from "prop-types";

//Prints a Movie Item
function MovieItem(props) {
    return (
<div className="row mt-3 d-flex justify-content-center">
    <div className="col-md-6 ">
        <div class="card">
            <p>Movie Title: {props.title}</p>
            <p>Description: {props.description}</p>
            <p>Year: {props.year}</p>
            <p>Genre: {props.genre}</p>
        </div>
    </div>
</div>
    )
}

//Default values and validation
MovieItem.defaultProps = {
    title: 'Untitled',
    description: 'N/A',
    year: 1900,
    genre: 'N/A',
}

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string,
};

export default MovieItem;