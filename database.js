const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
const db = require("./models")

/**
 * This function creates an artist and adds to the databse.
 * @param {object} artist 
 */
function createArtist(artist) {
    return db.Artist.create(artist)
        .then((artistdata) => {
            console.log(artistdata);
            return artistdata;
        })
}
/**
 * Creates a fan and adds to the database.
 * @param {Object} fan 
 */
function createFan(fan) {
    return db.Fan.create(fan).then(fanData => {
        console.log(fanData);
        return fanData;
    })
}

/**
 * This function associates a fan to an artist
 * @param {String} artistId 
 * @param {*Object} fan 
 */
const addFanToArtist = (artistId, fan) => {
    db.Artist.findByIdAndUpdate(artistId,
        { $push: { fan: fan_id } },
        { new: true, useFindAndModify: false }
    );
};

const addArtistToFan = (fanId, artist) => {
    db.Fan.findByIdAndUpdate(fanId,
        { $push: { artist: artistId } },
        { new: true, useFindAndModify: false })
}
//Using populate to populate the databases

/**
 * Get Artists data by populate() to get full data
 * @param {String} id 
 */
const getArtistsByPopulate = (id) => {
    return db.Artist.findById(id).populate("fans")//Check here later please
}

/**
 * Get Fans data by populate to get the full data
 * @param {String} id 
 */
const getFansByPopulate = (id) => {
    return db.Fan.findById(id).populate("artists")//Check here later please

}
//Create a database connection.
const mongoDb = "mongodb://127.0.0.1:27017/mydatabase";
main().catch((err) => console.log(err));
async function main(err) {
    await mongoose.connect(mongoDb)
}
