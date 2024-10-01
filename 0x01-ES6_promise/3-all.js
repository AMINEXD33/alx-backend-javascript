import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2])
    .then(([body, firstLastname]) => {
      console.log(`${body.body} ${firstLastname.firstName} ${firstLastname.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
export default handleProfileSignup;
