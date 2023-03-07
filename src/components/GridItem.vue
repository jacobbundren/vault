<template>
  <v-card>
    <v-img
      :src="`https://picsum.photos/500/300?image=${randomNumber * 5 + 10}`"
      :lazy-src="`https://picsum.photos/10/6?image=${randomNumber * 5 + 10}`"
      aspect-ratio="1"
      cover
      class="bg-grey-lighten-2 test"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey-lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "GridItem",
  props: {
    randomNumber: Number
  }
}
</script>

<style scoped>
  .test {
    min-height: 100px;
    min-width: 100px;
  }
</style>
