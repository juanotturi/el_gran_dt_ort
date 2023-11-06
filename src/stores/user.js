import { defineStore } from "pinia";
import { computed } from "vue";
import { users } from "./users_list.js";

export const useUserStore = defineStore("userStore", () => {
  const _users = users;

  let _mail = null;
  let _password = null;
  let _name = null;
  let _surname = null;
  let _team = null;
  let _loginOk = null;

  function saveUserToLocalStorage(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  function login(mail, password) {
    _loginOk = _users.find((u) => u.mail === mail && u.password === password);
    if (_loginOk) {
      _mail = mail;
      _password = password;
      _name = _loginOk.name;
      _surname = _loginOk.surname;
      _team = _loginOk.team;
      saveUserToLocalStorage({
        mail: _mail,
        password: _password,
        name: _name,
        surname: _surname,
        team: _team,
      });
      return true;
    } else return false;
  }

  function logout() {
    _mail = null;
    _password = null;
    _name = null;
    _surname = null;
    _team = null;
    _loginOk = null;
    localStorage.removeItem("currentUser");
  }

  const isLoggedIn = computed(() => _loginOk);
  const currentUser = computed(() => ({
    mail: _mail,
    password: _password,
    name: _name,
    surname: _surname,
    team: _team,
  }));

  return { _mail, _password, _loginOk, currentUser, isLoggedIn, login, logout };
});
