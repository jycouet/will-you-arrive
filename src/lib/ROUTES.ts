/* eslint-disable */
/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

/**
 * PAGES
 */
const PAGES = {
  "/": `/`,
  "/Q00": `/Q00`,
  "/Q01": `/Q01`,
  "/Q01/next": `/Q01/next`,
  "/Q01/next2": `/Q01/next2`,
  "/QXX/[id]": (params: { id: (string | number) }) => {
    return `/QXX/${params.id}`
  },
  "/QXX/[id]/next": (params: { id: (string | number) }) => {
    return `/QXX/${params.id}/next`
  },
  "/QYY": (params?: { id?: (string | number) }) => {
    return `/QYY${params?.id ? `/${params?.id}`: ''}`
  },
  "/QYY/next": (params?: { id?: (string | number) }) => {
    return `/QYY${params?.id ? `/${params?.id}`: ''}/next`
  },
  "/QYY/next2": (params?: { id?: (string | number) }) => {
    return `/QYY${params?.id ? `/${params?.id}`: ''}/next2`
  },
  "/instructions": `/instructions`,
  "/intro": `/intro`,
  "/about": `/about`,
  "/about2": `/about2`,
  "/new/HowManyWinnersAreHere": (params: { nb: (string | number) }) => {
    return `/new/HowManyWinnersAreHere${appendSp({ nb: params.nb })}`
  },
  "/new/demo": `/new/demo`,
  "/new/demo/next": `/new/demo/next`
}

/**
 * SERVERS
 */
const SERVERS = {
  
}

/**
 * ACTIONS
 */
const ACTIONS = {
  
}

/**
 * LINKS
 */
const LINKS = {
  "gh": `https://github.com/jycouet/kitql`
}

type ParamValue = string | number | undefined

/**
 * Append search params to a string
 */
export const appendSp = (sp?: Record<string, ParamValue | ParamValue[]>, prefix: '?' | '&' = '?') => {
  if (sp === undefined) return ''

  const params = new URLSearchParams()
  const append = (n: string, v: ParamValue) => {
    if (v !== undefined) {
      params.append(n, String(v))
    }
  }

  for (const [name, val] of Object.entries(sp)) {
    if (Array.isArray(val)) {
      for (const v of val) {
        append(name, v)
      }
    } else {
      append(name, val)
    }
  }

  const formatted = params.toString()
  if (formatted) {
    return `${prefix}${formatted}`
  }
  return ''
}

/**
 * get the current search params
 * 
 * Could be use like this:
 * ```
 * route("/cities", { page: 2 }, { ...currentSP() })
 * ```
 */ 
export const currentSp = () => {
  const params = new URLSearchParams(window.location.search)
  const record: Record<string, string> = {}
  for (const [key, value] of params.entries()) {
    record[key] = value
  }
  return record
}

function StringOrUndefined(val: any) {
  if (val === undefined) {
    return undefined
  }

  return String(val)
}

// route function helpers
type NonFunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
type FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type FunctionParams<T> = T extends (...args: infer P) => any ? P : never

const AllObjs = { ...PAGES, ...ACTIONS, ...SERVERS, ...LINKS }
type AllTypes = typeof AllObjs

/**
 * To be used like this: 
 * ```ts
 * import { route } from './ROUTES'
 * 
 * route('site_id', { id: 1 })
 * ```
 */
export function route<T extends FunctionKeys<AllTypes>>(key: T, ...params: FunctionParams<AllTypes[T]>): string
export function route<T extends NonFunctionKeys<AllTypes>>(key: T): string
export function route<T extends keyof AllTypes>(key: T, ...params: any[]): string {
  if (AllObjs[key] as any instanceof Function) {
    const element = (AllObjs as any)[key] as (...args: any[]) => string
    return element(...params)
  } else {
    return AllObjs[key] as string
  }
}

/**
* Add this type as a generic of the vite plugin `kitRoutes<KIT_ROUTES>`.
*
* Full example:
* ```ts
* import type { KIT_ROUTES } from './ROUTES'
* import { kitRoutes } from 'vite-plugin-kit-routes'
*
* kitRoutes<KIT_ROUTES>({
*  PAGES: {
*    // here, key of object will be typed!
*  }
* })
* ```
*/
export type KIT_ROUTES = {
  PAGES: { '/': never, '/Q00': never, '/Q01': never, '/Q01/next': never, '/Q01/next2': never, '/QXX/[id]': 'id', '/QXX/[id]/next': 'id', '/QYY': 'id', '/QYY/next': 'id', '/QYY/next2': 'id', '/instructions': never, '/intro': never, '/about': never, '/about2': never, '/new/HowManyWinnersAreHere': never, '/new/demo': never, '/new/demo/next': never }
  SERVERS: Record<string, never>
  ACTIONS: Record<string, never>
  LINKS: { 'gh': never }
  Params: { id: never, nb: never }
}