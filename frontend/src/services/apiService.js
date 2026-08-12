import { hospitalData } from '../data/hospitalData';

// Simulated latency
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class ApiService {
  async getHospitalResource(resource, params = {}) {
    await delay(300); // Simulate network
    
    let data = hospitalData[resource] || [];
    
    // Simple mock filtering
    if (params.search) {
      const search = params.search.toLowerCase();
      data = data.filter(item => 
        Object.values(item).some(val => 
          String(val).toLowerCase().includes(search)
        )
      );
    }
    
    if (params.specialization && resource === 'doctors') {
      data = data.filter(d => d.specialization.toLowerCase() === params.specialization.toLowerCase());
    }

    // Pagination
    const page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    
    const paginatedData = data.slice(startIndex, endIndex);

    return {
      status: 200,
      data: paginatedData,
      meta: {
        total: data.length,
        page,
        limit,
        totalPages: Math.ceil(data.length / limit)
      }
    };
  }

  async getHospitalResourceById(resource, id) {
    await delay(200);
    const data = hospitalData[resource] || [];
    const item = data.find(d => String(d.id) === String(id));
    
    if (!item) {
      throw new Error('Not found');
    }
    
    return {
      status: 200,
      data: item
    };
  }
}

export const apiService = new ApiService();
