import { defineStore } from "pinia";
import { computed } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const _users = [
    {
      mail: "juano",
      password: "1234",
      name: "Juan Ignacio",
      surname: "Otturi",
      team: "Owl City FC",
    },
    {
      mail: "marinag",
      password: "2345",
      name: "Marina",
      surname: "Galzerano",
      team: "Los Marineros FC",
    },
    {
      mail: "milagrosr",
      password: "3456",
      name: "Milagros",
      surname: "Rojas",
      team: "Los Cuervos",
    },
    {
      mail: "blasb",
      password: "4567",
      name: "Blas",
      surname: "Bruno",
      team: "La Brunoneta",
    },
  ];
  let _mail = null;
  let _password = null;
  let _name = null;
  let _surname = null;
  let _team = null;
  let _loginOk = null;

  function login(mail, password) {
    _loginOk = _users.find((u) => u.mail === mail && u.password === password);
    if (_loginOk) {
      _mail = mail;
      _password = password;
      _name = _loginOk.name;
      _surname = _loginOk.surname;
      _team = _loginOk.team;
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
