<template>
  <q-card>
    <q-card-section style="width: 30rem">
      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>First Name:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.FirstName }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Last Name:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.LastName }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Position:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.Position }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Department:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.Department }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Contact Number:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.ContactNumber }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Email:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.Email }}</q-item-section>
      </q-item>

      <q-item v-if="employee">
        <q-item-section>
          <q-item-label><strong>Hire Date:</strong></q-item-label>
        </q-item-section>
        <q-item-section>{{ employee.HireDate }}</q-item-section>
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
