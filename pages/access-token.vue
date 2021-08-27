<template>
  <div>

  </div>
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
      this.theme.showHeader = this.$route.query.showHeader
    }
    this.$router.push(this.$route.query.url)
  }
}
</script>
