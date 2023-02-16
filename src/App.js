import logo from './logo.svg';
import './App.css';

//menbuat funsi navbar yang akan di panggil di index.js
function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">BOOTCAMP Bacth 5 : Expriment with REACTJS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="d-flex" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Abaot</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contac</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    </div>
  );
}

//menbuat fungsi Body yang akan dipanggil di index.js
function Body(){
  return (
    <div className='Body'>
      <h1>This is React</h1>
    </div>
  )
}

//men eksport fungsi yang telah dibuat
export {Navbar, Body};
