<template>
  <section class="main">
    {{hello}}
    <a href="#">test</a>
  </section>
</template>

<script>
export default {
  data () {
      return {
          hello: 'main'
      }
  },
  async created () {
    const _this = this
    const storageList = sessionStorage.getItem('categoryList')
    if (storageList) {
        _this.$store.commit('setCategory', JSON.parse(storageList))
        return
    }
    this.getJsonData('/categoryList', function (res) {
        const data = res.data
        let newData = {}
        for (let i = 0, len = data.length; i < len; i++) {
            newData[data[i].id] = data[i]
        }
        _this.$store.commit('setCategory', newData)
        sessionStorage.setItem('categoryList', JSON.stringify(newData))
    })
  }
}
</script>