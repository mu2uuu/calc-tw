const calcTw = (param) => {
  /////////////////////////////////
  // gotoOfficeに「先月」の有給取得日と出社日を設定後に実行してください
  // Ctrl + S 

  // (!)手動設定値 : 有給 or 出社日
  var gotoOffice;
  if(param === '') {
    gotoOffice = [];
  } else {
    var str = param.split(',');
    var array = str.map(Number);
    gotoOffice = array;
  }

  /////////////////////////////////
  // (+)翌年の2月時点で値を手動更新する必要あり
  //2023年更新
  //各月の営業日（1月~12月の営業日を配列化）
  var BUSINESS_DAY = [20, 19, 22, 20, 20, 22, 20, 22, 20, 21, 20, 21];

  //営業日の確認はこちら
  //https://eigyoubi-toka.com/eigyoubi/

  //祝日一覧（1月~12月の祝日を月ごとに配列化）
  var LIST_1 = [];
  var LIST_2 = [];
  var LIST_3 = [21];
  var LIST_4 = [];
  var LIST_5 = [3, 4, 5];
  var LIST_6 = [];
  var LIST_7 = [17];
  var LIST_8 = [11];
  var LIST_9 = [18];
  var LIST_10 = [9];
  var LIST_11 = [3, 23];
  var LIST_12 = [];

  /////////////////////////////////
  //今年
  var YEAR = new Date().getFullYear();
  //先月
  var MONTH = new Date().getMonth();
  //1月の場合、昨年12月を参照するよう調整
  if (MONTH === 0) {
    YEAR = YEAR - 1;
    MONTH = 12;
  }
  //先月.最終日
  var lastDay = new Date(YEAR, MONTH, 0).getDate();
  //先月.祝日
  var holiday = eval('LIST_' + MONTH);
  //数列算出
  var setDay;
  var wDay;
  var SLASH = '/'
  var DayList = [];
  //除外日数
  var removeNum = holiday.concat(gotoOffice);

  for (var i = 0; i < lastDay; i++) {
    //曜日を取得
    setDay = YEAR + SLASH + MONTH + SLASH + Number(i + 1);
    wDay = new Date(setDay).getDay();

    //土日でなければ配列に格納
    if (!(wDay === 6) ^ (wDay === 0)) {
      DayList.push(Number(i + 1));
    }
  }

  //配列から祝日と出社日を除外
  DayList = DayList.filter(function (v) {
    return !removeNum.includes(v);
  });

  //配列から連続数を除外
  var answer = '';
  for (var j = 0; j < DayList.length; j++) {
    //初回処理
    if (j === 0) {
      answer = (j + 1) + ',';
      continue;
    }

    //最後処理
    if ((j + 1) == DayList.length) {
      answer = answer + (DayList[j]);
      break;
    }

    //通常処理 (次の関係性を満たす場合はスキップ：n-1 ← n → n+1)
    if ((DayList[j] - 1) == DayList[j - 1] && (DayList[j] + 1) == DayList[j + 1]) {
      continue;
    } else {
      answer = answer + (DayList[j]) + ',';
    }
  }

  //ログ出力
  var twDay = (BUSINESS_DAY[MONTH - 1] - gotoOffice.length);
  console.log(YEAR + '年' + MONTH + '月' + '\n'
  + 'TW日: ' + twDay + ' || '
  + '営業日: ' + BUSINESS_DAY[MONTH - 1] + ' || '
  + 'TW率: ' + (((twDay / BUSINESS_DAY[MONTH - 1]) * 100).toFixed(1)) 
  + '%' + '\n'
  + answer);

  var eigyoubi = BUSINESS_DAY[MONTH - 1];
  var twRate = (((twDay / BUSINESS_DAY[MONTH - 1]) * 100).toFixed(1)) + '%';
  var dayList = DayList.join(',');
  return {twDay, eigyoubi, twRate, dayList}
}
module.exports = { calcTw }