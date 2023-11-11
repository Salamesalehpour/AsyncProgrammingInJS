console.log("before");
getUser(12, (user) => {
    console.log('User : ', user);
    getGitHubRepositories(user.gitHubUserName, (repositories) => {
        console.log('Repositories : ', repositories);
    })
});
console.log('after');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('reading a user from db...');
        callback({id: id, gitHubUserName: 'salam'});
    }, 2000);
}


function getGitHubRepositories(userName, callback) {
    setTimeout(() => {
        console.log('reading github repositories...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}