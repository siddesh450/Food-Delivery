function register(first_name,last_name,email,username,password,Confirm_password)
{
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.Confirm_Password = Confirm_password;
}

function register(event)
{
    event.preventDefault()
    const first_name = document.getElementById('fname').value;
    const last_name = document.getElementById('lname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('Password').value;
    const Confirm_Password = document.getElementById('Confirm_Password').value;

    const Newregister = new register(first_name,last_name,email,username,password,Confirm_password);
    console.log(Newregister)
} 