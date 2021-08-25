import './index.scss'
import Header from '../../components/Header'
import Aside from '../../components/Aside'
import pagination from '../../components/Pagination'
import SearchArea from '../../components/SearchArea'
import ManualMoney from '../components/ManualMoney'
import ShowDetails from '../components/showDetails'

export default {
  name: 'index',
  components: {
    ShowDetails,
    Header,
    Aside,
    SearchArea,
    pagination,
    ManualMoney
  },
  head() {
    return {
      title: '快速提现',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '服务市场场景化服务'
        },
        { hid: 'keyword', name: 'keyword', content: '服务市场场景化服务' }
      ]
    }
  },
  data() {
    return {
      showHeader: '',
      searchItems: [
        { label: '提现时间', type: 'datePicker', pickerType: 'daterange', key: 'withdrawalTime' },
        { label: '账号类型', type: 'select', key: 'accountType' },
        { label: '状态', type: 'select', key: 'state' }
      ],
      accountType: [
        {
          value: '支付宝',
          label: '支付宝'
        },
        {
          value: '微信',
          label: '微信'
        },
        {
          value: '银行卡',
          label: '银行卡'
        }
      ],
      typeName: '',//账号类型名字
      state: [
        {
          value: '提现中',
          label: '提现中'
        },
        {
          value: '提现成功',
          label: '提现成功'
        },
        {
          value: '提现失败',
          label: '提现失败'
        }
      ],
      stateName: '',//状态名称
      startTime: '',//提现开始时间
      endTime: '',//提现结束时间
      loading: false,
      tableData: [{
        withdrawalTime: '2021-08-24 12:12:12',
        username: '13656171020',
        number: '2021082401',
        accountType: '支付宝',
        cashAccount: '13656171020',
        amount: '1000.00元',
        tax: '8.00元',
        serviceCharge: '20.00元',
        price: '972.00元',
        state: '申请中',
        remark: ''
      }],
      pagination: {
        page: 1,
        size: 12,
        total: 0
      }
    }
  },
  methods: {
    /**
     * 获取账号类型
     */
    getAccountType() {
      let searchItems = JSON.parse(JSON.stringify(this.searchItems))
      searchItems.forEach(item => {
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
      searchItems.forEach(item => {
        if (item.key === 'state') {
          item.selectItems = this.state
        }
      })
      this.searchItems = searchItems
    },
    /**
     * 自动打款
     */
    ifAutomaticMoney() {
      this.$confirm('是否确定自动打款, 确认后无法更改。', '自动打款', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '操作成功!'
        })
      })
    },
    /**
     * 手工打款
     */
    ifManualMoney() {
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
      console.log(item)
      let {
        withdrawalTime = [],
        accountType,
        state
      } = item
      this.typeName = accountType
      this.stateName = state
      if (withdrawalTime.length !== 0 && withdrawalTime[0] !== '') {
        this.startTime = withdrawalTime[0] + ' ' + '00:00:00'
        this.endTime = withdrawalTime[1] + ' ' + '23:59:59'
      } else {
        this.startTime = ''
        this.endTime = ''
      }
      // this.getInvoiceList()
    },
    event(item) {
      let {
        withdrawalTime = [],
        accountType,
        state
      } = item
      this.typeName = accountType
      this.stateName = state
      if (withdrawalTime.length !== 0 && withdrawalTime[0] !== '') {
        this.startTime = withdrawalTime[0] + ' ' + '00:00:00'
        this.endTime = withdrawalTime[1] + ' ' + '23:59:59'
      } else {
        this.startTime = ''
        this.endTime = ''
      }
    },
    //分页
    fatherSize(data) {
      this.pagination.size = data
    },
    fatherCurrent(data) {
      this.pagination.page = data
    }
  }
  ,
  mounted() {
    this.showHeader = this.theme.showHeader
    this.getAccountType()
    this.getState()
  }
}
