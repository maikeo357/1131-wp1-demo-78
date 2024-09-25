import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: '5432',
    user: 'postgres.izuelgvcxyeikvrjjdbh',
    password: 'oKJqmHKlm8Yx1CD8',
    database: 'postgres',
});

console.log('connecting Supabase dtabase:', pool.options.database);

const testDB = async () => {
    try {
        const results = await pool.query(`SELECT * FROM blog_78`); 
        console.log('JSON data:', results.rows); 
    } catch (error) {
        console.error('Error executing query:', error); 
    } finally {
        await pool.end(); 
    }
};

testDB();

export default pool;
