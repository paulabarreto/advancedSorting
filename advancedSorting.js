var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];



function advancedSorting(students, sortNames, sortAges){
  sortNames(students, sortAges(students));
  return students;
}

function sortNames(students){
  students.sort(function (a, b) {
    var nameA = a.name;
    var nameB = b.name;

    if(nameA < nameB){
      return -1;
    }
    if(nameA > nameB){
      return 1;
    }
    return 0;
  });
}

function sortAges(students){
  students.sort(function(a, b){
    return b.age - a.age;
  });
}

console.log(advancedSorting(students, sortNames, sortAges));
