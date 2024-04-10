/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TasteCreateDto } from '../models/TasteCreateDto';
import type { TasteReadDto } from '../models/TasteReadDto';
import type { TasteUpdateDto } from '../models/TasteUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TastesService {
    /**
     * Create Taste Route
     * This function is creates a taste and returns the created taste.
     * @returns TasteReadDto Successful Response
     * @throws ApiError
     */
    public static createTasteApi({
        requestBody,
        locale = 'en_US',
    }: {
        requestBody: TasteCreateDto,
        locale?: string,
    }): CancelablePromise<TasteReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tastes/',
            query: {
                'locale': locale,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Tastes Route
     * The function is returns a list of tastes as a response.
     * @returns TasteReadDto Successful Response
     * @throws ApiError
     */
    public static readTastesApi({
        locale = 'en_US',
    }: {
        locale?: string,
    }): CancelablePromise<Array<TasteReadDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tastes/',
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Taste Route
     * The function is a GET route that retrieves a taste by its ID and returns it as a taste object.
     * @returns TasteReadDto Successful Response
     * @throws ApiError
     */
    public static readTasteApi({
        tasteId,
        locale = 'en_US',
    }: {
        tasteId: number,
        locale?: string,
    }): CancelablePromise<TasteReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tastes/{taste_id}',
            path: {
                'taste_id': tasteId,
            },
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Taste Route
     * This function is update a taste, send email and returns the updated taste.
     * @returns TasteReadDto Successful Response
     * @throws ApiError
     */
    public static updateTasteApi({
        tasteId,
        requestBody,
        locale = 'en_US',
    }: {
        tasteId: number,
        requestBody: TasteUpdateDto,
        locale?: string,
    }): CancelablePromise<TasteReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/tastes/{taste_id}',
            path: {
                'taste_id': tasteId,
            },
            query: {
                'locale': locale,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Taste Route
     * This function is delete a taste.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteTasteApi({
        tasteId,
        locale = 'en_US',
    }: {
        tasteId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/tastes/{taste_id}',
            path: {
                'taste_id': tasteId,
            },
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
