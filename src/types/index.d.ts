declare module 'uview-plus' {
  export function install(): void

  interface test {
    /** 邮箱格式校验 */
    email(email: string): boolean
  }
  interface $u {
    config: config
    props: props
    test: test
  }

  global {
    interface Uni {
      $u: $u
    }
  }
}
