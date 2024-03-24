export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export async function logAddress() {
  try {
    const response = await fetch("http://localhost:4444/addresses", {
      headers: {
        accept: 'application/json',
        'User-agent': 'learning app',
      },
    });
    const addresses = await response.json();
    console.log("Addresses: ", addresses);
  } catch (error) {
    console.error(error);
  }
}

export async function logObject() {
  try {
    const response = await fetch("http://localhost:4444/objects", {
      headers: {
        accept: 'application/json',
        'User-agent': 'learning app',
      },
    });
    const objects = await response.json();
    console.log("Objects: ", objects);
  } catch (error) {
    console.error(error);
  }
}