let Name="No-name";
function getName1(Name){
    Name=prompt('Как вас зовут?');
    console.log(`Привет, ${Name}`);
    return Name;
}
getName1(Name);
//getName2
const getName2=function(Name){
    Name=prompt('Как вас зовут?');
    console.log(`Привет, ${Name}`);
    return Name;
}
getName2();
//getName3
const getName3=(Name)=>{
    Name=prompt('Как вас зовут?');
    console.log(`Привет, ${Name}`);
    return Name;
}
getName3();