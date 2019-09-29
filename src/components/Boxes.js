import React, { Component } from "react";
import CurrencyBox from "./CurrencyBox";
import Grid from "@material-ui/core/Grid";
import ARGFlag from "../images/ARGFlag.png";
import URUFlag from "../images/URUFlag.png";
import USAFlag from "../images/USAFlag.png";
import "./styles/Boxes.css";
// import Typography from "@material-ui/core/Typography";

class boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cotizaciones: [
        {
          id: 1,
          title: "Cotización Dólar USA - Peso Argentino",
          img1: USAFlag,
          img2: ARGFlag,
          cot: 60.56
        },
        {
          id: 2,
          title: "Cotización Dólar USA - Peso Uruguayo",
          img1: USAFlag,
          img2: URUFlag,
          cot: 37.65
        }
      ]
    };
  }
  render() {
    return (
      <Grid container className="root">
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {this.state.cotizaciones.map(item => {
              return (
                <CurrencyBox
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
