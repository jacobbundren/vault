<template>
  <div class="dropzone__container">
    <div v-if="state.files.length > 0" class="files">
      <div class="file-item" v-for="(file, index) in state.files" :key="index">
        <span>{{ file.name }}</span>
        <v-btn color="error" @click="deleteFile(index)">Delete</v-btn>
      </div>
    </div>
    <div v-else class="dropzone" v-bind="getRootProps()">
      <div class="dropzone__dashedBorder">
        <input v-bind="getInputProps()" />
        <p v-if="isDragActive">Drop the files here ...</p>
        <p v-else>Drag and drop files here, or Click to select files</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropzone } from "vue3-dropzone";
import { reactive, watch } from "vue";
import { FileRejectReason } from "vue3-dropzone";

const state = reactive({
  files: []
})

const acceptedFileTypes = [
  ".png",
  ".jpg",
  ".jpeg",
  ".mp3"
]

const { getRootProps, getInputProps, isDragActive, ...rest } = useDropzone({
  onDrop,
  onDropRejected,
  accept: acceptedFileTypes
});

watch(state, () => {
  console.log('state', state)
})

watch(isDragActive, () => {
  console.log(isDragActive.value, rest)
})

function onDrop(acceptFiles: any, rejectReasons: any) {
  console.log(acceptFiles);
  console.log(rejectReasons);
  state.files = acceptFiles;
}

function onDropRejected(rejectReasons: FileRejectReason[], event: Event) {
  console.log(rejectReasons)
}

function deleteFile(index: number) {
  state.files.splice(index, 1);
}


</script>

<style scoped lang="scss">
.dropzone__container {
  width: 400px;
}
.dropzone,
.files {
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  font-size: 1.1em;
  line-height: 1.5;
}

.dropzone__dashedBorder {
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.3s ease;
  background: #fff;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  &:first-child {
   margin-top: 0;
  }
}
</style>
