<template>
  <q-page class="q-pa-md">
    <span class="text-h3">Forms</span>
    <q-separator spaced />

    <div class="row justify-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xs col-xs-12 col-sm-12 col-md-6 q-pa-md"
      >
        <q-input
          filled
          v-model="userForm.email"
          label="Enter your email *"
          type="email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            isValidEmail,
          ]"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password1"
          label="Enter your password *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="userForm.password2"
          label="Confirm your password *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type something',
            isSamePassword,
          ]"
        />

        <q-checkbox
          v-model="userForm.conditions"
          label="Accept conditions"
          :style="
            userForm.errorInConditions && !userForm.conditions && 'color: red'
          "
        />

        <div class="row justify-end">
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "Forms",
  setup() {
    const userForm = ref({
      email: "",
      password1: "",
      password2: "",
      conditions: false,
      errorInConditions: false,
    });

    const { notify } = useQuasar();

    return {
      userForm,
      onSubmit() {
        userForm.value.errorInConditions = false;
        if (!userForm.value.conditions) {
          notify({
            message: "You must accept the conditions",
            color: "negative",
            icon: "la la-exclamation-circle",
          });
          userForm.value.errorInConditions = true;
          return;
        }
      },
      onReset() {
        userForm.value = {
          email: "",
          password1: "",
          password2: "",
          conditions: false,
          errorInConditions: false,
        };
      },
      isValidEmail(val) {
        const emailPattern =
          /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
        return emailPattern.test(val) || "Invalid e-mail.";
      },
      isSamePassword(val) {
        return val === userForm.value.password1 || "Passwords don't match";
      },
    };
  },
});
</script>
