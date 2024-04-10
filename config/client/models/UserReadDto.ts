/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrefectureReadDto } from './PrefectureReadDto';
import type { RoleReadDto } from './RoleReadDto';
export type UserReadDto = {
    role_id?: number;
    prefecture_id?: (number | null);
    fullname?: (string | null);
    email?: (string | null);
    phone?: (string | null);
    avatar?: (string | null);
    birth_year?: (string | null);
    sex?: (string | null);
    facebook_id?: (string | null);
    twitter_id?: (string | null);
    instagram_id?: (string | null);
    taste_ids?: (Array<number> | null);
    id: number;
    role?: (RoleReadDto | null);
    prefecture?: (PrefectureReadDto | null);
};

