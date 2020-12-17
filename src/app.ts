const form = document.querySelector('form')!;
const addressInput = document.getElementById('address') as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.nodeValue;

    
}

form.addEventListener('submit', searchAddressHandler);