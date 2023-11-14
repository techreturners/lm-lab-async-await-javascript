const getPromiseResponse = async (resolve, reject) => {
  const randomInt = await Math.floor(Math.random() * 10);
  if (randomInt % 2 === 0) {
    console.log(resolve);
  } else {
    console.log(reject);
  }
};
getPromiseResponse(
  `Yay! Promise resolved with response:done`,
  `Boo. Promise rejected with response:error`
);
