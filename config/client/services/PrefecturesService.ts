/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrefectureCreateDto } from '../models/PrefectureCreateDto';
import type { PrefectureReadDto } from '../models/PrefectureReadDto';
import type { PrefectureUpdateDto } from '../models/PrefectureUpdateDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PrefecturesService {
    /**
     * Create Prefecture Route
     * This function is creates a prefecture and returns the created prefecture.
     * @returns PrefectureReadDto Successful Response
     * @throws ApiError
     */
    public static createPrefectureApi({
        requestBody,
        locale = 'en_US',
    }: {
        requestBody: PrefectureCreateDto,
        locale?: string,
    }): CancelablePromise<PrefectureReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/prefectures/',
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
     * Read Prefectures Route
     * The function is returns a list of prefectures as a response.
     * @returns PrefectureReadDto Successful Response
     * @throws ApiError
     */
    public static readPrefecturesApi({
        locale = 'en_US',
    }: {
        locale?: string,
    }): CancelablePromise<Array<PrefectureReadDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/prefectures/',
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Prefecture Route
     * The function is a GET route that retrieves a prefecture by its ID and returns it as a prefecture object.
     * @returns PrefectureReadDto Successful Response
     * @throws ApiError
     */
    public static readPrefectureApi({
        prefectureId,
        locale = 'en_US',
    }: {
        prefectureId: number,
        locale?: string,
    }): CancelablePromise<PrefectureReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/prefectures/{prefecture_id}',
            path: {
                'prefecture_id': prefectureId,
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
     * Update Prefecture Route
     * This function is update a prefecture, send email and returns the updated prefecture.
     * @returns PrefectureReadDto Successful Response
     * @throws ApiError
     */
    public static updatePrefectureApi({
        prefectureId,
        requestBody,
        locale = 'en_US',
    }: {
        prefectureId: number,
        requestBody: PrefectureUpdateDto,
        locale?: string,
    }): CancelablePromise<PrefectureReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/prefectures/{prefecture_id}',
            path: {
                'prefecture_id': prefectureId,
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
     * Delete Prefecture Route
     * This function is delete a prefecture.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deletePrefectureApi({
        prefectureId,
        locale = 'en_US',
    }: {
        prefectureId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/prefectures/{prefecture_id}',
            path: {
                'prefecture_id': prefectureId,
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
