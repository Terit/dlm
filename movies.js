const fetch = require('node-fetch');
const API_KEY = '5cc38f28d0fb23ed45663d4dd805e56c';

exports.actorId = function*(next) {
  const name = this.params.name
  // const res = yield fetch(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${name}`)
  // const json = yield res.json()

  // const id = json.results[0].id;
  const id = 257
  // const moviesRes = yield fetch(`http://api.themoviedb.org/3/person/${id}/movie_credits?api_key${API_KEY}`)
  // const movies = yield res.json();
  yield this.body = stub;
}

const stub = {
  "cast": [
    {
      "adult": false,
      "character": "Jeffrey Goines",
      "credit_id": "52fe4212c3a36847f8001b39",
      "id": 63,
      "original_title": "Twelve Monkeys",
      "poster_path": "/6Sj9wDu3YugthXsU0Vry5XFAZGg.jpg",
      "release_date": "1995-12-27",
      "title": "Twelve Monkeys"
    },
    {
      "adult": false,
      "character": "Mickey O'Neil",
      "credit_id": "52fe4218c3a36847f8003be5",
      "id": 107,
      "original_title": "Snatch",
      "poster_path": "/on9JlbGEccLsYkjeEph2Whm1DIp.jpg",
      "release_date": "2000-12-06",
      "title": "Snatch"
    },
    {
      "adult": false,
      "character": "Rusty Ryan",
      "credit_id": "52fe4220c3a36847f800616b",
      "id": 161,
      "original_title": "Ocean's Eleven",
      "poster_path": "/o0h76DVXvk5OKjmNez5YY0GODC2.jpg",
      "release_date": "2001-12-06",
      "title": "Ocean's Eleven"
    },
    {
      "adult": false,
      "character": "Rusty Ryan",
      "credit_id": "52fe4221c3a36847f80062e5",
      "id": 163,
      "original_title": "Ocean's Twelve",
      "poster_path": "/4irBEiDC7SpYBuw5z1c7oLfF0EI.jpg",
      "release_date": "2004-12-09",
      "title": "Ocean's Twelve"
    },
    {
      "adult": false,
      "character": "Paul Maclean",
      "credit_id": "52fe4233c3a36847f800bb79",
      "id": 293,
      "original_title": "A River Runs Through It",
      "poster_path": "/xX4H1hZG9IgSRkC0LANbPQ0StJi.jpg",
      "release_date": "1992-10-09",
      "title": "A River Runs Through It"
    },
    {
      "adult": false,
      "character": "Joe Black",
      "credit_id": "52fe4234c3a36847f800bdbb",
      "id": 297,
      "original_title": "Meet Joe Black",
      "poster_path": "/nlxPnkZY3vY1iehJriKMQcT6eua.jpg",
      "release_date": "1998-11-12",
      "title": "Meet Joe Black"
    },
    {
      "adult": false,
      "character": "Robert “Rusty” Charles Ryan",
      "credit_id": "52fe4234c3a36847f800bf0f",
      "id": 298,
      "original_title": "Ocean's Thirteen",
      "poster_path": "/k7jNRNN9UuUc2VQg21YXYn3JGVY.jpg",
      "release_date": "2007-06-07",
      "title": "Ocean's Thirteen"
    },
    {
      "adult": false,
      "character": "Floyd",
      "credit_id": "52fe4237c3a36847f800cdd3",
      "id": 319,
      "original_title": "True Romance",
      "poster_path": "/xBO8R3CZfrJ9rrwrZoJ68PgJyAR.jpg",
      "release_date": "1993-09-09",
      "title": "True Romance"
    },
    {
      "adult": false,
      "character": "Himself",
      "credit_id": "52fe4249c3a36847f801293b",
      "id": 492,
      "original_title": "Being John Malkovich",
      "poster_path": "/gLhl4MBEC6yHTInwV7TxV1D3FLp.jpg",
      "release_date": "1999-09-30",
      "title": "Being John Malkovich"
    },
    {
      "adult": false,
      "character": "Tyler Durden",
      "credit_id": "52fe4250c3a36847f80149f7",
      "id": 550,
      "original_title": "Fight Club",
      "poster_path": "/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg",
      "release_date": "1999-10-14",
      "title": "Fight Club"
    },
    {
      "adult": false,
      "character": "Louis de Pointe du Lac",
      "credit_id": "52fe4260c3a36847f80199f9",
      "id": 628,
      "original_title": "Interview with the Vampire",
      "poster_path": "/qHRoxkDokG0rpRFeHHykgDf3Chy.jpg",
      "release_date": "1994-11-11",
      "title": "Interview with the Vampire"
    },
    {
      "adult": false,
      "character": "Achilles",
      "credit_id": "52fe4264c3a36847f801b083",
      "id": 652,
      "original_title": "Troy",
      "poster_path": "/edMlij7nw2NMla32xskDnzMCFBM.jpg",
      "release_date": "2004-05-13",
      "title": "Troy"
    },
    {
      "adult": false,
      "character": "John Smith",
      "credit_id": "52fe4276c3a36847f80208cb",
      "id": 787,
      "original_title": "Mr. & Mrs. Smith",
      "poster_path": "/dqs5BmwSULtB28Kls3IB6khTQwp.jpg",
      "release_date": "2005-06-09",
      "title": "Mr. & Mrs. Smith"
    },
    {
      "adult": false,
      "character": "Detective David Mills",
      "credit_id": "52fe4279c3a36847f802178b",
      "id": 807,
      "original_title": "Se7en",
      "poster_path": "/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg",
      "release_date": "1995-09-22",
      "title": "Se7en"
    },
    {
      "adult": false,
      "character": "Michael Sullivan",
      "credit_id": "52fe427bc3a36847f80222a7",
      "id": 819,
      "original_title": "Sleepers",
      "poster_path": "/80LV2GvhvMEuOutxgQwbRYpo0Vv.jpg",
      "release_date": "1996-10-18",
      "title": "Sleepers"
    },
    {
      "adult": false,
      "character": "Heinrich Harrer",
      "credit_id": "52fe4295c3a36847f802a10d",
      "id": 978,
      "original_title": "Seven Years in Tibet",
      "poster_path": "/cflSeFUVDCf73Tzh5sB204JbQ6j.jpg",
      "release_date": "1997-10-08",
      "title": "Seven Years in Tibet"
    },
    {
      "adult": false,
      "character": "Richard",
      "credit_id": "52fe42e9c3a36847f802c221",
      "id": 1164,
      "original_title": "Babel",
      "poster_path": "/fxneN0EQZwTfAfhTGUvUuIn6PLi.jpg",
      "release_date": "2006-10-27",
      "title": "Babel"
    },
    {
      "adult": false,
      "character": "Tom Bishop",
      "credit_id": "52fe42fbc3a36847f8031727",
      "id": 1535,
      "original_title": "Spy Game",
      "poster_path": "/hsb8hBeU3tkTX8SUYW6YYw6JPYD.jpg",
      "release_date": "2001-11-18",
      "title": "Spy Game"
    },
    {
      "adult": false,
      "character": "J.D.",
      "credit_id": "52fe42fbc3a36847f8031a6d",
      "id": 1541,
      "original_title": "Thelma & Louise",
      "poster_path": "/uxfIGF3rHOfu9IyvHbGVmFvvPgH.jpg",
      "release_date": "1991-05-24",
      "title": "Thelma & Louise"
    },
    {
      "adult": false,
      "character": "Tristan Ludlow",
      "credit_id": "52fe43c4c3a36847f806e20d",
      "id": 4476,
      "original_title": "Legends of the Fall",
      "poster_path": "/uh0sJcx3SLtclJSuKAXl6Tt6AV0.jpg",
      "release_date": "1994-12-16",
      "title": "Legends of the Fall"
    },
    {
      "adult": false,
      "character": "Frankie McGuire",
      "credit_id": "52fe43c4c3a36847f806e2b9",
      "id": 4477,
      "original_title": "The Devil's Own",
      "poster_path": "/1zusKhAtJ3YhbuA6J184Vm4INB3.jpg",
      "release_date": "1997-03-13",
      "title": "The Devil's Own"
    },
    {
      "adult": false,
      "character": "Jesse James",
      "credit_id": "52fe43c7c3a36847f806eed5",
      "id": 4512,
      "original_title": "The Assassination of Jesse James by the Coward Robert Ford",
      "poster_path": "/lSFYLoaL4eW7Q5VQ7SZQP4EHRCt.jpg",
      "release_date": "2007-09-20",
      "title": "The Assassination of Jesse James by the Coward Robert Ford"
    },
    {
      "adult": false,
      "character": "Early Grayce",
      "credit_id": "52fe43ce9251416c7501ef13",
      "id": 10909,
      "original_title": "Kalifornia",
      "poster_path": "/y8SJxeBmkmSWPTurQEacZmrEyey.jpg",
      "release_date": "1993-09-03",
      "title": "Kalifornia"
    },
    {
      "adult": false,
      "character": "Billy Canton",
      "credit_id": "52fe43d09251416c7501f331",
      "id": 10917,
      "original_title": "Too Young to Die?",
      "poster_path": "/7qwH5pdWhScueSoZlorJLxqoNvH.jpg",
      "release_date": "1990-02-26",
      "title": "Too Young to Die?"
    },
    {
      "adult": false,
      "character": "Brad, 1st Bachelor",
      "credit_id": "52fe43e2c3a36847f807610f",
      "id": 4912,
      "original_title": "Confessions of a Dangerous Mind",
      "poster_path": "/vQqxMsivH5cKNlEJJcYBcBQZ5rZ.jpg",
      "release_date": "2002-12-30",
      "title": "Confessions of a Dangerous Mind"
    },
    {
      "adult": false,
      "character": "Benjamin Button",
      "credit_id": "52fe43e2c3a36847f807632f",
      "id": 4922,
      "original_title": "The Curious Case of Benjamin Button",
      "poster_path": "/4O4INOPtWTfHq3dd5vYTPV0TCwa.jpg",
      "release_date": "2008-11-24",
      "title": "The Curious Case of Benjamin Button"
    },
    {
      "adult": false,
      "character": "Chad Feldheimer",
      "credit_id": "52fe43e6c3a36847f8076fe7",
      "id": 4944,
      "original_title": "Burn After Reading",
      "poster_path": "/w1Hb2rU2rMhvnbPkrj8KKc4CbMx.jpg",
      "release_date": "2008-09-12",
      "title": "Burn After Reading"
    },
    {
      "adult": false,
      "character": "Himself",
      "credit_id": "52fe44259251416c91006683",
      "id": 30565,
      "original_title": "The Hamster Factor and Other Tales of Twelve Monkeys",
      "poster_path": "/sfPxX29hVdBq8cP5839Dx91cCW9.jpg",
      "release_date": "1997-01-01",
      "title": "The Hamster Factor and Other Tales of Twelve Monkeys"
    },
    {
      "adult": false,
      "character": "Dwight Ingalls",
      "credit_id": "52fe4428c3a368484e012c37",
      "id": 21799,
      "original_title": "Cutting Class",
      "poster_path": "/y8eBkmikGYZmhmZfNjgzWD5Lo1d.jpg",
      "release_date": "1989-07-01",
      "title": "Cutting Class"
    },
    {
      "adult": false,
      "character": "Detective Frank Harris",
      "credit_id": "52fe45dd9251416c75065151",
      "id": 14239,
      "original_title": "Cool World",
      "poster_path": "/eSR3vFpgGQfYQYI2fMbwIZp70lp.jpg",
      "release_date": "1992-07-10",
      "title": "Cool World"
    },
    {
      "adult": false,
      "character": "Sinbad",
      "credit_id": "52fe45f09251416c75067ad5",
      "id": 14411,
      "original_title": "Sinbad: Legend of the Seven Seas",
      "poster_path": "/6LELf4ZzVBJwR9mNq86Mf5QVERS.jpg",
      "release_date": "2003-07-02",
      "title": "Sinbad: Legend of the Seven Seas"
    },
    {
      "adult": false,
      "character": "Billy Beane",
      "credit_id": "52fe461fc3a368484e0800bd",
      "id": 60308,
      "original_title": "Moneyball",
      "poster_path": "/9wr4yJKMjPCNPI9S8AZYHnUZdFu.jpg",
      "release_date": "2011-09-22",
      "title": "Moneyball"
    },
    {
      "adult": false,
      "character": "Metro Man (voice)",
      "credit_id": "52fe468e9251416c910583cd",
      "id": 38055,
      "original_title": "Megamind",
      "poster_path": "/b4mcRWB2TofqhiGDEuXJKkbthif.jpg",
      "release_date": "2010-11-04",
      "title": "Megamind"
    },
    {
      "adult": false,
      "character": "Himself",
      "credit_id": "52fe46acc3a368484e09d959",
      "id": 63472,
      "original_title": "His Way",
      "poster_path": "/wTQHzluHXnSzyh0hbsh2n2ky6kj.jpg",
      "release_date": "2011-03-04",
      "title": "His Way"
    },
    {
      "adult": false,
      "character": "Johnny Suede",
      "credit_id": "52fe46b2c3a36847f810d153",
      "id": 45145,
      "original_title": "Johnny Suede",
      "poster_path": "/3z4OZo5j1hkQ3AI8xTzuyqUD9Ru.jpg",
      "release_date": "1991-06-15",
      "title": "Johnny Suede"
    },
    {
      "adult": false,
      "character": "Jackie Cogan",
      "credit_id": "52fe46e4c3a368484e0a9a51",
      "id": 64689,
      "original_title": "Killing Them Softly",
      "poster_path": "/pIS0JWCYJYesGNAd6gWbtSwzgsF.jpg",
      "release_date": "2012-11-30",
      "title": "Killing Them Softly"
    },
    {
      "adult": false,
      "character": "Lt. Aldo Raine",
      "credit_id": "52fe46f29251416c75088c69",
      "id": 16869,
      "original_title": "Inglourious Basterds",
      "poster_path": "/vDwqPyhkzFPRDmwz9KbzN2ouEPe.jpg",
      "release_date": "2009-08-21",
      "title": "Inglourious Basterds"
    },
    {
      "adult": false,
      "character": "Will the Krill (voice)",
      "credit_id": "52fe4718c3a368484e0b4d23",
      "id": 65759,
      "original_title": "Happy Feet Two",
      "poster_path": "/gY8lWCObaGvcDsmeM8QHBF4AZVk.jpg",
      "release_date": "2011-11-17",
      "title": "Happy Feet Two"
    },
    {
      "adult": false,
      "character": "",
      "credit_id": "52fe4ef6c3a36847f82b3c95",
      "id": 244743,
      "original_title": "Contact",
      "poster_path": "/gAmyqdAlwzB8Et34ESMrl7tosn4.jpg",
      "release_date": "1992-01-01",
      "title": "Contact"
    },
    {
      "adult": false,
      "character": "Joe Maloney",
      "credit_id": "52fe4766c3a36847f81338e5",
      "id": 48448,
      "original_title": "Across the Tracks",
      "poster_path": "/o2Xvw7Wfzk1Q10yDNOgVx63CsIv.jpg",
      "release_date": "1991-02-14",
      "title": "Across the Tracks"
    },
    {
      "adult": false,
      "character": "Mickey O'Neil (Snatch) (archive footage)",
      "credit_id": "52fe47b4c3a368484e0d520b",
      "id": 68996,
      "original_title": "Ultimate Fights from the Movies",
      "poster_path": "/2KIKXjKoNTmpi22gsU3KUMv6wKA.jpg",
      "release_date": "2002-04-16",
      "title": "Ultimate Fights from the Movies"
    },
    {
      "adult": false,
      "character": "Elliott Fowler",
      "credit_id": "52fe47c8c3a36847f8147ff5",
      "id": 50463,
      "original_title": "The Favor",
      "poster_path": "/68a68qALehxulfbL2P56OKAJ6Ci.jpg",
      "release_date": "1994-04-29",
      "title": "The Favor"
    },
    {
      "adult": false,
      "character": "Gerry Lane",
      "credit_id": "52fe485dc3a368484e0f5061",
      "id": 72190,
      "original_title": "World War Z",
      "poster_path": "/gAt1PrsrFY1nX6UzebeiHP8njE9.jpg",
      "release_date": "2013-06-21",
      "title": "World War Z"
    },
    {
      "adult": false,
      "character": "Brian",
      "credit_id": "52fe48b9c3a36847f81761cb",
      "id": 55059,
      "original_title": "Happy Together",
      "poster_path": "/5H766FOKWY0GsbdMdQktqQYv3ku.jpg",
      "release_date": "1989-05-04",
      "title": "Happy Together"
    },
    {
      "adult": false,
      "character": "Steve Black",
      "credit_id": "52fe4900c3a368484e115b63",
      "id": 75451,
      "original_title": "The Image",
      "poster_path": "/xfiHVr42KCIu2FvKd5uD2iPbeie.jpg",
      "release_date": "1990-01-27",
      "title": "The Image"
    },
    {
      "adult": false,
      "character": "Bass",
      "credit_id": "52fe492cc3a368484e11dfa3",
      "id": 76203,
      "original_title": "12 Years a Slave",
      "poster_path": "/onpio7AWndkzH6mptb35cCuV9q1.jpg",
      "release_date": "2013-10-18",
      "title": "12 Years a Slave"
    },
    {
      "adult": false,
      "character": "Narrator (voice)",
      "credit_id": "52fe49a29251416c910b39e7",
      "id": 86822,
      "original_title": "Voyage of Time",
      "poster_path": null,
      "release_date": null,
      "title": "Voyage of Time"
    },
    {
      "adult": false,
      "character": "Westray",
      "credit_id": "52fe4aaac3a36847f81db47d",
      "id": 109091,
      "original_title": "The Counselor",
      "poster_path": "/aua3i7T6KiWwvh9rvawIIBRjn1b.jpg",
      "release_date": "2013-10-25",
      "title": "The Counselor"
    },
    {
      "adult": false,
      "character": "Chief Judge Vaughn R. Walker",
      "credit_id": "52fe4ab2c3a36847f81dcd13",
      "id": 109404,
      "original_title": "8",
      "poster_path": "/28fDtVBr6PyHsFFqyKJCeN3ysBP.jpg",
      "release_date": "2012-03-03",
      "title": "8"
    },
    {
      "adult": false,
      "character": "",
      "credit_id": "52fe4b529251416c750ff4b9",
      "id": 145206,
      "original_title": "20,000 Leagues Under the Sea: Captain Nemo",
      "poster_path": null,
      "release_date": null,
      "title": "20,000 Leagues Under the Sea: Captain Nemo"
    },
    {
      "adult": false,
      "character": "Yuri Trush",
      "credit_id": "52fe4b569251416c750ffb19",
      "id": 145266,
      "original_title": "The Tiger",
      "poster_path": null,
      "release_date": null,
      "title": "The Tiger"
    },
    {
      "adult": false,
      "character": "Wardaddy",
      "credit_id": "52fe4ec09251416c7516126f",
      "id": 228150,
      "original_title": "Fury",
      "poster_path": null,
      "release_date": "2014-11-14",
      "title": "Fury"
    },
    {
      "adult": false,
      "character": "Jerry Welbach",
      "credit_id": "52fe443bc3a36847f8089dd5",
      "id": 6073,
      "original_title": "The Mexican",
      "poster_path": "/a7PuqWv0ENFg8dt9k51AID6P1kh.jpg",
      "release_date": "2001-03-01",
      "title": "The Mexican"
    },
    {
      "adult": false,
      "character": "John Dean",
      "credit_id": "52fe44cac3a36847f80aa277",
      "id": 8947,
      "original_title": "Dirty Tricks",
      "poster_path": null,
      "release_date": "2013-12-31",
      "title": "Dirty Tricks"
    },
    {
      "adult": false,
      "character": "Mr. O'Brien",
      "credit_id": "52fe44ccc3a36847f80aa95b",
      "id": 8967,
      "original_title": "The Tree of Life",
      "poster_path": "/wt5Q6SQFeU2mW7UKF10mTwyyHog.jpg",
      "release_date": "2011-05-27",
      "title": "The Tree of Life"
    },
    {
      "adult": false,
      "character": "Rick",
      "credit_id": "52fe4510c3a368484e0467cb",
      "id": 26642,
      "original_title": "The Dark Side of the Sun",
      "poster_path": "/pofw83GCrfG2B6JxH53n8vX1pDv.jpg",
      "release_date": "1987-12-31",
      "title": "The Dark Side of the Sun"
    }
  ]
}
