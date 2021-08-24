import './monthly.scss'
import Header from '../../../../components/Header/index.vue'
import Aside from '../../../../components/Aside/index.vue'
import Pagination from '../../../../components/Pagination/index'
// import { getSummariesList } from '../../../../api/summary'

export default {
  name: '',
  components: {
    Header,
    Aside,
    Pagination
  },
  data() {
    return {
      showHeader: '',
      activeName: 'monthly',
      loading: false,
      summaryData: [],
      isShow: true,
      pagination: {
        page: 1,
        size: 12,
        total: 0
      },
      dataTime: ''
    }
  },
  head() {
    return {
      title: '每月统计 - EasyAPI发票管理',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '月汇总'
        },
        { hid: 'keyword', name: 'keyword', content: '每月统计' }
      ]
    }
  },
  methods: {
    nowTimes() {
      this.timeFormate(new Date())
    },
    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear().toString()
      this.dataTime = year
    },
    changeDate() {
      // this.getSummariesList()
    },
    // getSummariesList() {
    //   this.loading = true
    //   let page = this.pagination.page - 1
    //   let params = {
    //     page: page,
    //     type: 'monthly',
    //     year: this.dataTime,
    //     size: this.pagination.size,
    //     ...this.formInline
    //   }
    //   getSummariesList(params, this)
    //     .then(res => {
    //       this.loading = false
    //       if (res.data.code === 1) {
    //         this.summaryData = res.data.content
    //         this.pagination.total = Number(res.data.totalElements)
    //       } else {
    //         this.isShow = false
    //         this.summaryData = []
    //         this.pagination.total = 0
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    //跳转提现列表
    jumpWithdrawsList(row) {
      console.log(row)
      this.$router.push({
        path: '/withdraws/list',
        query: {
          startTime: row.startTime,
          endTime: row.endTime
        }
      })
    },
    //分页
    fatherSize(data) {
      this.pagination.size = data
      // this.getSummariesList()
    },
    fatherCurrent(data) {
      this.pagination.page = data
      // this.getSummariesList()
    },
    changeTab(item) {
      if (item.name === 'withdraws/summary') {
        this.$router.push({
          path: 'withdraws/summary'
        })
      } else {
        this.$router.push({
          path: item.name
        })
      }
    }
  },
  mounted() {
    this.nowTimes()
    // this.getSummariesList()
    this.showHeader = this.theme.showHeader
  }
}
