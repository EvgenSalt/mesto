/**
 * Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
 */

export default class UserInfo {
  _profileName;
  _profileWork;

  constructor(profileName, profileWork, userAvatar) {
    this._profileName = profileName;
    this._profileWork = profileWork;
    this._userAvatar = userAvatar;
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
    this._userAvatar.src = data.avatar;
  }

  setAvatar(data) {
    this._userAvatar.src = data;
  }
}