<template>
  <div class="relative mx-auto">
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/about">About</NavItem>
      <NavItem to="/blogs" isActive id="BLOG" v-scroll-to="'#BLOG'"
        >Blog</NavItem
      >
    </Nav>
    <div class="mx-auto px-4">
      <div class="container pt-10 pb-2 max-w-3xl mx-auto">
        <div class="flex flex-row pt-16 pb-8">
          <BackLink link="blogs"> Back to all posts </BackLink>
        </div>
        <keep-alive>
          <Blog v-if="page" :blog="page" />
        </keep-alive>
        <div
          class="mt-16 pb-16 border-t-2 border-gray-200 dark:border-gray-800"
        />
        <SubscribeCard />
      </div>
    </div>
  </div>
</template>

<script>
import getBlog from "../../queries/getBlog";

export default {
  name: "BlogView",
  async asyncData({ app, route, redirect }) {
    let data = {};
    try {
      const d = await app.apolloProvider.defaultClient.query({
        query: getBlog,
        variables: { slug: route.params.id },
      });
      const data = d.data;
      console.log("data", data);
      return {
        page: data.getObject,
      };
    } catch (error) {
      console.log("error", error);
      redirect("/blogs");
    }
  },
};
</script>
