<template>
    <header id="header">
        <div class="content">
            <h3 class="logo">
                <a href="/">
                    <img src="/img/dk-logo.png" alt="단국대학교" width="200" />
                    <p>College Society Service</p>
                </a>
            </h3>
            <div class="util">
                <a href="/">홈</a>
                <template v-if="$store.state.isMember">
                    <a href="#" @click="logout">로그아웃</a>
                    <nuxt-link to="/mypage">마이페이지</nuxt-link>
                </template>
                <template v-else>
                    <nuxt-link to="/login">로그인</nuxt-link>
                    <nuxt-link to="/register">회원가입</nuxt-link>
                </template>
            </div>
            <nav class="gnb">
                <ul>
                    <li><nuxt-link to="/intro/" @click.native="initIntro">학과소개</nuxt-link></li>
                    <li><nuxt-link to="/board" @click.native="initCategory">커뮤니티</nuxt-link></li>
                    <li><a href="#">학생회 활동 내역</a></li>
                    <li v-if="$store.state.isAdmin"><a href="#">관리자</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    methods: {
        async logout () {
            this.$http.get('/api/logout').then((response) => {
                this.$store.commit('logout')
                alert('로그아웃 되었습니다.')
            })
        },
        async initCategory (event) {
            event.preventDefault()
            this.$router.push('/board/notice/list')
            this.setCategory('notice')
            return false
        },
        async initIntro (event) {
            event.preventDefault()
            this.$router.push('/intro/department')
            return false
        }
    }
}

</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
    #header{background:#fff;border-bottom:3px solid $color1;
        >div{@extend %auto-center;position:relative;display:flex;justify-content:space-between;align-items:center;height:100px;}
    }
    .logo{color:$color1;font-size:17px;
        a{text-decoration:none;display:flex;line-height:100%;flex-flow:column;justify-content:center;align-items:center;}
        p{padding-top:10px;color:$color2-1;}
    }
    .util{position:absolute;right:0;top:0;line-height:20px;font-size:11px;@include clr();
        a{float:left;line-height:30px;
            +a:before{content:"";width:1px;height:10px;margin:0 10px;background:#aaa;display:inline-block;vertical-align:middle;}
        }
    }
    .gnb{
        ul{display:flex;}
        a{display:block;font-size:17px;padding:0 40px;transition:.3s;text-decoration:none;position:relative;
            &:before{content:"";display:block;position:absolute;bottom:-10px;$size:50%;left:$size;right:$size;background:$color1;height:2px;transition:.3s;}
            &:hover,
            &.nuxt-link-active{color:$color1;
                &:before{$size:40%;left:$size;right:$size;}
            }
        }
    }
    @include tablet () {
        #header{padding:0 20px;}
    }
    @include mobile () {
        #header{position:fixed;left:0;right:0;bottom:0;z-index:100;border-top:2px solid $color1;border-bottom:none;
            >div{display:block;height:auto;}
        }
        .logo{display:none}
        .util{position:fixed;left:0;right:0;top:0;line-height:30px;display:flex;justify-content:center;background:#f5f5f5;border-bottom:1px solid #ddd;
            a{float:none;line-height:30px;}
        }
        .gnb{
            ul{justify-content:space-around;height:40px;line-height:40px;}
            a{font-size:13px;padding:0 20px;}
        }
    }
</style>
