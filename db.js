// db.js
import { Pool } from 'pg';

const pool = new Pool({
  username: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export default pool;  