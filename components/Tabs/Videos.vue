<template>
  <div>
    <div class="grid grid-row xs:grid-cols-1 sm:grid-cols-2 gap-8">
      <div v-for="video in videos" :key="video._id">
        <keep-alive>
          <VideoCard :video="video" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Cosmic from "cosmicjs";
const api = Cosmic();
const bucket = api.bucket({
  slug: "craig",
  read_key: "iHIswEFFeDTFbP1XKoLC3gEV2fCSXgtXPXzC9OQNStzwqX0FdM",
});

export default {
  name: "VideoTab",
  props: ["selected"],
  data() {
    return {
      videos: {},
    };
  },
  created() {
    this.getVideosData();
  },
  methods: {
    async getVideosData() {
      this.loading = true;
      await bucket
        .getObjects({
          type: "videos",
          props: "_id,slug,title,content,metadata,created_at",
          sort: "-created_at",
        })
        .then((data) => {
          const videos = data.objects;
          this.loading = false;
          this.videos = videos;
        });
    },
  },
};
</script>
