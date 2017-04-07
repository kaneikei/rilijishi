$(function(){
	var rl_sjnianleft = $(".rl_sjnianleft");
	var rl_sjnianright = $(".rl_sjnianright");
	var rl_sjyueleft = $(".rl_sjyueleft");
	var rl_sjyueright = $(".rl_sjyueright");
	var months = $("#rl_yue");
	var years = $("#rl_nian");
	var days = $("#rl_days");
	var lies = $(".rl_lie");
	var bc = $(".rl_bc");
	var cz = $(".rl_cz");
	var xx = {};
	// var xx = window.localStorage.getItem('x')?JSON.parse(window.localStorage.getItem('x')):{};//用来模拟存放事项内容信息，改用数据库存储数据则不需要此项，以下也需做相应修改
	var xxz;
	var tianshu;
	var tianshuprev;
	var a;//用来存放天数
	var nian = new Date().getFullYear();
	var yue = new Date().getMonth()+1;
	var ri = new Date().getDate();
	// console.log(ri);
	var that = ri;
	var nian2 = nian;
	var yue2 = yue;
	var bottip = "<div class='rl_bottip'></div>";//放小标题的小盒子
	years.val(nian);//设置初始打开状态为当前年月 
	months.val(yue);
	$(".rl_tm,#rl_sxxq").attr("readOnly","readOnly");
	var pdtianshu = function(pd)//判断月份有多少天
		{	
			switch( pd )
				{	
					case 1:case 3:case 5:case 7:case 8:case 10:case 12:a=31;break;
					case 4:case 6:case 9:case 11:a=30;break;
					case 2:if( (years.val()%4===0 && years.val()%100!==0) || years.val()%400==0 )//判断是否闰年
								{
									a=29;
								}
							 else
							  	{
							  		a=28;
							  	}
							break;
				}
			return a;
		}

	;var changemonth = function()//年、月发生变化时调用函数
		{	
			$(".rl_tm,#rl_sxxq")
			// .val("请先选中具体日期再进行记录操作")
			.attr("readOnly","readOnly");
			$(".rl_title").text("事项标题");
			$("#rl_sxxq").val('');
			$(".rl_tm").val('');
			lies.removeClass("rl_bac rl_ysl");
			lies.removeClass("rl_dq");
			lies.find("span").removeClass("rl_lieqh");
			lies.find(".rl_bottip").empty();
			tianshu = pdtianshu( parseInt( months.val() ) );//当前月份的天数
			tianshuprev = pdtianshu( parseInt( months.val() ) - 1 );//上一个月的天数
			var j = tianshuprev;
			var k = 1;
			var dd = new Date(years.val(),months.val()-1,1);
			var firstday = dd.getDay();//获取当前月的第一天是周几
			switch( firstday ){	//根据当前月第一天是周几分别放在对应的星期下
					case 0://表示第一天是周日。
						$(".rl_hang1 .rl_lie7 span").text("1");
						for(var i=2;i<=tianshu;i++)//填充当月数据
							{
								$(".rl_lie span").eq(i+5).text(i)
							}
						for(var i=5;i>=0;i--)//填充上一个月在本月显示的数据
							{	
								$(".rl_hang1 .rl_lie span").eq(i).addClass("rl_lieqh").text(j);
								j--;
								
							}
						for(var i=(6+tianshu);i<42;i++)//填充下一个月在本月显示的数据
							{
								$(".rl_bg .rl_lie span").eq(i).addClass("rl_lieqh").text(k);
								k++;
							}
						break;
					case 1://表示第一天是周一，下面依次类推
						$(".rl_hang2 .rl_lie1 span").text("1");
						var p = 2;
						for(var i=8;i<tianshu+7;i++)//填充当月数据
							{
								$(".rl_lie span").eq(i).text(p);
								p++;
							}
						for(var i=6;i>=0;i--)//填充上一个月在本月显示的数据
							{	
								$(".rl_hang1 .rl_lie span").eq(i).addClass("rl_lieqh").text(j);
								j--;
								
							}
						for(var i=(7+tianshu);i<42;i++)//填充下一个月在本月显示的数据
							{
								$(".rl_bg .rl_lie span").eq(i).addClass("rl_lieqh").text(k);
								k++;
							}
						break;
					case 2:
						$(".rl_hang1 .rl_lie2 span").text("1");
						for(var i=2;i<=tianshu;i++)//填充当月数据
							{
								$(".rl_lie span").eq(i+0).text(i)
							}
						for(var i=0;i>=0;i--)//填充上一个月在本月显示的数据
							{	
								$(".rl_hang1 .rl_lie span").eq(i).addClass("rl_lieqh").text(j);
								j--;
								
							}
						for(var i=(1+tianshu);i<42;i++)//填充下一个月在本月显示的数据
							{
								$(".rl_bg .rl_lie span").eq(i).addClass("rl_lieqh").text(k);
								k++;
							}
						break;
					case 3:
						$(".rl_hang1 .rl_lie3 span").text("1");
						for(var i=2;i<=tianshu;i++)//填充当月数据
							{
								$(".rl_lie span").eq(i+1).text(i)
							}
						for(var i=1;i>=0;i--)//填充上一个月在本月显示的数据
							{	
								$(".rl_hang1 .rl_lie span").eq(i).addClass("rl_lieqh").text(j);
								j--;
								
							}
						for(var i=(2+tianshu);i<42;i++)//填充下一个月在本月显示的数据
							{
								$(".rl_bg .rl_lie span").eq(i).addClass("rl_lieqh").text(k);
								k++;
							}
						break;
					case 4:
						$(".rl_hang1 .rl_lie4 span").text("1");
						for(var i=2;i<=tianshu;i++)//填充当月数据
							{
								$(".rl_lie span").eq(i+2).text(i)
							}
						for(var i=2;i>=0;i--)//填充上一个月在本月显示的数据
							{	
								$(".rl_hang1 .rl_lie span").eq(i).addClass("rl_lieqh").text(j);
								j--;
								
							}
						for(var i=(3+tianshu);i<42;i++)//填充下一个月在本月显示的数据
							{
								$(".rl_bg .rl_lie span").eq(i).addClass("rl_lieqh").text(k);
								k++;
							}
						break;
					case 5:
						$(".rl_hang1 .rl_lie5 span").text("1");
						for(var i=2;i<=tianshu;i++)//填充当月数据
							{
								$(".rl_lie span").eq(i+3).text(i)
							}
						for(var i=3;i>=0;i--)//填充上一个月在本月显示的数据
							{	
								$(".rl_hang1 .rl_lie span").eq(i).addClass("rl_lieqh").text(j);
								j--;
								
							}
						for(var i=(4+tianshu);i<42;i++)//填充下一个月在本月显示的数据
							{
								$(".rl_bg .rl_lie span").eq(i).addClass("rl_lieqh").text(k);
								k++;
							}
						break;
					case 6:
						$(".rl_hang1 .rl_lie6 span").text("1");
						for(var i=2;i<=tianshu;i++)//填充当月数据
							{
								$(".rl_lie span").eq(i+4).text(i)
							}
						for(var i=4;i>=0;i--)//填充上一个月在本月显示的数据
							{	
								$(".rl_hang1 .rl_lie span").eq(i).addClass("rl_lieqh").text(j);
								j--;
								
							}
						for(var i=(5+tianshu);i<42;i++)//填充下一个月在本月显示的数据
							{
								$(".rl_bg .rl_lie span").eq(i).addClass("rl_lieqh").text(k);
								k++;
							}
						break;
				}
			$(".rl_lie .rl_bottip").remove();
			$(bottip).insertAfter( $(".rl_lie span:not(.rl_lieqh)") );		
			//给已经有记录的日期加上原来的标识
			for(var i=1;i<=31;i++)
				{
					if( xx[years.val()+'-'+months.val()+'-'+i+'-'+'标题'] || xx[years.val()+'-'+months.val()+'-'+i+'-'+'内容'] )
						{	
							$(".rl_lie span:not(.rl_lieqh)").eq(i-1).parent().addClass("rl_ysl");
							$(".rl_tm").val()==''?$(".rl_bottip").eq(i-1).text( xx[years.val()+'-'+months.val()+'-'+i+'-'+'内容'] ):$(".rl_bottip").eq(i-1).text( xx[years.val()+'-'+months.val()+'-'+i+'-'+'标题'] );
						}
				}
			if( years.val()==nian && months.val()==yue )
			{	
				//给当前日期标注字体红色
				$(".rl_lie span:not(.rl_lieqh)").each(function(i,ele){
					if($(this).text()==ri){
						$(this).parent().addClass("rl_dq");
						$(this).parent().find(".rl_bottip").text()==''?$(".rl_title").text("事项标题"):$(".rl_title").text( $(".rl_lie span:not(.rl_lieqh):contains("+ri+")").parent().find(".rl_bottip").text() );
					}
				})
				// $(".rl_lie span:not(.rl_lieqh):contains("+ri+")").parent().addClass("rl_dq");
				// $(".rl_lie span:not(.rl_lieqh):contains("+ri+")").parent().find(".rl_bottip").text()==''?$(".rl_title").text("事项标题"):$(".rl_title").text( $(".rl_lie span:not(.rl_lieqh):contains("+ri+")").parent().find(".rl_bottip").text() );

			}
		}

	;var xianshi = function()//点击每月日期显示选中状态和开始记录信息和显示已有信息，改用后台数据库存储数据时，需对此部分进行修改
		{	
			if( !$(this).find("span").hasClass("rl_lieqh") )//点击当前显示月份的日期有效
				{	
					$("#rl_sxxq").val('');
					$(".rl_tm").val('');
					//若之前有存储信息，则放进去显示
					if( xx[years.val()+'-'+months.val()+'-'+$(this).find("span").text()+'-'+'标题'] || xx[years.val()+'-'+months.val()+'-'+$(this).find("span").text()+'-'+'内容']!='' )
					{
						$("#rl_sxxq").val( xx[years.val()+'-'+months.val()+'-'+$(this).find("span").text()+'-'+'内容'] );
						$(".rl_tm").val( xx[years.val()+'-'+months.val()+'-'+$(this).find("span").text()+'-'+'标题'] );
					}

					if( $(this).find(".rl_bottip").text()!='' )
						{
							$(".rl_title").text( $(this).find(".rl_bottip").text() );
						}
					else
						{
							$(".rl_title").text('事项标题')
						}
					
					lies.removeClass("rl_bac");
					$(this).addClass("rl_bac");
					$(".rl_tm,#rl_sxxq").removeAttr('readOnly');
					that = $(this).find("span").text();
					that2 = $(this);
				}
		}

	;var baocun = function()//点击保存按钮存储信息
		{	
			// if( $("#rl_sxxq").val()!='' && $(".rl_tm").val()!='' )//标题和内容都不为空时进行下一步
			// 	{	
					
					xx[years.val()+'-'+months.val()+'-'+that+'-'+'标题'] = $(".rl_tm").val();//存储标题
					xx[years.val()+'-'+months.val()+'-'+that+'-'+'内容'] = $("#rl_sxxq").val();//存储内容
					that2.addClass("rl_ysl");
					//若标题和内容都为空，则从数据里清除掉
					if( $("#rl_sxxq").val()=='' && $(".rl_tm").val()=='' )
						{	
							delete xx[years.val()+'-'+months.val()+'-'+that+'-'+'标题'];
							delete xx[years.val()+'-'+months.val()+'-'+that+'-'+'内容'];
							that2.removeClass("rl_ysl");
						}
					$(".rl_tm").val()==''?$(".rl_bottip").eq(parseInt(that)-1).text( $("#rl_sxxq").val() ):$(".rl_bottip").eq(parseInt(that)-1).text( $(".rl_tm").val() );
					$(".rl_tm").val()==''?$(".rl_title").text( $("#rl_sxxq").val() ):$(".rl_title").text( $(".rl_tm").val() );
					// console.dir(xx);
					xxz = JSON.stringify(xx);
					// window.localStorage.setItem('x',xxz)
			// 	}	
			// else
			// 	{
			// 		alert("请输入事项内容或标题");
			// 	}
		}
	
	//重置按钮
	;cz.bind("click",function(){
		$(".rl_tm,#rl_sxxq").val('');
		/*bc.bind("click",function()
			{
				if( $("#rl_sxxq").val()=='' && $(".rl_tm").val()=='')
					{	
						delete xx[ years.val()+'-'+months.val()+'-'+that ]
					}
			})*/
	})
	
	;changemonth();//页面打开时自调用一下
	var that2 = $(".rl_dq");
	months.bind("change",changemonth);
	years.bind("change",changemonth);
	years.bind("change",function(){nian2 = parseInt( $("#rl_nian").val() );});
	months.bind("change",function(){yue2 = parseInt( $("#rl_yue").val() );});
	lies.bind("click",xianshi);
	bc.bind("click",baocun);
	//年份左边按钮点击向前走一年
	rl_sjnianleft.bind("click",function()
		{	
			years.val(nian2-1);
			changemonth();
			nian2 = nian2-1;
			//alert(nian2);
		});
	//年份右边按钮点击向后走一年
	rl_sjnianright.bind("click",function()
		{	
			years.val(nian2+1);
			changemonth();
			nian2 = nian2+1;
		});
	//月份左边按钮点击向前走一个月
	rl_sjyueleft.bind("click",function()
		{
			months.val(yue2-1);
			changemonth();
			yue2 = yue2-1;
			if(yue2==1){yue2=13;}
		});
	//月份右边按钮点击向后走一个月
	rl_sjyueright.bind("click",function()
		{
			months.val(yue2+1);
			changemonth();
			yue2 = yue2+1;
			if(yue2==13){yue2=1;}
		});

	
});