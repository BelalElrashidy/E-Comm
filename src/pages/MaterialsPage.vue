<template>
  <q-page class="row items-center justify-evenly">
    <material-card :item="item"></material-card>
    <material-card :item="item"></material-card>
    <material-card :item="item"></material-card>
    <material-card :item="item"></material-card>
    <material-card :item="item"></material-card>
    <material-card :item="item"></material-card>
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
  data() {
    return {
      item: {
        name: 'Cotton',
        quantity: 200,
        unitOfMeasure: 'KM',
        description: 'This is cotton',
      },
    };
  },
});
</script>
