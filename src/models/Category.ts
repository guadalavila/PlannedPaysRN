export interface ICategory {
    id: number;
    label: string;
    icon: string;
    color: string;
}

export interface ISubCategory {
    id: number;
    label: string;
}

export interface CategoryFull {
    id: number;
    label: string;
    icon: string;
    color: string;
    subCategory?: ISubCategory;
}
