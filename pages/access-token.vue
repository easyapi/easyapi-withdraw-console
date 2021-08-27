<template>
</template>
<script>
export default {
  name: 'AccessToken',
  methods: {},
  watch: {},
  created() {
    if (this.$route.query.accessToken) {
      localStorage.setItem('accessToken', this.$route.query.accessToken)
    }
    if (this.$route.query.showHeader) {
      this.theme.showHeader  = this.$route.query.showHeader
    }
    this.$router.push(this.$route.query.url)
  }
}
</script>
