<template>
  <div>
    <select>
      <option
        v-for="option in dropdownList"
        :key="option.value"
        @change="changeOption">
        {{ option.name }}
      </option>
    </select>
    <child-component :field="selectedValue" />
  </div>
</template>

<script>
export default {
  props: {
    dropdownList: [
      {value: 'a', name: 'a'},
      {value: 'b', name: 'b'},
      {value: 'c', name: 'c'},
      {value: 'd', name: 'd'},
    ]
  },
  data() {
    return {
      selectedValue: 'a' // default A
    }
  },
  methods: {
    changeOption ({ target: { value } }) {
      this.selectedValue = value
    }
  }
}
</script>
