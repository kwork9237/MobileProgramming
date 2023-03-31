<template>
    <blog-post
        post-title="안녕!"
        @update-post="onUpdatePost"
    ></blog-post>
    <blog-post/>
</template>

<script>
import BlogPost from './BlogPost.vue'

export default {
    components: {
        BlogPost
    },
    return() {
        const BlogPost = {
            props: ['postTitle'],
            emits: ['updatePost'],
            template: `
                <h3>
                    {{ postTitle }}
                </h3>
            `
        }
    }
}
</script>

<style>
</style>