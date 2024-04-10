/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProductCreateDto = {
    created_user_id?: (number | null);
    updated_user_id?: (number | null);
    prefecture_id: number;
    image_before: (string | null);
    image_after: (string | null);
    wine_name: string;
    company_name: string;
    brand_name: string;
    alcohol_concentration: string;
    taste_ids?: (Array<number> | null);
};

