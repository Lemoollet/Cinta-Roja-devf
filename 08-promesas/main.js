let devsDB = [
  {
    name: "Fernando",
    id: 1,
  },
  {
    name: "Luis",
    id: 2,
  },
  {
    name: "Arthur",
    id: 3,
  },
  {
    name: "Moy",
    id: 4,
  },
];

let cintasDB = [
  {
    id: 1,
    cinta: "roja",
  },
  {
    id: 2,
    cinta: "blanca",
  },
];

const getDev = (id) => {
  return new Promise((resolve, reject) => {
    let developer = devsDB.find((dev) => dev.id === id);
    if (!developer) {
      reject(`El dev con id: ${id} no existe `);
    } else {
      resolve(developer);
    }
  });
};

/* getDev(1)
    .then(res => console.log(res))
    .catch(err => console.log(err))
 */

//-------------------------------------------------------------------------------------------------//

const getCinta = (dev) => {
  return new Promise((resolve, reject) => {
    let cintaDB = cintasDB.find((cinta) => cinta.id === dev.id);
    if (!cintaDB) {
      reject(`No existe la cinta para el dev ${dev.name}`);
    } else {
      resolve({
        cinta: cintaDB.cinta,
        dev: dev.name,
      });
    }
  });
};

getDev(1)
  .then((res) => {
    getCinta(res)
      .then((data) => {
        console.log(`El dev ${data.dev} esta en la cinta ${data.cinta}`);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  array[i].name;
}
// 1
// 2
// 3
// 4
// 5

const array2 = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Juana" },
  { id: 3, name: "Jose" },
  { id: 4, name: "Julian" },
];
array.map((element) => {
  element.name;
});

// 1
// 2
// 3
// 4
// 5

var x = 1;
var y = "";
if (x === 1) {
  y = "Es uno";
} else {
  y = "Es diferente de uno";
}

var y = x === 1 ? "Es uno" : "Es diferente de uno";

const request = require("request");
const URL = "";

getPeopleSwapiById = (idPeople) => {
  request.get(`URL`);
};
