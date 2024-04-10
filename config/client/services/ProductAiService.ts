/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_search_by_image_api } from '../models/Body_search_by_image_api';
import type { ProductReadUserDto } from '../models/ProductReadUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductAiService {
    /**
     * Embedding Route
     * The function is a GET route that returns the embedding of the csv file.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static embeddingApi({
        locale = 'en_US',
    }: {
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product_ai/embedding',
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search Route
     * The function is a GET route that returns the search results.
     * @returns ProductReadUserDto Successful Response
     * @throws ApiError
     */
    public static searchApi({
        keyword = '',
        locale = 'en_US',
    }: {
        keyword?: string,
        locale?: string,
    }): CancelablePromise<Array<ProductReadUserDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product_ai/search',
            query: {
                'keyword': keyword,
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Embedding Images Route
     * The function is a GET route that returns the embedding of the product images.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static embeddingImagesApi({
        locale = 'en_US',
    }: {
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/product_ai/embedding_images',
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Search By Image Route
     * The function is a handles file uploads and resizes the uploaded file to the specified width and height.
     * @returns ProductReadUserDto Successful Response
     * @throws ApiError
     */
    public static searchByImageApi({
        locale = 'en_US',
        formData,
    }: {
        locale?: string,
        formData?: Body_search_by_image_api,
    }): CancelablePromise<Array<ProductReadUserDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/product_ai/search_by_image',
            query: {
                'locale': locale,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
