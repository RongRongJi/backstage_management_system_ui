    var list3 = new Array;
    var list4 = new Array;
    list3[list3.length] = "一年级";
    list3[list3.length] = "二年级";
    list3[list3.length] = "三年级";
    list3[list3.length] = "四年级";
    list3[list3.length] = "五年级";
    list3[list3.length] = "六年级";
    list3[list3.length] = "初一";
    list3[list3.length] = "初二";
    list3[list3.length] = "初三";
    list3[list3.length] = "高一";
    list3[list3.length] = "高二";
    list3[list3.length] = "高三";

    list4[list4.length] = "语文";
    list4[list4.length] = "数学";
    list4[list4.length] = "英语";
    list4[list4.length] = "物理";
    list4[list4.length] = "化学";
    list4[list4.length] = "生物";
    list4[list4.length] = "政治";
    list4[list4.length] = "历史";
    list4[list4.length] = "地理";

    var ddlGrade = document.getElementById("grade");
    var ddlSubject = document.getElementById("subject");
    for(var i=0;i<list3.length;i++){
        var option = document.createElement("option");
        option.appendChild(document.createTextNode(list3[i]));
        option.value=list3[i];
        ddlGrade.appendChild(option);   
    }
    for(var i=0;i<list4.length;i++){
        var option = document.createElement("option");
        option.appendChild(document.createTextNode(list4[i]));
        option.value=list4[i];
        ddlSubject.appendChild(option);   
    }
