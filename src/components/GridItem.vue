<template>
  <div class="gridItem__container">
    <v-card class="gridItem__fileCard">
      <v-img
        :src="file.url"
        :lazy-src="file.url"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
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
    <div class="text--darkText fileName">
      {{ file.filename }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type File from "@/types/File";

const props = defineProps(
  {
    file: {
      type: File,
      required: true
    }
  }
)
</script>

<style scoped>
  .gridItem__container {
    flex-direction: column;
    min-width: 100px;
    min-height: 100px;
  }
  .fileName {
    text-align: center;
  }
</style>
