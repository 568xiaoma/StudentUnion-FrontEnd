<template>
  <div>
    <RegisterForm/>
  </div>
</template>
<script>
import RegisterForm from '@/components/components/RegisterForm/RegisterForm'


export default {
  name: 'RegitserPage',
  components:{
    RegisterForm:RegisterForm,
  },
  data() {
      return {
        
      };
    },
  methods: {
  },
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
</style>
