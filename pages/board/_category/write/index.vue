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
                                <strong><i class="fas fa-check"></i> 제목</strong>
                                <input type="text" name="subject" size="80" placeholder="제목을 입력해주세요" class="input fullSize">
                            </label>
                        </li>
                        <li>
                            <strong><i class="fas fa-check"></i> 내용</strong>
                            <textarea name="content" id="editor" cols="80" rows="10" autofocus></textarea>
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
    data () {
        return {
            editor: null
        }
    },
    async mounted () {
        const _this = this
        const $s = require('scriptjs');
        $s('/ckeditor/ckeditor.js', function(){
            window.CKEDITOR_BASEPATH = '/ckeditor/'
            CKEDITOR.replace( 'editor' );
            CKEDITOR.config.height = 300
            _this.editor = CKEDITOR
        });
    },
    methods: {
        async boardInsert (event) {
            const _this = this
            const frm = event.target
            frm.content.value = _this.editor.instances['editor'].getData()
            if(!frm.content.value.replace(/<[^>]*>/gi, '').length){
                alert('내용을 입력하세요')
                return false
            }
            _this.postData(`/board/${_this.$route.params.category}`, _this.serialize(frm), (res) => {
                alert('추가되었습니다')
                _this.$router.push(`/board/${_this.$route.params.category}/list`)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .frm_type_column{max-width:100%;}
    .ck-content { height:400px; }
</style>
