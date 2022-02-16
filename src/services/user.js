export default class UserService {
  getCurrentUser() {
    return Moralis.User.current();
  }
}
