"use strict";

module.exports = {
	name: "users",

	settings: {

	},

	dependencies: [],	

	actions: {

		/** Returns a list of users
     *
     * @returns 
     */
		getAllUsers() {
			return this.users;
		},

		/** Searches a user by Exact name and returns it
     * 
     * @param {String} name - User name
     * 
     * @returns
     */
		getUserByName : {
			params: {
				name: "string"
			},
			handler ({params: {name}}) {
				return this.users.find( ({name: _name}) => name === _name) || "User NotFound";
			}
		},
    
		/** Adds a user to the database
     * 
     * @param {String} name
     * 
     * @returns
     */ 
		addUser: {
			params: {
				name: "string"
			},
			handler ({params: {name}}) {

				if( ! this.findUserByName(name)) {
					this.users.push({name});
					return this.users;
				} else {
					return "user already exists";
				}
			}
		},
    
		/** Deletes a user
     * 
     * @param {String} name -The name of the user to be deleted
     * 
     * @returns
     */
		deleteUserByName: {
			params: {
				name: "string"
			},
			handler ({params: {name}}) {
				for( let i =0; i < this.users.length; i++) {
					let user = this.users[i];
          
					if(name === user.name) {
						this.users.splice(i,1);
						return user;
					}
				}
        
				return "no user was found with this name";
			}
		},
    
		/** Update a user
     * 
     * @param {String} name -The name of the user to be deleted
     * 
     * @param {String} newName -The new name
     * 
     * @returns
     */
		updateUserByName: {
			params: {
				name: "string",
				newName: "string"
			},
			handler ({params: {name, newName}}) {

				let user = this.findUserByName(name);

				if(user){
					user.name = newName;
					return user;
				} else {
					return "no user was found with this name";
				}
			}
		}
	},

	events: {

	},

	// Private methods
	methods: {
		findUserByName(name){
			return this.users.find( ({name: _name}) => name === _name);
		}
	},

	// Declare local/class variables in this lifecycle method
	created() {
		this.users =  [
			{name: "Fabrice"},
			{name: "Nelly"},
			{name: "Jenny"},
			{name: "Mana"},
		];
	},

	started() {

	},

	stopped() {

	}
};