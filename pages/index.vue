<template>
<section class="main">
    <section class="main-content">
        <article>
            <header>
                <h3>공지사항</h3>
                <router-link to="/board/notice/list" class="more">더보기</router-link>
            </header>
            <ul>
                <li v-for="data in mainData.notice" :key="data.idx" @click="$router.push(getLink(data.category, data.idx))">
                    <router-link :to="getLink(data.category, data.idx)" v-html="limitSize(data.subject)"></router-link>
                    <span class="date" v-html="getDateFormat(data.date_format)"></span>
                </li>
                <li v-if="mainData.notice.length == 0">
                    등록된 게시물이 없습니다.
                </li>
            </ul>
        </article>
        <article>
            <header>
                <h3>자유게시판</h3>
                <router-link to="/board/free/list" class="more">더보기</router-link>
            </header>
            <ul>
                <li v-for="data in mainData.free" :key="data.idx" @click="$router.push(getLink(data.category, data.idx))">
                    <router-link :to="getLink(data.category, data.idx)" v-html="limitSize(data.subject)"></router-link>
                    <span class="date" v-html="getDateFormat(data.date_format)"></span>
                </li>
                <li v-if="mainData.free.length === 0">
                    등록된 게시물이 없습니다.
                </li>
            </ul>
        </article>
        <article>
            <header>
                <h3>교과목 정보</h3>
                <router-link to="/board/course/list" class="more">더보기</router-link>
            </header>
            <ul>
                <li v-for="data in mainData.course" :key="data.idx" @click="$router.push(getLink(data.category, data.idx))">
                    <router-link :to="getLink(data.category, data.idx)" v-html="limitSize(data.subject)"></router-link>
                    <span class="date" v-html="getDateFormat(data.date_format)"></span>
                </li>
                <li v-if="mainData.course.length === 0">
                    등록된 게시물이 없습니다.
                </li>
            </ul>
        </article>
        <article>
            <header>
                <h3>교수정보 정보</h3>
                <router-link to="/board/professor/list" class="more">더보기</router-link>
            </header>
            <ul>
                <li v-for="data in mainData.professor" :key="data.idx" @click="$router.push(getLink(data.category, data.idx))">
                    <router-link :to="getLink(data.category, data.idx)" v-html="limitSize(data.subject)"></router-link>
                    <span class="date" v-html="getDateFormat(data.date_format)"></span>
                </li>
                <li v-if="mainData.professor.length === 0">
                    등록된 게시물이 없습니다.
                </li>
            </ul>
        </article>
        <article>
            <header>
                <h3>팀프로젝트 정보</h3>
                <router-link to="/board/project/list" class="more">더보기</router-link>
            </header>
            <ul>
                <li v-for="data in mainData.project" :key="data.idx" @click="$router.push(getLink(data.category, data.idx))">
                    <router-link :to="getLink(data.category, data.idx)" v-html="limitSize(data.subject)"></router-link>
                    <span class="date" v-html="getDateFormat(data.date_format)"></span>
                </li>
                <li v-if="mainData.project.length === 0">
                    등록된 게시물이 없습니다.
                </li>
            </ul>
        </article>
        <article>
            <header>
                <h3>스터디 정보</h3>
                <router-link to="/board/study/list" class="more">더보기</router-link>
            </header>
            <ul>
                <li v-for="data in mainData.study" :key="data.idx" @click="$router.push(getLink(data.category, data.idx))">
                    <router-link :to="getLink(data.category, data.idx)" v-html="limitSize(data.subject)"></router-link>
                    <span class="date" v-html="getDateFormat(data.date_format)"></span>
                </li>
                <li v-if="mainData.study.length === 0">
                    등록된 게시물이 없습니다.
                </li>
            </ul>
        </article>
    </section>
    <div class="facebook">
        <div class="fb-page" data-href="https://www.facebook.com/DepartmentOfSoftware/?hc_ref=ARQ0PzELH4LlqZMeqg2i9yIqxaOmRRWfBk9yjOzOnA11PJkruBrfaSAfaBQNZIsdxXc" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-height="650">
            <blockquote cite="https://www.facebook.com/DepartmentOfSoftware/?hc_ref=ARQ0PzELH4LlqZMeqg2i9yIqxaOmRRWfBk9yjOzOnA11PJkruBrfaSAfaBQNZIsdxXc" class="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/DepartmentOfSoftware/?hc_ref=ARQ0PzELH4LlqZMeqg2i9yIqxaOmRRWfBk9yjOzOnA11PJkruBrfaSAfaBQNZIsdxXc">Facebook</a>
            </blockquote>
        </div>
    </div>
  </section>
</template>

<script>
import dkswcm from '~/plugins/dkswcm_ssr'

export default {
    asyncData ({ params }, callback) {
        dkswcm.getJsonData('/main', (res) => {
            callback(null, {mainData: res.data})
        })
    },
    data () {
        return {
            hello: 'main',
            mainData: {
                notice: [],
                free: [],
                course: [],
                professor: [],
                project: [],
                study: []
            }
        }
    },
    async mounted () {
          (function(d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) return
            js = d.createElement(s)
            js.id = id
            js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v3.0'
            fjs.parentNode.insertBefore(js, fjs)
        }(document, 'script', 'facebook-jssdk'))
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
    },
    methods: {
        getLink (cate, index) {
            return `/board/${cate}/view/${index}`
        },
        getDateFormat (date) {
            return dkswcm.getDateFormat(date)
        },
        limitSize (txt) {
            if (txt.length > 18) {
                txt = txt.slice(0,18) + '...'
            }
            return txt
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
    .main{display:flex;justify-content:space-between;align-items:flex-start;}
    .facebook{border:1px solid #ddd;;width:340px}
    .main-content{display:flex;justify-content:space-between;width:calc(100% - 370px);flex-flow:wrap;
        article{width:49%;border:1px solid #ddd;margin-bottom:2%;box-sizing:border-box;padding:20px;min-height:200px;
            header{display:flex;justify-content:space-between;border-bottom:1px solid #ddd;padding-bottom:10px;margin-bottom:10px;align-items:center;}
            .more{font-size:11px;color:#666;}
        }
        h3{font-size:17px;color:$color1;font-weight:600;}
        li{display:flex;justify-content:space-between;line-height:30px;padding:0 5px;border-bottom:1px dotted #ddd;cursor:pointer;
            &:hover{background:#ffb;}
            a{text-decoration:none;}
        }
        .date{font-size:12px;letter-spacing:-0.5px;color:#aaa;}
    }
</style>
