<template>
  <div class="card">
    <q-item>
      <q-item-section>
        <h2>{{ data[1] }} {{ data[2] }}</h2>
      </q-item-section>
    </q-item>
    <div class="card-body">
      <q-item>
        <q-item-section>
          <q-item-label><strong>Contact Number:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ data[3] }}</q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label><strong>Email:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ data[4] }}</q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label><strong>Address:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ data[5] }}</q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
/* Add your styling here */
.card {
  border: 1px solid #ddd;
  width: 25rem;

  border-radius: 8px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  margin-bottom: 10px;
}

.card-body {
  font-size: 14px;
}
</style>
