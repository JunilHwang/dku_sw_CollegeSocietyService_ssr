<template>
    <div class="board-list">
        <ul v-if="boardList.length">
            <li v-for="data in boardList" :key="data.idx">
                <strong class="subject"><nuxt-link :to="getLink(data.idx)" v-html="data.subject" /></strong>
                <p class="desc" v-html="data.content" />
                <p class="date" v-html="getDateFormat(data.reg_date)" />
            </li>
        </ul>
        <p v-else>
            게시물이 없습니다.
        </p>
        <div class="btn_group right" v-show="$store.state.isMember">
            <nuxt-link :to="`/board/${categoryId}/write`" class="btn default">글작성</nuxt-link>
        </div>
    </div>
</template>

<script>
import dkswcm from '~/plugins/dkswcm_ssr'
export default {
    asyncData ({ params }, callback) {
        const url = `/boardList/${params.category}`
        dkswcm.getJsonData(url, (res) => {
            callback(null, {boardList: res.data})
        })
    },
    data: function () {
        return {
            boardList: []
        }
    },
    computed: {
        categoryId () {
            this.getList()
            return this.$route.params.category
        }
    },
    created () {
        //this.getList()
    },
    methods: {
        async getList () {
            const _this = this
            const url = '/boardList/' + this.$route.params.category
            this.getJsonData(url, function (res) {
                _this.boardList = res.data
            })
        },
        getLink (index) {
            return `/board/${this.$route.params.category}/view/${index}`
        },
        getDateFormat (date) {
            return dkswcm.getDateFormat(date)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
    .board-list{
        li{border-bottom:1px dotted #ddd;padding:20px 0}
        .subject a{font-size:19px;color:$color1-2;}
        .desc{padding: 5px 0;line-height:160%;color:#666;}
        .date{font-size:12px; color:#999;}
    }
</style>
