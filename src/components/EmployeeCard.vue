<template>
  <q-card>
    <q-card-section style="width: 30rem">
      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>First Name:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.firstName }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Last Name:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.lastName }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Position:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.position }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Department:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.department }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Contact Number:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.contactNumber }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Email:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.email }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Hire Date:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.hireDate }}</q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    employee: Object,
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
