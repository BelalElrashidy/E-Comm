<template>
  <q-card style="width: 30rem">
    <q-card-section class="flex row items-center justify-center">
      <q-card-title class="text-h6">{{ cardInfo.name }}</q-card-title>
    </q-card-section>

    <q-card-section class="flex row items-center justify-evenly">
      <q-list style="width: 30rem">
        <q-item>
          <q-item-label>Contact Number:</q-item-label>
          <q-item-label caption>{{ cardInfo.contactNumber }}</q-item-label>
        </q-item>

        <q-item>
          <q-item-label>Email:</q-item-label>
          <q-item-label caption>{{ cardInfo.email }}</q-item-label>
        </q-item>

        <q-item>
          <q-item-label>Address:</q-item-label>
          <q-item-label caption>{{ cardInfo.address }}</q-item-label>
        </q-item>

        <q-item>
          <q-item-label>Contact Person:</q-item-label>
          <q-item-label caption>{{ cardInfo.contactPerson }}</q-item-label>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
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
