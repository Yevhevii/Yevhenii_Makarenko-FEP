const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User{
    constructor(obj){
        obj = JSON.parse(JSON.stringify(obj));
        Object.assign(this, obj);
    }

    render(){
		const photo = `<img src="images/users/${this.img}.png" alt="${this.name}" height="50">`;

		const usersRoleInfo = `<img src="images/role/${this.role}.png" alt="${this.role}" height="25"`;

		return (`
        <div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    ${photo}
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role ${this.role}">
                    ${usersRoleInfo}
                    <p>${this.role}</p>
                </div>
            </div>
			${this.courses ? this.renderCours() : ``}
		</div>`);
    }

	renderCours(){
		if(this.courses){
			return `<div class="user__courses">
				${this.courses
					.map(course => `<p class="user__courses--course student">
						${course.title} 
						<span class="${this.getGradation(course.mark)}">${this.getGradation(course.mark)}</span>
					</p>`)
					.join(``)
				}
			</div>`;
		} else{
			return ``;
		}
    }

	getGradation(mark){
		return Object
		.keys(gradation)
		.reduce((result, currentValue) => {
			if(mark <= currentValue && !result){
				return gradation[currentValue];
			} else{
				return result;
			}
		}, ``);
	}
}

class Student extends User{
	constructor(obj){
		super(obj);
	}
}

class Admin extends User{
	constructor(obj){
		super(obj);
	}

	renderCours(){
		const couseList = this.courses
		.map(courses => {
			const gradation = this.getGradation(courses.score);
			return `<div class="user__courses--course admin">
			<p>Title: <b>${courses.title}</b></p>
			<p>Admin's score: <span class="${gradation}">${gradation}</span></p>
			<p>Lector: <b>${courses.studentsScore}</b></p>
		</div>`})
		.join(``);
		return `<div class="user__courses admin--info"> ${couseList}</div>`;
		}
}

class Lector extends User{
	constructor(obj){
		super(obj);
	}
	renderCours(){
		const couseList = this.courses
		.map(courses => {
			const gradation = this.getGradation(courses.score);
			const studentsScore = this.getGradation(courses.studentsScore);
			return `<div class="user__courses--course lector">
			<p>Title: <b>${courses.title}</b></p>
			<p>Lector's score: <span class="${gradation}">${gradation}</span></p>
			<p>Average student's score: <span class="${studentsScore}">${studentsScore}</span></p>
			</div>`})
		.join(``);
		return `<div class="user__courses admin--info"> ${couseList}</div>`;
		}
}

const USER_ROLES = {
	student: obj => new Student(obj),
	lector: obj => new Lector(obj),
	admin: obj => new Admin(obj)
}
const renderTable = users
    .map(obj =>{
		let userRole = obj.role;
		let user = USER_ROLES[userRole]
			? USER_ROLES[userRole](obj)
			: new User(obj)
		return user.render();
	})
	.join(``);

document.write(`<div class="users">${renderTable}</div>`);