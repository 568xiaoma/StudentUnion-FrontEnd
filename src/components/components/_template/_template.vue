<template>
  <div class="">
    
  </div>
</template>
<script>
export default {
  name: '',
  data() {
      return {

      };
    },
  methods: {
    onSubmit() {
      $.post(
        'https://husteicstu.cn:3000/department',
        this.form,
        function (res) {
          self.data = res.result
        }
      )
    },
  }
}
</script>

<style>
</style>
