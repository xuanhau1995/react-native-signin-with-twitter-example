/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequestDto } from '../models/LoginRequestDto';
import type { PasswordReissueCreateDto } from '../models/PasswordReissueCreateDto';
import type { UserReadDto } from '../models/UserReadDto';
import type { UserResetPasswordDto } from '../models/UserResetPasswordDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Login
     * The function is authenticates a user and returns an access token if successful.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static login({
        roleId,
        requestBody,
        socialId,
        locale = 'en_US',
    }: {
        roleId: number,
        requestBody: LoginRequestDto,
        socialId?: (string | null),
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/token',
            query: {
                'role_id': roleId,
                'social_id': socialId,
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
     * Read Users Me
     * The function is read the current user's information.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static readUsersMe({
        locale = 'en_US',
    }: {
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me/',
            query: {
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Send Email Route
     * This function send mail to a user with token to reset password.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sendEmailApi({
        roleId,
        requestBody,
        locale = 'en_US',
    }: {
        roleId: number,
        requestBody: PasswordReissueCreateDto,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/send-mail',
            query: {
                'role_id': roleId,
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
     * Reset Password Route
     * The function retrieves a token of users from a database, starting reset password.
     * @returns UserReadDto Successful Response
     * @throws ApiError
     */
    public static resetPasswordApi({
        token,
        roleId,
        requestBody,
        locale = 'en_US',
    }: {
        token: string,
        roleId: number,
        requestBody: UserResetPasswordDto,
        locale?: string,
    }): CancelablePromise<UserReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/reset-password/{token}',
            path: {
                'token': token,
            },
            query: {
                'role_id': roleId,
                'locale': locale,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
