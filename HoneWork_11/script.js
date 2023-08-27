const users = [
    ["john","red",5,["ball", "book", "pen"]],
    ["becky","blue",10,["tape", "backpack", "pen"]],
    ["susy","red",55,["ball", "eraser", "pen"]],
    ["tyson","green",1,["book", "pen"]],
   ];
let forEachArr = [];
users.forEach((item) => forEachArr.push(item[0] + `!`));
// console.log(forEachArr);
const mapArr = users.map((item) => item[0] + `?`);
// console.log(mapArr);
const renderTable = arr => {
    arr = JSON.parse(JSON.stringify(users));

    let filterUsersArr = arr.filter((item)=> item[1] === `red` && item);
    // let sum = 0;
    //     for(i=0; i<filterUsersArr.length; i++){
    //          sum += filterUsersArr[i][2];
    //     }
    let sum = filterUsersArr.reduce((value, item) => value += item[2], 0);

    let Trs = filterUsersArr.map(item => `<tr>
        ${item.map(element => `<td>${element}</td>`).join(``)}
        </tr>`)
        .join(``);

    let table = `<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Comand</th>
            <th>Score</th>
            <th>Data</th>
        </tr>
    </thead>
    <tbody>
        ${Trs}
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Total score: ${sum}</td>
        </tr>
    </tfoot>
</table>`
return table;
}
document.write(renderTable(users));