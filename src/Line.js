import React from 'react';
import {Line} from 'react-chartjs-2';
import {cos} from './macLaurin';
import {serie} from './macLaurin';
import NumBar from './Components/NumBar/NumBar';


class Grafica extends React.Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);

    //Objeto necesario para el funcionamiento de charts.js, el mismo es modificado en dos valores para obtener la grafica
    this.state = {
      labels: serie(0, 1, 2).map(String),
      datasets: [
        {
          label: "Grafica de serie de MacLaurin para Cos(x)",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: cos(0),
        },
      ],
    };
  }

  //Metodo para actualizacion del valor y cambio en la grafica
  changeState(value) {
    this.setState({
      labels: serie(value, 1, 2).map(String),
      datasets: [
        {
            label: "Grafica de serie de MacLaurin para Cos(x)",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: cos(value)
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <h2>Grafica para serie de MacLaurin</h2>
        <NumBar onClick={this.changeState} />
        <Line data={this.state} />
      </div>
    );
  }
}
export default Grafica;


