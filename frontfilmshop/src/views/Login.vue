<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
      <div>
        <v-tabs
            v-model="tab"
            show-arrows
            background-color="blue-grey darken-2"
            icons-and-text
            dark
            grow
        >
          <v-tabs-slider color="blue-grey darken-2"></v-tabs-slider>
          <v-tab v-for="i in tabs" :key="i.name">
            <v-icon large>{{ i.icon }}</v-icon>
            <div class="caption py-1">{{ i.name }}</div>
          </v-tab>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          v-model="loginEmail"
                          :rules="loginEmailRules"
                          label="E-mail"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="loginPassword"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex" cols="12" sm="6" xsm="12"></v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                      <v-btn
                          x-large
                          block
                          :disabled="!valid"
                          color="success"
                          @click="loginUser"
                      >
                        Login
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="registerForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, rules.min]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Password"
                          hint="At least 5 characters"
                          counter
                          @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          block
                          v-model="verify"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :rules="[rules.required, passwordMatch]"
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Confirm Password"
                          counter
                          @click:append="show1 = !show1"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                      <v-btn
                          x-large
                          :loading="loading"
                          block
                          :disabled="!valid"
                          color="success"
                          @click="registerNewUser(email, password)"
                      >Register
                      </v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-dialog>
    <v-dialog v-model="register" max-width="600px" min-width="360px">
      <v-alert v-if="registerSuccess" type="success">
        Rejestracja udana!
      </v-alert>
      <v-alert v-if="!registerSuccess" type="error">
        Błąd. Rejestracja nieudana!
      </v-alert>
    </v-dialog>
    <div class="loader" v-if="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </div>
  </div>
</template>

<script>
import {loginUser, registerUser} from '../api/api'

export default {
  name: 'Login',

  computed: {
    passwordMatch() {
      return () => this.password === this.verify || 'Password must match'
    },
  },

  methods: {
    registerNewUser() {
      registerUser(this.email, this.password)
          .then(() => {
            this.loading = false
            this.register = true
            this.registerSuccess = true
          })
          .catch(() => {
            this.loading = false
            this.register = true
            this.registerSuccess = false
          })
      this.loading = true
    },
    loginUser() {
      loginUser(this.loginEmail, this.loginPassword)
          .then((res) => {
            localStorage.setItem('auth-token', res.data.token)
            localStorage.setItem('email', res.data.email)
            this.$store.commit('setToken', res.data.token)
            this.$store.commit('setLoggedEmail', res.data.email)
            this.$store.commit('adminLogged', localStorage.getItem('email'))
            this.$store.state.cart = [];
            this.$router.replace('/films')
          })
          .catch(error => alert(error.response.data))
    }
  },
  data: () => ({
    register: false,
    registerSuccess: false,
    dialog: true,
    tab: 0,
    tabs: [
      {name: 'Login', icon: 'mdi-account'},
      {name: 'Register', icon: 'mdi-account-outline'},
    ],
    valid: true,
    email: '',
    password: '',
    verify: '',
    loading: false,
    loginPassword: '',
    loginEmail: '',
    loginEmailRules: [
      (v) => !!v || 'Required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    emailRules: [
      (v) => !!v || 'Required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    show1: false,
    rules: {
      required: (value) => !!value || 'Required.',
      min: (v) => (v && v.length >= 5) || 'Min 5 characters',
    },
  }),
}
</script>

<style scoped>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
