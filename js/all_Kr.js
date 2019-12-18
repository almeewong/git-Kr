/*-----See Latest ! (-88px因為要扣除header的高度，讓捲軸滑到正確的位置)-----*/
$(document).ready(function(){
    $(function(){ $('#sec01').click(function(){ 
        $('html,body').animate({scrollTop:$('.news_content').offset().top - 88}, 500);});  
    }); 
});
/*-----go top-----*/
$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#gotop').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
});
/*-----go top-formember-----*/
$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#gotopformember').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
        return false;
    });
    
    /* 偵測卷軸滑動時，往下滑超過400px就讓gotopformember按鈕出現 */
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 400){
            $('#gotopformember').fadeIn();
        } else {
            $('#gotopformember').fadeOut();
        }
    });
});
/*-----drop down選取後改變選取像目文字顏色-----*/
$(function(){
    $('.drop_down').change(function(){
        $(this).css('color','#fff');
    })
});
/*-----針對驗證欄位，改變外框顏色-----*/
function validateInputChangeBorderColor(formElement, inputId)
{
    $('#'+inputId).addClass('red-border');
    formElement.find('input').not($('#'+inputId)).removeClass('red-border');
}
