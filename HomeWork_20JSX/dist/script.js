var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
  id: 1,
  brand: "Audi",
  models: [{
    id: 1,
    name: "A1",
    collection: [{
      id: 1,
      version: "Sportback",
      year: 2019,
      horsepower: 95,
      engine: 999
    }, {
      id: 2,
      version: "Citycarver",
      year: 2019,
      horsepower: 95,
      engine: 999
    }]
  }, {
    id: 2,
    name: "Q5",
    collection: [{
      id: 1,
      version: "FY 2021",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }, {
      id: 2,
      version: "Sportback",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }]
  }, {
    id: 3,
    name: "TT",
    collection: [{
      id: 1,
      version: "Coupe",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }, {
      id: 2,
      version: "Roadster",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }]
  }]
}, {
  id: 2,
  brand: "BMW",
  models: [{
    id: 1,
    name: "8 series",
    collection: [{
      id: 1,
      version: "G1X LCI",
      year: 2022,
      horsepower: 333,
      engine: 2998
    }, {
      id: 2,
      version: "G1X",
      year: 2019,
      horsepower: 340,
      engine: 2998
    }]
  }, {
    id: 2,
    name: "X6",
    collection: [{
      id: 1,
      version: "G06 LCI",
      year: 2023,
      horsepower: 530,
      engine: 4395
    }, {
      id: 2,
      version: "G06",
      year: 2020,
      horsepower: 286,
      engine: 2993
    }]
  }]
}];

var COLLECTIONLIST = function COLLECTIONLIST(_ref) {
  var item = _ref.item;
  return React.createElement(
    "ul",
    null,
    Object.keys(item).map(function (key, index) {
      return key !== "id" && React.createElement(
        "li",
        { key: index },
        key,
        ": ",
        item[key]
      );
    })
  );
};

var Cars = function Cars(_ref2) {
  var car = _ref2.car;

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "h1",
      null,
      "Cars Table"
    ),
    React.createElement(
      "table",
      null,
      React.createElement(
        "tbody",
        null,
        car.map(function (car, index) {
          return React.createElement(
            React.Fragment,
            null,
            React.createElement(
              "tr",
              { key: index, className: "row__brand" },
              React.createElement(
                "td",
                { colSpan: "2" },
                car.brand
              )
            ),
            car.models.map(function (model, index) {
              return React.createElement(
                "tr",
                { key: index },
                React.createElement(
                  "td",
                  { className: "cell__model" },
                  model.name
                ),
                model.collection.map(function (el, i) {
                  return React.createElement(
                    "td",
                    { key: i, className: "td_collection" },
                    React.createElement(COLLECTIONLIST, { item: el })
                  );
                })
              );
            })
          );
        })
      )
    )
  );
};

root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(Cars, { car: CARS })
));