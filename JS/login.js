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
}