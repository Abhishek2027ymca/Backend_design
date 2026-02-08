
// create a card componennt

import { backgroundColorNames } from 'chalk';
import React from 'react';


function Card({children}){

 return  (  <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(210, 164, 164, 0.1)',
        }}>
            {children}
        </div>
 )
}

const App = () => {

// s=2 creating an arrya called toods 
const todos = [{
    key : 1,
    title : "go to gym ",
    done : false 
},
{     key : 2,

    title : " eaat food ",
    done: true 
}

,{      key : 3,

    title : "make your rtesume",
    done : true 
}
,{   key : 4 ,
    title : " make new frieds ",
    done : false 
}]

const todosComponent = todos.map(
    todo => <Todo
    keu = {todo.key}
     title = {todo.title}
     done = {todo.done}

    />
)

    return (
   
<>  {todosComponent} </>
    
    )
};


function Todo(
    
    {title , done }){
   return (
    <card>
        {title}-<span style = {{color: done ? "green" : "red" }}></span>
    </card>
   )
}




export default App;

