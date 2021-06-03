const fetcher = require('../breedFetcher');
const { assert } = require('chai');

describe('fetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetcher('Sib', (err, description) => {
      // we expect no error for this scenario
      if (err) {
        console.log("you messed up", err);
      } else {
        console.log(description);
      }
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, description.trim());

      done();
    });
  });
});

