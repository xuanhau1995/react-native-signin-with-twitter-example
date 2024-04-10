/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page_ProductListDto_ } from '../models/Page_ProductListDto_';
import type { Page_ProductReadUserDto_ } from '../models/Page_ProductReadUserDto_';
import type { Page_ProductReadUserLikeDto_ } from '../models/Page_ProductReadUserLikeDto_';
import type { Page_ProductReadUserReviewDto_ } from '../models/Page_ProductReadUserReviewDto_';
import type { ProductCreateDto } from '../models/ProductCreateDto';
import type { ProductReadDto } from '../models/ProductReadDto';
import type { ProductReadUserReviewDto } from '../models/ProductReadUserReviewDto';
import type { ProductReviewCreateDto } from '../models/ProductReviewCreateDto';
import type { ProductUpdateDto } from '../models/ProductUpdateDto';
import type { ProductUserCreateDto } from '../models/ProductUserCreateDto';
import type { SortType } from '../models/SortType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductsService {
    /**
     * Create Product User Route
     * This function is creates a product and returns the created product.
     * @returns ProductReadDto Successful Response
     * @throws ApiError
     */
    public static createProductUserApi({
        requestBody,
        locale = 'en_US',
    }: {
        requestBody: ProductUserCreateDto,
        locale?: string,
    }): CancelablePromise<ProductReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/users',
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
     * Read Product Users Route
     * The function is returns a list of products as a response.
     * @returns Page_ProductReadUserDto_ Successful Response
     * @throws ApiError
     */
    public static readProductUsersApi({
        keyword = '',
        sortBy = 'id',
        sortType,
        locale = 'en_US',
        page = 1,
        size = 50,
    }: {
        keyword?: string,
        sortBy?: string,
        sortType?: SortType,
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ProductReadUserDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/users',
            query: {
                'keyword': keyword,
                'sort_by': sortBy,
                'sort_type': sortType,
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
     * Read Product User Likes Route
     * The function is returns a list of products as a response.
     * @returns Page_ProductReadUserLikeDto_ Successful Response
     * @throws ApiError
     */
    public static readProductUserLikesApi({
        keyword = '',
        sortBy = 'id',
        sortType,
        locale = 'en_US',
        page = 1,
        size = 50,
    }: {
        keyword?: string,
        sortBy?: string,
        sortType?: SortType,
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ProductReadUserLikeDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/users/like',
            query: {
                'keyword': keyword,
                'sort_by': sortBy,
                'sort_type': sortType,
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
     * Like Product Route
     * This function defines a route for liking a product using FastAPI in Python.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static likeProductApi({
        productId,
        locale = 'en_US',
    }: {
        productId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/users/like',
            query: {
                'product_id': productId,
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Product User Reviews Route
     * The function is returns a list of products as a response.
     * @returns Page_ProductReadUserReviewDto_ Successful Response
     * @throws ApiError
     */
    public static readProductUserReviewsApi({
        keyword = '',
        sortBy = 'id',
        sortType,
        locale = 'en_US',
        page = 1,
        size = 50,
    }: {
        keyword?: string,
        sortBy?: string,
        sortType?: SortType,
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ProductReadUserReviewDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/users/review',
            query: {
                'keyword': keyword,
                'sort_by': sortBy,
                'sort_type': sortType,
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
     * Review Product Route
     * This function defines a route for review a product using FastAPI in Python.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static reviewProductApi({
        requestBody,
        locale = 'en_US',
    }: {
        requestBody: ProductReviewCreateDto,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/users/review',
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
     * Unlike Product Route
     * This function defines a route for liking a product using FastAPI in Python.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static unlikeProductApi({
        productId,
        locale = 'en_US',
    }: {
        productId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/users/unlike',
            query: {
                'product_id': productId,
                'locale': locale,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Read Product User Route
     * The function is a GET route that retrieves a product by its ID and returns it as a product object.
     * @returns ProductReadUserReviewDto Successful Response
     * @throws ApiError
     */
    public static readProductUserApi({
        productId,
        locale = 'en_US',
    }: {
        productId: number,
        locale?: string,
    }): CancelablePromise<ProductReadUserReviewDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/users/{product_id}',
            path: {
                'product_id': productId,
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
     * Create Product Route
     * This function is creates a product and returns the created product.
     * @returns ProductReadDto Successful Response
     * @throws ApiError
     */
    public static createProductApi({
        requestBody,
        locale = 'en_US',
    }: {
        requestBody: ProductCreateDto,
        locale?: string,
    }): CancelablePromise<ProductReadDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/products/',
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
     * Read Products Route
     * The function is returns a list of products as a response.
     * @returns Page_ProductListDto_ Successful Response
     * @throws ApiError
     */
    public static readProductsApi({
        keyword = '',
        sortBy = 'id',
        sortType,
        locale = 'en_US',
        page = 1,
        size = 50,
    }: {
        keyword?: string,
        sortBy?: string,
        sortType?: SortType,
        locale?: string,
        /**
         * Page number
         */
        page?: number,
        /**
         * Page size
         */
        size?: number,
    }): CancelablePromise<Page_ProductListDto_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/',
            query: {
                'keyword': keyword,
                'sort_by': sortBy,
                'sort_type': sortType,
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
     * Read Product Route
     * The function is a GET route that retrieves a product by its ID and returns it as a product object.
     * @returns ProductReadDto Successful Response
     * @throws ApiError
     */
    public static readProductApi({
        productId,
        locale = 'en_US',
    }: {
        productId: number,
        locale?: string,
    }): CancelablePromise<ProductReadDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/products/{product_id}',
            path: {
                'product_id': productId,
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
     * Update Product Route
     * This function is update a product, send email and returns the updated product.
     * @returns ProductReadDto Successful Response
     * @throws ApiError
     */
    public static updateProductApi({
        productId,
        requestBody,
        locale = 'en_US',
    }: {
        productId: number,
        requestBody: ProductUpdateDto,
        locale?: string,
    }): CancelablePromise<ProductReadDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/products/{product_id}',
            path: {
                'product_id': productId,
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
     * Delete Product Route
     * This function is delete a product.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static deleteProductApi({
        productId,
        locale = 'en_US',
    }: {
        productId: number,
        locale?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/products/{product_id}',
            path: {
                'product_id': productId,
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
