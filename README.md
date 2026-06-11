# Waline Comment System

Vercel + PostgreSQL 部署的 Waline 评论系统，用于 [blog.chulinchen.top](https://blog.chulinchen.top)

## 环境变量（在 Vercel Dashboard 设置）

| 变量 | 说明 |
|------|------|
| `DB_TYPE` | 数据库类型，如 `postgresql` |
| `DB_HOST` | 数据库主机地址 |
| `DB_PORT` | 数据库端口，如 `5432` |
| `DB_USER` | 数据库用户名 |
| `DB_PASSWORD` | 数据库密码 |
| `DB_DB` | 数据库名称 |
| `SECURE_DOMAINS` | 允许的域名，如 `blog.chulinchen.top` |

## 部署

1. 将此仓库导入 Vercel
2. 在 Settings → Environment Variables 添加上述环境变量
3. 部署完成后即可使用