"use strict";

module.exports = {
	name: "hello",

	settings: {

	},

	dependencies: [],	
  
	actions: {

		/** Say a 'Hello'
		 *
		 * @returns
		 */
		sayHi() {
			return {
				hello: "Hello world from molecular",
				description: "This is your first molecular service ever written, great job."
			};
		},

		/** Welcome a username
		 *
		 * @param {String} name - User name
		 */
		sayBye: {
			params: {
				name: "string"
			},
			handler(ctx) {
				return `Good bye, ${ctx.params.name}`;
			}
		},
    
		/** sums the request parameters together
		 *
		 * @param {String} firstNumber - firstNumber
		 * @param {String} secondNumber - SecondNumber
		 */
		add: {
			params: {
				firstNumber: "string",
				secondNumber: "string",
			},
			handler({params: {firstNumber, secondNumber}}) {
				return  Number(firstNumber) + Number(secondNumber);
			}
		},
    
		/** Returns the greatest amonth the 2 numbers
		 *
		 * @param {String} firstNumber - firstNumber
		 * @param {String} secondNumber - SecondNumber
		 */
		max: {
			params: {
				firstNumber: "string",
				secondNumber: "string",
			},
			handler({params: {firstNumber, secondNumber}}) {
				return  Number(firstNumber) >  Number(secondNumber) ? firstNumber : secondNumber;
			}
		}
	},

	events: {

	},

	methods: {

	},

	created() {

	},

	started() {

	},

	stopped() {

	}
};