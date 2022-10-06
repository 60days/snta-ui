<script lang="ts">
import { RouterLink, RouterView } from "vue-router";

import { defineComponent } from "vue";
import QuestionList from "./QuestionList.vue";

export default defineComponent({
  name: "QuestionPage",
  components: { QuestionList },
  created() { },
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    buttons: {
      type: Array,
      required: true,
    },
    footer: {
      type: String,
      required: false,
    },
  },
  methods: {},
});

// add page methods, next, back
</script>

<template>
  <div class="snta-question-page">
    <div class="snta-question-page__header">
      <h1 class="snta-question-page__title">{{ title }}</h1>
      <h2 class="snta-question-page__subtitle" :v-if="subtitle !== undefined">
        {{ subtitle }}
      </h2>
    </div>
    <div class="snta-question-page__body">
      <!--<QuestionList :v-bind="buttons" />-->
    </div>
    <div class="snta-question-page__footer">
      {{ footer }}
    </div>
  </div>
</template>

<style scoped>

</style>
