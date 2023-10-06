const promiseATM = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const userQuestion = confirm(`Do you want to get money?`);
        userQuestion ? resolve() : reject();
    }, 1000);
});

promiseATM
    .then(
        ()=>{
            let amount = prompt(`Enter amount`, `100`);
            return amount;
        },
        ()=>{
            let language = prompt(`Choose language for info: Ukrainian, German, English`, `Ukrainian`);
            return Promise.reject(language);
        }
    )
    .then(
        (amount)=>{
            let currency = prompt(`Choose currency: USD, EUR, UAH`, `USD`);
            return {amount, currency};
        },
        (language)=>{
            let email = prompt(`Enter email`, `email@gmail.com`);
            return Promise.reject({language, email});
        }
    )
    .then(
        (obj)=>{
            console.log(`Take ${obj.amount} ${obj.currency}, please.`);
        },
        (obj)=>{
            console.log(`Information about the account was sent to the ${obj.email} in ${obj.language}.`);
        }
    )
    .then(
        ()=>{console.log(`Goodbye and have a good day!`)}
    );