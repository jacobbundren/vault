<template>
    <v-row>
      <v-col
        v-for="n in numDocs"
        :key="n"
        class="d-flex child-flex"
        cols="1"
      >
        <GridItem :randomNumber="n" />
      </v-col>
    </v-row>

</template>
<script>
import GridItem from "../components/GridItem";
export default {
  name: "DocumentGrid",
  components: {GridItem},
  data() {
    return {
      numDocs: 32
    }
  }
}
</script>

<style scoped>

</style>
