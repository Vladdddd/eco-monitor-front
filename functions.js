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

export async function logAddress() {
  try {
    const addressId = "65f58383843530191d57ec28";
    const response = await fetch(`http://localhost:4444/addresses/${addressId}`, {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const address = await response.json();
    console.log("One Address: ", address);
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

export async function logObject() {
  try {
    const objectId = "65f584bb25d8f478eac69606";
    const response = await fetch(`http://localhost:4444/objects/${objectId}`, {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const object = await response.json();
    console.log("One Object: ", object);
  } catch (error) {
    console.error(error);
  }
}

export async function logObjectAndIndicator() {
  try {
    const objectId = "65f584bb25d8f478eac69606";
    const response = await fetch(`http://localhost:4444/objects/${objectId}`, {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const object = await response.json();

    for (const indicatorId of object.indicators) {
      const response2 = await fetch(`http://localhost:4444/indicators/${indicatorId}`, {
        headers: {
          accept: 'application/json',
          'User-agent': 'eco-monitor',
        },
      });
      const indicator = await response2.json();
      console.log("Indicator from certain object: ", indicator);
    }
  } catch (error) {
    console.error(error);
  }
}

export async function logAddressAndObject() {
  try {
    const addressId = "65f58383843530191d57ec28";
    const response = await fetch(`http://localhost:4444/addresses/${addressId}`, {
      headers: {
        accept: 'application/json',
        'User-agent': 'eco-monitor',
      },
    });
    const address = await response.json();

    for (const objectId of address.objects) {
      const response2 = await fetch(`http://localhost:4444/objects/${objectId}`, {
        headers: {
          accept: 'application/json',
          'User-agent': 'eco-monitor',
        },
      });
      const object = await response2.json();
      console.log("Object from certain address: ", object);
    }
  } catch (error) {
    console.error(error);
  }
}