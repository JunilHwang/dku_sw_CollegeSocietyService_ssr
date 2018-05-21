<template>
    <div class="login_wrap">
        <h2 class="content-title">로그인</h2>
        <form action="" method="post" @submit="memberLogin">
            <section class="login">
                <p>
                    <label>
                        <input type="text" name="id" id="login_id" size="80" placeholder="아이디" class="input fullSize" required autofocus>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="password" name="pw" id="login_pw" size="80" placeholder="비밀번호" class="input fullSize" required>
                    </label>
                </p>
                <p>
                    <button type="submit" class="btn submit fullSize">로그인</button>
                </p>
                <p>
                    <router-link to="/register" tag="button" class="btn info fullSize">회원가입</router-link>
                </p>
            </section>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return { }
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
                    _this.$store.commit('login', data)
                    alert('로그인 되었습니다.')
                    this.$http.post('/api/login', {member:data}).then((res) => {
                        _this.$router.push('/')
                    })
                } else {
                    alert('아이디 또는 비밀번호가 일치하지 않습니다.')
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
</style>
