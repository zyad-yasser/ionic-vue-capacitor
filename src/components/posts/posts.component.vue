<template>
  <div class="ion-text-center ion-padding">
    <PostCardComponent
      v-for="(item, index) in posts"
      :key="index"
      :data="item"
    />
  </div>
</template>

<script>
import PostCardComponent from "./components/card.component";
export default {
  name: "PostsComponent",
  components: {
    PostCardComponent,
  },
  props: {
    type: String,
  },
  data() {
    return {
      posts: [
        {
          user: {
            image: "/images/original.jpeg",
            name: "Zyad yasser",
            description: "Full stack software engineer"
          },
          content: `"He knew my palm like the salt of the earth."
A poem about love, familiarity, comfort and the need for human contact. Thank you for reading! <3`,
            title: "Amazing title",
            image: "/images/original.jpeg",
            comments: 5,
            shares: 4,
            likes: 12,
            tags: [
                "Affair",
                "Romance",
                "Short story",
                "Science",
            ],
            date: {
                number: 5,
                unit: 'days',
            }
        },
        {
          user: {
            image: "/images/original.jpeg",
            name: "Zyad yasser",
            description: "Full stack software engineer"
          },
          content: `"He knew my palm like the salt of the earth."
A poem about love, familiarity, comfort and the need for human contact. Thank you for reading! <3`,
            title: "Amazing title",
            image: "/images/original.jpeg",
            comments: 5,
            shares: 4,
            likes: 12,
            tags: [
                "Affair",
                "Romance",
                "Short story",
                "Science",
            ],
            date: {
                number: 5,
                unit: 'days',
            },
            originalPost: {
                user: {
                    image: "/images/original.jpeg",
                    name: "Zyad yasser",
                    description: "Full stack software engineer"
                },
                content: `"He knew my palm like the salt of the earth."
        A poem about love, familiarity, comfort and the need for human contact. Thank you for reading! <3`,
                    title: "Amazing title",
                    image: "/images/original.jpeg",
                    comments: 5,
                    shares: 4,
                    likes: 12,
                    tags: [
                        "Affair",
                        "Romance",
                        "Short story",
                        "Science",
                    ],
                    date: {
                        number: 5,
                        unit: 'days',
                    }
            }
        },
      ],
    };
  },
};
</script>

<style lang="sass" scoped></style>
