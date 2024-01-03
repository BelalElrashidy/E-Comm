<template>
  <q-page class="row items-center justify-evenly">
    <employee-card
      v-for="employeeData in data"
      :employee="employeeData"
      :key="employeeData"
    ></employee-card>
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
  async mounted() {
    this.$axios.get('http://localhost:3000/api/Employees').then((res) => {
      this.data = res.data;
    });
  },
  data() {
    return {
      data: [],
    };
  },
});
</script>
