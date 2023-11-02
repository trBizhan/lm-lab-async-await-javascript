// create the promise object, the response, reject attribute
// is produced in the promise object
const myPromise = () => {
  return new Promise((resolve, reject) => {
    const randomInt = Math.floor(Math.random() * 10);

    if (randomInt % 2 === 0) {
      // Success
      setTimeout(() => resolve("done"), 2000);
    } else {
      // Failure
      setTimeout(() => reject("error"), 2000);
    }
  });
};

// create async function and incorporate await
// in the try section.
const getPromiseResponse = async () => {
  try {
    const value = await myPromise();
    // I was hoping "await myPromise() suffice but comes with undefined value
    console.log(`Yay! Promise resolved with response: ${value}`);
  } catch (reason) {
    console.log(`Boo. Promise rejected with response: ${reason}`);
  }
};

getPromiseResponse();
