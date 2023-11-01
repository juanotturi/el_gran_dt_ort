import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const _users = [
    { mail: "juano", password: "1234" },
    { mail: "marinag", password: "2345" },
    { mail: "milagrosr", password: "3456" },
    { mail: "blasb", password: "4567" },
  ];
  const _mail = null;
  const _password = null;
  const _loginOk = null;

  function login(mail, password) {
    const userFound = _users.find(
      (u) => u.mail === mail && u.password === password
    );
    if (userFound) {
      _mail = mail;
      _password = password;
    }
    _loginOk = userFound;
  }
  function logout() {
    _mail = null;
    _password = null;
    _loginOk = null;
  }
  return { _mail, _password, _loginOk };
});
