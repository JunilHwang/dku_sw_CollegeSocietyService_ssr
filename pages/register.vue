<template>
    <div class="register">
        <h2 class="content-title">회원가입</h2>
        <div class="frm_type_column">
            <form action="" method="post" @submit="memberInsert">
                <fieldset>
                    <legend class="legend">회원정보 작성</legend>
                    <ul>
                        <li>
                            <label>
                                <strong>아이디</strong>
                                <input type="text" name="id" id="join_id" class="input fullSize" placeholder="아이디를 입력해주세요" required autofocus>
                                <p class="addiction">영문+숫자 조합 8~16글자</p>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>비밀번호</strong>
                                <input type="password" name="pw" class="input fullSize" placeholder="비밀번호를 입력해주세요" required>
                                <p class="addiction">영문 + 숫자 + 특수문자 조합 8 ~ 16글자</p>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>비밀번호 확인</strong>
                                <input type="password" name="pw_re" class="input fullSize" placeholder="비밀번호를 다시 입력해주세요" required>
                                <p class="addiction">비밀번호를 다시 입력해주세요</p>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>성명</strong>
                                <input type="text" name="name" class="input fullSize" placeholder="이름을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>닉네임</strong>
                                <input type="text" name="nickname" class="input fullSize" placeholder="닉네임을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>이메일</strong>
                                <input type="text" name="email" class="input fullSize" placeholder="이메일을 입력해주세요." required>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>학번</strong>
                                <input type="text" name="undergrad_number" class="input fullSize" placeholder="학번을 입력해주세요." required>
                            </label>
                        </li>
                    </ul>
                    <div class="btn_group">
                        <button type="submit" class="btn submit">작성완료</button>
                        <router-link to="/login" tag="button" class="btn default">로그인</router-link>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data () {
        return { }
    },
    methods: {
        memberInsert (event) {
            const _this = this
            const frm = event.target
            this.postData('/member', this.serialize(frm), function (res) {
                let data = res.data
                if (data === true) {
                    alert('회원가입이 완료되었습니다')
                    _this.$router.push('/')
                } else {
                    alert('중복된 아이디가 있습니다')
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
    @include mobile() {
        .register{width:auto;margin:0}
    }
</style>
