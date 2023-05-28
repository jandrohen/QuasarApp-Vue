<template>
  <q-page>
    <div class="row q-mb-md">
      <div class="col bg-primary">1</div>
      <div class="col bg-secondary">2</div>
      <div class="col bg-accent">3</div>
    </div>

    <div class="row q-mb-md">
      <!-- 12 slots -->
      <div class="col bg-primary">1</div>
      <div class="col col-5 bg-secondary">2</div>
      <div class="col col-6 bg-accent">3</div>
    </div>

    <div class="row q-mb-md justify-center">
      <!-- 12 slots -->
      <div class="col col-4 bg-secondary">2</div>
      <div class="col col-4 bg-accent">3</div>
    </div>

    <div class="row q-mb-md justify-between">
      <!-- 12 slots -->
      <div class="col col-4 bg-secondary">2</div>
      <div class="col col-4 bg-accent">3</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Flex",
});
</script>
