<<<<<<< HEAD
function user (username,password)
{
    this.username = username;
    this.password = password;
}
function login(event)
{
    event.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;   
    
    const Newuser = new User(username,password);
    console.log(Newuser)
=======
function user (username,password)
{
    this.username = username;
    this.password = password;
}
function login(event)
{
    event.preventDefault()
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;   
    
    const Newuser = new User(username,password);
    console.log(Newuser)
>>>>>>> b65223d153942d4f870435bb3c92b8f2163948a0
}