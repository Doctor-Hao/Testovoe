import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {

		// кошелёк
		wallet: 45,

		// запчасти
		items: [
			{
				"id": 1,
				"image": "1.png",
				"label": "Биорука",
				"price": "7",
				"sell": "5"
			},
			{
				"id": 2,
				"image": "2.png",
				"label": "Микрочип",
				"price": "5",
				"sell": "3"
			},
			{
				"id": 3,
				"image": "3.png",
				"label": "Душа",
				"price": "25",
				"sell": "15"
			}
		],

		// склад
		storage: [
			{
				"id": 1,
				"image": "1.png",
				"label": "Биорука",
				"price": "7",
				"sell": "5"
			},
			{
				"id": 2,
				"image": "2.png",
				"label": "Микрочип",
				"price": "5",
				"sell": "3"
			},
			{
				"id": 3,
				"image": "3.png",
				"label": "Душа",
				"price": "25",
				"sell": "15"
			}
		],

		// биоруки
		no_have_hands: 4,
		have_hands: 0,
		active_hands: 0,

		// биочипы
		no_have_chips: 4,
		have_chips: 0,
		active_chips: 0,

		// душа
		no_have_soul: 1,
		have_soul: 0,
		active_soul: 0,

		// попапы
		isVisibleLimitWallet: false,
		isVisibleCopmleteProduction: false,

		// требования
		requirement: true,
		requirement_hands: "2 биоруки,",
		requirement_chips: "3 микрочипа",
		requirement_soul: "и 1 души",
		requirement_money: "",

		// типы роботов
		FrontMale: true,
		FrontFamale: false,
		DesignMale: false,
		DesignFamale: false,

		// пол робота
		MaleRobot: true,
		FamaleRobot: false,

		// направления робота
		FrontRobot: true,
		DesignRobot: false,
	},
	mutations: {
		SET_ITEMS_TO_STATE: (state, items) => {
			state.items = items;
		},
		SET_STORAGE: (state, item) => {
			if (state.storage.length) {
				let isItemExist = false;
				state.storage.map(function (product) {
					if (product.id === item.id) {
						isItemExist = true;
						if (state.storage[product.id - 1].price > state.wallet) {
							console.log("Недостаточно средств")
						} else {
							product.quantity++;
							state.wallet = state.wallet - state.storage[product.id - 1].price

							//Добавление биоркуки в "Производство"
							if (state.storage[product.id - 1].id == 1 & state.no_have_hands > 0) {
								state.have_hands++
								state.no_have_hands--
							} else if (state.storage[product.id - 1].id == 1 & state.no_have_hands == 0) {
								state.have_hands++
							}

							//Добавление микрочипа в "Производство"
							if (state.storage[product.id - 1].id == 2 & state.no_have_chips > 0) {
								state.have_chips++
								state.no_have_chips--
							} else if (state.storage[product.id - 1].id == 2 & state.no_have_chips == 0) {
								state.have_chips++
							}

							//Добавление души в "Производство"
							if (state.storage[product.id - 1].id == 3 & state.no_have_soul > 0) {
								state.have_soul++
								state.no_have_soul--
							} else if (state.storage[product.id - 1].id == 3 & state.no_have_soul == 0) {
								state.have_soul++
							}
						}

					}
				})
				if (!isItemExist) {
					state.storage.push(item);
				}
			} else {
				state.storage.push(item);
			}

		},
		DECREMENT: (state, index) => {
			if (state.storage[index].quantity > 0) {
				state.storage[index].quantity--;

				// Проверка на заполненность кошелька
				if (state.wallet < 100) {
					state.wallet = state.wallet + parseInt(state.storage[index].sell)
				}
				if (state.wallet > 100) {
					state.wallet = 100,
						state.isVisibleLimitWallet = true
				}

				//Продажа биоруки
				if (index == 0) {
					if (state.no_have_hands >= 4) {
						state.have_hands--
					} else if (state.have_hands > 0) {
						state.have_hands--
						state.no_have_hands++
					} else if (state.active_hands <= 2) {
						state.active_hands--
						state.no_have_hands++
					}
				}

				//Продажа биочипа
				if (index == 1) {
					if (state.no_have_chips >= 4) {
						state.have_chips--
					} else if (state.have_chips > 0) {
						state.have_chips--
						state.no_have_chips++
					} else if (state.active_chips <= 2) {
						state.active_chips--
						state.no_have_chips++
					}
				}

				//Продажа души
				if (index == 2) {
					if (state.no_have_soul >= 4) {
						state.have_soul--
					} else if (state.have_soul > 0) {
						state.have_soul--
						state.no_have_soul++
					} else if (state.active_soul <= 2) {
						state.active_soul--
						state.no_have_soul++
					}
				}


			}
		},
		UPDATE_WALLET: (state, checkedCheckbox) => {

			// Проверка на заполненность кошелька
			if (state.wallet < 100) {
				if (checkedCheckbox) {
					state.wallet = state.wallet + 5
				} else {
					state.wallet = state.wallet + 1
				}
			}
			if (state.wallet >= 100) {
				state.wallet = 100,
					state.isVisibleLimitWallet = true
			}

			// Скрываем требования в "Производство"
			if (state.active_hands == 2 & state.active_chips == 3 & state.active_soul == 1 & (state.wallet > 10)) {
				state.requirement = false
			}

		},
		ACTIVE_TO_HAND: (state) => {
			if (state.active_hands < 2) {
				state.active_hands++
				state.have_hands--
			}
			if ((state.active_hands == 1) & (state.active_chips == 3 || state.active_soul == 1)) {
				state.requirement_hands = "1 биоруки"
			} else if (state.active_hands == 1) {
				state.requirement_hands = "1 биоруки,"
			}
			if (state.active_hands == 2) {
				state.requirement_hands = ""
			}
			if (state.active_hands == 2 & state.active_chips == 3) {
				if (state.active_soul == 0) {
					state.requirement_soul = "1 души"
				}
			}
			if (state.wallet < 10) {
				state.requirement_money = "денег"
			}
			if ((state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) & (state.wallet < 10)) {
				state.requirement_money = "и денег"
			}

			// Скрываем требования
			if (state.active_hands == 2 & state.active_chips == 3 & state.active_soul == 1 & (state.wallet > 10)) {
				state.requirement = false
			}
		},
		DEACTIVATION_TO_HAND: (state) => {
			if (state.active_hands <= 2) {
				state.active_hands--
				state.have_hands++
			}
			if ((state.active_hands == 1) & (state.active_chips == 3 || state.active_soul == 1)) {
				state.requirement_hands = "1 биоруки"
			} else if (state.active_hands == 1) {
				state.requirement_hands = "1 биоруки,"
			}
			if ((state.active_hands == 0) & (state.active_chips == 3 || state.active_soul == 1)) {
				state.requirement_hands = "2 биоруки"
			} else if (state.active_hands == 0) {
				state.requirement_hands = "2 биоруки,"
			}
			if (state.wallet < 10) {
				state.requirement_money = "денег"
			}
			if ((state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) & (state.wallet < 10)) {
				state.requirement_money = "и денег"
			}

			if (state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) {
				state.requirement = true
			}
		},
		ACTIVE_TO_CHIPS: (state) => {
			if (state.active_chips < 3) {
				state.active_chips++
				state.have_chips--
			}
			if (state.active_chips == 1) {
				state.requirement_chips = "2 микрочипа"
			}
			if (state.active_chips == 2) {
				state.requirement_chips = "1 микрочипа"
			}
			if (state.active_chips == 3) {
				state.requirement_chips = ""
			}
			if (state.active_hands == 2 & state.active_chips == 3) {
				if (state.active_soul == 0) {
					state.requirement_soul = "1 души"
				}
			}
			if (state.wallet < 10) {
				state.requirement_money = "денег"
			}
			if ((state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) & (state.wallet < 10)) {
				state.requirement_money = "и денег"
			}

			// Скрываем требования
			if (state.active_hands == 2 & state.active_chips == 3 & state.active_soul == 1 & (state.wallet > 10)) {
				state.requirement = false
			}
		},
		DEACTIVATION_TO_CHIPS: (state) => {
			if (state.active_chips <= 3) {
				state.active_chips--
				state.have_chips++
			}
			if (state.active_chips == 3) {
				state.requirement_chips = ""
			}
			if (state.active_chips == 2) {
				state.requirement_chips = "1 микрочипа"
			}
			if (state.active_chips == 1) {
				state.requirement_chips = "2 микрочипа"
			}
			if (state.active_chips == 0) {
				state.requirement_chips = "3 микрочипа"
			}
			if (state.wallet < 10) {
				state.requirement_money = "денег"
			}
			if ((state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) & (state.wallet < 10)) {
				state.requirement_money = "и денег"
			}

			if (state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) {
				state.requirement = true
			}
		},
		ACTIVE_TO_SOUL: (state) => {
			if (state.active_soul < 1) {
				console.log(state.active_soul)
				state.active_soul++
				state.have_soul--
			}
			if (state.active_soul == 1) {
				state.requirement_soul = ""
			}
			if (state.wallet < 10) {
				state.requirement_money = "денег"
			}
			if ((state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) & (state.wallet < 10)) {
				state.requirement_money = "и денег"
			}

			// Скрываем требования
			if (state.active_hands == 2 & state.active_chips == 3 & state.active_soul == 1 & (state.wallet > 10)) {
				state.requirement = false
			}
		},
		DEACTIVATION_TO_SOUL: (state) => {
			if (state.active_soul = 1) {
				state.active_soul--
				state.have_soul++
			}
			if (state.active_hands == 2 & state.active_chips == 3) {
				if (state.active_soul == 0) {
					state.requirement_soul = "1 души"
				}
			} else {
				if (state.active_soul == 0) {
					state.requirement_soul = "и 1 души"
				}
			}
			if (state.wallet < 10) {
				state.requirement_money = "денег"
			}
			if ((state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) & (state.wallet < 10)) {
				state.requirement_money = "и денег"
			}

			if (state.active_hands !== 2 || state.active_chips !== 3 || state.active_soul !== 1) {
				state.requirement = true
			}
		},
		CLOSE_TO_POPUP: (state) => {
			state.isVisibleLimitWallet = false,
				state.isVisibleCopmleteProduction = false
		},
		UPDATE_TO_TYPE: (state, isType) => {

			//направление робота
			if (isType == "FrontEnd") {
				state.FrontRobot = true;
				state.DesignRobot = false;
			} else {
				state.DesignRobot = true;
				state.FrontRobot = false;
			}

			// Выбор типа робота
			if (state.FrontRobot & state.MaleRobot) {
				state.FrontMale = true;
				state.FrontFamale = false;
				state.DesignMale = false;
				state.DesignFamale = false;
			}
			if (state.FrontRobot & state.FamaleRobot) {
				state.FrontMale = false;
				state.FrontFamale = true;
				state.DesignMale = false;
				state.DesignFamale = false;
			}
			if (state.DesignRobot & state.MaleRobot) {
				state.FrontMale = false;
				state.FrontFamale = false;
				state.DesignMale = true;
				state.DesignFamale = false;
			}
			if (state.DesignRobot & state.FamaleRobot) {
				state.FrontMale = false;
				state.FrontFamale = false;
				state.DesignMale = false;
				state.DesignFamale = true;
			}
		},
		UPDATE_TO_FLOOR: (state, isFloor) => {
			// Пол робота
			if (isFloor == "Male") {
				state.MaleRobot = true;
				state.FamaleRobot = false;
			} else {
				state.FamaleRobot = true;
				state.MaleRobot = false;
			}

			// Выбор типа робота
			if (state.FrontRobot & state.MaleRobot) {
				state.FrontMale = true;
				state.FrontFamale = false;
				state.DesignMale = false;
				state.DesignFamale = false;
			}
			if (state.FrontRobot & state.FamaleRobot) {
				state.FrontMale = false;
				state.FrontFamale = true;
				state.DesignMale = false;
				state.DesignFamale = false;
			}
			if (state.DesignRobot & state.MaleRobot) {
				state.FrontMale = false;
				state.FrontFamale = false;
				state.DesignMale = true;
				state.DesignFamale = false;
			}
			if (state.DesignRobot & state.FamaleRobot) {
				state.FrontMale = false;
				state.FrontFamale = false;
				state.DesignMale = false;
				state.DesignFamale = true;
			}
		},
		REMOVE_DETAILS: (state) => {
			state.isVisibleCopmleteProduction = true,
				state.active_hands = 0,
				state.no_have_hands = state.no_have_hands + 2,

				state.active_chips = 0,
				state.no_have_chips = state.no_have_chips + 3,

				state.active_soul = 0,
				state.no_have_soul = 1


		},
	},
	actions: {
		GET_ITEMS_FROM_API({ commit }) {
			return axios('http://localhost:3000/items', {
				method: "GET"
			})
				.then((items) => {
					commit('SET_ITEMS_TO_STATE', items.data);
					return items;
				})
				.catch((error) => {
					console.log(error);
					return error;
				})
		},
		ADD_TO_STORAGE({ commit }, item) {
			commit('SET_STORAGE', item)
		},
		DECREMENT_STORAGE_ITEM({ commit }, index) {
			commit('DECREMENT', index)
		},
		UPDATE_COUNT_WALLET({ commit }, checkedCheckbox) {
			commit('UPDATE_WALLET', checkedCheckbox)
		},
		ACTIVE_HANDS({ commit }) {
			commit('ACTIVE_TO_HAND')
		},
		DEACTIVATION_HANDS({ commit }) {
			commit('DEACTIVATION_TO_HAND')
		},
		ACTIVE_CHIPS({ commit }) {
			commit('ACTIVE_TO_CHIPS')
		},
		DEACTIVATION_CHIPS({ commit }) {
			commit('DEACTIVATION_TO_CHIPS')
		},
		ACTIVE_SOUL({ commit }) {
			commit('ACTIVE_TO_SOUL')
		},
		DEACTIVATION_SOUL({ commit }) {
			commit('DEACTIVATION_TO_SOUL')
		},
		CLOSE_POPUP({ commit }) {
			commit('CLOSE_TO_POPUP')
		},
		UPDATE_TYPE({ commit }, isType) {
			commit('UPDATE_TO_TYPE', isType)
		},
		UPDATE_FLOOR({ commit }, isFloor) {
			commit('UPDATE_TO_FLOOR', isFloor)
		},
		BUILD_ROBOT({ commit }) {
			commit('REMOVE_DETAILS')
		},
	},
	getters: {
		ITEMS(state) {
			return state.items;
		},
		STORAGE(state) {
			return state.storage;
		},
		DECREMENT_WALLET(state) {
			return state.wallet;
		},
		HANDS(state) {
			return state.have_hands;
		},
		NOT_HAVE_HANDS(state) {
			return state.no_have_hands;
		},
		ACTIVE_HAND(state) {
			return state.active_hands;
		},
		NOT_HAVE_CHIPS(state) {
			return state.no_have_chips;
		},
		CHIPS(state) {
			return state.have_chips;
		},
		ACTIVE_CHIPS(state) {
			return state.active_chips;
		},
		SOUL(state) {
			return state.have_soul;
		},
		ACTIVE_SOUL(state) {
			return state.active_soul;
		},
		NOT_HAVE_SOUL(state) {
			return state.no_have_soul;
		},
		IS_VISIBLE_LIMIT(state) {
			return state.isVisibleLimitWallet;
		},
		REQUIREMENT(state) {
			return state.requirement;
		},
		REQUIREMENT_HANDS(state) {
			return state.requirement_hands;
		},
		REQUIREMENT_CHIPS(state) {
			return state.requirement_chips;
		},
		REQUIREMENT_SOUL(state) {
			return state.requirement_soul;
		},
		REQUIREMENT_MONEY(state) {
			return state.requirement_money;
		},
		FRONT_MALE(state) {
			return state.FrontMale;
		},
		FRONT_FAMALE(state) {
			return state.FrontFamale;
		},
		DESIGN_MALE(state) {
			return state.DesignMale;
		},
		DESIGN_FAMALE(state) {
			return state.DesignFamale;
		},
		IS_VISIBLE_BUILD_BTN(state) {
			return state.isVisibleCopmleteProduction;
		},
	},
});

export default store;

