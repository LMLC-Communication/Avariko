<template>
  <div>
    <h1>{{ page.title }}</h1>
    <div v-html="page.body"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('actualites', params.id).fetch();
    return { page };
  },
};
</script>

<style lang="scss" scoped></style>
