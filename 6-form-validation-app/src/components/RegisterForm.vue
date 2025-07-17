<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-row>
        <v-col>
          <v-text-field v-model="fullName" :rules="nameRules" counter maxlength="20" label="Full name" required />
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required />
          <v-text-field v-model="password" :rules="passwordRules" label="password" required />
          <v-btn @click="submit">
            Validate
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    fullName: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    valid: false,
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => (v && v.length > 6) || "Password must be more than 6 characters"
    ],
  }),
  mounted() {
    this.$refs.form.validate();
  },
  computed: {

  },
  methods: {
    submit() {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        alert('✅ 表單驗證成功！');

      } else {
        alert('❌ 表單驗證失敗，請檢查欄位。');
      }
    }
  }
}
</script>

<style></style>