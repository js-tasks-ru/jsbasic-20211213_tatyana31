function camelize(str) {
  let parts = str.split("-");
  let result = parts[0];

  for (let i = 1; i < parts.length; i++) { 
    result += parts[i].substring(0, 1).toUpperCase() + parts[i].substring(1);
  }

  return result;
}
