<template>
  <div>
    <label for="title">タイトル</label>
    <input type="text"
      id="title"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <pre>{{ value }}</pre>
  </div>
</template>


<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>
