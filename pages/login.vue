<template>
    <div class="login_wrap">
        <h2 class="content-title">로그인</h2>
        <form action="" method="post" @submit="memberLogin">
            <section class="login">
                <p>
                    <label>
                        <i class="fas fa-user"></i>
                        <input type="text" name="id" id="login_id" size="80" placeholder="아이디" class="input fullSize" required autofocus>
                    </label>
                </p>
                <p>
                    <label>
                        <i class="fas fa-lock"></i>
                        <input type="password" name="pw" id="login_pw" size="80" placeholder="비밀번호" class="input fullSize" required>
                    </label>
                </p>
                <p>
                    <button type="submit" class="btn submit fullSize">
                        <i class="fas fa-key"></i>
                        로그인
                    </button>
                </p>
                <p>
                    <router-link to="/register" tag="button" class="btn info fullSize"><i class="fas fa-user"></i> 회원가입</router-link>
                </p>
                <p v-if="err !== ''" v-html="err" class="err" />
            </section>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            err: ''
        }
    },
    created () {        
        if (process.browser) {
            if (this.$store.state.isMember) {
                alert('회원은 이용할 수 없습니다.')
                this.$router.go(-1)
            }
        }
    },
    methods: {
        async memberLogin (event) {
            const _this = this
            const frm = event.target
            this.postData('/login', this.serialize(frm), (res) => {
                let data = res.data
                if (data !== null) {
                    if (data.state === 1) {
                        _this.$store.commit('login', data)
                        alert('로그인 되었습니다.')
                        this.$http.post('/api/login', {member:data}).then((res) => {
                            location.href = '/'
                        })
                    } else {
                        _this.err = '단국대학교 학생 인증 후 로그인 해주세요. 학교 메일함을 확인 바랍니다'
                    }
                } else {
                    _this.err = '아이디 또는 비밀번호가 일치하지 않습니다.'
                    frm.id.focus()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
    .login {
        width: 350px;
        margin: 0 auto;
        border-radius: 3px;
        label {
            display:block;
            cursor: pointer;
            position: relative;
            i{position: absolute; left:10px; top:0; line-height:40px;}
            input{padding-left:30px;}
        }
        p {
            margin-bottom: 10px;
        }
    }
    .title {
        font-size: 25px;
        margin-bottom: 20px;
        text-align: center;
        color: $color1;
    }
    .err {
        color: $color4;
    }
    button i{font-size:13px;margin-top:-1px;margin-right:5px;margin-left:-15px;}
</style>
