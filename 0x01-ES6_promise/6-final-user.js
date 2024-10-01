import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const pr1 = signUpUser(firstName, lastName);
  const pr2 = uploadPhoto(fileName);

  return Promise.allSettled([pr1, pr2])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))));
}
export default handleProfileSignup;
