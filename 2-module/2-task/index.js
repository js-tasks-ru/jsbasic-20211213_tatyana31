function isEmpty(obj) {
  for (let field in obj) { 
    return false;
  }

  return true;
}
