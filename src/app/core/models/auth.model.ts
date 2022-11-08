export type USER_AUTH_TYPE = {
    user_id: number | string,
    email: string,
    username: string,
    first_name: string,
    last_name: string,
    is_administrator: boolean,
    role_id: string,
    token: string
};