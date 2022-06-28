const Sequelize = require('sequelize');
// const db = new Sequelize('postgres://localhost:5432/wikistack');

//or id we do not want to see  the console output (SQL command text for each query) the we do this =>
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging:false});

module.exports = {
  db
}
const Page = db.define('page', {
    title: {
      type: Sequelize.STRING, allowNull: false
    },
    slug: {
      type: Sequelize.STRING, allowNull: false
    },
    content: {
      type: Sequelize.TEXT, allowNull: false
    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  });

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING, allowNull: false
    },
    email: {
      type: Sequelize.STRING, allowNull: false,
      validate:{isEmail: true}
    }
  });

  module.exports = { db, Page, User };
