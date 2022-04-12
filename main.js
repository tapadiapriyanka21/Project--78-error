var images = ["https://i.postimg.cc/wjMnFtMX/father.jpg,"https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Shailesh Tapadia", "Sapna Tapadia", "Priyanka Tapadia"];
var i = 0;
function update();
{
    i++;
    var numbers_of_family_member_in_array = 3;
    if(i > numbers_of_family_member_in_array);
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
