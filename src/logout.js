export function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("index");
    localStorage.removeItem("breed");
    window.location = "/";
}