<template>
  <div></div>
</template>
<script>
export default {
  name: 'AccessToken',
  methods: {},
  watch: {},
  mounted() {
    if (this.$route.query.accessToken) {
      localStorage.setItem('accessToken', this.$route.query.accessToken)
    }
    if (this.$route.query.showHeader) {
      this.$store.state.settings.showHeader = this.$route.query.showHeader
    }
    if (this.$route.query.showSidebar) {
      this.$store.state.settings.showSidebar = this.$route.query.showSidebar
    }
    this.$router.push(this.$route.query.url)
  },
}
</script>
