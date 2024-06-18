console.log(document);

function handleSubmit(e) {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const phoneNumber = e.target[3].value;

    // console.log(fullName, email, password, phoneNumber);

    const form = document.getElementsByTagName('form')[0];
    form.style.display = 'none';

    renderCard(fullName, email, password, phoneNumber);
}

const renderCard = (fullName, email, password, phoneNumber) => {


    const root = document.getElementById('root');
    root.style.boxShadow = '10px 5px 3px 11px grey';
    root.setAttribute('class', 'card');

    root.innerHTML = `
    <h2> Details </h2>
    <img src="form.jpg" alt="Person" id="image"><br>
    <h3 class = 'name'> Name is : </h3>${fullName}<br>
    <h3 class = 'email'> Email is : </h3>${email}<br>
    <h3 class = 'password'> Password is : </h3>${password}<br>
    <h3 class = 'phonenumber'> Phone Number is : </h3>${phoneNumber}`;

    const h = document.getElementsByTagName('h2')[0];
    h.style.margin = '10px 0px 15px 100px';

    const img = document.getElementsByTagName('img')[0];
    img.style.width = '200px';
    img.style.height = '200px';
    img.style.margin = '0px 10px 10px 50px';
    img.style.boxShadow = '10px 5px 3px 8px grey';
    img.style.borderRadius = '20px';

    const h1 = document.getElementsByTagName('h3')[0];
    h1.style.display = 'inline';
    const h2 = document.getElementsByTagName('h3')[1];
    h2.style.display = 'inline';
    const h3 = document.getElementsByTagName('h3')[2];
    h3.style.display = 'inline';
    const h4 = document.getElementsByTagName('h3')[3];
    h4.style.display = 'inline';
}

