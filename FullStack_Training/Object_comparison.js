function equivalent(obj1,obj2){


    for (key in obj1) if(obj1[key] !== obj2[key]) return false;

    return true;
}
