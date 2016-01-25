/*
 * Copyright (c) 2007 Josh Bush (digitalbush.com)
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE. 
 */

/*
 * Version: Beta 1
 * Release: 2007-06-01
 */
;(function($) {
    var map=new Array();
    $.Watermark = {

    }

    $.fn.Watermark = function(text,watermarkStyle) {
        if(!watermarkStyle)
            watermarkStyle="";
        return this.each(
            function(){
                var input=$(this);
                var defaultColor=input.css("color");
                map[map.length]={text:text,obj:input,WatermarkStyle:watermarkStyle};
                function clearMessage(){
                    if(input.val()==text)
                        input.val("");
                    if(watermarkStyle)
                        input.removeClass(watermarkStyle);
                }

                function insertMessage(){
                    if(input.val().length==0 || input.val()==text){
                        input.val(text);
                        input.addClass(watermarkStyle);
                    }else
                        input.removeClass(watermarkStyle);
                }

                input.focus(clearMessage);
                input.blur(insertMessage);
                input.change(insertMessage);

                insertMessage();
            }
        );
    };
})(jQuery);