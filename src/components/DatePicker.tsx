import {TextBox} from '../styles/styles';
import { setEndDate } from '../actions/actions';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from '../reducers/reduser';

const DatePicker = () => {
  const dispatch = useDispatch();
  const currDate: Date = useSelector<IRootState, IRootState["endDate"]>(state => state.endDate);

  const onDateChanged = (d: string) => {
    const date = new Date(d);
    dispatch(setEndDate(date));
  }

  const formattedDate = (date:Date = new Date()) => {
    return date.toISOString().substring(0, 10);
  }

  return  (<TextBox 
              type='date' 
              onChange={(e) => onDateChanged(e.target.value)}
              value={formattedDate(currDate)} />);
}

export default DatePicker;