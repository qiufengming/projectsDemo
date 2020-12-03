var qfm = {};

// 获取农历
qfm.CalendarData = new Array(100);
qfm.CalendarData = new Array(0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96, 0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A, 0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA, 0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA, 0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D, 0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B, 0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F, 0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96, 0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95, 0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
qfm.madd = new Array(12);
qfm.tgString = "甲乙丙丁戊己庚辛壬癸";
qfm.dzString = "子丑寅卯辰巳午未申酉戌亥";
qfm.numString = "一二三四五六七八九十";
qfm.monString = "正二三四五六七八九十冬腊";
qfm.weekString = "日一二三四五六";
qfm.sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
qfm.cYear, qfm.cMonth, qfm.cDay, qfm.TheDate;
qfm.madd[0] = 0;
qfm.madd[1] = 31;
qfm.madd[2] = 59;
qfm.madd[3] = 90;
qfm.madd[4] = 120;
qfm.madd[5] = 151;
qfm.madd[6] = 181;
qfm.madd[7] = 212;
qfm.madd[8] = 243;
qfm.madd[9] = 273;
qfm.madd[10] = 304;
qfm.madd[11] = 334;
qfm.showCal = function(){
    let D = new Date();
    let yy = D.getFullYear();
    let mm = D.getMonth() + 1;
    let dd = D.getDate();
    let ww = D.getDay();
    let ss = parseInt(D.getTime() / 1000);
    if (yy < 100) yy = '19' + yy;
    return qfm.GetLunarDay(yy, mm, dd);
};
qfm.GetLunarDay = function(solarYear, solarMonth, solarDay){
    //solarYear = solarYear<1900?(1900+solarYear):solarYear; 
    if (solarYear < 1921 || solarYear > 2020) {
        return "";
    } else {
        solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
        e2c(solarYear, solarMonth, solarDay);
        return GetcDateString();
    }
};
qfm.e2c = function(){
    qfm.TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
    var total, m, n, k;
    var isEnd = false;
    var tmp = qfm.TheDate.getYear();
    if (tmp < 1900) {
        tmp += 1900;
    }
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[qfm.TheDate.getMonth()] + qfm.TheDate.getDate() - 38;
    if (qfm.TheDate.getYear() % 4 == 0 && qfm.TheDate.getMonth() > 1) {
        total++;
    }
    for (m = 0;; m++) {
        k = (qfm.CalendarData[m] < 0xfff) ? 11 : 12;
        for (n = k; n >= 0; n--) {
            if (total <= 29 + qfm.GetBit(qfm.CalendarData[m], n)) {
                isEnd = true;
                break;
            }
            total = total - 29 - qfm.GetBit(qfm.CalendarData[m], n);
        }
        if (isEnd) break;
    }
    qfm.cYear = 1921 + m;
    qfm.cMonth = k - n + 1;
    qfm.cDay = total;
    if (k == 12) {
        if (qfm.cMonth == Math.floor(qfm.CalendarData[m] / 0x10000) + 1) {
            qfm.cMonth = 1 - qfm.cMonth;
        }
        if (qfm.cMonth > Math.floor(qfm.CalendarData[m] / 0x10000) + 1) {
            qfm.cMonth--;
        }
    }
};
qfm.GetBit = function(m, n) {
    return (m >> n) & 1;
};
qfm.GetcDateString = function(){
    let tmp = '';
    /*显示农历年：（ 如：甲午(马)年 ）*/
    /*
        tmp+=tgString.charAt((cYear-4)%10); 
        tmp+=dzString.charAt((cYear-4)%12); 
        tmp+="("; 
        tmp+=sx.charAt((cYear-4)%12); 
        tmp+=")年 ";
    */
    if (qfm.cMonth < 1) {
        tmp += '(闰)';
        tmp += qfm.monString.charAt(-qfm.cMonth - 1);
    } else {
        tmp += qfm.monString.charAt(qfm.cMonth - 1);
    }
    tmp += "月";
    tmp += (qfm.cDay < 11) ? "初" : ((qfm.cDay < 20) ? "十" : ((qfm.cDay < 30) ? "廿" : "三十"));
    if (qfm.cDay % 10 != 0 || qfm.cDay == 10) {
        tmp += qfm.numString.charAt((qfm.cDay - 1) % 10);
    }
    return tmp;
};