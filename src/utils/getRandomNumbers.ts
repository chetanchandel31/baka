type GetRandomNumbersArgs = {
  lowerLimit?: number;
  upperLimit?: number;
};

const getRandomNumbers = ({
  lowerLimit = 1,
  upperLimit = 120,
}: GetRandomNumbersArgs): number[] => {
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
