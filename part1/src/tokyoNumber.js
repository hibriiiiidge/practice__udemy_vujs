export const tokyoNumber = {
  data() {
    return {
      subtitle: 'Nice to meet you',
      body: 'How do you do?',
      number: 0
    }
  },
  filters: {
    lowerCase(value) {
      return value.toLowerCase()
    }
  },
  created() {
    console.log('created in mixin')
  },
}
