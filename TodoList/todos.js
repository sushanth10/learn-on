let todo = ["Clean the house", "Do something productive"];
let inp = prompt("What do you wanna do?");
while(inp!="quit"){
    if(inp=='new'){
        let newItem = prompt("What do you wanna add to your todo list?");
        todo.push(newItem);
        console.log(`${newItem} added to the todo list`);
    } else if(inp == 'list'){
        console.log("*************");
        for(let i=0; i<todo.length; i++){
            console.log(`${i+1}. ${todo[i]}`);
        }
        console.log("**************");
    } else if(inp=='delete'){
        let delItem = prompt("Enter index of item to delete : ");
        if(delItem<todo.length && delItem>=0){
            console.log(`Removed item ${todo[delItem]} from the list`);
            todo.splice(delItem, 1);
        }else{
            console.log("Index Out of Bounds");
        }
    }else{
        console.log("Invalid Choice");
    }
    inp = prompt("What do you wanna do?");
}
console.log("Quitting the application");
