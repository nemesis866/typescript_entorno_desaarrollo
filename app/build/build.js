var Greeter=function(){function t(t){this.greeting=t}return t.prototype.greet=function(){return"Hello, "+this.greeting},t}(),greeter=new Greeter(1),button=document.createElement("button");button.textContent="Say Hello",button.onclick=function(){alert(greeter.greet())},document.body.appendChild(button);var Greeter=function(){function t(t){this.greeting=t}return t.prototype.greet=function(){return"Hello, "+this.greeting},t}(),greeter=new Greeter("world"),button=document.createElement("button");button.textContent="Say Hello",button.onclick=function(){alert(greeter.greet())},document.body.appendChild(button);