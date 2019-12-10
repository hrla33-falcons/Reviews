const Reviews = require('./data').Reviews;
const faker = require('faker');


genReview = async () => {
  let revObj, randOwn, randLoc, listReviews;
  let ownerProb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let locationProb = [1, 2, 3];
  for (var j = 0; j < 101; j++) {
    let randRev = Math.floor(Math.random() * 10);
    listReviews = [];

    for (i = 0; i < randRev; i++) {
      randOwn = Math.floor(Math.random() * 11);
      randLoc = Math.floor(Math.random() * 4);
      revObj = {};
      revObj.rating = Math.floor(Math.random() * 6);
      revObj.dateS = faker.date.between('2005-2-1', '2019-12-7');
      revObj.title = faker.lorem.sentence();
      revObj.review = faker.lorem.paragraph();
      revObj.dateP = faker.date.between('2005-2-1', '2019-12-7');
      revObj.author = faker.name.findName();
      if (ownerProb[randOwn] === 4) {
        revObj.ownerR = faker.lorem.paragraph();
      }
      if (locationProb[randLoc] === 2) {
        revObj.aLocation = `${faker.address.city()}, ${faker.address.stateAbbr()}`;
      }
      revObj.ListingId = j;
      listReviews.push(revObj);
      await Reviews.sync({ force: false })
        .then(() => {
          Reviews.bulkCreate(listReviews, { validate: true });
        }).then(() => {
          console.log('review data created');
        }).catch((e) => {
          console.error('seeding function failed: ' + e);
        });
    }
    }

};

genReview();