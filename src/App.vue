<template>
  <div id="app">
    <div v-if="user">
      <h2>Welcome, {{ user }}</h2>
      <a href="javascript:void(0)" @click="logout">Logout</a>

      <Balance />
      <Purchases />
    </div>
    <button v-else @click="login">Login</button>

  </div>
</template>

<script>
import Purchases from '@/components/Purchases';
import Balance from '@/components/Balance';
import config from '@/config';

// https://docs.moralis.io/moralis-server/database/objects

export default {
  name: 'App',
  data() {
    return {
      user: '',
    };
  },
  components: {
    Purchases,
    Balance,
  },
  mounted() {
    Moralis.start({
      serverUrl: config.MORALIS_SERVER_URL,
      appId: config.MORALIS_APP_ID,
    });

    this.user = this.getLocalUser();
  },
  methods: {
    async login() {
      let user = Moralis.User.current();
      console.log("current user: ", user)

      if (!user) {
        user = await Moralis.authenticate({
          signingMessage: 'Log in using Moralis',
        });
        console.log("auth user: ", user)
        this.user = user.get('ethAddress');
        console.log('logged in ', this.user);
        this.setLocalUser(this.user);
      }

      this.user = user.get('ethAddress');
      this.setLocalUser(this.user);
    },
    async logout() {
      await Moralis.User.logOut();
      this.user = null;
      this.clearLocalUser();
    },
    setLocalUser(user) {
      localStorage.setItem('dappUser', user);
    },
    clearLocalUser() {
      localStorage.removeItem('dappUser');
    },
    getLocalUser() {
      const user = localStorage.getItem('dappUser');
      if (user) {
        return user;
      }
      return null;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
