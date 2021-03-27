const Assessment = ({}) => {
	/**
	 * #1. Compare two objects to determine if the first one contains property values in the second one; for example, `person3` below is contained in `person1` below and so should be `true`, while `person3` is not contained in `person2`
	 */
	const step1 = () => {
		const matches = ({ firstObj, secondObj }) => {
			// Argument type validations
			if (!firstObj || typeof firstObj !== "object" || Array.isArray(firstObj)) {
				return "First input is not of type object.";
			} else if (!secondObj || typeof secondObj !== "object" || Array.isArray(secondObj)) {
				return "Second input is not of type object.";
			}

			for (const property in firstObj) {
				if (firstObj[property] !== secondObj[property]) {
					return false;
				}
			}
			return true;
		}

		const person1 = { age: 25, hair: 'long', beard: true };
		const person2 = { age: 26, hair: 'short', beard: true };
		const person3 = { hair: 'long', beard: true };

		console.log(matches({ firstObj: person1, secondObj: person2 }));
		console.log(matches({ firstObj: person2, secondObj: person3 }));
		console.log(matches({ firstObj: person3, secondObj: person1 }));
	}

	step1();

	/**
	 * #2. Filter out the specified values from a specified array. Return the original array without the filtered values.
	 */
	const step2 = () => {
		const remove = ({ array, values }) => {
			// Argument type validations
			if (!Array.isArray(array)) {
				return "First input is not of type array.";
			} else if (!Array.isArray(values)) {
				return "Second input is not of type array.";
			}

			return array.filter(element => !values.includes(element));
		}

		const values = ['e', 'h', 'z'];
		const array1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		const array2 = ['l', 'o', 'g', 'q', 'z', 'f', 'j', 'r'];

		console.log(remove({ array: array1, values }));
		console.log(remove({ array: array2, values }));
	}

	step2();

	/**
	 * #3. Write a function to generate a random hexadecimal color code.
	 */
	const step3 = () => {
		const hex = () => {
			const options = "0123456789ABCDEF";
			let hexCode = "#";
			for (let i = 0; i < 6; i++) {
				hexCode += options[Math.floor(Math.random() * 16)];
			}
			return hexCode;
		}

		console.log(hex());
	}

	step3();

	/**
	 * #4. Write a function to implement the Luhn Algorithm used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.
	 */
	const step4 = () => {
		const luhn = input => {
			// Check type and convert to array
			if (typeof input === "string") {
			input = Array.from(input.replace(/\s/g, ""));
			} else if (typeof input === "number") {
				input = Array.from(input.toString());
			} else {
			return "Invalid input type. Please use a number or string.";
			}
			
			// Double every second value, starting from last digit (not including check digit), add two digits together if > 9
			for (let i = input.length - 2; i >= 0; i -= 2) {
				if (input[i] >= 5) {
				input[i] = (Number(input[i]) * 2) - 9;
				} else {
					input[i] = Number(input[i]) * 2;
				}
			}

			// Sum all digits
			let total = 0;
		 	for (let number of input) {
			 	total += Number(number);
		 	}

		 // Valid number if number % 10 is 0
			return total % 10 === 0;
		}

		console.log(luhn('5221320000307276'));
		console.log(luhn(6011329933655299));
		console.log(luhn(123456789));
		console.log(luhn('4242 4242 4242 4242'));
	}

	step4();

	return <h1>Open developer console to read logs.</h1>;
}

export default Assessment;
