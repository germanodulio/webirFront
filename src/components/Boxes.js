import React, { Component } from "react";
import CurrencyBox from "./CurrencyBox";
import Grid from "@material-ui/core/Grid";
import argFlag from "../images/flag_arg.png";
import uruFlag from "../images/flag_uru.png";
import usaFlag from "../images/flag_usa.png";
import "./styles/Boxes.css";

class boxes extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      cotizaciones: [
        {
          id: 1,
          title: "Cotización Dólar USA - Peso Argentino",
          img1: usaFlag,
          img2: argFlag,
          cot: 0
        },
        {
          id: 2,
          title: "Cotización Dólar USA - Peso Uruguayo",
          img1: usaFlag,
          img2: uruFlag,
          cot: 0
        }
      ]
    };
  }
  async componentDidMount(){// se paraliza con un wait para que continue luego de recibir la info
    await this.fetchCotization()
  }

  fetchCotization = async () => {
    
    let response = await fetch('https://localhost:5001/api/Quotations',{            
    }).then((response) => {         
        return response.json()
    })
    .then((recurso) => {      
        var cotAux = this.state.cotizaciones;
        cotAux[1].cot = recurso[2].value;
        cotAux[0].cot = recurso[0].value;
        this.setState({cotizaciones: cotAux});
    })
  }

  render() {
    return (
      <Grid container className="root">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {this.state.cotizaciones.map(item => {
              return (
                <CurrencyBox
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  img1={item.img1}
                  img2={item.img2}
                  cot={item.cot}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default boxes;
