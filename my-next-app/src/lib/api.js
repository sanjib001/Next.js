console.log("ENV:", process.env.NEXT_PUBLIC_APP_URL);
const API_URL = process.env.NEXT_PUBLIC_APP_URL;

async function apiCall(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;

    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    // Merge default headers with provided headers
    const headers = {
        ...defaultHeaders,
        ...options.headers,
    };

    // If there's a token in localStorage, add it to headers
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
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
        return apiCall('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        });
    },

    // Sign in user
    signIn: async (credentials) => {
        return apiCall('/auth/login', {
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