function colorSet() {
    // 合計値計算
    var tableElem = document.getElementById('table_01');
    var rowElems = tableElem.rows;
    var price = 0;
    for (i = 0, len = rowElems.length - 1; i < len; i++) {
        price += parseInt(rowElems[i].cells[1].innerText);
    }
    document.getElementById('goukei').innerText = price;

    // 40件以上であれば背景色をつける
    let tbl = document.getElementById("table_01");
    let rows = tbl.rows;
    for(i=0; i<rows.length; i++){
      let cells = rows[i].cells;
      for(j=0; j<cells.length; j++){
        let cell = cells[j];
        if(cell.innerHTML >= 40){
        cell.style.backgroundColor = 'yellow';
        }
      }
    }
}