export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const delayedValue = <T>(value: T, ms: number): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
};

export const delayedError = (error: Error, ms: number): Promise<Error> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(error);
    }, ms);
  });
};
