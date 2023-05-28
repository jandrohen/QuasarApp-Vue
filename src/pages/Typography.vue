<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />

    <span class="text-subtitle1">Subtitle 1</span>
    <span class="text-subtitle2">Subtitle 2</span>

    <q-separator />

    <p class="text-body1">
      Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </p>
    <p class="text-body2">
      Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
      blanditiis tenetur
    </p>

    <q-separator />

    <span class="text-weight-thin"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
    >
    <span class="text-weight-light"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
    >
    <span class="text-weight-regular"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
    >
    <span class="text-weight-medium"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
    >
    <span class="text-weight-semibold"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
    >
    <span class="text-weight-bold"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
    >
    <span class="text-weight-bolder"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span
    >

    <q-separator />

    <q-btn color="primary" label="Abrir menú lateral" class="q-mt-md" />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Typography",
});
</script>
