<template>
    <div>
        <div id="title">
            <h1>测试插件调用</h1>
        </div>
        <el-row>
            <el-col :span="4" :offset="10" v-for="(plugin,index) in plugins" :key="index">
                <el-button type="primary">{{plugin.name}}</el-button>
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
          name: '相机'
        }
      ]
    }
  }
}
</script>
<style>
#title {
  text-align: center;
}
</style>
