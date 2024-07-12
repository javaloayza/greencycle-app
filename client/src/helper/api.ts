const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_URL;


interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const fetchApi = async <T>(endpoint: string, options: FetchOptions = {}): Promise<T> => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export default fetchApi;