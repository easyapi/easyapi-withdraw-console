/**
 * 获取列表
 *
 */
export const getList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/console/withdraws?appKey=SFB9LGSypeHjWB1O&appSecret=bkosxt7y6szsf210`,
    {
      params: {
        ...params
      }
    }
  )
}


/**
 * 修改
 */
 export const update = (id, data, context) => {
  return context.$axios.put(`${process.env.baseUrl}/console/withdraw/${id}`, data)
}


/**
 * 自动打款
 */
 export const automatic = (data, context) => {
  return context.$axios.post(`${process.env.baseUrl}/console/withdraw/automatic`, data)
}

