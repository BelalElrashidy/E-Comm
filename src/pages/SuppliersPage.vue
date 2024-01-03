<template>
  <q-page class="row items-center justify-evenly">
    <SupplierCard
      v-for="myCardInfo in data"
      :cardInfo="myCardInfo"
      :key="myCardInfo"
    />
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
  async mounted() {
    this.$axios.get('http://localhost:3000/api/Suppliers').then((res) => {
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
