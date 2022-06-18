export interface LocationsData {
    info: LocationInfo
    results: LocationResult[]
  }
  
  export interface LocationInfo {
    count: number
    pages: number
    next: string
    prev: any
  }
  
  export interface LocationResult {
    id: number
    name: string
    type: string
    dimension: string
    residents: any[]
    url: string
    created: string
  }