console.log("before");
setTimeout(() => {
    console.log('reading a user from db...');
}, 2000);
console.log('after');

// async programming vs Multi threading vs Concurency
// Perform a task in future