<template>
  <div>
    <div id="title">
      <h1>测试插件调用</h1>
    </div>
    <el-row>
      <el-col :span="4" :offset="10" v-for="(plugin,index) in plugins" :key="index">
        <el-button type="primary" @click="call(plugin.method)">{{plugin.name}}</el-button>
      </el-col>
      <el-col :span="24" class="cameraImage-wrapper">
        <img class="cameraImage" id="myImage" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      plugins: [
        {
          name: '相机',
          method: 'camera'
        },
        {
          name: 'toast',
          method: 'toast'
        }
      ]
    }
  },
  methods: {
    call: function(method) {
      if (method === 'camera') {
        console.log('ok')
        if (this.$camera) {
          console.log('camera ready')
          this.$camera.getPicture(this.cameraSuccess, this.cameraError)
        }
      } else if (method === 'toast') {
        if (this.$toast) {
          console.log('toast ready')
          this.$toast.showWithOptions({
            message: 'test toast',
            duration: 'short', // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
            position: 'bottom'
          })
        }
      }
    },
    cameraSuccess: function(imageData) {
      var image = document.getElementById('myImage')
      image.src = 'data:image/jpeg;base64,' + imageData
    },
    cameraError: function() {
      alert('some error about camera happened!')
    }
  }
}
</script>
<style>
#title {
  text-align: center;
}
.cameraImage-wrapper {
  text-align: center;
}
.cameraImage {
  width: 90%;
}
</style>
