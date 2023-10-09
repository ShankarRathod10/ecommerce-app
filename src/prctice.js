import { useState,useReducer } from "react";

function reducer (state,action){
    if (action.type === "add"){
        return[...state,{id: state.length +1, title:action.payload,isPRC :false}];
    }else if (action === 'delete'){
        return [...state.filter(prc=> prc.id !==action.id)];
    }else {
        const updatedState = state.map(prc => {
            if(prc.id === action.id){
                return {...prc,isPRC : !prc.isPRC};
            }else {
                return prc;
            }
        });
        return updatedState;
    }

}

function PRC(){
    const [prcName,setprcName] = useState ('');
    const [state,dispatch] = useReducer(reducer,[{id:1,title:"My Practice", isPRC : false}])
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h4 className="text center">Practice</h4>
                    {state.map(prc => (
                        <div key={prc.id} className="col-sm">
                            <h5 style={{"textDecoration":prc.isPRC ? 'line through': ''}}>{prc.title}</h5>
                            <button className="btn btn-primary" onClick={() => dispatch({type:"delete",id:prc.id})}>Select</button>
                            <button className="btn btn-danger" onClick={() => dispatch({type:"add", id: prc.id})}>Remove</button>
                        </div>
                    ))}
                    
                </div>
                <div className="col-sm">
                    <h4 className="text center">Go For Practice</h4>
                </div>
            </div>
        </div>
    )
}
export default PRC;