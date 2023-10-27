const API = `https://api.chucknorris.io/jokes/`;
const jokeForm = document.querySelector(`#jokeForm`);
const jokesContainer = document.querySelector(`#jokesContainer`);
const jokeCategories = document.querySelector(`#jokeCategories`);
const jokeTypes = document.querySelectorAll(`input[name="jokeType"]`);
const jokeSearch = document.querySelector(`#jokeSearch`);
const jokesFavContainer = document.querySelector(`#jokesFavContainer`);
//🖤❤️
const renderJoke = (joke)=>{
    const jokeBlock = document.createElement(`div`);
    jokeBlock.className = `joke__block`;
    jokeBlock.dataset.id = `joke__${joke.id}` 

    const jokeFavBtn = document.createElement(`button`);
    jokeFavBtn.className = `joke__fav`;
    jokeFavBtn.innerHTML = joke.favourite ? `❤️` : `🖤`;
    jokeFavBtn.addEventListener(`click`, ()=>{
        let favStorageJokes = localStorage.getItem(`favStorageJokes`);
        if(favStorageJokes) favStorageJokes = JSON.parse(favStorageJokes);
        else favStorageJokes = [];

        if(joke.favourite){
            joke.favourite = false;
            let jokeStorageIndex = favStorageJokes.findIndex(item => item.id === joke.id);
            favStorageJokes.splice(jokeStorageIndex,1);
            localStorage.setItem(`favStorageJokes`, JSON.stringify(favStorageJokes));
            
            let jokeInFavContainer = jokesFavContainer.querySelector(`.joke__block[data-id = "joke__${joke.id}"]`);
            jokeInFavContainer.remove();

            let jokeInContainer = jokesContainer.querySelector(`.joke__block[data-id = "joke__${joke.id}"]`);
            if(jokeInContainer){
                let jokeInContainerFavBtn = jokeInContainer.querySelector(`.joke__fav`);
                jokeInContainerFavBtn.innerHTML = `🖤`;
            }
        }else{
            joke.favourite = true;
            favStorageJokes.push(joke);
            localStorage.setItem(`favStorageJokes`, JSON.stringify(favStorageJokes));
            jokeFavBtn.innerHTML = `❤️`;
            renderJoke(joke);
        }
    })
    jokeBlock.append(jokeFavBtn);

    const jokeBlockValue = document.createElement(`p`);
    jokeBlockValue.innerHTML = joke.value;
    jokeBlock.append(jokeBlockValue);

    if(joke.categories.length){
        let categories = document.createElement(`p`);
        categories.innerHTML = `<b>Categories</b>: ${joke.categories}`;
        jokeBlock.append(categories);
    }
    joke.favourite ? jokesFavContainer.append(jokeBlock) : jokesContainer.append(jokeBlock);
}

const renderCategories = async()=>{
    try{
        let requestCategories = await fetch(API + `categories`);
        if(!requestCategories.ok) throw new Error(requestCategories.status);
        let categories = await requestCategories.json();
        let Lis = categories
        .map((categories,index) => `<li>
        <label>
            ${categories} <input type="radio" value="${categories}" name="jokeCategory" ${!index && `checked`}>
        </label>
    </li>`)
        .join(``);

        jokeCategories.innerHTML = Lis;
    }catch(err){
        console.log(err);
    }
}
renderCategories();

if(jokeForm){
        jokeForm.addEventListener(`submit`, async e=>{
            e.preventDefault();

            let jokeType = e.target.querySelector(`input[name="jokeType"]:checked`).value;

            let path;

            switch(jokeType){
                case `random`:
                    path = `random`;
                    break;
                case `categories`:
                    let category = document.querySelector(`input[name="jokeCategory"]:checked`).value;
                    path = `random?category=${category}`;
                    break;
                case `search`:
                    path = `search?query=${jokeSearch.value}`;
                    break;
            }
            try{
                let requestJoke = await fetch(API + path);
                if(!requestJoke.ok) throw new Error(requestJoke.status);
                let pesponseJoke = await requestJoke.json();

                if(pesponseJoke.result)pesponseJoke.result.forEach(joke=>renderJoke(joke));
                else renderJoke(pesponseJoke);
        
            }catch(err){
                console.log(err);
            }
        })
}

jokeTypes.forEach(input=>{
    input.addEventListener(`change`, e=>{
        if(e.target.value === `categories`) jokeCategories.classList.add(`active`);
        else jokeCategories.classList.remove(`active`);

        if(e.target.value === `search`) jokeSearch.classList.add(`active`);
        else jokeSearch.classList.remove(`active`);
    })
})

const renderFavJokes = ()=>{
    let favStorageJokes = localStorage.getItem(`favStorageJokes`);
    if(favStorageJokes){
        favStorageJokes = JSON.parse(favStorageJokes);
        favStorageJokes.forEach(joke => renderJoke(joke));
    }
}
renderFavJokes();