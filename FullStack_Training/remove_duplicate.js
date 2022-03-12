function Remove(list,item,start=0) {

    // We can use indexOf() Method but i chose not to 

    let index=-1;
    for (var i = start; i < list.length && list[i] !== item ; i++) ;

            if (i< list.length) {
            index=i;
            for (let j = i; j < list.length - 1; j++) {
                list[j] = list[j + 1];
            }
            list.length = list.length - 1;
        }
      
    return index;
}



function rm_dup(list){

    for (let i=0;i<list.length;i++)
         while(Remove(list,list[i],i+1) !== -1) ;
    }


function main(){    
let items=['a','b',1,'a','a','c','a','a','d','a','a','b',1,"m"];
rm_dup(items);
console.log(items);}


main();