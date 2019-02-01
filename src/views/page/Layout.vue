<template>
  <div id="apptest">
  <el-row :gutter="0">
    <el-col :span="11"><div class="grid-content bg-purple-light">2</div></el-col>
    <el-col :span="11"><div class="grid-content bg-purple-dark"></div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple"></div> </el-col>
  </el-row>
  <el-row :gutter="5">
    <el-col :span="12"><div class="grid-content bg-purple"> </div></el-col>
    <el-col :span="12"><div class="grid-content bg-purple-light"> </div></el-col>
  </el-row>
    <el-row :gutter="5" type="flex" justify="space-around">
      <el-col :span="4"><div class="grid-content bg-purple"> </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"> </div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light"> </div></el-col>

      <el-col :span="4"><div class="grid-content bg-purple-light"> </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div> </el-col>
      <el-col :span="11" :offset="1"><div class="grid-content bg-purple-light"></div> </el-col>
      <el-col :span="5" :offset="1"><div class="grid-content bg-purple-light"></div> </el-col>
    </el-row>
    <el-row>
      <i class="el-icon-edit"></i>
      <i class="el-icon-view"></i>
      <el-button type="primary" icon="el-icon-search">查询</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Layout'
  }
</script>

<style scoped lang="scss">
  .el-row {
    margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
