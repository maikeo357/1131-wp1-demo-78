import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;


const app = express();
const port = 3000;

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: '212410178',
    password: '4Zz3va4g',
    database: 'wp1_demo_78',
});

app.get('/api/blog_78', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM blog_78');
        res.json(results.rows);
    } catch (error) {
        console.error('执行查询时出错:', error);
        res.status(500).json({ error: '内部服务器错误' });
    }
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});
