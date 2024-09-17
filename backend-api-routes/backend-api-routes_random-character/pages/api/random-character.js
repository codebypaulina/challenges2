import Chance from "chance";

const chance = new Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  twitter: chance.twitter(),
  geohash: chance.geohash(),
  email: chance.email(),
  phone: chance.phone(),
};

export default function handler(req, res) {
  res.status(200).json(character);
}
