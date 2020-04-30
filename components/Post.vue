<template>
  <div class="col-4">
    <b-card :title="post.title">
      <b-card-text>{{ post.body }}</b-card-text>
      <nuxt-link
        :to="{
          name: 'post-id',
          params: { id: post.id }
        }"
        class="card-link"
        >Read more</nuxt-link
      >
    </b-card>
  </div>
</template>

<script>
export default {
  props: { post: { type: [Array, Object] } }
}
</script>
