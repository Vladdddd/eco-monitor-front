export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export async function logAddresses() {
  try {
    const response = await fetch("http://localhost:4444/addresses", {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const addresses = await response.json();
    console.log("Addresses: ", addresses);
  } catch (error) {
    console.error(error);
  }
}

export async function logObjects() {
  try {
    const response = await fetch("http://localhost:4444/objects", {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const objects = await response.json();
    console.log("Objects: ", objects);
  } catch (error) {
    console.error(error);
  }
}

export async function logObjectAndIndicator() {
  try {
    const response = await fetch("http://localhost:4444/objects", {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const objects = await response.json();
    
    const indicatorId = objects[0].indicators[0];
    const response2 = await fetch(`http://localhost:4444/indicators/${indicatorId}`, {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const indicator = await response2.json();
    console.log("Indicator: ", indicator);
  } catch (error) {
    console.error(error);
  }
}

export async function logAddressAndObject() {
  try {
    const response = await fetch("http://localhost:4444/addresses", {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const addresses = await response.json();
    
    const objectId = addresses[0].objects[0];
    const response2 = await fetch(`http://localhost:4444/objects/${objectId}`, {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const object = await response2.json();
    console.log("Object: ", object);
  } catch (error) {
    console.error(error);
  }
}