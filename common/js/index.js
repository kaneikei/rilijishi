$(function(){
	var months = $("#months");
	var years = $("#years");
	var days = $("#days");
	var lies = $(".lie");
	var bc = $(".bc");
	var cz = $(".cz");
	var xx = {};
	var tianshu;
	var that;
	var that2;
	var nian = new Date().getFullYear();
	var yue = new Date().getMonth()+1;
	var ri = new Date().getDate();
	years.val(nian);
	months.val(yue);
	$("input,textarea").attr("readOnly","readOnly");
	var baocun = function()
		{	
			if($(".bac").length!=0)
				{	
					if( $("#neir").val()!='' || $("input").val()!='' )
						{
							xx[years.val()+'-'+months.val()+'-'+that] = $("input").val()  +$("#neir").val();
							console.dir(xx);
							that2.addClass("youshi");
							var bottip = "<div class='bottip'>"+$("input").val()+"</div>";
							$(bottip).appendTo( $(".bac") );
						}
					
				}	
		}
	bc.bind("click",baocun);
	var changemonth = function()
		{	
			$("input,textarea").attr("readOnly","readOnly");
			lies.removeClass("bac");
			lies.removeClass("dq");
			switch( months.val() )
				{
					case '1':case '3':case '5':case '7':case '8':case '10':case '12':tianshu=31;break;
					case '4':case '6':case '9':case '11':tianshu=30;break;
					case '2':if( (years.val()%4==0 && years.val()%100!=0) || years.val()%400==0 )
								{
									tianshu=29;
								}
							 else
							  	{
							  		tianshu=28;
							  	}
							break;
				}
			var dd = new Date(years.val(),months.val()-1,1);
			var firstday = dd.getDay();
			//$(".lie").contents().filter(function(){ return this.nodeType === 3 }).text('');
			$(".lie").html('');
			switch( firstday )	
				{
					case 0:
						$(".hang1 .lie7").html("1");
						for(var i=2;i<=tianshu;i++)
							{
								$(".lie").eq(i+5).html(i)
							}
						break;
					case 1:
						$(".hang1 .lie1").html("1");
						for(var i=2;i<=tianshu;i++)
							{
								$(".lie").eq(i-1).html(i)
							}
						break;
					case 2:
						$(".hang1 .lie2").html("1");
						for(var i=2;i<=tianshu;i++)
							{
								$(".lie").eq(i+0).html(i)
							}
						break;
					case 3:
						$(".hang1 .lie3").html("1");
						for(var i=2;i<=tianshu;i++)
							{
								$(".lie").eq(i+1).html(i)
							}
						break;
					case 4:
						$(".hang1 .lie4").html("1");
						for(var i=2;i<=tianshu;i++)
							{
								$(".lie").eq(i+2).html(i)
							}
						break;
					case 5:
						$(".hang1 .lie5").html("1");
						for(var i=2;i<=tianshu;i++)
							{
								$(".lie").eq(i+3).html(i)
							}
						break;
					case 6:
						$(".hang1 .lie6").html("1");
						for(var i=2;i<=tianshu;i++)
							{
								$(".lie").eq(i+4).html(i)
							}
						break;
				}		
			if( years.val()==nian && months.val()==yue )
			{	
				$(".lie:contains("+ri+")").addClass("dq");
			}
		}
	var xianshi = function()
		{	
			if( $(this).html()!='' )
				{	
					if( xx[years.val()+'-'+months.val()+'-'+$(this).html()]!='' )
					{
						$("textarea").val( xx[years.val()+'-'+months.val()+'-'+$(this).html()] );
					}
					
					lies.removeClass("bac");
					$(this).addClass("bac");
					$("input,textarea").removeAttr('readOnly');
					that = $(this).contents().filter(function(){ return this.nodeType === 3 }).text();//只获得主节点的文本
					that2 = $(this);
				}
			
		}
	changemonth();
	months.bind("change",changemonth);
	years.bind("change",changemonth);
	lies.bind("click",xianshi);
	cz.bind("click",function(){
		$("input,textarea").val('');
		bc.bind("click",function()
			{
				if( $("#neir").val()=='' && $("input").val()=='')
					{	
						delete xx[ years.val()+'-'+months.val()+'-'+that ]
					}
			})
	})
})



