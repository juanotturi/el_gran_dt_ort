const state = {
  mail: null,
  team_name: null,
};

const mutations = {
  set_user(state, newUser) {
    state.user = newUser;
  },
};

export default {
  state,
  mutations,
};
