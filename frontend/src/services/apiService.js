/**
 * Hospital API client — talks to the FastAPI backend when VITE_API_BASE_URL is set,
 * otherwise falls back to local static mock data.
 */

import { hospitalData } from '../data/hospitalData';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '';
const USE_BACKEND = Boolean(API_BASE);

const RESOURCE_PATHS = {
  doctors: 'doctors',
  patients: 'patients',
  departments: 'departments',
  appointments: 'appointments',
  medicines: 'medicines',
  'medical-records': 'medical-records',
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function buildQuery(params = {}) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query.set(key, String(value));
    }
  });
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}

async function fetchFromBackend(path, params = {}) {
  const url = `${API_BASE}${path}${buildQuery(params)}`;
  const response = await fetch(url);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || errorBody.detail || `Request failed (${response.status})`);
  }

  return response.json();
}

class ApiService {
  async getHospitalResource(resource, params = {}) {
    if (USE_BACKEND) {
      const segment = RESOURCE_PATHS[resource];
      if (!segment) {
        throw new Error(`Unknown resource: ${resource}`);
      }
      return fetchFromBackend(`/api/v1/hospital/${segment}`, params);
    }

    await delay(300);

    let data = hospitalData[resource] || [];

    if (params.search) {
      const search = params.search.toLowerCase();
      data = data.filter((item) =>
        Object.values(item).some((val) => String(val).toLowerCase().includes(search)),
      );
    }

    if (params.specialization && resource === 'doctors') {
      data = data.filter(
        (d) => d.specialization.toLowerCase() === params.specialization.toLowerCase(),
      );
    }

    const page = parseInt(params.page, 10) || 1;
    const limit = parseInt(params.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const paginatedData = data.slice(startIndex, startIndex + limit);

    return {
      status: 200,
      data: paginatedData,
      meta: {
        total: data.length,
        page,
        limit,
        totalPages: Math.ceil(data.length / limit) || 0,
      },
    };
  }

  async getHospitalResourceById(resource, id) {
    if (USE_BACKEND) {
      const segment = RESOURCE_PATHS[resource];
      if (!segment) {
        throw new Error(`Unknown resource: ${resource}`);
      }
      return fetchFromBackend(`/api/v1/hospital/${segment}/${id}`);
    }

    await delay(200);
    const data = hospitalData[resource] || [];
    const item = data.find((d) => String(d.id) === String(id));

    if (!item) {
      throw new Error('Not found');
    }

    return {
      status: 200,
      data: item,
    };
  }
}

export const apiService = new ApiService();
