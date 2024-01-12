/**
 * This file is used to declare modules that don't have typescript support
 */

/**
 * 声明svg模块
 */
declare module '*.svg' {
  const content: any
  export default content
}
