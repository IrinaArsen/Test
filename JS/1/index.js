var cloneDeep = require("lodash.clonedeep");

//устанавливаем
//npm i lodash.clonedeep
//npm i -g npm
//npm i --save lodash.clonedeep

import _ from "lodash";

const user = { company: { name: "Hexlet" } };
const copyOfUser = _.cloneDeep(user);

user.company === copyOfUser.company; // false
