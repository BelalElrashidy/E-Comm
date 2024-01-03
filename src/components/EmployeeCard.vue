<template>
  <q-card>
    <q-card-section style="width: 30rem">
      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>First Name:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employeep[1] }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Last Name:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee[2] }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Position:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee[3] }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Department:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee[4] }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Contact Number:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee[5] }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Email:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee[6] }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Hire Date:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee[7] }}</q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    employee: [],
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
