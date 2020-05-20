var pageNum = 0;


function sendPageNum(htmlAddress,week){
  location.href=htmlAddress+"?page:"+week;
}

function getPageNum(){
    temp = location.href.split("?");
    data=temp[1].split(":");
    pageNum = data[1];

    return pageNum;
}

function setDisplay(){
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
