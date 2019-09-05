<template>
  <div class="my-FastMenu">
    <div class="my-FastMenu-bar">
      <transition name="el-zoom-in-bottom">
        <div v-show="show">
          <div v-for="item in menus" class="my-FastMenu-bar-item" :style="{backgroundColor: item.color}">
            <div class="my-FastMenu-bar-item-row">
              <i :class="item.icon" :style="{color: '#ffffff'}" @click="redirect(item.pagename)"/>
            </div>
          </div>
        </div>
      </transition>
      <div class="my-FastMenu-bar-item" :style="{backgroundColor: '#eeeeee'}">
        <div class="my-FastMenu-bar-item-row">
          <i class="el-icon-arrow-up" :style="{color: '#ffffff'}" @click="showChange()"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FastMenu',
  data() {
      return {
        show: false,
        menus:[
          {
            pagename: 'HomePageSlide',
            icon: 'el-icon-s-custom',
            color: 'rgb(17, 135, 238)',
          },
          {
            pagename: 'VentWall',
            icon: 'el-icon-s-comment',
            color: 'rgb(238, 135, 17)',
          },
          {
            pagename: 'HomePage',
            icon: 'el-icon-s-home',
            color: 'rgb(38, 201, 106)',
          },
          {
            pagename: 'RightPage',
            icon: 'el-icon-s-opportunity',
            color: 'rgb(38, 201, 201)',
          },
        ],
      };
    },
  methods: {
    redirect(pathname){
      this.$router.push({ name: pathname})
    },
    showChange(){
      this.show = !this.show
    }
  }
}
</script>

<style>
body{
  margin:0px;
  height: 1rem;
}
.my-FastMenu{
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}
.my-FastMenu-bar-item-row{
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}
.my-FastMenu-bar-item{
  width: 4rem;
  height: 4rem;
  background-color: black;
  border-radius: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
}
</style>
