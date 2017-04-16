var btn = document.querySelector('.btnClass');
var btnDel = document.querySelector('.btnDel');
var list = document.querySelector('.list')
var data = JSON.parse(localStorage.getItem('TodoList')) || [];
function addList(e){
    e.preventDefault();
    var text = document.querySelector('.textClass').value;
    if(text == ''){return}
    var todo = {content : text};
    data.push(todo);
    localStorage.setItem('TodoList',JSON.stringify(data));
    updataList(data);
}

function delList(e){
    e.preventDefault();
    var num = e.target.dataset.num;
    if(e.target.nodeName!=="A"){return }
    data.splice(num,1);
    localStorage.setItem('TodoList',JSON.stringify(data));
    updataList(data);

}

function updataList(item){
    var len = item.length;
    var str = "";
    for(var i =0;i<len;i++){
        str += '<li data-num="'+i+'"><a href="#">刪除</a>'+data[i].content+'</li>'
    }
    list.innerHTML = str;
}

btn.addEventListener('click',addList,false);
list.addEventListener('click',delList,false);
updataList(data);
