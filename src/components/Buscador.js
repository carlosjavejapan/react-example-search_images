import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        //tomamos el valor del input
        const termino = this.busquedaRef.current.value;

        //lo enviamos akl componente principal
        this.props.datosBusqueda(termino);
    }
    render() { 
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control" placeholder="画像探す。例：coffee"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-danger btn-block" value="search"/>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscador;
