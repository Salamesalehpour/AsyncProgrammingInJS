console.log("before");
let user = getUser(12);
console.log(user);
console.log('after');


function getUser(id) {
    setTimeout(() => {
        console.log('reading a user from db...');
        return {id: id, gitHubUserName: 'salam'};
    }, 2000);
}