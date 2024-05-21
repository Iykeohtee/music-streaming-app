// pages/api/signup.js
import pool from '../../db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body; 

    const client = await pool.connect();
    try {
      const result = await client.query('INSERT INTO users (name, email, password) VALUES(\$1, \$2, \$3) RETURNING *', [name, email, password]);
      res.status(200).json({ message: 'User signed up successfully', user: result.rows[0] });
    } catch (error) {
      res.status(500).json({ message: 'Error signing up user' });          
    } finally {
      client.release();
    }
  } else {     
    res.status(405).json({ message: 'Method Not Allowed' });    
  }    
}