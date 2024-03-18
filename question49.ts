/* Function with Rest Parameters: write a function that takes a rest parameter representing multiple hobbies.It should
log each hobby with a statement saying you enjoy that hobby.*/

function logHobbies(...hobbies:string[]){
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
        
    })
}
logHobbies("reading", "Coding","Cooking")