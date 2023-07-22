import './App.css';
import Box from "./component/Box";
import {useDispatch, useSelector} from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const count = useSelector(state=>state.count);


  let id = useSelector(state =>state.id)
  let pw = useSelector(state =>state.password)
  const increase=()=>{
    // dispatch 가 액션을 가져가서 reducer에 전달
    dispatch({type :"INCREMENT" , payload : {num : 5} })//{타입 : , 옵션 (필요한 정보를 보내줄 수 있는 옵션): }
  };
  const login =()=>{
    dispatch({type : "LOGIN" , payload : {id : "sohee" , password : "1234"} })
  };
  const discrease =()=>{
    dispatch({type : "DISINCREMENT" , payload : {num:5} })
  };


  return (
    <div>
      <h1>{id}{pw}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={discrease}>감소</button>
      <button onClick={login}>login! </button>
      <Box/>
    </div>
  );
}

export default App;
