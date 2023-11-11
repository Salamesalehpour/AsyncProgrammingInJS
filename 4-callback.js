console.log("before");
getUser(12, (user) => {
    console.log('User : ', user);
});
console.log('after');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('reading a user from db...');
        callback({id: id, gitHubUserName: 'salam'});
    }, 2000);
}