import logo from './logo.svg';
import './App.css';
import { decrement, increment } from './redux';
import { connect } from 'react-redux';

function Counter({count, onIncrement,onDecrement}) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <p>{count}</p>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => ({count:state});

const mapDispatchToProps = (dispatch) =>(
  {
    onIncrement:()=> dispatch(increment()),
    onDecrement:()=> dispatch(decrement())
  }
);



export default connect(mapStateToProps,mapDispatchToProps) (Counter);
