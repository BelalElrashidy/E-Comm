<template>
  <q-page class="row items-center justify-evenly">
    <material-card
      v-for="item in data"
      :item="item"
      :key="item[0]"
    ></material-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MaterialCard from 'src/components/MaterialCard.vue';

export default defineComponent({
  name: 'MaterialsPage',
  components: {
    MaterialCard,
  },
  async mounted() {
    this.$axios.get('https://localhost:3000/api/Materials').then((res) => {
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
