const calendarData = {
    days: [`Monday`, `Tuesday`, `Friday`],
    hours: {
      start: 10,
      end: 17,
    },
    todos: [
      {
        day: `Monday`,
        hour: 10,
        title: `First todo`,
      },
      {
        day: `Monday`,
        hour: 13,
        title: `Second todo`,
      },
      {
        day: `Tuesday`,
        hour: 12,
        title: `Third todo`,
      },
      {
        day: `Tuesday`,
        hour: 17,
        title: `Fourth todo`,
      },
      {
        day: `Friday`,
        hour: 14,
        title: `Fifth todo`,
      },
    ],
  };

  const containerCalendar = document.querySelector(`#container`);
  
  const createTableThead = item => {
    const thead = document.createElement(`thead`);
    thead.innerHTML = `<tr>
          <th></th>
          ${item.days
            .map((item) => `<th>${item}</th>`)
            .join(``)}
      </tr>`;
      return thead;
  }

  const getHours = obj =>{
    const hours = [];
    let startHours = obj.start;
    let endtHours = obj.end;
    for(let i=startHours; i<endtHours; i++) hours.push(i);
    return hours;
  }

  const createTodoDiv =()=>{
    const todoBlock = document.createElement(`div`);
    todoBlock.className = `todo`;
    todoBlock.addEventListener(`click`, () => {
      todoBlock.classList.toggle(`active`);
    })
    return todoBlock;
  }

  const createTodoTitle = item =>{
    const todoBlockTitle = document.createElement(`h3`);
    todoBlockTitle.innerHTML = item.title;
    return todoBlockTitle;
  }

  const createTableTbody = (data)=>{
    const tbody = document.createElement(`tbody`);
    const hours = getHours(data.hours);

    hours.forEach((hour) => {
          const tr = document.createElement(`tr`);

          const tdHour = document.createElement(`td`);
          tdHour.innerHTML = `<td>${hour}:00</td>`;
          tr.append(tdHour);

          data.days.forEach(day => {
              const td = document.createElement(`td`);
              const todo = data.todos.find(item => item.day===day && item.hour===hour);
              if(todo){
                const todoBlock = createTodoDiv();
                const todoBlockTitle = createTodoTitle(todo);          
                const todoBlockBtn = document.createElement(`button`);
                  todoBlockBtn.innerHTML = `Delete`;
                  todoBlockBtn.addEventListener(`click`, (e) => {
                      e.stopPropagation();
                      todoBlock.remove();
                  });
  
                todoBlock.append(todoBlockTitle, todoBlockBtn);
                td.append(todoBlock);
              }
  
              tr.append(td);
          })
  
          tbody.append(tr);
      })
      return tbody;
  }

  const createCalendarTable = (data) => {
    const table = document.createElement(`table`);
    const thead = createTableThead(data);
    const tbody = createTableTbody(data);
    
    table.append(thead, tbody);
    return table;
  };
  
  let table = createCalendarTable(calendarData);
  containerCalendar.append(table);