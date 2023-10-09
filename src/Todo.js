 import { useState,useReducer } from "react";
 function reducer (state,action){
    if (action.type === 'add'){
        return [...state, {id: state.length +1, title:action.payload,isclassCompleted : false}];
    }else if (action.type === "delete"){
        return [...state.filter(todo => todo.id !==action.id)];
    }else{
        const updatedState = state.map(todo => {
            if(todo.id ===action.id) {
                return{...todo,isclassCompleted: !todo.isclassCompleted };
            }else {
                return todo;
            }
        });
        return updatedState;
    }
 }

 function Todo(){
    const [todoName,setTodoName] = useState('');
    const [state,dispatch] = useReducer(reducer, [{id: 1, title: "Lets waste Time", isclassCompleted: false}])
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-sm">
                    <h3 className="text center">List of Todo</h3>
                    {state.map(todo => (
                        <div key={todo.id} className="my-2">
                            <h4 style={{'textDecoration': todo.isclassCompleted ? 'line-through' : ''}}>{todo.title}</h4>
                            <button className="btn btn-danger me-5" onClick={() => dispatch({type:"delete",id:todo.id})}>Delete</button>
                            <button className="btn btn-success" onClick={() => dispatch ({type:'toggle',id:todo.id})}>{todo.isclassCompleted ? 'In Progress' : 'Complete'}</button>
                       </div>
                    ))}
                </div>

                <div className="col-sm">
                    <h3 className="text center">Add Todo</h3>
                    <div className="mb-3">
                        <lable>Todo Name</lable>
                        <input type="text" className="form-control" value={todoName} onChange={(event) => setTodoName(event.target.value)} placeholder="Todo Name" />   
                    </div>
                       <button className="btn btn-success" onClick={() => {dispatch ({type:'add',payload: todoName}); setTodoName('')}} >Add</button>
                </div>
            </div>
        </div>
    )
}
export default Todo;