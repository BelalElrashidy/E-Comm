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
            {{ item.name }}
          </h3>
        </q-card-title>
      </q-item>
      <q-card-subtitle
        >{{ item.quantity }} {{ item.unitOfMeasure }}</q-card-subtitle
      >
    </q-card-section>

    <q-card-section class="flex row items-center justify-center">
      <q-card-main>
        {{ item.description }}
      </q-card-main>
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
