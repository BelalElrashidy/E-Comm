<template>
  <q-page class="row items-center justify-evenly">
    <CustomerCard
      v-for="userData in data"
      :data="userData"
      :key="userData"
    ></CustomerCard>
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
  async mounted() {
    this.$axios.get('http://localhost:3000/api/Customer').then((res) => {
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
