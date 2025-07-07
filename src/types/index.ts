export interface User {
    _id: string;
    name: string;
    email: string;
    phone: string;
    bio: string;
    design_philosophy: string;
    skills: string[];
    created_at: string;
}

export interface Project {
    _id: string;
    user_id: string;
    title: string;
    description: string;
    location: string;
    year: number;
    image_url: string;
}

export interface Guide {
    _id: string;
    user_id: string;
    title: string;
    category: "fengshui" | "homebuilding";
    content: string;
    published_at: string;
}

export interface CareerHistory {
    _id: string;
    user_id: string;
    position: string;
    company: string;
    location: string;
    start_date: string;
    end_date: string;
    description: string;
}


export interface Quotation {
    _id: string;
    service_name: string;
    description: string;
    price_min: number;
    price_max: number;
    unit: string;
    last_updated: string;
}
