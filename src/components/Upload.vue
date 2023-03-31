<template>
  <div class="text-center">
    <v-dialog
      v-model="uploadModalVisible"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          icon
          color="secondary"
          @click="showUploadModal()"
          v-bind="props"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card color="background">
        <v-card-text color="darkText">
          Drag files or click the + icon to upload files.
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" color="secondary" @click="uploadModalVisible = false">Upload</v-btn>
          <v-btn variant="tonal" color="error" @click="uploadModalVisible = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";

let uploadModalVisible: Ref<boolean> = ref(false);
function showUploadModal(): void {
  uploadModalVisible.value = true;
}
</script>

<style scoped>
  .upload__modal {

  }
</style>
