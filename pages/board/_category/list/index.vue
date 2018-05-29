<template>
    <div class="board-list">
        <div class="searchFrm">
            <form action="" method="post" @submit="search">
                <fieldset><legend>검색</legend>
                    <no-ssr>
                        <select name="category">
                            <option value="">전체</option>
                            <option v-for="cate in $store.state.categoryList" :value="cate.id" v-html="cate.name" :key="cate.idx" />
                        </select>
                    </no-ssr>
                    <input type="text" name="key" size="80" placeholder="검색어를 입력해주세요">
                    <button type="submit" class="btn submit">검색</button>
                </fieldset>
            </form>
        </div>
        <ul v-if="boardList.length">
            <li v-for="data in boardList" :key="data.idx" @click="$router.push(getLink(data.idx))">
                <strong class="subject"><nuxt-link :to="getLink(data.idx)" v-html="data.subject" /></strong>
                <p class="desc" v-html="getRemoveTag(data.content)" />
                <div class="btm">
                    <p class="btm-info">
                        <span class="writer">
                            <i class="fas fa-pencil-alt"></i>
                            {{data.writerName}}
                        </span>
                        <span class="date">
                            <i class="far fa-calendar-alt"></i>
                            {{getDateFormat(data.date_format)}}
                        </span>
                    </p>
                    <p class="etc">
                        <span class="goods">
                            <i class="fas fa-thumbs-up"></i> {{data.goods}}
                        </span>
                        <span class="comments">
                            <i class="far fa-comment-dots"></i> {{data.comments}}
                        </span>
                    </p>
                </div>
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
            boardList: [],
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
        async search (event) {
            const _this = this
            const frm = event.target
            const url = '/boardSearch'
            this.postData(url, this.serialize(frm), function (res) {
                _this.boardList = res.data
            })
        },
        getLink (index) {
            return `/board/${this.$route.params.category}/view/${index}`
        },
        getDateFormat (date) {
            return dkswcm.getDateFormat(date)
        },
        getRemoveTag (txt) {
            let newTxt
            if (txt) {
                newTxt = txt.replace(/(<([^>]+)>)/ig, '').replace(/(<(\/[^>]+)>)/ig, '')
                if (newTxt.length > 80) {
                    newTxt = newTxt.slice(0, 80) + '... [더 보기]'
                }
            }
            return newTxt
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
    .board-list{
        li{border-bottom:1px dotted #ddd;padding:20px;cursor:pointer;
            &:hover{background:#f5f5f5;}
        }
        .subject a{font-size:19px;color:$color1-2;}
        .desc{padding: 5px 0;line-height:160%;color:#666;}
        .btm{display:flex;justify-content:space-between;align-items:center;
            i{margin-top:-2px;font-size:11px}
            span{display:inline-block;vertical-align:middle;}
            span+span{margin-left:10px;}
        }
        .date{font-size:12px; color:#999;}
        .goods{color:$color4;}
        .comments{color:#666}
    }
    .searchFrm{margin-bottom:20px;
        select,input{border-color:#ddd;height:32px;box-sizing:border-box;}
        select{border-right:none;margin-top:1px}
        input{padding:0 10px;border:1px solid #ddd;width:400px}
        .btn{margin:1px 0 0 0;border-radius:0;border:none;}
    }
</style>
