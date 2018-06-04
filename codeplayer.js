 function update(){
                
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#csspanel").val()+"</style></head><body>"+$("#htmlpanel").val()+"</body></html>");
                
                document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
            }
            
            // hover(infunction,outfunction);
        
            $(".toggle").hover(function(){
                
                $(this).addClass("highlighted");
                
            },function(){
                
                $(this).removeClass("highlighted");
            });
            
            
            $(".toggle").click(function(){
                
                $(this).toggleClass("active");
                $(this).removeClass("highlighted");
                var panelid=$(this).attr("id")+"panel"; 
                $("#"+panelid).toggleClass("hidden");
                var number=4-$(".hidden").length;
                $(".panel").width($(window).width()/number-4);
            
            });
            
            $(".panel").height($(window).height()-$("#header").height()-14);
            
            
            // contents is used to  change iframe content
            
            update();
            
            $("textarea").on('change keyup paste',function(){
                
                update();
                
                
            });
        
