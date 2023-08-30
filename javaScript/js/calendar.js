function calender() {
    mydate = new Date();          
    var myDate = new Date(); // 今日の日付データ取得 
    var myWeekTbl = new Array("日", "月", "火", "水", "木", "金", "土"); // 曜日テーブル定義 
    var myMonthTbl = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); // 月テーブル定義 
    myYear = myDate.getFullYear(); // 年を取得 
    if (((myYear % 4) == 0 && (myYear % 100) != 0) || (myYear % 400) == 0) { // うるう年だったら... 
        myMonthTbl[1] = 29; // 　２月を２９日とする 
    }
    var myMonth = myDate.getMonth(); // 月を取得(0月～11月) 
    var myToday = myDate.getDate(); // 今日の'日'を退避 
    myDate.setDate(1); // 日付を\'１日\'に変えて、 
    var myWeek = myDate.getDay(); // 　\'１日'の曜日を取得 
    var myTblLine = Math.ceil((myWeek + myMonthTbl[myMonth]) / 7); // カレンダーの行数 
    var myTable = new Array(7 * myTblLine); // 表のセル数分定義 
    for (i = 0; i < 7 * myTblLine; i++) myTable[i] = "　"; // myTableを掃除する 
    for (i = 0; i < myMonthTbl[myMonth]; i++) myTable[i + myWeek] = i + 1;
    //      カレンダーの表示  
    document.write("<table border='1' >");
    document.write("<tr><td colspan='7'>"); // 見出し行セット 
    document.write("<strong>", myYear, "年", (myMonth + 1), "月</strong>");
    document.write("</td></tr>");
    document.write("<tr>"); // 曜日見出しセット
    for (i = 0; i < 7; i++) { // 一行(１週間)ループ 
        document.write("<td align='center'");        
        document.write("<strong>", myWeekTbl[i], "</strong>"); // '日'から'土'の表示
        document.write("</td>");
    }
    document.write("</tr>");
    for (i = 0; i < myTblLine; i++) { // 表の「行」のループ 
        document.write("<tr>"); // 行の開始 
        for (j = 0; j < 7; j++) { // 表の「列」のループ 
            document.write("<td align='center'"); // 列(セル)の作成 
            myDat = myTable[j + (i * 7)]; // 書きこむ内容の取得 
            // 今日のセルの色とクリックイベントでtxtarea()の実行
            if (myDat == myToday) {
                document.write("bgcolor='#00ffff' style = 'cursor:pointer;'onclick='txtarea()'>");
            }
                           document.write("<strong >", myDat, "</strong>"); // 日付セット 
                       document.write("<br>");
                       document.write("</td>"); // 列(セル)の終わり             
        }
        document.write("</tr>"); // 行の終わり 
    }
    document.write("</table>"); // 表の終わり 
    // --> 
  }
  var num = 0;//textareaが1度だけ表示されるようにする
  function txtarea() {
    if (num == 0) {        
        var div_element = document.createElement("div");
        div_element.innerHTML = '<textarea style=";" id="contents" rows="5" cols="30"></textarea><br><input id="sv" type="button" value="保存" onclick="savefile()"><input id="rd" type="button" value="読取り" onclick="reader()">';
        var obj = document.getElementById("tody");
        obj.appendChild(div_element);
  num += 1;
    }    
  }
  //sessionStorageに保存
  function savefile() {
    var str = document.getElementById("contents").value;
    sessionStorage.setItem("test", str);
    alert("「" + str + "」を保存しました。");
  }
  //sessionStorageから読み取り
  function reader() {
    var txt = sessionStorage.getItem("test");
    if (txt == null) txt = "データがありません！";
    if (txt == "") txt = "文字が入力されていません！";
    document.getElementById("contents").value = txt;
  }