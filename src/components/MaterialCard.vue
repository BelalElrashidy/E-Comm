<!-- CardComponent.vue -->
<template>
  <q-card>
    <q-card-section
      class="flex row items-center justify-center"
      style="width: 20rem"
    >
      <q-item>
        <q-card-title
          ><h3>
            {{ item[1] }}
          </h3>
        </q-card-title>
      </q-item>
      <q-card-subtitle>{{ item[3] }} {{ item[2] }}</q-card-subtitle>
    </q-card-section>

    <q-card-section class="flex col items-center justify-center">
      <q-card-main>
        {{ item[4] }}
      </q-card-main>
      <q-card-subtitle>{{ item[5] }}</q-card-subtitle>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
