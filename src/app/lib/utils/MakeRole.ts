export function makeRole(email: string) {
    const role = email.endsWith("@gmail.com") ? "USER" : "ADMIN";
    return role
}