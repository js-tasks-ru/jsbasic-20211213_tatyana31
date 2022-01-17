function sumSalary(salaries) {
  let systemFields = ["month", "currency", "isPayed"];
  let invalidValues = [NaN, Infinity, -Infinity];
  let result = 0;
  
  for (let key in salaries) { 
    if (!systemFields.includes(key) && typeof salaries[key] == "number" && !invalidValues.includes(salaries[key])) { 
      result += salaries[key];
    }
  }

  return result;
}
