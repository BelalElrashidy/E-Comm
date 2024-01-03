<template>
  <q-card style="width: 30rem">
    <q-card-section class="flex row items-center justify-center">
      <q-card-title class="text-h6">{{ cardInfo[1] }}</q-card-title>
    </q-card-section>

    <q-card-section class="flex row items-center justify-evenly">
      <q-list style="width: 30rem">
        <q-item>
          <q-item-label>Contact Number:</q-item-label>
          <q-item-label caption>{{ cardInfo[2] }}</q-item-label>
        </q-item>

        <q-item>
          <q-item-label>Email:</q-item-label>
          <q-item-label caption>{{ cardInfo[3] }}</q-item-label>
        </q-item>

        <q-item>
          <q-item-label>Address:</q-item-label>
          <q-item-label caption>{{ cardInfo[4] }}</q-item-label>
        </q-item>

        <q-item>
          <q-item-label>Contact Person:</q-item-label>
          <q-item-label caption>{{ cardInfo[5] }}</q-item-label>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: [],
      required: true,
      default: () => ({}),
    },
  },
};
</script>
<style scoped>
.q-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
