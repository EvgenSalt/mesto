/**
 * Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
 */

export default class UserInfo {
  _inputName;
  _inputWork;

  constructor(profileName, profileWork) {
    this._profileName = profileName;
    this._profileWork = profileWork;
  }

  getUserInfo() {
    const userInfo = {
      name: this._profileName.textContent,
      work: this._profileWork.textContent,
    };
    return userInfo;
  }

  setUserInfo(data) {
    console.log(`data ${data}`);
    console.log(`data.name ${data.username}`);
    this._profileName.textContent = data.username;
    this._profileWork.textContent = data.userwork;
  }
}