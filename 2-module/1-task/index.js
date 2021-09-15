function sumSalary(salaries) {

  let resultSalaries = 0;
  
  for (let prop in salaries){

    if (isFinite(salaries[prop]) && typeof (salaries[prop] == 'number')){
      resultSalaries += salaries[prop];
    } 
  }
    return resultSalaries;

}
