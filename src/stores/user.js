import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", () => {
  const state = {
    _users: [
      { mail: "juano", password: "1234" },
      { mail: "marinag", password: "2345" },
      { mail: "milagrosr", password: "3456" },
      { mail: "blasb", password: "4567" },
    ],
    _mail: null,
    _password: null,
    _loginOk: null,
  };

  const actions = {
    login(mail, password) {
      const userFound = state._users.find(
        (u) => u.mail === mail && u.password === password
      );
      state._loginOk = userFound;
      if (userFound) {
        state._mail = mail;
        state._password = password;
        return true;
      } else return false;
    },
    logout() {
      state._mail = null;
      state._password = null;
      state._loginOk = null;
    },
  };

  const getters = {
    isLoggedIn: () => state._loginOk !== null,
    currentUser: () => ({ mail: state._mail, password: state._password }),
  };

  return {
    ...state,
    ...getters,
    ...actions,
  };
});
