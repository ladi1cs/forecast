import { Select } from '../styles/styles';
import { setCurrent } from '../actions/actions';
import { useDispatch } from "react-redux";

interface IComboProps {
  options: string[][],
}

const ComboBox = (props:IComboProps) => {
  const dispatch = useDispatch();
  const onSelected = (item:string) => {
    dispatch(setCurrent(item));
  }

  return (
    <Select onChange={e => onSelected(e.target.value)}>
        {props.options.map(item => {return (<option key={item[0]} value={item[0]}>{item[1]}</option>)})}
    </Select>
  );    
  
}

export default ComboBox;