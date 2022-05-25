const Traveller = require('./Traveller');
const Trip = require('./Trip');
const Location = require('./Location');

// Traveller.hasMany(Trip, {
//   foreignKey: 'traveller_id',
//   onDelete: 'CASCADE',
// });

// Trip.belongsTo(Traveller, {
//   foreignKey: 'traveller_id',
// });

// Location.belongsTo(Trip, {
//   foreignKey: 'trips_id',
//   unique: false,
// });

Location.belongsToMany(Traveller, {
  through: Trip
});

Traveller.belongsToMany(Location, {
  through: Trip
});

module.exports = { Traveller, Trip, Location };
