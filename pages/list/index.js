import './index.scss'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Pagination from '../../components/Pagination'
import SearchArea from '../../components/SearchArea'
import ManualMoney from '../components/ManualMoney'
import ShowDetails from '../components/showDetails'

import { getList, automatic, update } from '../../api/withdraw'

export default {
  name: 'index',
  components: {
    ShowDetails,
    Header,
    Aside,
    SearchArea,
    Pagination,
    ManualMoney,
  },
  head() {
    return {
      title: '快速提现',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '服务市场场景化服务',
        },
        { hid: 'keyword', name: 'keyword', content: '服务市场场景化服务' },
      ],
    }
  },
  data() {
    return {
      showHeader: '',
      showSidebar: '',
      searchItems: [
        {
          label: '提现时间',
          type: 'datePicker',
          pickerType: 'daterange',
          key: 'withdrawalTime',
        },
        { label: '账号类型', type: 'select', key: 'accountType' },
        { label: '状态', type: 'select', key: 'state' },
      ],
      accountType: [
        {
          value: '支付宝',
          label: '支付宝',
        },
        {
          value: '微信',
          label: '微信',
        },
        {
          value: '银行卡',
          label: '银行卡',
        },
      ],
      typeName: '', //账号类型名字
      state: [
        {
          value: '提现中',
          label: '提现中',
        },
        {
          value: '提现成功',
          label: '提现成功',
        },
        {
          value: '提现失败',
          label: '提现失败',
        },
      ],
      stateName: '', //状态名称
      startTime: '', //提现开始时间
      endTime: '', //提现结束时间
      loading: false,
      tableData: [],
      row: [], //复选框内容
      pagination: {
        page: 1,
        size: 12,
        total: 0,
      },
      disabled: true,
      autDisabled: true,
    }
  },
  methods: {
    /**
     * 获取账号类型
     */
    getAccountType() {
      let searchItems = JSON.parse(JSON.stringify(this.searchItems))
      searchItems.forEach((item) => {
        if (item.key === 'accountType') {
          item.selectItems = this.accountType
        }
      })
      this.searchItems = searchItems
    },
    /**
     * 获取状态
     */
    getState() {
      let searchItems = JSON.parse(JSON.stringify(this.searchItems))
      searchItems.forEach((item) => {
        if (item.key === 'state') {
          item.selectItems = this.state
        }
      })
      this.searchItems = searchItems
    },
    /**
     * 拒绝
     */
    refuse() {
      let data = {
        state: -1,
      }
      update(this.row[0].withdrawId, data, this)
        .then((res) => {
          if (res.data.code == 1) {
            this.getDataList()
            this.$message.success('成功')
          }
        })
        .catch((error) => {
          this.$message.error(error.response.data.message)
        })
    },
    /**
     * 自动打款
     */
    ifAutomaticMoney() {
      this.$confirm('是否确定自动打款, 确认后无法更改。', '自动打款', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        //拼ID逗号分开
        let data = {
          ids: this.row.map((x) => x.withdrawId).join(','),
        }
        automatic(data, this)
          .then((res) => {
            if (res.data.code == 1) {
              this.getDataList()
              this.$message.success('操作完成')
            }
          })
          .catch((error) => {
            this.$message.error(error.response.data.message)
          })
      })
    },
    /**
     * 手工打款
     */
    ifManualMoney() {
      this.$refs.child.price =
        this.row[0].price - this.row[0].taxation - this.row[0].serviceCharge
      this.$refs.child.id = this.row[0].withdrawId
      this.$refs.child.dialogVisible = true
    },
    /**
     * 详情
     */
    showDetails(row) {
      this.$refs.detailsChild.dialogVisible = true
      this.$refs.detailsChild.form = row
    },
    /**
     * 搜索
     */
    search(item) {
      let { withdrawalTime = [], accountType, state } = item
      this.typeName = accountType
      if (state == '提现中') {
        this.stateName = 0
      } else if (state == '提现成功') {
        this.stateName = 1
      } else if (state == '提现失败') {
        this.stateName = -1
      }
      if (withdrawalTime.length !== 0 && withdrawalTime[0] !== '') {
        this.startTime = withdrawalTime[0] + ' ' + '00:00:00'
        this.endTime = withdrawalTime[1] + ' ' + '23:59:59'
      } else {
        this.startTime = ''
        this.endTime = ''
      }

      this.getDataList(1)
    },
    event(item) {
      let { withdrawalTime = [], accountType, state } = item
      this.typeName = accountType
      if (state == '提现中') {
        this.stateName = 0
      } else if (state == '提现成功') {
        this.stateName = 1
      } else if (state == '提现失败') {
        this.stateName = -1
      }
      if (withdrawalTime.length !== 0 && withdrawalTime[0] !== '') {
        this.startTime = withdrawalTime[0] + ' ' + '00:00:00'
        this.endTime = withdrawalTime[1] + ' ' + '23:59:59'
      } else {
        this.startTime = ''
        this.endTime = ''
      }
    },
    handleRowChange(selection) {
      this.row = selection
      if (selection.length == 1) {
        this.disabled = false
        this.autDisabled = false
      } else if (selection.length == 0) {
        this.disabled = true
        this.autDisabled = true
      } else {
        this.disabled = true
        this.autDisabled = false
      }
    },
    getDataList(data) {
      this.loading = true
      if (data === 1) {
        let params = {
          startAddTime: this.startTime,
          endAddTime: this.endTime,
          way: this.typeName,
          state: this.stateName,
          page: 0,
          size: this.pagination.size,
        }
        getList(params, this).then((res) => {
          if (res.data.code === 1) {
            this.tableData = res.data.content
            this.pagination.total = res.data.totalElements
          } else if (res.data.code == 0) {
            this.tableData = []
            this.pagination.total = 0
          }
          this.loading = false
        })
      } else {
        let params = {
          startAddTime: this.startTime,
          endAddTime: this.endTime,
          way: this.typeName,
          state: this.stateName,
          page: this.pagination.page - 1,
          size: this.pagination.size,
        }
        getList(params, this).then((res) => {
          if (res.data.code === 1) {
            this.tableData = res.data.content
            this.pagination.total = res.data.totalElements
          } else if (res.data.code == 0) {
            this.tableData = []
            this.pagination.total = 0
          }
          this.loading = false
        })
      }
    },
    //分页
    fatherSize(data) {
      this.pagination.size = data
      this.getDataList()
    },
    fatherCurrent(data) {
      this.pagination.page = data
      this.getDataList()
    },
  },
  mounted() {
    if (this.$store.state.settings.showHeader == 'true') {
      this.showHeader = true
    } else {
      this.showHeader = false
    }
    if (this.$store.state.settings.showSidebar == 'true') {
      this.showSidebar = true
    } else {
      this.showSidebar = false
    }
    this.getAccountType()
    this.getState()
    this.getDataList()
  },
  created() {},
}
