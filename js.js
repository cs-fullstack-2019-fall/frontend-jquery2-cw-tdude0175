/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give everything with the class 'hello' a white background when you click on one of them*/
$(".hello").click(function()
{
    $(".hello").css("background-color","blue");
});
//Grabbing all elements with the hello class and giving everything with the hello class a blue background color
/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */
$("h1").mouseover(function()
{
   $(this).css("height","20px");
   $(this).css("width","20px");
}).mouseleave(function ()
{
    $(this).css("height","");
    $(this).css("width","");
});
// when you mouseover any h1 element (since the page only has one we can use it, if we wanted to target ONLY one we could be more descriptive in our selector)
// you add two event listeners, one for when you mouse hovers over the element and one for when it leaves the element,
// It will proceed using this selector since you have already gotten the element with a jquery selector you can use this to reference it.
// you then change the elements value of the css you are referring to values you specify

// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */

$("p.hello").click(function ()
{
    $(this).append(".");
});

//You use append to add a period to the end of the element.