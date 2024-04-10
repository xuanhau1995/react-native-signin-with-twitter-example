/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrefectureReadDto } from './PrefectureReadDto';
import type { UserProductDto } from './UserProductDto';
export type ProductReadUserLikeDto = {
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
    id: number;
    prefecture: PrefectureReadDto;
    created_user: UserProductDto;
    updated_user: UserProductDto;
    liked: boolean;
    created_at: string;
    updated_at: string;
};

