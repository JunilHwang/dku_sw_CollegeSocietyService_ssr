<template>
    <div class="register">
        <h2 class="content-title">마이페이지</h2>
        <div class="frm_type_column">
            <form action="" method="post" @submit="memberUpdate">
                <fieldset>
                    <legend class="legend">회원정보 변경</legend>
                    <ul>
                        <li>
                            <label>
                                <strong><i class="fas fa-check"></i> 성명</strong>
                                <input type="text" name="name" :value="member.name || null" class="input fullSize" placeholder="이름을 입력해주세요." required autofocus>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong><i class="fas fa-check"></i> 닉네임</strong>
                                <input type="text" name="nickname" :value="member.nickname || null" class="input fullSize" placeholder="닉네임을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong><i class="fas fa-check"></i> 이메일</strong>
                                <input type="text" name="email" :value="member.email || null" class="input fullSize" placeholder="이메일을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong><i class="fas fa-check"></i> 현재 비밀번호 확인</strong>
                                <input type="password" name="pw" class="input fullSize" placeholder="현재 비밀번호를 입력해주세요" required>
                            </label>
                        </li>
                    </ul>
                    <div class="btn_group">
                        <button type="submit" class="btn submit">작성완료</button>
                        <router-link to="/mypage" tag="button" class="btn default">뒤로가기</router-link>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MypageInfo',
    data () {
        return {
            member: {}
        }
    },
    created () {
        this.member = this.$store.state.member
    },
    methods: {
        memberUpdate (event) {
            const _this = this
            const frm = event.target
            if (this.member.pw !== frm.pw.value) {
                alert('비밀번호가 일치하지 않습니다.')
                return
            }
            this.putData(`/member/${this.member.idx}`, this.serialize(frm), function (res) {
                const data = res.data
                if (data === true) {
                    alert('완료되었습니다')
                    const changeData = {
                        name: frm.name.value,
                        nickname: frm.nickname.value,
                        email: frm.email.value
                    }
                    _this.$store.commit('memberUpdate', changeData)
                    _this.$http.post('/api/login', {member:_this.$store.state.member}).then((res) => {
                        _this.$router.push('/mypage')
                    })
                } else {
                    alert('에러')
                    console.log(data)
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
   .register{width:600px;margin:0 auto;}
   @include mobile () {
       .register{width:auto;margin:0;}
   }
</style>
