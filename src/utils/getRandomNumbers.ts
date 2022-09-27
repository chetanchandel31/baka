const getRandomNumbers = (): number[] => {
  const lowerLimit = 1;
  const upperLimit = 120;

  const randomNumbersCount = 5;

  let randomNumbers = [];

  while (randomNumbers.length < randomNumbersCount) {
    const randomNumber = Math.floor(
      Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit
    );

    randomNumbers.push(randomNumber);
  }

  process.stdout.write(
    `${randomNumbersCount} random numbers between ${lowerLimit} and ${upperLimit}:`
  );
  process.stdout.write("\n" + randomNumbers.join());

  return randomNumbers;
};

export default getRandomNumbers;
