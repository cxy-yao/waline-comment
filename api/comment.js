const Waline = require('@waline/vercel');

module.exports = Waline({
  // 配置通过 Vercel 环境变量传递：
  // DB_TYPE=postgresql
  // DB_HOST=
  // DB_PORT=5432
  // DB_USER=
  // DB_PASSWORD=
  // DB_DB=waline
  // SECURE_DOMAINS=blog.chulinchen.top
});