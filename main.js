import './style.css'
import { getAddresses, getAddress, postAddress, updateAddress, deleteAddress } from './functions/Address.js'
import { getObjects, getObject, postObject, updateObject, deleteObject } from './functions/Object.js'
import { getIndicators, getIndicator, postIndicator, updateIndicator, deleteIndicator } from './functions/Indicator.js'
import { getTypes, getType, postType, updateType, deleteType} from './functions/Type.js'

const addresses = await getAddresses();
addresses.map(address => console.log(address.city));
console.log("All addresses: ", addresses);

for (let address of addresses) {
	for (let objectId of address.objects) {
		const object = await getObject(objectId);
		console.log(object.name);
			
		for (let indicatorId of object.indicators) {
			const indicator = await getIndicator(indicatorId);
			console.log(indicator.name);
		}
	}
}

const dataAddress = {
    city: "Test",
    street: "Test",
    longitude: "1",
	latitude: "1",
}

const newAddress = await postAddress(dataAddress);
console.log("New Address: ", newAddress);

const updatedDataAddress = {
    city: "Updated Test",
    street: "Updated Test",
    longitude: "2",
	latitude: "2",
}

const updatedAddress = await updateAddress(updatedDataAddress, newAddress._id);
console.log("Updated New Address:", updatedAddress);

const isDeleted = await deleteAddress(newAddress._id);
console.log(isDeleted);

const deletedAddress = await getAddress(newAddress._id);
console.log("Deleted Address (must be null): ", deletedAddress);