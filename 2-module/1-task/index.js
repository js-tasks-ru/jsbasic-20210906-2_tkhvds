let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(salaries) {

  let resultSalaries = 0;
  
  for (let prop in salaries){

    if (isFinite(salaries[prop]) && typeof (salaries[prop] == 'number')){
      resultSalaries += salaries[prop];
    } 
  }
  
  return resultSalaries;

}
