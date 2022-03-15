export const request=(params)=>{
    const baseUrl = "https://api.zzzsy.top";
    return new Promise((resolve,reject)=>{
        wx.request({
          ...params,
          url: baseUrl + params.url,
          success:(result)=>{
              resolve(result);
          },
          fail:(err)=>{
              reject(err);
          }
        });
    })
};
