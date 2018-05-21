<template>
    <footer id="footer">
        <p class="copyright">
            Copyright (C) 2018 <em>po-fect</em> All Right Reserved.
        </p>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
    #footer{text-align:center;background:#444;color:#aaa;padding:30px 0;
        em{color:#fff;}
    }
    @include mobile () {
        #footer{margin-bottom:40px;}
    }
</style>
