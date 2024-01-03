<template>
  <q-page class="row items-center justify-evenly">
    <employee-card :employee="employeeData"></employee-card>
    <employee-card :employee="employeeData"></employee-card>
    <employee-card :employee="employeeData"></employee-card>
    <employee-card :employee="employeeData"></employee-card>
    <employee-card :employee="employeeData"></employee-card>
    <employee-card :employee="employeeData"></employee-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EmployeeCard from 'src/components/EmployeeCard.vue';

export default defineComponent({
  name: 'EmployeePage',
  components: {
    EmployeeCard,
  },
  data() {
    return {
      employeeData: {
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        department: 'Engineering',
        contactNumber: '123-456-7890',
        email: 'john.doe@example.com',
        hireDate: '2022-01-01',
      },
    };
  },
});
</script>
