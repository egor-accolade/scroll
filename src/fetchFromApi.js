export const fetchFromApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({status: "ready"});
    }, 2000);
  });
};