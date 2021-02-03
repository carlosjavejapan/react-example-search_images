import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

    state = {
        termino : '',
        imagenes : [],
        pagina : ''
    }

    scroll = () => {
        const elemento = document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth','start')
    }

    paginaAnterior = () => {
        // leer el state de la pagina actual
        let pagina = this.state.pagina;

        // leer si la pagina es 1, ya no ir hacia adelante
        if (pagina === 1) return null;

        // restar uno a la pagina actual
        pagina -= 1;
        // agregar el cambio al state
        this.setState({
            pagina
        }, () => {
            this.consultarApi();
            this.scroll();
        });

        //console.log(pagina)
    }

    paginaSiguiente = () => {
        // leer el state de la pagina actual
        let pagina = this.state.pagina;

        // sumar uno a la pagina actual
        pagina += 1;
        // agregar el cambio al state
        this.setState({
            pagina
        }, () =>{
            this.consultarApi();
            this.scroll();
        });

        //console.log(pagina)
    }

    consultarApi = () => {
        const termino = this.state.termino;
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=20109236-2db727c6c8239c8af89e71693&q=${termino}&per_page=30&page=${pagina}`;

        fetch(url)
        .then(respuesta => respuesta.json() )
        .then(resultado => this.setState({ imagenes : resultado.hits}))

    }

    datosBusqueda = (termino) => {
        // console.log(termino);
        this.setState({
            termino : termino,
            pagina : 1
        }, () => {
            this.consultarApi();
        })
    }

    render() {
        return (
            <div className="app container container-fluid">
                <div className="jumbotron bg-primary">
                    <h1 className="lead text-center text-white">Image Search Engine</h1>
                    <Buscador
                        datosBusqueda={this.datosBusqueda}
                    />
                </div>
                <div className="row justify-content-center">
                    <Resultado
                        imagenes={this.state.imagenes}
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
            </div>
        );
    }
  
}

export default App;

// import React from 'react';
// import Buscador from './components/Buscador';

// function App() {
//   datosBusqueda = (termino) => {
//     console.log(termino);
//   }
//   return (
//     <div className="app container">
//       <div className="jumbotron bg-primary">
//         <p className="lead text-center">buscador de imagenes</p>
//         <Buscador
//           datosBusqueda={this.datosBusqueda}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
