import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useSelector } from "react-redux";
import { IRootState } from '../reducers/reduser';

const Chart = () => {
  const data: string[] = useSelector<IRootState, IRootState["data"]>(state => state.data);
  const location: string = useSelector<IRootState, IRootState["current"]>(state => state.current);

  const options = {
    chart: {
      type: 'spline',
      showAxis: true
    },
    title: {
      text: '',
    },
    series: [
      {
        type: 'line',
        name: location || '',
        data: data
      }
    ],
    xAxis:[{
      visible: false
    }],
    yAxis:[{
      visible: false
    }]
  };
  return <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  
}

export default Chart;