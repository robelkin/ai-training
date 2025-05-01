// Use port 3001 and include /api prefix
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

/**
 * A helper function for making API requests to the backend.
 * Handles base URL concatenation, JSON parsing, and basic error handling.
 * 
 * @param endpoint - The API endpoint (e.g., '/examples/tasks').
 * @param options - Optional fetch options (method, headers, body, etc.).
 * @returns A promise that resolves with the parsed JSON response, or undefined for 204 No Content.
 * @throws An error if the network request fails or the API returns an error status.
 */
export const fetchApi = async <T = any>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T | undefined> => {
    // Ensure no double slash between base URL and endpoint
    const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

    // Default headers (can be expanded for auth, etc.)
    const defaultHeaders: HeadersInit = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
    };

    try {
        const response = await fetch(url, {
            ...options,
            headers: defaultHeaders,
        });

        if (!response.ok) {
            let errorMessage = `API Error: ${response.status} ${response.statusText}`;
            try {
                // Try to parse a JSON error body
                const errorBody = await response.json();
                errorMessage = errorBody.message || errorBody.error || errorMessage;
            } catch (e) {
                // Ignore if error body isn't JSON
            }
            throw new Error(errorMessage);
        }

        // Handle No Content response
        if (response.status === 204) {
            return undefined;
        }

        // Parse JSON response
        const data: T = await response.json();
        return data;

    } catch (error) {
        console.error('Fetch API Error:', error);
        // Re-throw the error so callers can handle it
        throw error; 
    }
}; 