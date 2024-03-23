export function Todos({ todos }){
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    console.log(todo._id);
                    fetch("http://localhost:3000/completed", {
                        method: "PUT",
                        body: JSON.stringify({
                            _id: todo._id
                        }),
                        headers: {
                            "Content-type" : "application/json"
                        }
                    }).then(async (res)=>{
                        const json = await res.json();
                        alert("task completed");
                    })
                }}>{todo.completed == true ? "completed" : "Mark as Completed"}</button>
            </div>
        })}
    </div>
}

