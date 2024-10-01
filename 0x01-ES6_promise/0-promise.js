export default function getResponseFromAPI() {
  return (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const flag = true;
        if (flag) {
          resolve(flag);
        } else {
          reject(flag);
        }
      }, 1000);
    })
  );
}
