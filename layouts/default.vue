<template>
    <div id="app">
        <site-header v-if="this.$store.state.isHeader" />
        <div :class="'site-content'+siteContentCustom">
            <nuxt/>
        </div>
        <site-footer v-if="this.$store.state.isFooter" />
    </div>
</template>

<script>
import siteHeader from '~/components/header'
import siteFooter from '~/components/footer'
export default {
    computed: {
        siteContentCustom () {
            let className = ''
            if (this.$route.path.indexOf('board') !== -1 || this.$route.path.indexOf('intro') !== -1) {
                className = ' type2'
            }
            return className
        }
    },
    components: {
        siteHeader,
        siteFooter
    }
}
</script>