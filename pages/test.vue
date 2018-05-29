<template>
    <div>
        <no-ssr placeholder="Loading...">
            <froala id="edit" :config="config" name="content" cols="80" rows="10" />
        </no-ssr>
    </div>
</template>

<script>
import VueFroala from 'vue-froala-wysiwyg';
export default {
    data () {
        return {
            config: {
                events: {
                    'froalaEditor.focus': (e, editor) => {
                        $('#selectAll-1').click()
                    },
                    'froalaEditor.initialized': () => {
                        
                    },
                },
                heightMin: 200,
                language:'ko',
                placeholder: "Edit Me",
                charCounterCount: false,
            }
        }
    }
}
</script>