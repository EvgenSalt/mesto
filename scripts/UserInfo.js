/**
 * Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
 */

export default class UserInfo {
  _profileName;
  _profileWork;

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
    this._profileName.textContent = data.username;
    this._profileWork.textContent = data.userwork;
  }
}