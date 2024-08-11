import axios from "axios";
import { getStoredItem } from "./lib.js";

const URL = "https://spedire-app-backend-service.onrender.com";
const USER_API_URL = URL + "/api/v1/user";
const ORDER_API_URL = URL + "/api/v1/order";
const CARRIER_API_URL = URL + "/api/v1/carrier";

export async function login(data) {
	const response = await axios.post(`${URL}/login`, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response);
	return response.data;
}
export async function initializeUser(TOKEN) {
	const response = await axios.get(`${USER_API_URL}/dashboard`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${TOKEN}`,
		},
	});
	console.log(response);
	return response.data;
}
export async function forgotPassword(data) {
	const response = await axios.post(`${USER_API_URL}/forgotPassword`, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response);
	return response.data;
}

export async function resetPassword(data) {
	const response = await axios.post(`${USER_API_URL}/resetPassword`, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response);
	return response.data;
}
export async function pairCourier(data) {
	const TOKEN = getStoredItem("token");
	const response = await axios.get(`${ORDER_API_URL}/matchOrder`, data, {
		headers: {
			"Content-Type": "application/json",
		},
	});
	return response.data;
}
export async function upgradeCourier(data) {
	const TOKEN = getStoredItem("token");
	const response = await axios.post(`${CARRIER_API_URL}/upgrade`, data, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${TOKEN}`,
		},
	});
	return response.data;
}
export async function fundWallet(data) {
	return data;
}
export async function sendFund(data) {
	return data;
}
