const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

promise
  .then((value) => console.log(`Yay! Promise resolved with response: ${value}`))
  .catch((reason) =>
    console.log(`Boo. Promise rejected with response: ${reason}`)
  );

/* ==============
// first iteration with some description:
// value and reason below can be any name
// handleResolve and handleReject need to be part of promise then
function handleResolve(value) {
  console.log(`Yay! Promise resolved with response: ${value}`);
}

function handleReject(reason) {
  console.error(`Boo. Promise rejected with response: ${reason}`);
}

// handleResolve and handleReject need to be part of promise then
// you can name them as you wish, they just have to relate to the
// function names above
promise.then(handleResolve, handleReject);

*=================*/
