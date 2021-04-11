
import {useEffect} from 'react';
import Chart from './components/Chart';
import {Label, Container} from './styles/styles';
import ComboBox from './components/ComboBox';
import DatePicker from './components/DatePicker';
import { useSelector, useDispatch } from "react-redux";
import { IRootState} from './reducers/reduser';
import { setData } from './actions/actions';
import { getForecastData } from './api/api';
import { extractChartData } from './utils/data';
import { Locations, getCity} from './constants/common';

function App() {
  const dispatch = useDispatch();
  const date: Date = useSelector<IRootState, IRootState["endDate"]>(state => state.endDate);
  const location: string = useSelector<IRootState, IRootState["current"]>(state => state.current);

  useEffect(() => {
    getForecastData(location).then((resp) => {
      const newData = extractChartData(resp.properties.periods, date);  
      dispatch(setData(newData)); 
    });    
  },[date, location]);

  return (
    <Container>
      <Label size={30} bold={true}>Forecast</Label>
      <Label size={25} color={'gray'}>{`${getCity(location)}`}</Label>
      <Chart/>
      <div>
        <ComboBox options={Object.entries(Locations)}/>
        <DatePicker/>
      </div>
    </Container>
  );
}

export default App;
