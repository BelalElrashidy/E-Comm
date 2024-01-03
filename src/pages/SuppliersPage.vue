<template>
  <q-page class="row items-center justify-evenly">
    <SupplierCard :cardInfo="myCardInfo" />
    <SupplierCard :cardInfo="myCardInfo"></SupplierCard>
    <SupplierCard :cardInfo="myCardInfo"></SupplierCard>
    <SupplierCard :cardInfo="myCardInfo"></SupplierCard>
    <SupplierCard :cardInfo="myCardInfo"></SupplierCard>
    <SupplierCard :cardInfo="myCardInfo"></SupplierCard>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import SupplierCard from 'src/components/SupplierCard.vue';

export default defineComponent({
  name: 'cardInfoPage',
  components: {
    SupplierCard,
  },
  data() {
    return {
      myCardInfo: {
        name: 'John Doe',
        contactNumber: '123-456-7890',
        email: 'john.doe@example.com',
        address: '123 Main St, City',
        contactPerson: 'Jane Doe',
      },
    };
  },
});
</script>
