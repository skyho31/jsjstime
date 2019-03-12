<template>
  <a-component
    v-if="field === 'a'"/>
  <b-component
    v-else-if="field === 'b'"/>
  <c-component
    v-else-if="field === 'c'"/>
  <d-component
    v-else-if="field === 'd'"/>
</template>

<script>
export default {
  props: {
    field: {type: String, default: 'a'}
  },
  data() {
    return {
      
    }
  }
}
</script>
