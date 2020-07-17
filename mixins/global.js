import Vue from 'vue'

Vue.mixin({
  computed: {
    _user() {
      return this.$store.state.auth.user
    },
    _isSuperAdmin() {
      if (!this._user) {
        return false
      }
      return this.$store.state.auth.user.super_admin
    },
    _isAuthenticated() {
      return !!this.$store.state.auth.token
    },
    _apiUrl() {
      return process.env.apiUrl
    },
  },
  methods: {
    async $logout() {
      await this.$store.commit('auth/LOGOUT')
      await this.$router.push(`/login?from=${this.$route.fullPath}`)
    },
  },
})
