// let animalStorege = localStorage.getItem(`animals`);
// if(!animalStorege){
//     localStorage.setItem(`animals`, JSON.stringify([]));
// }else{
//     animalStorege = JSON.parse(animalStorege);
//     let ul = document.createElement(`ul`);
//     ul.id = "animalsList";
//     animalStorege.forEach(obj => {
//         let li = document.createElement(`li`);
//         li.innerHTML = `${obj.animal} is ${obj.goodAnimals ? `good animal` : `bed animal`}`;
//         ul.append(li);
//     })
//     document.body.append(ul);
// }

// const dataForm = document.querySelector(`#form`);
// dataForm.addEventListener(`submit`, e=>{
//     e.preventDefault();
//     let name = e.target.querySelector(`input[data-name = "name"]`),
//     goodAnimal = e.target.querySelector(`input[data-name = "good"]`);

//     let animal = {
//         animal: name.value,
//         goodAnimals : goodAnimal.checked 
//     };
//     console.log(animal);
//     const animalStorege = JSON.parse(localStorage.getItem(`animals`));
//     animalStorege.push(animal);
//     console.log(animalStorege);
//     localStorage.setItem(`animals`, JSON.stringify(animalStorege));
//     let animalsList = document.querySelector(`#animalsList`);
//     if(animalsList){
//         let li = document.createElement(`li`);
//         li.innerHTML = `${animal.animal} is ${animal.goodAnimals ? `good animal` : `bed animal`}`;
//         animalsList.append(li);
//     }

//     console.log(animal);
// })

// 🥳⛔🔴✅

// let timeout = new Promise(resolve => {
//         setTimeout(()=>{console.log(`1`);
//         resolve();
//     },1500)
// })

// timeout
//     .then(
//         ()=>{
//             return new Promise(resolve =>{
//                 setTimeout(()=>{
//                     console.log(`2`);
//                     resolve()
//                 },1500)
//             })
//         }
//     )
//     .then(
//         ()=>{
//             setTimeout(()=>{
//                 console.log(`3`);
//             },1500)
//         }
//     )

let API = `https://jsonplaceholder.typicode.com/`;

let users = fetch(API + `users`);

users.then(
    response => {
        if(response.ok){
            return response.json();
        } else{
            return Promise.reject(response.status);
        } 
    }
)
.then(users => {
    const usersSelect = document.createElement(`select`);
    usersSelect.addEventListener(`change`, e => {
    console.log(`#${e.target.value}: ${e}`, e);
    })

    users.forEach(user => {
        let option = document.createElement(`option`);
        option.innerHTML = `User #${user.id}`;
        option.name = user.name;
        option.value = user.id;
        usersSelect.append(option);
    })

    document.body.append(usersSelect);
})
.catch(
    (response)=>{
        console.log(`status:`, response);
    }
)