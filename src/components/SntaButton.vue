<template>
  <div class="snta-button">button</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SntaButton",
  created() {},
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {},
});
</script>

<style scoped>
.snta-button {
  background: linear-gradient(
    115.36deg,
    #2e0077 16.44%,
    #4a1097 119.39%,
    #772bcb 138.61%
  );
  border: 5px solid #ffffff;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 20px 24px;
  cursor: pointer;
  width: 561px;
  height: 124px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
