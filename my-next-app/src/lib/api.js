import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiCall(endpoint, isJson, options = {}) {
    const url = `${API_URL}${endpoint}`;

    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    let headers;

    if (isJson) {
        headers = {
            ...defaultHeaders,
            ...options.headers,
        };
    } else {
        headers = {
            ...options.headers,
        };
    }

    const token = Cookies.get("token")
    if(token){
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        ...options,
        headers,
    };

    try {
        const response = await fetch(url, config);

        let data;
        try {
            data = await response.json();
        } catch {
            data = { message: "Invalid server response" };
        }

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Auth API calls
export const authAPI = {
    // Register new user
    register: async (userData) => {
        return apiCall('/auth/register', true, {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    },

    // Sign in user
    signIn: async (credentials) => {
        return apiCall('/auth/login', true, {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    },

    // Logout user
    logout: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },
};

// service API calls
export const serviceAPI = {
    // Register new user
    createService: async (userData) => {
        return apiCall('/services', true, {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    },
    getAllServices: async () => {
        return apiCall('/services', true, {
            method: 'GET'
        });
    },
    updateService: async (userData, serviceId) => {
        return apiCall(`/services/${serviceId}`, true, {
            method: 'PUT',
            body: JSON.stringify(userData),
        });
    },
    deleteService: async (serviceId) => {
        return apiCall(`/services/${serviceId}`, true, {
            method: 'DELETE'
        });
    },
};

// Portfolio API calls
export const portfolioApi = {
    // Register new user
    createPortfolio: async (requestPayload) => {
        return apiCall('/portfolios', false, {
            method: 'POST',
            body: requestPayload
        });
    },
    updatePortfolio: async (requestPayload, id) => {
        return apiCall(`/portfolios/${id}`, false, {
            method: 'PUT',
            body: requestPayload
        });
    },
    getAllPortfolio: async () => {
        return apiCall('/portfolios', true, {
            method: 'GET'
        });
    },
    deletePortfolio: async (portfolioId) => {
        return apiCall(`/portfolios/${portfolioId}`, true, {
            method: 'DELETE'
        });
    },
}