<template>
  <section>
    <!--工具条-->
    <el-collapse v-model="activeNames">
      <el-collapse-item title="查询条件" name="1">
        <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit"
                 style="margin:10px;width:60%;min-width:600px;">
          <el-row>
            <el-col :span="12">
              <el-form-item label-width="80px" label="开始时间">
                <el-date-picker v-model="form.startTime" type="datetime" format="yyyy-MM-dd HH:mm:ss"
                                placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form :model="filters">
            <el-col :span="6">
              <el-form-item style="margin-left: 10px;">
                <el-input v-model="filters.siteName" placeholder="设备名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item style="margin-left: 30px;">
                <el-button type="primary" v-on:click="getUsers">查询</el-button>
              </el-form-item>
            </el-col>
          </el-form>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <!--表格-->
    <div class="panel">
      <div class="panel-title">
        <span v-text="panelTitle"></span>
        <div class="fr">
          <el-button @click.stop="on_refresh" size="small">
            <i class="fa fa-refresh"></i>
          </el-button>
        </div>
      </div>
      <div class="panel-body">
        <el-table :data="users" highlight-current-row v-loading="listLoading" style="width: 100%;">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column type="index" width="60"></el-table-column>
          <el-table-column prop="siteName" label="设备名称" width="100" sortable></el-table-column>
          <el-table-column prop="deviceNo" label="设备号" width="100" sortable></el-table-column>
          <el-table-column prop="startTime" label="开始时间" width="120" sortable></el-table-column>
          <el-table-column prop="repeat" label="重复设置" min-width="120"></el-table-column>
          <el-table-column prop="state" label="启用状态" min-width="120"></el-table-column>
          <el-table-column prop="type" label="类型" min-width="100"></el-table-column>
          <el-table-column label="操作" width="150"></el-table-column>
        </el-table>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
          <!--<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0" class="fl">批量删除</el-button>-->
          <!--<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"-->
          <!--:current-page.sync="listQuery.curPage" :page-sizes="[10,20,30, 50]"-->
          <!--:page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"-->
          <!--class="fr">-->
          <!--</el-pagination>-->

          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="listQuery.curPage"
            :page-sizes="[5, 10, 20, 40]"
            :page-size="listQuery.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :pager-count="5"
            :total="total">
          </el-pagination>
        </el-col>
      </div>
    </div>
  </section>
</template>

<script>
  import {userApi} from '../api/index'

  export default {
    name: 'UserList',
    data () {
      return {
        filters: {
          siteName: ''
        },
        panelTitle: '数据列表',
        users: [],
        total: 0,
        activeNames: [1],
        listLoading: false,
        form: {
          siteName: '',
          deviceNoItems: [{text: '全部', value: '全部'}, {text: '设备一', value: '设备一'}, {text: '设备二', value: '设备二'}],
          startTime: '',
          type: ['放电', '充电'],
        },

        listQuery: {
          curPage: 1,
          limit: 20,
          pageSize: 10,
          sort: '+id'
        }

      }
    },
    methods: {
      // 状态显示转换
      formatState: function (row, column) {
        return row.state === 0 ? '未启用' : row.state === 1 ? '已启用' : '未知'
      },
      // 操作分页
      handleSizeChange (val) {
        this.listQuery.pageSize = val
        this.getUsers()
      },
      handleCurrentChange (val) {
        this.listQuery.curPage = val
        this.getUsers()
      },
      // 刷新
      on_refresh () {
        this.getUsers()
      },
      // 获取用户列表
      getUsers () {
        let para = {
          curPage: this.listQuery.curPage,
          pageSize: this.listQuery.pageSize,
          siteName: this.filters.siteName
        }
        this.listLoading = true
        userApi.search(para).then(res => {
          this.total = res.data.total
          this.users = res.data.users
          console.log(this.total)
        })
        // this.$http.get('/user/listpage', {params: para}).then((res) => {
        //   this.users = res.data.users
        //   console.log(res)
        // })
        this.listLoading = false
      },
      selsChange: function (sels) {
        this.sels = sels
      }
    },
    mounted () {
      this.panelTitle = '数据分析展示'
      // console.log('get')
      this.getUsers()
    }
  }
</script>
