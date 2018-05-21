<template>
    <div class="board-view">
        <div class="subject-line">
            <h3 class="subject" v-html="boardData.subject" />
            <span class="writer">
                <i class="fas fa-pencil-alt"></i>
                <strong class="writer" v-html="boardData.writerName" />
            </span>
            <span class="date-time">
                <i class="far fa-calendar-alt"></i>
                {{getDateFormat(boardData.date)}}
            </span>
            <span class="hits">
                <i class="fas fa-eye"></i>
                {{boardData.hit}}
            </span>
        </div>
        <div class="boardContent" v-html="getContent()" />
        <div class="btn_group">
            <router-link :to="`/board/${$route.params.category}/list`" class="btn default">목록</router-link>
            <template v-if="$store.state.member.idx === boardData.writer">
                <router-link :to="`/board/${$route.params.category}/write/${$route.params.idx}`" class="btn submit">수정</router-link>
                <a href="#" class="btn submit" @click="boardDelete">삭제</a>
            </template>
        </div>
    </div>
</template>

<script>
import dkswcm from '~/plugins/dkswcm_ssr'
export default {
    asyncData ({ params }, callback) {
        dkswcm.getJsonData(`/board/${params.idx}`, (res) => {
            callback(null, {boardData: res.data})
        })
    },
    data: function () {
        return {
            boardData: {
                writer: '',
                subject: '',
                date: '',
                content: ''
            }
        }
    },
    methods: {
        async boardDelete () {
            if (!confirm('정말로 삭제하시겠습니까?')) {
                return false
            }
            const idx = this.$route.params.idx
            const _this = this
            this.deleteData(`/board/${idx}`, function (data) {
                alert('삭제 되었습니다.')
                _this.$router.push('/board/list/' + _this.$route.params.category)
            })
        },
        getContent () {
            return this.boardData.content.replace(/\n/g, '<br />')
        },
        getDateFormat (date) {
            return dkswcm.getDateFormat(date)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
    .subject-line{border-bottom:1px dashed #ddd;padding-bottom:15px;margin-bottom:15px;color:#aaa;
        span+span{padding-left:20px;}
        i{display:inline-block;width:20px;vertical-align:middle;color:$color2-1;}
        strong{color:#000;}
    }
    .subject{font-size:23px;padding-bottom:10px;color:#444;}
    .boardContent{min-height:200px;padding:20px;line-height:175%}
</style>
