import { defineStore } from "pinia";
import { computed } from "vue";
import axios from "axios";

export const useUserStore = defineStore("userStore", () => {
  let _users = null;
  let _mail = null;
  let _password = null;
  let _name = null;
  let _surname = null;
  let _team = null;
  let _loginOk = null;

  async function login(mail, password) {
    try {
      const response = await axios.get(
        "https://www.mockachino.com/ac5f033c-fc53-4a/users"
      );
      _users = response.data.users;
      _loginOk = _users.find((u) => u.mail === mail && u.password === password);
      if (_loginOk) {
        _mail = mail;
        _password = password;
        _name = _loginOk.name;
        _surname = _loginOk.surname;
        _team = _loginOk.team;
        currentUser.mail = _mail;
        currentUser.password = _password;
        currentUser.name = _name;
        currentUser.surname = _surname;
        currentUser.team = _team;
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error al obtener datos de usuarios:", error);
      return false;
    }
  }

  function logout() {
    _mail = null;
    _password = null;
    _name = null;
    _surname = null;
    _team = null;
    _loginOk = null;
  }

  let isLoggedIn = computed(() => _loginOk);
  const currentUser = computed(() => ({
    mail: _mail,
    password: _password,
    name: _name,
    surname: _surname,
    team: _team,
  }));

  return { _mail, _password, _loginOk, currentUser, isLoggedIn, login, logout };
});
