<template>
  <div>
    <div class="user-wrapper">
      <div class="left">
        <div
          class="user-photo"
          :style="`background-image: url(${data.user.image})`"
        ></div>
        <div class="user-info">
          <div class="name">
            {{ data.user.name }}
          </div>
          <div class="description">
            {{ data.user.description }}
          </div>
        </div>
      </div>
      <div class="right">
        <i class="lni lni-more-alt rotate-90"></i>
      </div>
    </div>
    <div class="main-card">
      <div
        class="main-image"
        :class="data.originalPost ? 'original-post' : ''"
        :style="`background-image: url(${data.user.image})`"
      >
        <div v-if="data.originalPost">
            <div class="user-wrapper">
                <div class="left">
                    <div
                    class="user-photo"
                    :style="`background-image: url(${data.user.image})`"
                    ></div>
                    <div class="user-info">
                    <div class="name">
                        {{ data.user.name }}
                    </div>
                    <div class="description">
                        {{ data.user.description }}
                    </div>
                    </div>
                </div>
                </div>
                <div class="main-card" :class="data.originalPost ? 'original-post' : ''">
                <div
                    class="main-image"
                    :style="`background-image: url(${data.user.image})`"
                >
                
                </div>
                <div class="tools">
                    <div class="title" :class="data.originalPost ? 'original-post' : ''">
                    <div>{{ data.title }}</div>
                    </div>
                </div>
                <div class="content">
                    {{ data.content }}
                </div>
            </div>
        </div>
      </div>
      <div class="tools">
        <div class="date">
            <div>
                <div class="number">
                    {{data.date.number}}
                </div>
                <div class="text">
                    {{data.date.unit}} ago
                </div>
            </div>
        </div>
        <div class="title">
          <div>{{ data.title }}</div>
        </div>
        <div class="buttons">
          <div class="one-button" v-if="!data.originalPost">
            {{ data.shares }}
            <i class="lni lni-reload"></i>
          </div>
          <div class="one-button">
            {{ data.comments }}
            <i class="lni lni-comments"></i>
          </div>
          <div class="one-button">
            {{ data.likes }}
            <i class="lni lni-heart"></i>
          </div>
        </div>
      </div>
      <div class="content">
        {{ data.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCardComponent",
  props: {
    data: Object,
  },
};
</script>

<style lang="sass" scoped>
.main-card
    margin-bottom: 18px
    &.original-post
        margin-bottom: 0px !important
    .main-image
        height: 220px
        background-size: cover
        background-position: center
        &.original-post
            background-image: none !important
            height: auto !important
            padding: 15px
    .tools
        height: 50px
        width: 100%
        background-color: var(--light-grey)
        color: var(--grey)
        display: flex
        .date
            width: 50px
            background-color: var(--main-color)
            background: linear-gradient(180deg, rgba(0,198,198,1) 0%, rgba(0,189,189,1) 100%)
            margin-right: 12px
            color: white
            font-size: 10px
            display: flex
            align-items: center
            justify-content: center
            .number
                font-size: 18px
        .title
            flex-grow: 1
            display: flex
            align-items: center
            height: 100%
            color: black
            font-weight: 700
            &.original-post
                margin-left: 12px
        .buttons
            i
                font-size: 13px
                margin-left: 3px
            font-size: 12px
            display: flex
            align-items: center
            .one-button
                margin-right: 9px
                display: flex
                align-items: center

    .content
        color: var(--grey)
        padding: 15px
        text-align: left
        font-size: 14px
        background-color: white

.user-wrapper
    display: flex
    align-items: center
    justify-content: space-between
    color: var(--grey)
    margin-bottom: 9px
    padding: 0 5px
    .left
        display: flex
        .user-photo
            width: 37px
            height: 37px
            border-radius: 50%
            margin-right: 9px
            background-size: cover
            background-position: center
        .user-info
            .name
                font-size: 15px
                line-height: 1.2
                font-weight: 400
                color: var(--main-color)
                text-align: left
            .description
                font-size: 12px
    .right
        display: flex
        align-items: center
        justify-content: center
.main-card
    overflow: hidden
    min-height: 100px
    width: 100%
    box-shadow: 0px 4px 11px -1px rgba(0,0,0,0.2)
    border-radius: 15px
</style>
