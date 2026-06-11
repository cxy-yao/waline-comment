# Waline Comment System

Vercel + MongoDB Atlas 部署的 Waline 评论系统，用于 [blog.chulinchen.top](https://blog.chulinchen.top)

## 环境变量（在 Vercel Dashboard 设置）

| 变量 | 说明 | 示例 |
|------|------|------|
| `DB_TYPE` | 数据库类型 | `mongodb` |
| `DB_URI` | MongoDB 连接字符串 | `mongodb+srv://user:pass@cluster.mongodb.net/waline?retryWrites=true&w=majority` |
| `SECURE_DOMAINS` | 允许的域名 | `blog.chulinchen.top` |

## 部署

1. 将此仓库导入 Vercel
2. 在 Settings → Environment Variables 添加上述环境变量
3. 部署完成后即可使用