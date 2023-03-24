<template>
    <v-row >
      <v-col
        v-for="n in numDocs"
        :key="n"
        class="d-flex child-flex"
        cols="1"
      >
       <GridItem :file="{
         id: n,
         filename: `Image ${n}`,
         size: 123,
         type: fileTypes.JPG,
         url: `https://picsum.photos/500/300?image=${n}`
       }" />
      </v-col>

    </v-row>
  <v-btn
    icon
    color="secondary"
    fab
    fixed
    right
    bottom

  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>
<script lang="ts">
import GridItem from "../components/GridItem.vue";
import type File  from "@/types/File";
import {defineComponent} from "vue";
import {FileType} from "@/types/FileType";
export default defineComponent({
  name: "DocumentGrid",
  components: { GridItem },
  data() {
    return {
      numDocs: 32,
      fileTypes: FileType,
      files: [],
    }
  },
})
</script>

<style scoped>

</style>
