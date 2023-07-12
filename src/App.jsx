import MovieItem from "./MovieItem"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <div className="container board mt-3">
        <div className="row text-center">
          <h1>Movie List</h1>
          <p>
            WHAT ABOUT MOVIES?
          </p>
        </div>
        <div className="row justify-center text-center">
          <MovieItem 
            title={"Secret Life of Walter Mitty"} 
            description={"Walter Mitty (Ben Stiller), an employee at Life magazine, spends day after monotonous day developing photos for the publication. To escape the tedium, Walter inhabits a world of exciting daydreams in which he is the undeniable hero."} 
            year={2013} 
            genre={"Comedy"} />
          <MovieItem 
            title={"Ocean's 8"} 
            description={"Debbie Ocean assembles an all-female team of thieves and specialists for a heist during the Met Gala, aiming for the $150 million worth of diamonds around the neck of world-famous actress Daphne Kluger"} 
            year={2018} 
            genre={"Action"} />
          <MovieItem 
            title={"Captain America: Civil War"} 
            description={"Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team."} year={2016} 
            genre={"Action"} />

        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-6 ">
            <div className="input-group mb-3">
              <form>
                <input type="text" className="form-control" placeholder="Movie Title" aria-label="Movie Title Input" />
                <input type="text" className="form-control" placeholder="Description" aria-label="Movie Title Input" />
                <input type="text" className="form-control" placeholder="Year" aria-label="Movie Title Input" />
                <input type="text" className="form-control" placeholder="Genre" aria-label="Movie Title Input" />
              </form>

              <div className="input-group-append">
                <button className="btn btn-primary h-100 m-0" type="button">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
