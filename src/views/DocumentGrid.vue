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
       type: FileType.JPG,
       url: `https://picsum.photos/500/300?image=${n}`
     }" />
    </v-col>
  </v-row>
  <Upload class="documentGrid__addFileButton"/>
</template>
<script setup lang="ts">
import GridItem from "../components/GridItem.vue";
import Upload from "../components/Upload.vue";
import {FileType} from "@/types/FileType";
import {Ref, ref} from "vue";

let numDocs: Ref<number> = ref(32)


</script>

<style scoped>
.documentGrid__addFileButton {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
