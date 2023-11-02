import { defineStore } from "pinia";
import { computed } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const _users = [
    { mail: "juano", password: "1234" },
    { mail: "marinag", password: "2345" },
    { mail: "milagrosr", password: "3456" },
    { mail: "blasb", password: "4567" },
  ];
  let _mail = null;
  let _password = null;
  let _loginOk = null;

  function login(mail, password) {
    _loginOk = _users.find((u) => u.mail === mail && u.password === password);
    if (_loginOk) {
      _mail = mail;
      _password = password;
      return true;
    } else return false;
  }
  function logout() {
    _mail = null;
    _password = null;
    _loginOk = null;
  }

  const isLoggedIn = computed(() => _loginOk);
  const currentUser = computed(() => ({
    mail: _mail,
    password: _password,
  }));

  return { _mail, _password, _loginOk, currentUser, isLoggedIn, login, logout };
});
