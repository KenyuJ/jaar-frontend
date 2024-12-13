export const LOGIN_MUTATION = `
mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
    usuario {
      usu_nombre
      usu_tipo
    }
  }
}
`