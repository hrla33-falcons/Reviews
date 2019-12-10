const foo = require('../foo.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('reviews', foo.dbName, foo.pass, {
  host: 'localhost',
  dialect: 'mysql'
});

// const Listings = sequelize.define('Listings', {
//   // eslint-disable-next-line camelcase
//   listing_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   eslint-disable-next-line camelcase
//   review_id: {
//     type: Sequelize.INTEGER,
//     references: 'Reviews',
//     referencesKey: 'id'
//   }
// });

// const Reviews = sequelize.define('Reviews', {
//   rating: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   },
//   dateS: {
//     type: Sequelize.DATEONLY
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   review: {
//     type: Sequelize.TEXT,
//     allowNull: false
//   },
//   dateP: {
//     type: Sequelize.DATEONLY
//   },
//   author: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   aLocation: {
//     type: Sequelize.STRING,
//     allowNull: true
//   },
//   ownerR: {
//     type: Sequelize.TEXT,
//     allowNull: true
//   }
// });

// class Listings extends Sequelize.Model {}
// Listings.init({
//   listing_id: {
//     type: Sequelize.INTEGER,
//     allowNull: false
//   }
// }, {sequelize, modelName: 'Listings'});
class Reviews extends Sequelize.Model {}
Reviews.init({
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dateS: {
    type: Sequelize.DATEONLY
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  review: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  dateP: {
    type: Sequelize.DATEONLY
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  aLocation: {
    type: Sequelize.STRING,
    allowNull: true
  },
  ownerR: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  ListingId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false
  }
 }, {sequelize, modelName: 'Reviews'});

// Listings.hasMany(Reviews);
// Reviews.belongsTo(Listings);

sequelize
  .authenticate()
  .then(() => {
    console.log('connected to database');
  })
  .catch((e) => {
    console.error('database connection FAILURE: ' + e);
  });

module.exports.Reviews = Reviews;
//module.exports.Listings = Listings;