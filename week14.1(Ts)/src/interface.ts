
interface TodoType {

    title : string ,
    description : string ,
    completed : boolean

}// this is a complete type definition for a todo object which has three properties title , description and completed with their respective types


interface TodoInput {
    todo : TodoType
}


function todo (props : TodoInput) {


    props.todo.completed = true
}
        


// this is how we will use the todo component in react and we will pass the todo object as a prop to the component