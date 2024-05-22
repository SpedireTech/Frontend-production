import axios from "axios";

const URL = "http://44.223.68.243:8080";
const USER_API_URL = URL + "/api/v1/user";

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
