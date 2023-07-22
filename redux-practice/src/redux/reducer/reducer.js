// 어떤 state 가 있는지 초기화 시켜주기
let initalState ={
    count:0,
    id : " ",
    password : " "
}


// (저장할 값 , 어떤 action에 따라 행동해야할지) -> 행동 지침 역학
function reducer(state=initalState , action){
    if(action.type === "INCREMENT"){
        return {...state,count:state.count + action.payload.num}; //...state = > state 값은 유지하되 count의 값만 바꿈
    }else if(action.type === "LOGIN"){
        return {...state , id : action.payload.id  , password : action.payload.password}
    }else if (action.type ==="DISINCREMENT"){
        return {...state , count : state.count - action.payload.num}
    }

    return {...state};
};

export default reducer;