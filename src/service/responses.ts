export const responsesContent = (response) => {
    if (response.status !== 201) {
        return {
          success: false,
          msg: response.data.msg,
        }
      }

      return {
        success: true,
        data: response.data,
      }
      
}

export const responsesMsg = (response) => {
    if (response.status !== 201) {
        return {
          success: false,
          msg: response.data.msg,
        }
      }

      return {
        success: true,
        data: response.data.msg,
      }
      
}