<template>
  <v-form class="register-form" ref="form" v-model="valid" lazy-validation>
    <h1 class="register-title">Register</h1>

    <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Username"
        required
        outlined
    ></v-text-field>

    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        outlined
    ></v-text-field>

    <v-text-field
        v-model="password"
        label="Password"
        :rules="passwordRules"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        required
        outlined
        @click:append="showPassword = !showPassword"
    ></v-text-field>

    <div class="register-buttons">
      <v-btn
          class="register-button"
          :disabled="!valid"
          color="success"
          @click="validate"
      >
        Register
      </v-btn>

      <v-btn class="register-button" color="error" @click="reset">
        Reset
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: "",
    usernameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    showPassword: false,
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      console.log("Register successful");
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.register-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.336);
}

.register-title {
  font-size: 32px;
  margin-bottom: 20px;
  width: 100%;
  text-align: center;
}

.register-buttons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.register-button {
  margin: 0;
}
</style>