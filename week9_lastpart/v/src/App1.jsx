
// LIST AND KEYS 
import React from 'react';



const App = () => {
    // an array of objectt in js 

const todos = [{
    title : "go to gym ",
    done : false 
},
{
    title : " eaat food ",
    done: true 
}

,{
    title : "make your rtesume",
    done : true 
}
,{
    title : " make new frieds ",
    done : false 
}]

// making them as a n array of compoenent 
const todosComponent = todos.map(todo =><Todo
title = {todo.title}  done = {todo.done}
/>  )
//  rendering a list in arrya 
// here amon g menay props that we  have passed 

// we ned to provid =e a keyu to every ele,mmt 

/// so always provifd a key 

return <div>
    {todosComponent}
</div>

};



function Todo({title , done }){
    return <div>
        {title } - {done ? "done " : "Not done ! "}
    </div>
}

export default App;
