<script setup lang="ts">
import QuestionList from "./QuestionList.vue";
import QuestionPage from "./QuestionPage.vue";
import { defineComponent } from "vue";
defineComponent({
  name: "TheWelcome",
  components: { QuestionPage },
  created() { },
  data() {
    return {
      buttons: {
        name: "Button 1",
        id: 1,
        value: "button1",
      },
    };
  },

  methods: {},
});
</script>

<template>
  <div></div>
</template>
