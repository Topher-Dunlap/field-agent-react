const DEFAULT_USER = {
    id: 0,
    username: '',
    roles: '',
    token: '',
    hasRole(role) {
        return this.roles.includes(role);
    }
}

export default DEFAULT_USER;