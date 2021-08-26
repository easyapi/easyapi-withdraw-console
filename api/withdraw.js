/**
 * 获取列表
 *
 */
export const getList = (params, context) => {
  return context.$axios.get(`${process.env.baseUrl}/console/withdraws`,
    {
      params: {
        ...params
      }
    }
  )
}
