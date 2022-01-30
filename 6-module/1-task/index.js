/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {  
  constructor(rows) {
    this._elem = document.createElement('table');
    this._elem.createTHead();
    this._elem.tHead.insertRow();

    let headers = ['Name', 'Age', 'Salary', 'City', ''];

    for (let i = 0; i < headers.length; i++) { 
      let tdHeader = document.createElement('td');

      tdHeader.innerText = headers[i];

      this._elem.tHead.rows[0].appendChild(tdHeader)
    }

    this._elem.createTBody();
    let body = this._elem.tBodies[0];

    for (let i = 0; i < rows.length; i++) { 
      let tableRow = document.createElement('tr');

      for (let field in rows[i]) { 
        let tableCell = document.createElement('td');
        tableCell.innerText = rows[i][field];
        tableRow.appendChild(tableCell);
      }

      let tableButtonCell = document.createElement('td');
      let button = document.createElement('button');
      button.innerText = 'X';
      button.onclick = function () { 
        this.closest('tr').remove();
      }

      tableButtonCell.appendChild(button);
      
      tableRow.appendChild(tableButtonCell);

      body.appendChild(tableRow);
    }
  }

  get elem() { 
    return this._elem;
  }
}
