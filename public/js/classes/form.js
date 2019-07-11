class Form {

  constructor() {
    this.actionBtn = document.querySelector('#submitBtn');
    this.emailInput = document.querySelector('#emailInput');
    this.passwordInput = document.querySelector('#passwordInput');
    this.keepCheckbox = document.querySelector('#keepCheckbox');
  }

  handleValidationErrors(errors) {
    console.log(500)
  }

  async registerUser(data) {
    const request = await fetch('/users/register', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data)
    });
    
    const response = await request.json();
    return response;
  }

  init() {
    this.actionBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const data = {
        email: this.emailInput.value,
        password: this.passwordInput.value
      }

      this.registerUser(data)
        .then((data) => {
          console.log(data);

          if (data.status === 400) this.handleValidationErrors(data.errors)
          if (data.redirect) window.location.replace(data.redirect);
        })
        .catch((error) => {
          console.log(error);
        })
    })
  }

}