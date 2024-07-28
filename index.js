let timers_count = 0;
        let timer_count = 1;
        let alarm_count = 1;
        let alarms_count = 0;
        let numpad_timer_cancel_button = document.getElementById("numpad_timer_cancel_button");
        let timer_cancel_button = document.getElementById("timer_cancel_button");
        let alarm_cancel_button = document.getElementById("alarm_cancel_button");
        let alarm_indicator = document.getElementById("blur_screen");
        let alarm_indicator_timer ;
        let add_new_alarm_button = document.getElementById("add_new_alarm_button");
        const clock_page = document.getElementById("clock_page");
        const stopwatch_page = document.getElementById("stopwatch_page");
        const timer_page = document.getElementById("timer_page");
        const alarm_page = document.getElementById("alarm_page");
        const clock_button = document.getElementById("clock_button");
        const stopwatch_button = document.getElementById("stopwatch_button");
        const timer_button = document.getElementById("timer_button");
        const alarm_button = document.getElementById("alarm_button");
        function navigator(a){
            if(a==0){
                window.removeEventListener("keydown",numpad);
                clock_page.style.display="block";
                stopwatch_page.style.display="none";
                timer_page.style.display="none";
                alarm_page.style.display="none";
                clock_button.style="color:#00FFFF;text-shadow:1px 1px 1px grey";
                stopwatch_button.style="color:black;text-shadow:none";
                timer_button.style="color:black;text-shadow:none";
                alarm_button.style="color:black;text-shadow:none";
            }
            else if(a==1){
                window.removeEventListener("keydown",numpad);
                clock_page.style.display="none";
                stopwatch_page.style.display="block";
                timer_page.style.display="none";
                alarm_page.style.display="none";
                clock_button.style="color:black;text-shadow:none";
                stopwatch_button.style="color:#00FFFF;text-shadow:1px 1px 1px grey";
                timer_button.style="color:black;text-shadow:none";
                alarm_button.style="color:black;text-shadow:none";
            }
            else if(a==2){
                clock_page.style.display="none";
                stopwatch_page.style.display="none";
                timer_page.style.display="block";
                if(timers_count==0){
                    timer_container_id.style.display="flex";
                    timer_start_button.style.display="block";
                    Add_new_timer_button.style.display="none";
                    timer_list.style.display="none";
                    if(window.innerWidth<=500){
                        onscreen_numpad.style.display="grid";

                    }
                    timer_cancel_button.style.display="none";
                    numpad_timer_cancel_button.style.display="none";
                }
                else{
                    window.removeEventListener("keydown",numpad);
                    timer_start_button.style.display="none";
                    Add_new_timer_button.style.display="block";
                    timer_container_id.style.display="none";
                    timer_list.style.display="flex";
                    onscreen_numpad.style.display="none";
                    timer_cancel_button.style.display="none";
                    numpad_timer_cancel_button.style.display="none";
                }
                alarm_page.style.display="none";
                clock_button.style="color:black;text-shadow:none";
                stopwatch_button.style="color:black;text-shadow:none";
                timer_button.style="color:#00FFFF;text-shadow:1px 1px 1px grey";
                alarm_button.style="color:black;text-shadow:none";
            }
            else{
                window.removeEventListener("keydown",numpad);
                clock_page.style.display="none";
                stopwatch_page.style.display="none";
                timer_page.style.display="none";
                alarm_page.style.display="flex";
                if(alarms_count==0){
                    add_new_alarm_button.style.display="none";
                    alarm_list.style.display="none";
                    new_alarm_page.style.display="flex";
                    new_alarm_page.style.flexDirection="column";
                    alarm_cancel_button.style.display="none";

                }
                else{
                    alarm_list.style.display="flex";
                    new_alarm_page.style.display="none";
                    add_new_alarm_button.style.display="block"
                    alarm_cancel_button.style.display="none";

                }
                clock_button.style="color:black;text-shadow:none";
                stopwatch_button.style="color:black;text-shadow:none";
                timer_button.style="color:black;text-shadow:none";
                alarm_button.style="color:#00FFFF;text-shadow:1px 1px 1px grey";
            }
        }
        let clock_hour_leaf=document.getElementById("clock_hour");
        let clock_min_leaf=document.getElementById("clock_min");
        let clock_sec_leaf=document.getElementById("clock_sec");
        let clock_meridiem_leaf=document.getElementById("clock_meridiem");
        let clock_date_leaf=document.getElementById("clock_date");
        let clock_day_leaf=document.getElementById("clock_day");
        let week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        let year=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        clock();
        function clock(){
            let time = new Date();
            let hour = time.getHours();
            let meridiem ="AM";
            if(hour>12){
                hour-=12;
                meridiem="PM";
            }
            let min= time.getMinutes();
            let sec= time.getSeconds();
            let date = String(time.getDate()) +" "+ String(year[time.getMonth()]);
            let day = week[time.getDay()];
            printer(hour,min,sec,0,[clock_hour_leaf,clock_min_leaf,clock_sec_leaf]);
            clock_meridiem_leaf.innerHTML=meridiem;
            clock_date_leaf.innerHTML=date;
            clock_day_leaf.innerHTML=day;
            setTimeout(()=>{
                clock();
            },1000);
        }
        let stopwatch_start_button = document.getElementById("stopwatch_start_button");
        let stopwatch_stop_button = document.getElementById("stopwatch_stop_button");
        let stopwatch_continue_button = document.getElementById("stopwatch_continue_button");
        let stopwatch_reset_button = document.getElementById("stopwatch_reset_button");
        let stopatch_lap_button = document.getElementById("stopwatch_lap_button");
        let stopwatch_counter;
        let stopwatch_hour_leaf = document.getElementById("stopwatch_hour");
        let stopwatch_min_leaf = document.getElementById("stopwatch_min");
        let stopwatch_sec_leaf = document.getElementById("stopwatch_sec");
        let stopwatch_csec_leaf = document.getElementById("stopwatch_csec");
        let stopwatch_array = [stopwatch_hour_leaf,stopwatch_min_leaf,stopwatch_sec_leaf,stopwatch_csec_leaf];
        let stopwatch_hour=0;
        let stopwatch_min=0;
        let stopwatch_sec=0;
        let stopwatch_csec=0;
        let stopwatch_lap=0;
        let diff2 = 0;
        let laps_container = document.getElementById("laps_container");
        let stopwatch_min_span = document.getElementById("stopwatch_min_span");
        let stopwatch_hour_span = document.getElementById("stopwatch_hour_span");
        let lap_div_heading = document.getElementById("lap_div_heading");
        let lap_div = document.getElementById("lap_div");
        function stopwatch_start(){
            stopwatch();
            stopwatch_start_button.style.display="none";
            stopwatch_stop_button.style.display="block";
            stopwatch_reset_button.style.display="block";
            stopatch_lap_button.style.display="block";
        }
        function stopwatch(){
            stopwatch_counter = setInterval(function(){
                if (stopwatch_csec==99){
                    stopwatch_csec =-1;
                    stopwatch_sec++;
                    if(stopwatch_sec==60){
                        stopwatch_sec=0;
                        stopwatch_min++; 
                        stopwatch_min_span.style.display="flex"; 
                        if (stopwatch_min==60){
                            stopwatch_min=0;
                            stopwatch_hour++;
                            stopwatch_hour_span.style.display="flex"; 
                            
                        }
                    }
                }
                printer(stopwatch_hour,stopwatch_min,stopwatch_sec,++stopwatch_csec,stopwatch_array);
            },10);
        }
        function printer(hour,min,sec,csec,arr1){
            if(String(hour).length==1){
                arr1[0].innerHTML=`0${hour}`;
            } 
            else{
                arr1[0].innerHTML=`${hour}`;
            }
            if(String(min).length==1){
                arr1[1].innerHTML=`0${min}`;
            } 
            else{
                arr1[1].innerHTML=`${min}`;
            }
            if(String(sec).length==1){
                arr1[2].innerHTML=`0${sec}`;
            } 
            else{
                arr1[2].innerHTML=`${sec}`;
            }
            if(arr1.length>=4){
                if(String(csec).length==1){
                    arr1[3].innerHTML=`0${csec}`;
                } 
                else{
                    arr1[3].innerHTML=`${csec}`;
                }

            }
        }
        function stopwatch_reset(){
            lap_div_heading.style.display="none";
            lap_div.style.display="none"
            clearInterval(stopwatch_counter);
            stopwatch_hour=0;
            stopwatch_min=0;
            stopwatch_sec=0;
            stopwatch_csec=0;
            printer("0","0","0","0",stopwatch_array)
            stopwatch_start_button.style.display="block";
            stopwatch_stop_button.style.display="none";
            stopwatch_reset_button.style.display="none";
            stopatch_lap_button.style.display="none";
            stopwatch_continue_button.style.display="none";
            let containers = document.getElementsByClassName("containers");
            if(stopwatch_lap>0){
                do{
                    containers[0].remove();
                }
                while(containers.length>0)
            }
            diff2=0;
            stopwatch_lap=0;
            }
        function stopwatch_stop(){
            clearInterval(stopwatch_counter);
            stopwatch_stop_button.style.display="none";
            stopwatch_continue_button.style.display="block";

        }
        function stopwatch_continue(){
            stopwatch();
            stopwatch_continue_button.style.display="none";
            stopwatch_stop_button.style.display="block";
        }
        function add_lap(){
            stopwatch_lap++;
            lap_div_heading.style.display="flex";
            lap_div.style.display="flex";
            let add3 = document.createElement('div');
            add3.id="container"+stopwatch_lap;
            add3.className= "containers";
            let lap_counter = document.createElement('p');
            lap_counter.innerHTML = stopwatch_lap;
            lap_counter.style= "margin:0;padding:0;font-size:medium;margin-top:5px;width:100px;text-align:left;font-size: smaller;font-weight: normal"
            laps_container.appendChild(add3);
            let add2 = lap_interval(stopwatch_hour,stopwatch_min,stopwatch_sec,stopwatch_csec,diff2)
            diff2 = stopwatch_hour*60*60*100+stopwatch_min*60*100+stopwatch_sec*100+stopwatch_csec;
            let add1 = document.createElement('p');
            let arr1 = [stopwatch_hour,stopwatch_min];
            let text = "";
            for(let i =0;i<arr1.length;i++){
                if(arr1[i]>0 && arr1[i]<=9){
                    if(i==0){
                        text =  text +"0"+ arr1[i] +":";
                    }
                    else if(i==1){
                        text =  text + "0" + arr1[i] +":";
                    }
                }
                else if(arr1[i]>9){
                    if(i==0){
                        text =  text + arr1[i] +":";
                    }
                    else if(i==1){
                        text =  text + arr1[i] +":";
                    }
                }
            }
            add1.innerHTML = text + `${String(stopwatch_sec).length ==1?"0"+String(stopwatch_sec):String(stopwatch_sec)}.${String(stopwatch_csec).length ==1?"0"+String(stopwatch_csec):String(stopwatch_csec)}`;
            add2.style.textAlign="center";
            add2.classList.add("laps");
            add3.appendChild(lap_counter);
            add3.appendChild(add2);
            add1.classList.add("laps")
            add1.style.textAlign="right";
            add3.appendChild(add1);
        }
        function lap_interval(hour,min,sec,csec,diff2){
            if (stopwatch_lap==1){
                let add2 = document.createElement('p');
                let text = "";
                let arr1 = [hour,min];
                for(let i =0;i<arr1.length;i++){
                    if(arr1[i]>0 && arr1[i]<=9){
                        if(i==0){
                            text =  text +"0"+ arr1[i] +":";
                        }
                        else if(i==1){
                            text =  text + "0" + arr1[i] +":";
                        }
                    }
                    else if(arr1[i]>9){
                        if(i==0){
                            text =  text + arr1[i] +":";
                        }
                        else if(i==1){
                            text =  text + arr1[i] +":";
                        }
                    }
                }
                add2.innerHTML = text + `${String(sec).length ==1?"0"+String(sec):String(sec)}.${String(csec).length ==1?"0"+String(csec):String(csec)}`;
                return add2
            }
            else{
                let add2 = document.createElement('p');
                let diff1 = hour*60*60*100+min*60*100+sec*100+csec - diff2;
                hour = Math.floor(diff1/(60*60*100));
                diff1 = diff1 - hour*60*60*100;
                min = Math.floor(diff1/(60*100));
                diff1 = diff1 - min*60*100;
                sec = Math.floor(diff1/100);
                diff1 = diff1-sec*100;
                csec = diff1;
                let text = "";
                let arr1 = [hour,min];
                for(let i =0;i<arr1.length;i++){
                    if(arr1[i]>0 && arr1[i]<=9){
                        if(i==0){
                            text =  text +"0"+ arr1[i] +":";
                        }
                        else if(i==1){
                            text =  text + "0" + arr1[i] +":";
                        }
                    }
                    else if(arr1[i]>9){
                        if(i==0){
                            text =  text + arr1[i] +":";
                        }
                        else if(i==1){
                            text =  text + arr1[i] +":";
                        }
                    }
                }
                add2.innerHTML = text  + `${String(sec).length ==1?"0"+String(sec):String(sec)}.${String(csec).length ==1?"0"+String(csec):String(csec)}`;
                return add2
            }
        }
        let Add_new_timer_button = document.getElementById("Add_new_timer_button");
        let timer_container_id = document.getElementById("timer_container_id");
        let timer_list = document.getElementById("timer_list");
        let onscreen_numpad = document.getElementById("onscreen_numpad");
        let timer_time_string = "";
        let timer_sec_input=0;
        let timer_hour_input=0;
        let timer_min_input=0;
        let timer_hour_leaf = document.getElementById("timer_hour");
        let timer_min_leaf = document.getElementById("timer_min");
        let timer_sec_leaf = document.getElementById("timer_sec");
        let timer_array = [timer_hour_leaf,timer_min_leaf,timer_sec_leaf];
        function timer_start(){
            if(timer_sec_input==0&&timer_min_input==0&&timer_hour_input==0){
                timer_array[0].style.color="red";
                timer_array[1].style.color="red";
                timer_array[2].style.color="red";
                timer_array[0].style.textShadow=" 3px 3px 3px grey"; 
                timer_array[1].style.textShadow=" 3px 3px 3px grey"; 
                timer_array[2].style.textShadow=" 3px 3px 3px grey"; 
                setTimeout(()=>{
                    timer_array[0].style.color="#00FFFF";
                    timer_array[1].style.color="#00FFFF";
                    timer_array[2].style.color="#00FFFF";
                    timer_array[0].style.textShadow=" 3px 3px 3px grey"; 
                    timer_array[1].style.textShadow=" 3px 3px 3px grey"; 
                    timer_array[2].style.textShadow=" 3px 3px 3px grey"; 
                },400)
                }
            else{
                create(timer_hour,timer_min,timer_sec);
                window.removeEventListener("keydown",numpad);
                timer_start_button.style.display="none";
                Add_new_timer_button.style.display="block";
                timer_container_id.style.display="none";
                timer_list.style.display="flex";
                onscreen_numpad.style.display="none";
                timer_cancel_button.style.display="none";
                numpad_timer_cancel_button.style.display="none";
            }
        }
        function numpad_event_listener(){
            if(timer_page.style.display!=="none"){
                window.addEventListener('keydown', numpad)
            }
        }
        function numpad(event){
            let key;
            if(Number(event)||event=="0"||event=='Backspace'){
                key = event;   
            }
            else{
                key = event.key
            }
            if(key=='Backspace'){
                backspace();
            }
            if(timer_time_string.length<6){
                if(timer_time_string.length>=1){
                if(Number(key)||key=='0'){
                timer_time_string=timer_time_string+key; 
                }
            }
            else{
                if(Number(key)){
                timer_time_string=timer_time_string+key; 
                }
            }
            }
            timer_string_slicing(timer_time_string);
        }
        function timer_string_slicing(time){
            if(String(time).length==0){
                timer_sec_input=0;
                timer_hour_input=0;
                timer_min_input=0;
                printer(timer_hour_input,timer_min_input,timer_sec_input,0,timer_array);
            }
            if(String(time).length==1||String(time).length==2){
                timer_sec_input= Number(String(time));
                timer_min_input=0;
                timer_hour_input=0;
                printer(timer_hour_input,timer_min_input,timer_sec_input,0,timer_array);
            }
            if(String(time).length==3){
                timer_sec_input = Number(String(time).slice(1));
                timer_min_input = Number(String(time).slice(0,1));
                timer_hour_input=0;
                printer(timer_hour_input,timer_min_input,timer_sec_input,0,timer_array);
            }
            if(String(time).length==4){
                timer_sec_input = Number(String(time).slice(2));
                timer_min_input = Number(String(time).slice(0,2));
                timer_hour_input=0;
                printer(timer_hour_input,timer_min_input,timer_sec_input,0,timer_array);
            }
            if(String(time).length==5){
                timer_hour_input = Number(String(time).slice(0,1));
                timer_min_input = Number(String(time).slice(1,3));
                timer_sec_input = Number(String(time).slice(3));
                printer(timer_hour_input,timer_min_input,timer_sec_input,0,timer_array);
            }
            if(String(time).length==6){
                timer_hour_input = Number(String(time).slice(0,2));
                timer_min_input = Number(String(time).slice(2,4));
                timer_sec_input = Number(String(time).slice(4));
                printer(timer_hour_input,timer_min_input,timer_sec_input,0,timer_array);
            }
        }
        function backspace(){
            if(timer_time_string.length>0){
                timer_time_string=timer_time_string.slice(0,timer_time_string.length-1); 
            }
        }
        function create(){  
            let new_timer= new timer(timer_hour_input,timer_min_input,timer_sec_input,timer_count);
            timer_hour_input=0;
            timer_min_input=0;
            timer_sec_input=0;
            timer_time_string="";
            printer(timer_hour_input,timer_min_input,timer_sec_input,0,timer_array);
            new_timer.ui_creator();
            new_timer.timer_counter();
            timer_count++;
            timers_count++;

        }
        class timer{
                constructor(hour,min,sec,count){
                    this.hour = hour;
                    this.min = min;
                    this.sec = sec;
                    this.min = this.min + Math.floor(this.sec/60);
                    this.sec=this.sec%60;
                    this.hour=this.hour + Math.floor(this.min/60);
                    this.min=this.min%60;
                    this.store_hour = hour;
                    this.store_min = min;
                    this.store_sec = sec;
                    this.store_min = this.store_min + Math.floor(this.store_sec/60);
                    this.store_sec=this.store_sec%60;
                    this.store_hour=this.store_hour + Math.floor(this.store_min/60);
                    this.store_min=this.store_min%60;
                    this.count = count;
                    this.apple;
                    this.timer_array =[];
                }
                ui_creator(){
                    let colon = document.createElement("span");
                    colon.innerHTML= ":";
                    colon.className = "leaves colon";
                    let colon2 = document.createElement("span");
                    colon2.innerHTML= ":";
                    colon2.className = "leaves colon";
                    let timer_container = document.createElement('div');
                    timer_container.id="timer_container"+this.count;
                    timer_container.classList.add("timer_containers");
                    let delete_button_div = document.createElement('div');
                    delete_button_div.className = "delete_button_div_class";
                    let delete_button= document.createElement("button");
                    let timer_name = document.createElement("button");
                    timer_name.innerHTML = `Timer ${this.count}`;
                    timer_name.className = "small_buttons timer_name";
                    timer_name.style.textAlign = "left";
                    delete_button.addEventListener('click',()=>{this.delete()});
                    delete_button.innerHTML='<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>';
                    delete_button.className = "small_buttons";
                    let stop_reset_div = document.createElement("div");
                    stop_reset_div.className = "stop_reset_div_class";
                    let stop_button = document.createElement("button");
                    let continue_button= document.createElement("button");
                    stop_button.innerHTML='<svg class="delete_svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.163 3.819C5 4.139 5 4.559 5 5.4v13.2c0 .84 0 1.26.163 1.581a1.5 1.5 0 0 0 .656.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C8.861 3 8.441 3 7.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.656.656zm9 0C14 4.139 14 4.559 14 5.4v13.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.655c.32.164.74.164 1.581.164h.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .655-.656c.164-.32.164-.74.164-1.581V5.4c0-.84 0-1.26-.163-1.581a1.5 1.5 0 0 0-.656-.656C17.861 3 17.441 3 16.6 3h-.2c-.84 0-1.26 0-1.581.163a1.5 1.5 0 0 0-.655.656z" fill="#000000"></path></g></svg>';
                    stop_button.id="stop_button1"+this.count;
                    stop_button.className = "small_buttons";
                    continue_button.innerHTML='<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#000000"></path></g></svg>';
                    continue_button.className = "small_buttons";
                    continue_button.id="continue_button1"+this.count;
                    continue_button.style.display="none";
                    stop_button.addEventListener("click",()=>{this.stop()})
                    continue_button.addEventListener('click',()=>{this.continue()});
                    let reset_button = document.createElement("button");
                    reset_button.innerHTML='<svg width="31px" height="31px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.9372 4.21148C14.3936 4.52244 14.5115 5.14453 14.2005 5.60095C13.8896 6.05738 13.2675 6.1753 12.8111 5.86434C11.9885 5.30394 11.0183 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C11.4232 3 12.7852 3.42666 13.9372 4.21148Z" fill="#000000"></path> <path d="M13.5385 12.5062C13.0732 12.8038 12.4548 12.6679 12.1572 12.2026C11.8596 11.7373 11.9955 11.1189 12.4608 10.8214L15.9426 8.59426C16.4079 8.29667 17.0263 8.43258 17.3239 8.89784C17.6215 9.36309 17.4855 9.98149 17.0203 10.2791L13.5385 12.5062Z" fill="#000000"></path> <path d="M18.9034 12.4104C19.1284 12.9147 18.9019 13.506 18.3976 13.731C17.8932 13.956 17.3019 13.7295 17.0769 13.2252L15.5688 9.84436C15.3438 9.33999 15.5702 8.74871 16.0746 8.52371C16.579 8.29871 17.1703 8.52519 17.3953 9.02957L18.9034 12.4104Z" fill="#000000"></path> </g></svg>';
                    reset_button.className = "small_buttons";
                    reset_button.id="reset_button1"+this.count;
                    reset_button.addEventListener("click",()=>{this.reset()})
                    let actual_timer_div = document.createElement('dic');
                    actual_timer_div.classList.add("actual_timer_div_class")
                    let timer_hour = document.createElement("p");
                    timer_hour.classList.add("timer_para");
                    let timer_min= document.createElement("p");
                    timer_min.classList.add("timer_para");
                    let timer_sec= document.createElement("p");
                    timer_sec.classList.add("timer_para");
                    this.timer_array=[timer_hour,timer_min,timer_sec];
                    printer(this.hour,this.min,this.sec,0,this.timer_array);
                    timer_list.appendChild(timer_container);
                    timer_container.appendChild(delete_button_div);
                    delete_button_div.appendChild(timer_name);
                    delete_button_div.appendChild(delete_button);
                    timer_container.appendChild(actual_timer_div);
                    actual_timer_div.appendChild(timer_hour);
                    actual_timer_div.appendChild(colon);
                    actual_timer_div.appendChild(timer_min);
                    actual_timer_div.appendChild(colon2);
                    actual_timer_div.appendChild(timer_sec);
                    timer_container.appendChild(stop_reset_div);
                    stop_reset_div.appendChild(stop_button);
                    stop_reset_div.appendChild(continue_button);
                    stop_reset_div.appendChild(reset_button);

                }
                timer_counter(){
                    this.apple= setInterval(()=>{
                        if(this.sec==0){
                            if(this.min!=0){
                            this.sec=60;
                            this.min--;
                            printer(this.hour,this.min,--this.sec,0,this.timer_array);
                            return 0;
                        }
                        if(this.min==0){
                            if(this.hour!=0){
                                this.hour--;
                                this.min=59;
                                this.sec=60;
                                printer(this.hour,this.min,--this.sec,0,this.timer_array);
                                return 0;
                            }
                    }
                    }
                    printer(this.hour,this.min,--this.sec,0,this.timer_array);
                    if(this.sec==0&&this.min==0&&this.hour==0){
                        clearInterval(this.apple);
                        document.getElementById("stop_button1"+this.count).style.display="none";
                        return 0;
                    }
                    },1000)
                }
                stop(){
                    clearInterval(this.apple);
                    document.getElementById("continue_button1"+this.count).style.display="block";
                    document.getElementById("stop_button1"+this.count).style.display="none";
                }
                continue(){
                    this.timer_counter();
                    document.getElementById("continue_button1"+this.count).style.display="none";
                    document.getElementById("stop_button1"+this.count).style.display="block";
                    // document.getElementById("continue_button1"+this.count).innerHTML='<svg width="30px" height="30px" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>';
                    document.getElementById("continue_button1"+this.count).innerHTML='<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#000000"></path></g></svg>';
                }
                reset(){
                    clearInterval(this.apple);
                    this.hour = this.store_hour;
                    this.min = this.store_min;
                    this.sec = this.store_sec;
                    printer(this.hour,this.min,this.sec,0,this.timer_array);
                    document.getElementById("continue_button1"+this.count).style.display="block";
                    document.getElementById("continue_button1"+this.count).innerHTML='<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#000000"></path></g></svg>';
                    document.getElementById("stop_button1"+this.count).style.display="none";
                }
                delete(){
                    clearInterval(this.apple);
                    document.getElementById("timer_container"+this.count).remove();
                    timers_count--;
                    if(timers_count==0){
                        addnewtimer();
                    }
                }
            }
            function addnewtimer(){
                if(timers_count>0){
                        timer_cancel_button.style.display="block";
                        numpad_timer_cancel_button.style.display="block";

                }
                timer_container_id.style.display="flex";
                timer_start_button.style.display="block";
                Add_new_timer_button.style.display="none";
                timer_list.style.display="none";
                if(window.innerWidth<=500){
                    onscreen_numpad.style.display="grid";

                }
                numpad_event_listener();
            }
            let new_alarm_page = document.getElementById("new_alarm_page");
            let alarm_list = document.getElementById("alarm_list");
            let alarm_hour = document.getElementById("alarm_hour");
            let alarm_min = document.getElementById("alarm_min");
            let change_meridiam_button = document.getElementById("change_meridiam_button");
            function add_new_alarm(){
                if(alarms_count>0){
                    alarm_cancel_button.style.display="block";
                }
                add_new_alarm_button.style.display="none";
                alarm_list.style.display="none";
                new_alarm_page.style.display="flex";
                new_alarm_page.style.flexDirection="column";
            }
            class alarm{
                constructor(hour,min,ampm,count){
                    this.hour = hour;
                    this.min = min;
                    this.ampm=ampm;
                    this.alarm;
                    this.count=count;
                }
                alarm_functn(){
                    let hours1;
                    let time1;
                    let min1;
                    let sec1;
                    this.alarm = setInterval(()=>{
                    time1 =  new Date();
                    hours1 = time1.getHours();
                    min1 = time1.getMinutes();
                    sec1 = time1.getSeconds();
                    if(hours1==this.hour && min1==this.min && sec1 ==0){
                        alarms_count--;
                        document.getElementById("alarm_div"+this.count).remove();
                        if(alarms_count==0){
                        new_alarm_page.style.display="block";
                        add_new_alarm_button.style.display="none"
                        }
                        alarm_indicator.style.display="flex";
                        alarm_indicator.addEventListener("click",remove_alarm_indicator)
                        let alarm_indicator_timer = setTimeout(()=>{
                            alarm_indicator.style.display="none";
                        },10000)
                        clearInterval(this.alarm);
                    }
                    },1000)
                }
                alarm_display(){
                    let alarm_div = document.createElement("div");
                    alarm_div.id = "alarm_div"+this.count;
                    alarm_div.classList.add("alarm_divs");
                    let time = document.createElement('p');
                    time.className="alarms";
                    let delete_button = document.createElement("button");
                    let alarm_name = document.createElement("p");
                    alarm_name.innerHTML = `Alarm ${this.count}`;
                    alarm_name.className="alarm_name";
                    delete_button.id="alarm_delete_button";
                    delete_button.innerHTML='<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z" fill-rule="nonzero"/></svg>';
                    // delete_button.innerHTML='<svg width="30px" height="30px" viewBox="-0.5 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>icon/18/icon-delete</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="out" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <path d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 L4.91666667,14.8888889 L4.91666667,14.8888889 Z M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 L15,3.46500003 L15,3.46500003 L15,3.46500003 Z" id="path" fill="#000000" sketch:type="MSShapeGroup"> </path> </g> </g></svg>';
                    delete_button.className="alarm_delete_buttons";
                    delete_button.addEventListener("click",()=>{this.delete_alarm()});
                    let display_hour  = this.hour>12 ? this.hour-12 : this.hour;
                    time.innerHTML=`${String(display_hour).length==1? 0+ String(display_hour): String(display_hour)}:${String(this.min).length==1? 0+ String(this.min): String(this.min)} ${this.ampm}`;
                    // time.style.backgroundColor="transparent";
                    alarm_div.appendChild(alarm_name);
                    alarm_div.appendChild(time);
                    alarm_div.appendChild(delete_button);
                    alarm_list.appendChild(alarm_div);
                }
                delete_alarm(){
                    alarms_count--;
                    clearInterval(this.alarm);
                    document.getElementById("alarm_div"+this.count).remove();
                    if(alarms_count==0){
                        new_alarm_page.style.display="block";
                        add_new_alarm_button.style.display="none"
                    }
                }
            }
            function change_meridiam(button){
               if(button.innerText=="AM"){
                button.innerText="PM";
               }
               else{
                button.innerText="AM";
               }
            }
            function create_new_alarm(){
                alarm_cancel_button.style.display="none";
                if(alarm_hour.value==""){alarm_hour.value = "12"}
                if(alarm_min.value==""){alarm_min.value = "00"}
                alarms_count++;
                alarm_list.style.display="flex";
                new_alarm_page.style.display="none";
                add_new_alarm_button.style.display="block"
                let hour = alarm_hour.value;
                let min = alarm_min.value;
                let ampm = change_meridiam_button.innerText;
                if (ampm=="PM"){
                    hour = String(Number(hour)+12);
                }
                let new_alarm = new alarm(hour,min,ampm,alarm_count);
                alarm_count++;
                new_alarm.alarm_functn();
                new_alarm.alarm_display();
                alarm_hour.value = "";
                alarm_min.value = "";

            }
            alarm_min.addEventListener('keypress', function (event) {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                event.preventDefault();
            }
            if(Number(alarm_min.value+event.key)>59 || Number(alarm_min.value+event.key)<1){
                event.preventDefault();
            }
            });
            alarm_hour.addEventListener('keypress', function (event) {
            var charCode = (event.which) ? event.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                    event.preventDefault();
                }
            if(Number(alarm_hour.value+event.key)>12 || Number(alarm_hour.value+event.key)<1){
                event.preventDefault();
            }
            });
            function remove_alarm_indicator(){
                clearTimeout(alarm_indicator_timer);
                alarm_indicator.style.display="none";

            }