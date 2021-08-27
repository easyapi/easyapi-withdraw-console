/**
 * 获取列表
 *
 */
export const getList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/console/withdraws`,
    {
      params: {
        accessToken: localStorage.getItem('accessToken'),
        ...params
      }
    }
  )
}

/**
 * 修改
 */
export const update = (id, data, context) => {
  data.accessToken = localStorage.getItem('accessToken')
  return context.$axios.put(`${process.env.baseUrl}/console/withdraw/${id}`, data)
}


/**
 * 自动打款
 */
export const automatic = (data, context) => {
  data.accessToken = localStorage.getItem('accessToken')
  return context.$axios.post(`${process.env.baseUrl}/console/withdraw/automatic`, data)
}
