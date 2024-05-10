import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";



function Todo(){
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);
    const handleAddTodo = ()=>{
        if(input.trim() !== ''){
            setTodo([...todo, {id : Date.now(), text:input}]);
        }else{
             alert("Please add something....")
        }

        setInput([]);

        
    }

    const handleRemovalAll = ()=>{
        setTodo([]);
    }

    const handleRemoveTodo = (id)=>{
        setTodo(todo.filter((todos)=>todos.id !== id))
    }

    const handleEditTodo = (id, newText)=>{
        setTodo(todo.map((todos)=>{
            if(todos.id === id){

                return {...todos, text: newText}

            }

            return todos;
        }))
    }
    return(
        <div className="bg-pencil bg-no-repeat bg-cover py-28">
        <div className="w-2/4 mx-auto border-2 border-black text-center py-10 bg-yellow-50 rounded-sm font-mono shadow-2xl shadow-black">
            <h1 className="text-7xl font-bold mb-6 xs:text-base">Todo's</h1>
            <input type="text" className=" mb-10 me-4 px-10 py-6 text-2xl font-semibold rounded-sm border-2 border-black" placeholder="Add To-Do" 
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            />
            <button className="bg-green-500 p-3 text-2xl font-bold rounded-sm" onClick={handleAddTodo}>Add To-Do</button> 

            {
                todo.map((list)=>(
                    
                        <ul key={list.id} className="w-3/4 mx-auto flex justify-around">
                            <span className=" block w-1/2 border-2 border-slate-400 font-serif font-bold text-2xl text-balance mb-6 p-4">{list.text}</span>

                            <div>
                            <button className="text-2xl bg-yellow-400 me-4 ms-4 p-4 rounded-md" onClick={()=>{handleEditTodo(list.id, prompt("edit todo", list.text))}}><MdModeEdit /></button>
                            <button className="text-2xl bg-red-500 me-4 ms-3 p-4 rounded-md" onClick={()=>{handleRemoveTodo(list.id)}}><MdDelete /></button>
                            </div>
                            
                        </ul>

                       
                    

                ))
            }

    
           {
             todo.length > 0 &&  <div>
             <button className="bg-red-500 me-2 ms-4 p-3 rounded-md font-bold" onClick={handleRemovalAll}>Remove All</button>
             </div>
           }
            
            
            
            
        </div>
        </div>
    )
}

export default Todo;