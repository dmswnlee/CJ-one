// main2.js
var devWidth;
var limitsize=768;

window.addEventListener('load',function(){
    devWidth = document.querySelector("body").offsetWidth;
    console.log(devWidth);

    window.addEventListener('resize',function(){
        devWidth = document.querySelector("body").offsetWidth;
        console.log(devWidth);
    });

    // 햄버거 버튼 클릭
    var mobBtn = document.querySelector("div.mobBtn");
    var mob = document.querySelector("div.mob");
    var mobClose = document.querySelector("div.mobBtn_close");
    var body = document.querySelector("body");
    var bg = document.querySelector(".bg");

    mobBtn.addEventListener("click",function(){
        mob.classList.add("on");
        mobClose.classList.add("on");
        body.classList.add("on");
        bg.classList.add("on");
        mobBtn.style.display = "none";
    });

    // 모바일 닫기 버튼 클릭
    mobClose.addEventListener("click",function(){
        mob.classList.remove("on");
        mobClose.classList.remove("on");
        body.classList.remove("on");
        bg.classList.remove("on");
        mobBtn.style.display = "block"; 
    });

    /* 주메뉴 */ 
    var gnbMenu = document.querySelectorAll('.gnb > ul > li'); 
    var headerWrap = document.querySelector(".header_wrap");
    var formSrch = document.querySelector("form.srch");
    var srchOpen = document.querySelector(".srch_open");
    var topMenuDD = document.querySelectorAll("dl.topMenu > dd");
    var subMenu = document.querySelectorAll(".gnb > ul > li > ul");

    for(var i=0; i<gnbMenu.length; i++){
        gnbMenu[i].addEventListener('mouseover',function(){
            if(devWidth < limitsize) return false;

            if(formSrch.offsetWidth > 0 && formSrch.offsetHeight > 0){
                formSrch.classList.remove("on");
                srchOpen.classList.remove("on");
            }
            
            if(topMenuDD[4].classList.contains("on")){
                topMenuDD[4].classList.remove("on");
            }

            headerWrap.classList.add("on"); 

            subMenu.forEach(function(item) {
                item.classList.add("on");
            })
            
        }) //mouseover

        gnbMenu[i].addEventListener('mouseout',function(){
            if(devWidth < limitsize) return false;

            headerWrap.classList.remove("on"); 

            subMenu.forEach(function(item) {
                item.classList.remove("on");
            })
        }) //mouseover
    }

    /* 로그인 이미지 */

    var appear = "";
    for(var i=0; i<57; i++){
        if(i<10){
            appear += "<img src='images/appear/appear_0000" + i + ".png' alt='로그인버튼" + i +"' />";
        }else{
            appear += "<img src='images/appear/appear_000" + i + ".png' alt='로그인버튼" + i +"' />";
        }       
    }
    document.querySelector("a.appear").innerHTML = appear;
    
    var loop = "";
    for(var i=0; i<82; i++){
        if(i<10){
            loop += "<img src='images/loop/loop_0000" + i + ".png' alt='로그인버튼" + i +"' />";
        }else{
            loop += "<img src='images/loop/loop_000" + i + ".png' alt='로그인버튼" + i +"' />";
        }       
    }
    document.querySelector("a.loop").innerHTML = loop;

    /* 로그인 애니메이션 */
    var appearImg = document.querySelectorAll(".appear>img");

    for(var k=0; k<57; k++){ 
        appearImg[k].style.animation = "ani 2.75s linear " + (k*0.05) + "s 1 normal";
    }

    var loopImg = document.querySelectorAll(".loop>img");
    for(var j=0; j<82; j++){
        loopImg[j].style.animation = "ani 4.1s linear " + (2.85+0.05*k) + "s infinite";
    }

    /* 퀵메뉴 이미지 */
    var quick1 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick1 += "<img src='images/quick01/quick01_0000" + i + ".png' alt='quick1 메뉴" + i +"' />";
        }else{
            quick1 += "<img src='images/quick01/quick01_000" + i + ".png' alt='quick1 메뉴" + i +"' />";
        }       
    }
    document.querySelector(".quick1").innerHTML = quick1;

    var quick2 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick2 += "<img src='images/quick02/quick02_0000" + i + ".png' alt='quick2 메뉴" + i +"' />";
        }else{
            quick2 += "<img src='images/quick02/quick02_000" + i + ".png' alt='quick2 메뉴" + i +"' />";
        }       
    }
    document.querySelector(".quick2").innerHTML = quick2;

    var quick3 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick3 += "<img src='images/quick03/quick03_0000" + i + ".png' alt='quick3 메뉴" + i +"' />";
        }else{
            quick3 += "<img src='images/quick03/quick03_000" + i + ".png' alt='quick3 메뉴" + i +"' />";
        }       
    }
    document.querySelector(".quick3").innerHTML = quick3;

    var quick4 = "";
    for(var i=0; i<20; i++){
        if(i<10){
            quick4 += "<img src='images/quick04/quick04_0000" + i + ".png' alt='쿠폰혜택안내" + i +"' />";
        }else{
            quick4 += "<img src='images/quick04/quick04_000" + i + ".png' alt='쿠폰혜택안내" + i +"' />";
        }       
    }
    document.querySelector(".quick4").innerHTML = quick4;

    //마우스를 올렸을때
    var content1 = document.querySelectorAll(".content1 ul li");

    content1.forEach(function(item){ 
        item.addEventListener("mouseover",function(){
            for(var k=0; k<20; k++){
                var contentImg = this.children[0].children[0].children;
                contentImg[k].style.animation = "ani 1s linear " + 0.05*k + "s 1 normal";
            }
        });

        item.addEventListener("mouseout",function(){
            for(var j=0; j<20; j++){
                var contentImg = this.children[0].children[0].children;
                contentImg[j].style.animation = "none";
            }
        });
    });

    /* 검색열기 */
    srchOpen.addEventListener("click",function(){
        this.classList.toggle("on");
        formSrch.classList.toggle("on");

        if (this.classList.contains("on")) {
            this.children[0].setAttribute("title", "검색입력서식 닫기");
        } else {
            this.children[0].setAttribute("title", "검색입력서식 열기");
        }
    });

    /* 고객센터 */
    topMenuDD[4].addEventListener("click",function(){
        this.classList.toggle("on");
    });

    /* 모바일 고객센터 */
    var mobTopMenu = document.querySelectorAll("dl.mob_topMenu > dd");

        mobTopMenu[4].addEventListener("click",function(){
            this.classList.toggle("on");

            if (this.classList.contains("on")) {
                this.children[0].setAttribute("title", "고객센터 닫기");
            } else {
                this.children[0].setAttribute("title", "고객센터 열기");
            }
        });


    /* 모바일 주메뉴 2단 */
    var mobGnb = document.querySelectorAll(".mob_gnb > ul > li")
    for (i = 0; i < mobGnb.length; i++) {
        mobGnb[i].addEventListener("click",function(){
            mobGnb.forEach(function(item){
                item.classList.remove("on");
            });
            this.classList.toggle("on");
	    });
    }

    /* 오토배너 */
    /* 배너 */
    var bnnNum = 0;
    var lastNum = document.querySelectorAll(".banner_frame > section").length -1;
    var banner_w =document.querySelector("body>section").offsetWidth;

    window.addEventListener("resize",function(){
        banner_w =document.querySelector("body>section").offsetWidth;
    });

    var next = document.querySelector(".next");
    var bnnFrame = document.querySelector(".banner_frame");
    var bnnsection = document.querySelectorAll(".banner_frame > section");
    var arrowA = document.querySelectorAll(".arrow > a");
    var rollingA = document.querySelectorAll(".rolling a");
    var banner_rollA = document.querySelectorAll(".banner_roll a");
    var prev = document.querySelector(".prev");
    var play = document.querySelector(".play");
    
    // next 버튼
    next.addEventListener("click",function(){
        bnnNum++;
        if(bnnNum > lastNum) bnnNum = 0;
        bnnFrame.style.left = bnnNum * -banner_w + "px"; 

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    });
        
    // prev 버튼
    prev.addEventListener("click",function(){
        bnnNum--;
        if(bnnNum < 0 ) bnnNum = lastNum;
        bnnFrame.style.left = bnnNum*- banner_w + "px"; 

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    
    });

    // 오토배너
    function autoBanner(){
        bnnNum++;
        if(bnnNum > lastNum) bnnNum = 0;
        bnnFrame.style.left = bnnNum * -banner_w + "px"; 

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    }
    var autoBnn = setInterval(autoBanner,5000);

    // 배너 재생/멈춤 버튼
    var flag = true;
    play.addEventListener("click",function(){
	    if(flag){
		    clearInterval(autoBnn);
		    this.classList.add('pause');
		    flag = false;
	    }else{
		    autoBnn = setInterval(autoBanner,5000);
		    this.classList.remove('pause');
		    flag = true;
	    }
    });

    // 롤링버튼
    var banner_roll = document.querySelectorAll(".banner_roll li")

    banner_roll.forEach(function(item){
        item.addEventListener("click",rollAction);
    });

    function rollAction(item){
        curRoll = item.currentTarget;
        parentRoll = curRoll.parentElement;
        childRoll = parentRoll.children;
        bnnNum = Array.from(childRoll).indexOf(curRoll); 

        bnnFrame.style.left = bnnNum * -banner_w + "px"; 

        if(bnnsection[bnnNum].classList.contains('white')){
            arrowA.forEach(function(item){
                item.classList.add('white');
            })
            rollingA.forEach(function(item){
                item.classList.add('white');
            })
        }else{
            arrowA.forEach(function(item){
                item.classList.remove('white');
            })
            rollingA.forEach(function(item){
                item.classList.remove('white');
            })
        }
        banner_rollA.forEach(function(item){
            item.classList.remove('on');
        })
        banner_rollA[bnnNum].classList.add('on');
    }

    // content3
    var all = document.querySelectorAll(".content3_inner > div > ul > li");

    all.forEach(function(item){
        item.addEventListener('mouseover',function(){
            this.classList.add('on');
        });
        item.addEventListener('mouseout',function(){
            this.classList.remove('on');
        });
    });
    

    // 대분류
    var group = document.querySelectorAll(".content3_inner > ul > li > a");
    var all = document.querySelectorAll(".content3_inner > div > ul > li");
    var ent = document.querySelectorAll(".content3_inner > div > ul > li.ent");
    var shop = document.querySelectorAll(".content3_inner > div > ul > li.shop");
    var diner = document.querySelectorAll(".content3_inner > div > ul > li.diner");
    var box = document.querySelectorAll(".content3_inner > div > ul > li.box");

    for(var k=0; k<group.length; k++){
        group[k].addEventListener('click',function(event){
            event.preventDefault();
            group.forEach(function(idx){
                idx.classList.remove('on');
            });
            this.classList.add('on');

            var className = this.parentElement.getAttribute("class");

            all.forEach(function(item){
                item.style.display = "none";
            });

            switch(className){
                case "all" :
                    all.forEach(function(item){
                        item.style.display = "block";
                    });
                    break;
                case "ent" :
                    ent.forEach(function(item){
                        item.style.display = "block";
                    });
                    break;
                case "shop" :
                    shop.forEach(function(item){
                        item.style.display = "block";
                    });
                    break;
                case "diner" :
                    diner.forEach(function(item){
                        item.style.display = "block";
                    });
                    break;
                case "box" :
                    box.forEach(function(item){
                        item.style.display = "block";
                    });
                    break;
                default :
                    break;
            };
        });
    };

    // 패밀리 사이트
    var familySite = document.querySelector("dd.family_site");

    familySite.addEventListener('click',function(event){
        event.preventDefault();
        this.classList.toggle("on");

        if (this.classList.contains("on")) {
            this.children[0].setAttribute("title", "닫기");
        }else{
            this.children[0].setAttribute("title", "열기");
        }
    });

    /* 스크롤 이벤트 */ 
    //top버튼
    var top = document.querySelector('.top');

    window.addEventListener('scroll',function(){
        var scroll = document.querySelector('html').scrollTop;

        if(scroll <= 0){
            top.classList.remove("on", "ab");
        }else if(scroll > 0 && scroll < 2700){
            top.classList.remove("ab");
            top.classList.add("on");
        }else{
            top.classList.add("ab");
        }
        
    //도넛
    var leftL = document.querySelector(".doughnut_Left_L");
    var leftS = document.querySelector(".doughnut_Left_s");
    var left = document.querySelector(".combine_Left");
    var centerM = document.querySelector(".doughnut_Center_M");
    var centerS = document.querySelector(".doughnut_Center_s");
    var rightM = document.querySelector(".doughnut_right_M");
    var rightS = document.querySelector(".doughnut_right_s");
    var right = document.querySelector(".combine_right");

    leftL.style.top = 700+scroll*0.5 + "px";
    leftS.style.top = 70+scroll*0.8+ "px";
    left.style.top = -600+scroll*0.7+ "px";

    centerM.style.top = 722+scroll*0.1 + "px";
    centerS.style.top = 991+scroll*1.1 + "px";

    rightM.style.top = 365+scroll*0.5 + "px";
    rightS.style.top = 310+scroll*0.1 + "px";
    right.style.top = 300+scroll*0.7 + "px";
    
    });

    top.addEventListener('click',function(event){
        event.preventDefault();
        window.scroll({
            top: 0,
            left : 0,
            behavior : 'smooth'
        });   
    });

});

