const pool = require('../config/db');

const postPorto = async (data) => {
    return new Promise((resolve, reject) => {
      console.log('Model: add portfolio', data);
      const { title, about, stack, photo, photo_id } = data;
      pool.query(
        `INSERT INTO porto (title, about, stack, photo, photo_id) VALUES ('${title}', '${about}', '${stack}', '${photo}', '${photo_id}') RETURNING *`,
        (err, results) => {
          if (!err) {
            resolve(results);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  const getPorto = async () => {
    return new Promise((resolve, reject) => {
      console.log('Model: get portfolio');
      pool.query(
        `SELECT * FROM porto`,
        (err, results) => {
          if (!err) {
            resolve(results);
          } else {
            reject(err);
          }
        }
      );
    });
  }; 
  const getPortoById = async (id) => {
    return new Promise((resolve, reject) => {
      console.log('Model: get portfolio by id', id);
      pool.query(
        `SELECT * FROM porto WHERE id = '${id}'`,
        (err, results) => {
          if (!err) {
            resolve(results);
          } else {
            reject(err);
          }
        }
      );
    });
  }; 

  const putPorto = async (data) => {
    return new Promise((resolve, reject) => {
      console.log('Model: edit portfolio', data);
      const { title, about, stack, photo, photo_id, id } = data;
      pool.query(
        `UPDATE porto SET title = '${title}', about = '${about}', stack = '${stack}', photo = '${photo}', photo_id = '${photo_id}' WHERE id = '${id}' RETURNING *`,
        (err, results) => {
          if (!err) {
            resolve(results);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  const delPortoById = async (id) => {
    return new Promise((resolve, reject) => {
      console.log('Model: delete portfolio by id');
      pool.query(
        `DELETE FROM porto WHERE id = '${id}' RETURNING *`,
        (err, results) => {
          if (!err) {
            resolve(results);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  module.exports = {
    postPorto,
    getPorto,
    getPortoById,
    putPorto,
    delPortoById
  }