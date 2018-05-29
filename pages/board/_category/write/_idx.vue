<template>
    <div class="board-write">
        <h3 class="board-title">게시물 수정</h3>
        <form action="" method="post" @submit="boardUpdate">
            <fieldset>
                <div class="frm_type_column">
                    <input type="hidden" name="writer" :value="$store.state.member.idx">
                    <input type="hidden" name="idx" v-if="$route.params.idx" :value="$route.params.idx">
                    <ul>
                        <li>
                            <label>
                                <strong><i class="fas fa-check"></i> 제목</strong>
                                <input type="text" name="subject" size="80" placeholder="제목을 입력해주세요" class="input fullSize" :value="boardData.subject" autofocus>
                            </label>
                        </li>
                        <li>
                            <label>
                                <strong><i class="fas fa-check"></i> 내용</strong>
                                <textarea name="content" id="editor" placeholder="내용을 입력해주세요" class="fullSize" cols="80" rows="10" v-html="boardData.content"></textarea>
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
            },
            editor: null
        }
    },
    async created () {
        const _this = this
        const $s = require('scriptjs');
        this.getJsonData(`/board/${this.$route.params.idx}`, (res) => {
            _this.boardData = res.data
            $s('/ckeditor/ckeditor.js', function(){
                window.CKEDITOR_BASEPATH = '/ckeditor/'
                CKEDITOR.replace( 'editor' )
                CKEDITOR.config.height = 300
                //CKEDITOR.instances['editor'].setData(_this.boardData.content)
                _this.editor = CKEDITOR
            });
        })
    },
    methods: {
        async boardUpdate (event) {
            const _this = this
            const frm = event.target
            frm.content.value = _this.editor.instances['editor'].getData()
            if(!frm.content.value.replace(/<[^>]*>/gi, '').length){
                alert('내용을 입력하세요')
                return false
            }
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

<style lang="scss" scoped>
    .frm_type_column{max-width:100%;}
    .ck-content { height:400px; }
</style>
