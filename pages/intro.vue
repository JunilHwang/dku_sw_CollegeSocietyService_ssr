<template>
    <div class="intro">
        <div class="intro-wrap">
            <div class="category">
                <strong class="category-title">카테고리</strong>
                <ul>
                    <li v-for="data in menu" :key="data.idx">
                        <nuxt-link :to="`/intro/${data.id}`" v-html="data.name" :class="$route.params.category == data.idx ? 'nuxt-link-active' : ''" />
                    </li>
                </ul>
            </div>
            <div class="intro-content">
                <nuxt-child />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro',
    data: function () {
        return {
            menu: [
                {
                    idx: 1,
                    id: 'department',
                    name: '학과소개'
                },
                {
                    idx: 2,
                    id: 'professor',
                    name: '교수소개'
                },
                {
                    idx: 3,
                    id: 'process',
                    name: '교과과정'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~/assets/css/_base.scss';
    .intro{position:relative;padding-left:260px;}
    .category{width:240px;border:1px solid #ddd;box-sizing:border-box;padding:20px;height:350px;position:absolute;left:0;top:0;background:#fff;box-shadow:1px 1px 3px #ddd;}
    .category-title{font-size:21px;color:$color1;display:block;margin-bottom:20px}
    a{display:block;padding:0 10px;border-bottom:1px dotted #ddd;line-height:40px;transition:.3s;text-decoration:none;
        &:hover,
        &.nuxt-link-active{background:$color3;color:#fff;}
    }
    .intro-content{border:1px solid #ddd;padding:50px;min-height:350px;box-shadow:1px 1px 3px #ddd;background:#fff;}

    @include tablet () {
        .intro{padding-left:0;}
        .category{width:auto;height:auto;position:static;margin-bottom:20px;}
    }

    @include mobile () {
        .category{font-size:13px;}
        .category-title{font-size:15px}
        .intro-content{padding:10px;min-height:350px;border:none;box-shadow:none;font-size:11px;}
    }
</style>
