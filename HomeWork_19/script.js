const API = `https://6519440e818c4e98ac60353a.mockapi.io/`;
const theadName = [`Name`, `Comics`, `Favourite`, `Actions`];

const getData = (patch)=>
    fetch(API+`${patch}`)
        .then(
            (data)=>{
                if(data.ok) return data.json();
                else return Promise.reject(date.status);
            }
        );

const createDeleteBtn = (item, tr)=>{
    const deleteBtn = document.createElement(`button`);
    deleteBtn.innerHTML = `Delete`;
    deleteBtn.addEventListener(`click`, ()=>{
        deleteItem(`heroes`, item.id)
        .then(()=>tr.remove())
        .catch(status => console.log(`in catch: ${status}`));
    })
    return deleteBtn;
}
const changeItemPut = (patch, id, item) => 
    fetch(API + `${patch}/${id}`, {
        method: `PUT`,
        body: JSON.stringify(item),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(
        (data)=>{
            if(data.ok) return data.json();
            else return Promise.reject(date.status);
        }
    );

const createTableThead = item => {
    const thead = document.createElement(`thead`);
        thead.innerHTML = `<tr>
              ${item
                .map((item) => `<th>${item}</th>`)
                .join(``)}
          </tr>`;
          return thead;
      }

const createTableTbodyTr = item => {
    const tr = document.createElement(`tr`);
        tr.innerHTML = 
        `<td>${item.name}</td>
        <td>${item.comics}</td>`
    return tr;
}

const createTableTbody = (item)=>{
    const tbody = document.createElement(`tbody`);
    const tr = createTableTbodyTr(item);

    const favouriteCheckboxTd = document.createElement(`td`);
    const favouriteCheckbox = createCheckbox(item);
    favouriteCheckboxTd.append(favouriteCheckbox);
    tr.append(favouriteCheckboxTd);

    const deleteBtnTd = document.createElement(`td`)
    const deleteBtn = createDeleteBtn(item, tr);
    deleteBtnTd.append(deleteBtn);
    tr.append(deleteBtnTd)

    tbody.append(tr);

    return tbody;
}

const deleteItem = (patch, id)=> 
    fetch(API+`${patch}/${id}`, {method: `DELETE`})
        .then(
        (data)=>{
            if(data.ok) return data.json();
            else return Promise.reject(date.status);
        }
    );

const createTable = (id) => {
    const table = document.createElement(`table`);
    table.id = id;
    const thead = createTableThead(theadName);
    table.append(thead);
    return table;
};

const createCheckbox = (item) => {
    const favouriteCheckbox = document.createElement(`input`);
        favouriteCheckbox.type = `checkbox`;
        favouriteCheckbox.checked = item.favourite;
        favouriteCheckbox.addEventListener(`change`, ()=>{
                    changeItemPut(`heroes`, item.id, {...item, favourite: !item.favourite})
                    .then(
                        changedItem => {
                            item = changedItem;
                        }
                    )
                    .catch(
                        err => console.log(err)
                    )
                })
                return favouriteCheckbox;
}

const itemPost = (patch, item) => 
    fetch(API + `${patch}`, {
        method: `POST`,
        body: JSON.stringify(item),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(
        (data)=>{
            if(data.ok) return data.json();
            else return Promise.reject(date.status);
        }
    );


const createOption = (item) => {
    const option = document.createElement(`option`);
    option.innerHTML = `${item.name}`;
    option.value = item.name;
    return option;
}

const renderComicsList = (select) => {
    getData(`comics`)
    .then(
        comics => {
            comics.forEach(item => {
                const option = createOption(item);
                select.append(option);
            })
        }
    )
    .catch(err => console.log(err))
}

const heroesForm = document.querySelector(`#heroesForm`);
if(heroesForm){
    const heroesFormName = document.querySelector(`input[data-name = "name"]`);
    const heroesFormComics = document.querySelector(`select[data-name = "comics"]`);
    const heroesFormFavourite = document.querySelector(`input[data-name = "favourite"]`);

    renderComicsList(heroesFormComics);

    heroesForm.addEventListener(`submit`, e=>{
        e.preventDefault();

        let newHeroes = {
            name: heroesFormName.value,
            comics: heroesFormComics.value,
            favourite: heroesFormFavourite.checked
        }
        getData(`heroes`)
            .then(heroes =>{
                const heroesFind = heroes.find(item => item.name === newHeroes.name);
                if(!heroesFind){
                    itemPost(`heroes`, newHeroes)
                    .then(
                        heroes => {
                            const tr = createTableTbody(heroes);
            
                            let table = document.querySelector(`#tableList`);
                            if(!table){
                                table = createTable(`tableList`);
                                document.body.append(table);
                            }
                            
                            table.append(tr);
                        }
                    )
                    .catch(err => console.log(err))
                }else{
                    console.log(`🥵 Don't create this hero`);
                }
        })
            .catch(status => console.log(`in catch: ${status}`));
            
        
    })
}

const renderHeroes = ()=>{
    getData(`heroes`)
        .then(heroes =>{
            const table = createTable(`tableList`);
            document.body.append(table);
            heroes.forEach(item => {
                const tr = createTableTbody(item);
                table.append(tr);
            })
        })
        .catch(status => console.log(`in catch: ${status}`));
};
renderHeroes();