
      
 function capitalize(name){ //1
    
    let nameArray = name.split(" ");
    console.log(nameArray);
    for(let i=0;i<nameArray.length;i++){
        nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);

    } 
    return nameArray.join(" ");   
}


 function capitalizeAll(sen){
    let nameArray = sen.split(" ");
    console.log(nameArray);
    for(let i=0;i<nameArray.length;i++){
        nameArray[i] = nameArray[i].toUpperCase();

    } 
    return nameArray.join(" ");   
    
 }

 function  isExist(quote){//3

     return quote.includes("somewhere");
 }

  function getOccurrenceCount(quote,word){
    
    let sen = quote.split(" ");
    console.log(sen);
    let c=0;
    for(let i=0; i<sen.length;i++){
        if(sen[i]===word){
            c++;
        }
    }
    return c;
   

 }

 function  removeWhitespace(quote){//7
    

      return quote.replaceAll(" ", '');
    
 }
 function reverseWords(word)
 {
    let w="";
    for(let i=word.length-1;i>=0;i--){

        w+= word[i];



    }
    return w;
    
 }

 function wordDensity(sen,w)
 {
   
     return (getOccurrenceCount(sen,w)/sen.length)*100;
 }

 function  countVowels(VowSet){
    
    let count=0;
    for(let i=0;i<VowSet.length;i++){
       if (VowSet[i] =="A"|| VowSet[i] =="E"||VowSet[i] =="I"||VowSet[i] =="O"||VowSet[i] =="U"||VowSet[i] =="a"||VowSet[i] =="e"||VowSet[i] =="i"||VowSet[i] =="o"||VowSet[i] =="u") {
            count++;
    } 
       
     }
    return count;
 }

 function  isPalindrome(sen)
 {
   if (sen==reverseWords(sen)){

    return true;

   }
     
 }
 function truncateString(w)
 {
   let newWord=w+"...";
     return newWord;
 }

 function  maskString(n)
 {
    const x = n.length-4;
    let mul="*";
    document.getElementById("mask").innerHTML =  mul.repeat(x) + n.slice(-4);
      
     
 }
 function  validateEmail(a)
 {
    let r= a.split("@");
    if(r[1]=="gmail.com")
    {
        return true;
    }
    else{
        return false;
    }
 }

 function getExt(e)
 {
    const fileI = e.target.value;
    console.log(fileI);
    if(fileI.includes(".")==true){
        const fileExtentionIs = fileI.slice(fileI.lastIndexOf("."));
        document.getElementById("ExtFile").innerHTML = "13. File Extension : "+ fileExtentionIs;
    }
    else{
        document.getElementById("ExtFile").innerHTML = "13. File Extension : "+ "No Extension";
    }
 }






var result1 = capitalize("my name is arpita.");
console.log(result1);
document.getElementById("cap").innerHTML=result1; 


 var result2 = capitalizeAll("my name is arpita.");
 console.log(result2);
document.getElementById("capAll").innerHTML= result2;


 var result3=isExist("Someone somewhere surely made for you but god has decided perfect time to meet that people, till enjoy your life.");
 console.log(result3);
 document.getElementById("exist").innerHTML=result3;

 var result4=getOccurrenceCount("I can speak English , I can write English .","English");
 console.log(result4);
 document.getElementById("ocur").innerHTML=result4;


 var result5=removeWhitespace("Someone somewhere surely made for you but god has decided perfect time to meet that people, till enjoy your life.");
console.log(result5);
document.getElementById("space").innerHTML=result5;


 var result6=reverseWords("Arpita");
 console.log(result6);
 document.getElementById("reverse").innerHTML=result6;


 var result7=wordDensity("I can speak English , I can write English .","English");
 console.log(result7);
 document.getElementById("den").innerHTML=result7;

 var result8= countVowels("Practice");
 console.log(result8);
 document.getElementById("vow").innerHTML=result8;

 var result9=  isPalindrome("NITIN");
 console.log(result9);
 document.getElementById("pal").innerHTML=result9;

 var res=  truncateString("Hello");
 console.log(res);
 document.getElementById("trun").innerHTML=res;

 maskString("123456789");
 
 var res1=  validateEmail("Hello@gmail.com");
 console.log(res1);
 document.getElementById("email").innerHTML=res1;

 