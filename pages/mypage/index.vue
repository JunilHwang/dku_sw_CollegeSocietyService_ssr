<template>
    <div class="mypage">
        <h2 class="content-title">마이페이지</h2>
        <div class="view_type_column">
            <h3 class="legend">회원정보 조회</h3>
            <ul>
                <li>
                    <strong class="lbl">아이디</strong>
                    <div class="desc" v-html="member.id" />
                </li>
                <li>
                    <strong class="lbl">성명</strong>
                    <div class="desc" v-html="member.name" />
                </li>
                <li>
                    <strong class="lbl">닉네임</strong>
                    <div class="desc" v-html="member.nickname" />
                </li>
                <li>
                    <strong class="lbl">이메일</strong>
                    <div class="desc" v-html="member.email" />
                </li>
                <li>
                    <strong class="lbl">학번</strong>
                    <div class="desc" v-html="member.undergrad_number" />
                </li>
            </ul>
            <div class="btn_group">
                <router-link to="/mypage/info" class="btn submit">회원정보 변경</router-link>
                <router-link to="/mypage/pw" class="btn submit">비밀번호 변경</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            member: this.$store.state.member
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/_base.scss";
   .mypage{width:600px;margin:0 auto;}
   @include mobile () {
       .mypage{width:auto;margin:0;}
   }
</style>
