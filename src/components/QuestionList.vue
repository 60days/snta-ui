<template>
  <div class="snta-list">
    <!--<SntaButton v-for="button in buttons" :key="button.id" :v-bind="button"></SntaButton>-->
  </div>
</template>

<script lang="ts">
import SntaButton from "./SntaButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuestionList",
  components: { SntaButton },
  created() { },
  data() {
    return {
      buttons: [
        {
          name: "Button 1",
          id: 1,
          value: "button1",
        },
        {
          name: "Button 2",
          id: 2,
          value: "button2",
        },
        {
          name: "Button 3",
          id: 3,
          value: "button3",
        },
      ],
    };
  },
  props: {},
  methods: {},
});
</script>

<style scoped>
.snta-list {
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  max-width: 1200px;
}
</style>
