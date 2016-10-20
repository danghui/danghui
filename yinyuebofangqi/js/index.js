/**
 * Created by Administrator on 2016/10/19.
 */
var jsonArr=[
    {
        num:1,
        songName:"怒放的生命",
        singer:"汪峰",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    },
    {
        num:2,
        songName:"断点",
        singer:"张敬轩",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    },
    {
        num:2,
        songName:"你存在",
        singer:"不知道",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    },
    {
        num:2,
        songName:"独家记忆",
        singer:"陈小春",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    },
    {
        num:2,
        songName:"嘀嗒",
        singer:"好迪真好",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    },
    {
        num:2,
        songName:"忐忑",
        singer:"龚丽娜",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    },
    {
        num:2,
        songName:"十一年",
        singer:"邱少云",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    },
    {
        num:2,
        songName:"十年",
        singer:"陈奕迅",
        img:"images/shanchu.jpg",
        src:"audio/test.mp3",
    }
]
$(
    function () {
        for(var i=0;i<jsonArr.length;i++){
            var str ="<div class='geClass'><span>"+(i+1)+"</span>" +
                "<ul><li>"+jsonArr[i].songName+"</li><li>"+jsonArr[i].singer+"</li></ul>"+
                "<img class='shanChu' src='"+jsonArr[i].img+"' />"+
                "</div>"
            $("#content").append(str);
        }
        var dangQianNum="";
/*点击当前行播放音乐*/
        $(".geClass").on("click",function () {
            $(this).addClass("bianse").siblings().removeClass("bianse");
            var index =$(".geClass").index(this);
            $("#audioId")[0].src=jsonArr[index].src;
            $("#audioId")[0].play();
            dangQianNum=index;
            setFunc()
        })
/*点击播放按钮播放或暂停歌曲*/
        var num=0;
        $("#stopAndStart").click(function () {
            num++;
            if(num%2==1){
                $("#imgCenter")[0].src="images/kaiguan2.jpg"
                $("#audioId")[0].pause();
            }else if(num%2==0){
                $("#imgCenter")[0].src="images/kaiguan1.jpg"
                $("#audioId")[0].play();
            }
        })
/*点击左边按钮*/
        $("#leftId").click(function () {
            dangQianNum--;
            if(dangQianNum<0){
            dangQianNum=jsonArr.length-1;
                $("#audioId")[0].src=jsonArr[dangQianNum].src;
            }
            $(".geClass").eq(dangQianNum).addClass("bianse").siblings().removeClass("bianse");
            $("#audioId")[0].src=jsonArr[dangQianNum].src;
        })
/*点击右边按钮*/
        $("#rightId").click(function () {
            dangQianNum++;
            if(dangQianNum>jsonArr.length-1){
                dangQianNum=0;
                $("#audioId")[0].src=jsonArr[dangQianNum].src;
            }
            $(".geClass").eq(dangQianNum).addClass("bianse").siblings().removeClass("bianse");
            $("#audioId")[0].src=jsonArr[dangQianNum].src;
        })
/*进度条动起来*/
        var kuai;
        var currentTime;
        function jindutiao(){
            var audios=$("audio")[0];
            currentTime=audios.currentTime;//当前播放时间
            var duration=audios.duration;
           /* var  $("#jiDuTiao").
                oBar.style = "width:" + (rent * 100) + "%";*/
            var width=1280;
            var kuai1=width/parseInt(duration);
            kuai=kuai1*currentTime;
            $(".guangBiao").css("width",kuai+"px");
        }
        function setFunc(){
            setInterval(jindutiao,20);
        }

    }
)
/*删除*/

/*var str = localStorage.getItem("messageArr");

 localStorage.setItem("danghui",str);*/
$(
    function () {
        /*var str =JSON.stringify(jsonArr);
        localStorage.setItem("danghui",str);
        var str2=localStorage.getItem("danghui");
        var arr=JSON.parse(str2);
        for(var i=0;i<arr.length;i++){
            var str ="<div class='geClass'><span>"+(i+1)+"</span>" +
                "<ul><li>"+arr[i].songName+"</li><li>"+arr[i].singer+"</li></ul>"+
                "<img class='shanChu' src='"+arr[i].img+"' />"+
                "</div>"
            $("#content").append(str);
        }*/
        $(".shanChu").click(function () {
            var index= $(".shanChu").index(this);
            if(confirm("您确认要删除此歌吗？")){
                /*删除页面上的*/
                $(".geClass").eq(index).hide();
             /*   jsonArr.splice(index,1);
                var str =JSON.stringify(jsonArr);
                localStorage.setItem("danghui",str);
                for(var i=0;i<jsonArr.length;i++){
                    var str ="<div class='geClass'><span>"+(i+1)+"</span>" +
                        "<ul><li>"+jsonArr[i].songName+"</li><li>"+jsonArr[i].singer+"</li></ul>"+
                        "<img class='shanChu' src='"+jsonArr[i].img+"' />"+
                        "</div>"
                    $("#content").append(str);
                }*/
            }
        })
    }
)