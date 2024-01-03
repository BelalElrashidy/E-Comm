<template>
  <q-page class="row items-center justify-evenly">
    <CustomerCard :data="userData"></CustomerCard>
    <CustomerCard :data="userData"></CustomerCard>
    <CustomerCard :data="userData"></CustomerCard>
    <CustomerCard :data="userData"></CustomerCard>
    <CustomerCard :data="userData"></CustomerCard>
    <CustomerCard :data="userData"></CustomerCard>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomerCard from 'src/components/CustomerCard.vue';

export default defineComponent({
  name: 'EmployeePage',
  components: {
    CustomerCard,
  },
  data() {
    return {
      userData: {
        firstName: 'John',
        lastName: 'Doe',
        contactNumber: '123-456-7890',
        email: 'john.doe@example.com',
        address: '123 Main Street, Cityville',
      },
    };
  },
});
</script>
