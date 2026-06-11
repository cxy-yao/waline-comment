const Waline = require('@waline/vercel');

module.exports = Waline({
  // 配置通过 Vercel 环境变量传递：
  // MongoDB Atlas 配置：
  // DB_TYPE=mongodb
  // DB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
  // SECURE_DOMAINS=blog.chulinchen.top
});