var pageNum = 0;


function sendPageNum(htmlAddress,week){ //이동하려는 html뒤에 식별할 수 있는 표시 추가
  location.href=htmlAddress+"?page:"+week;
}

function getPageNum(){ //이동한 html주소에서 표시 읽어오기
    temp = location.href.split("?");
    data=temp[1].split(":");
    pageNum = data[1];

    return pageNum;
}

function setDisplay(){ //display제어
  var pageNum = getPageNum();
  var classes = ['week1','week2'];

  classes.forEach((item, i) => {
    if(item==pageNum){
      document.getElementById(classes[i]).style.display="block";
    }
    else {
      document.getElementById(classes[i]).style.display="none";
    }
  });


  // for(int i = 0;i<classes.length;i++){
  //   if(classes[i].equals(pageNum)){
  //     document.write('weeeeeek 1');
  //       // document.getElementById(classes[i]).style.display="block";
  //   }
  //   else {
  //       // document.getElementById(classes[i]).style.display="none";
  //   }
  // }
}
