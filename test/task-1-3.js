function getRandom() {
  return (Math.floor(Math.random() * 10) + 1) * 1000;
}

const array = [];

function getPromise() {
  return new Promise(function (resolve, reject) {
    let randomMs = getRandom();
    setTimeout(() => {
      resolve(randomMs);
      //   console.log(randomMs);
    }, randomMs);
  });
}

for (let index = 0; index <= 10; index++) {
  array.push(getPromise());
}
console.log(array);

try {
  let number = 12;
  console.log(12 / 0);
} catch (error) {}
