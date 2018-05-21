<template>
    <div class="board-write">
        <h3 class="board-title">게시물 등록</h3>
        <form action="" method="post" @submit="boardInsert">
            <fieldset>
                <div class="frm_type_column">
                    <input type="hidden" name="writer" :value="$store.state.member.idx">
                    <input type="hidden" name="idx" v-if="$route.params.idx" :value="$route.params.idx">
                    <ul>
                        <li>
                            <label>
                                <strong>제목</strong>
                                <input type="text" name="subject" size="80" placeholder="제목을 입력해주세요" class="input fullSize" :value="boardData.subject" autofocus>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong>내용</strong>
                                <textarea name="content" placeholder="내용을 입력해주세요" class="fullSize" cols="80" rows="10" v-html="boardData.content"></textarea>
                            </label>
                        </li>
                    </ul>
                    <div class="btn_group">
                        <a href="#" class="btn default" @click="$router.go(-1)">목록</a>
                        <button type="submit" class="btn submit">전송</button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BoardWrite',
    data () {
        return {
            boardData: {
                subject: null,
                content: null
            }
        }
    },
    async created () {
        const _this = this
        this.getJsonData(`/board/${this.$route.params.idx}`, (res) => {
            console.log(res.data)
            _this.boardData = res.data
        })
    },
    methods: {
        async boardInsert (event) {
            const _this = this
            const frm = event.target
            this.putData(`/board/${this.$route.params.idx}`, this.serialize(frm), (res) => {
                const data = res.data
                if (data === true) {
                    alert('수정되었습니다')
                    _this.$router.push(`/board/${_this.$route.params.category}/view/${_this.$route.params.idx}`)
                } else {
                    alert('오류!')
                    console.log(data)
                }
            })
        }
    }
}
</script>
