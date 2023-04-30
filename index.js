let navbar = document.querySelector('.navbar');
document.addEventListener('scroll', () => {
    if(window.top.scrollY > 19) {
        navbar.classList.add('scroll');
    }else{
        navbar.classList.remove('scroll');
        navbar.style.transition = '.4s ease';
    }
});

const loginPage = document.getElementById("subscription");

loginPage.addEventListener('click', ()=>{
    window.location.href = "Login Page/loginPage.html";

});

//to do list left
let clickCount = 0;
const maxClicks = 5;

document.querySelector('#click').onclick = function(){
    if(clickCount >= maxClicks){
        alert("You have reached the maximum number of clicks");
        this.disabled = true;
    }
    else if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a workout goal")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        clickCount++;
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                clickCount--;
                if(clickCount<maxClicks){
                    document.querySelector('#click').disabled = false;
                }
            }
        }
    }
}


//to do list right
let clickCount2 = 0;
const maxClicks2 = 5;
document.querySelector('#click2').onclick = function(){
    if(clickCount2>= maxClicks2){
        alert("You have reached the maximum number of clicks");
        this.disabled = true;
    }
    else if(document.querySelector('#newtask2 input').value.length == 0){
        alert("Please enter a new task")
    }

    else{
        document.querySelector('#tasks2').innerHTML += `
            <div class="task2">
                <span id="taskname">
                    ${document.querySelector('#newtask2 input').value}
                </span>
                <button class="delete2">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        clickCount2++;
        var current_tasks = document.querySelectorAll(".delete2");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
                clickCount2--;
                if(clickCount2<maxClicks2){
                    document.querySelector('#click2').disabled = false;
                }
            }
        }
    }
}