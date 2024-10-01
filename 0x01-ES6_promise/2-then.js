export default function handleResponseFromAPI(promise) {
  promise
    .then((resp) => resp)
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}
