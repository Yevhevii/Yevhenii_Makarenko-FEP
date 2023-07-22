userName = prompt(`Enter your name`);
if (userName === ``){
    userName = `Євгеній`;
} else if (userName === null){
    userName = `Євгеній`;
}
else {
    userName = userName.trim();
}
userLastName = prompt(`Enter your last name`);
if (userLastName === ``){
    userLastName = `Макаренко`;
} else if (userLastName === null){
    userLastName = `Макаренко`;
}
else {
    userLastName = userLastName.trim();
}
userFullName = `${userName} ${userLastName}`;
userEmail = prompt(`Enter your email`);
if (userEmail === null){
    userEmail = `email not defined`;
} else if (userEmail === ``){
    userEmail = `email not defined`;
} else if (!userEmail.includes(`@`)){
    userEmail = `not valid email(symbol @ not exist)`;
} else if (userEmail.startsWith(`@`)){
    userEmail = `not valid email(symbol @ find in first place)`;
} else if (userEmail.endsWith(`@`)){
    userEmail = `not valid email(symbol @ find in last place)`;
} else if (userEmail.startsWith(`@`) && userEmail.endsWith(`@`)){
    userEmail = `not valid email(symbol @ find in first place and last place)`;
} else {
    userEmail = userEmail.replaceAll(` `, ``).toLowerCase();
}
yearBirth = prompt(`Enter your year of birth`);
if (yearBirth === ``){
    yearBirth = `1997`;
} else if (yearBirth === null){
    yearBirth = `1997`;
} else {
    yearBirth = yearBirth.replaceAll(` `, ``);
}
userAge = new Date().getFullYear() - yearBirth;