import axios from "axios";
const httpInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "http://geek.itheima.net",
  timeout: 5000,
});
// 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 可以在这里添加 token 等操作
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    // 其他配置也可以在此修改
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    // 成功响应时的处理
    return response.data; // 根据需要返回 response 或 response.data
  },
  (error) => {
    // 响应错误处理
    if (error.response) {
      // 服务有响应，但状态码非 2xx
      switch (error.response.status) {
        case 400:
          console.error("请求错误");
          break;
        case 401:
          console.error("未授权，请重新登录");
          break;
        case 403:
          console.error("拒绝访问");
          break;
        case 404:
          console.error("请求地址出错");
          break;
        case 500:
          console.error("服务器内部错误");
          break;
        default:
          console.error("其他错误", error.response.status);
      }
    } else if (error.request) {
      // 请求已发出但无响应
      console.error("请求超时或网络错误");
    } else {
      // 其他错误
      console.error("错误信息", error.message);
    }

    return Promise.reject(error); // 返回错误信息
  }
);

export { httpInstance };
