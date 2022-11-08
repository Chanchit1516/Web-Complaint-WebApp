export type LOGIN_RESPONSE_TYPE = {
    isSuccess: boolean,
    error: string | null,
    errors: string[] | null,
    status: number,
    data: USER_AUTH_TYPE,
    total: number | null
};

export type USER_AUTH_TYPE = {
    userId: number,
    email: string,
    userName: string,
    firstName: string,
    lastName: string,
    isAdministrator: boolean,
    roleId: string,
    token: string
};