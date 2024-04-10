/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_UserReadDto_ } from '../models/Page_UserReadDto_';
import type { UserCreateDto } from '../models/UserCreateDto';
import type { UserReadDto } from '../models/UserReadDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Create User Route
     * This function creates a user using the provided `UserCreateModel` object.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static createUserApi({
        requestBody,
        locale = 'en_US',
    }: {
        requestBody: UserCreateDto,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/',
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
     * Read Users Route
     * This function returns a subset of users based on the provided offset and limit values.
     * @returns Page_UserReadDto_ Successful Response
     * @throws ApiError
     */
    public static readUsersApi({
        roleId,
        locale = 'en_US',
        page = 1,
        size = 50,
    }: {
        roleId?: (number | null),
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_UserReadDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/',
            query: {
                'role_id': roleId,
                'locale': locale,
                'page': page,
                'size': size,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Sex Route
     * This function get sex of user.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserSexApi({
        locale = 'en_US',
    }: {
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/sex',
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read User Route
     * The function is a GET route that returns the details of a user based on their user ID.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static readUserApi({
        userId,
        locale = 'en_US',
    }: {
        userId: number,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
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
     * Update User Profile Route
     * This function updates a user using the provided `UserCreateModel` object.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static updateUserProfileApi({
        userId,
        value,
        field = 'fullname',
        locale = 'en_US',
    }: {
        userId: number,
        value: string,
        field?: string,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
            },
            query: {
                'field': field,
                'value': value,
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update User Route
     * This function updates a user using the provided `UserCreateModel` object.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static updateUserApi({
        userId,
        requestBody,
        locale = 'en_US',
    }: {
        userId: number,
        requestBody: UserCreateDto,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
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
     * Delete User Route
     * The function is a DELETE route that deletes a user based on their user ID.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteUserApi({
        userId,
        locale = 'en_US',
    }: {
        userId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
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
     * User Exist Route
     * This function check user exist
     * @returns string Successful Response
     * @throws ApiError
     */
    public static userExistApi({
        email,
        facebookId,
        twitterId,
        instagramId,
        locale = 'en_US',
    }: {
        email: string,
        facebookId?: (string | null),
        twitterId?: (string | null),
        instagramId?: (string | null),
        locale?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/check-exist',
            query: {
                'email': email,
                'facebook_id': facebookId,
                'twitter_id': twitterId,
                'instagram_id': instagramId,
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
