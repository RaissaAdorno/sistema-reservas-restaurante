
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tab_usuarios
 * 
 */
export type tab_usuarios = $Result.DefaultSelection<Prisma.$tab_usuariosPayload>
/**
 * Model tab_mesas
 * 
 */
export type tab_mesas = $Result.DefaultSelection<Prisma.$tab_mesasPayload>
/**
 * Model tab_reservas
 * 
 */
export type tab_reservas = $Result.DefaultSelection<Prisma.$tab_reservasPayload>
/**
 * Model tab_relatorio
 * 
 */
export type tab_relatorio = $Result.DefaultSelection<Prisma.$tab_relatorioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusMesa: {
  Disponivel: 'Disponivel',
  Reservada: 'Reservada'
};

export type StatusMesa = (typeof StatusMesa)[keyof typeof StatusMesa]


export const StatusReserva: {
  Pendente: 'Pendente',
  Confirmado: 'Confirmado',
  Cancelado: 'Cancelado'
};

export type StatusReserva = (typeof StatusReserva)[keyof typeof StatusReserva]

}

export type StatusMesa = $Enums.StatusMesa

export const StatusMesa: typeof $Enums.StatusMesa

export type StatusReserva = $Enums.StatusReserva

export const StatusReserva: typeof $Enums.StatusReserva

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tab_usuarios
 * const tab_usuarios = await prisma.tab_usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tab_usuarios
   * const tab_usuarios = await prisma.tab_usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tab_usuarios`: Exposes CRUD operations for the **tab_usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tab_usuarios
    * const tab_usuarios = await prisma.tab_usuarios.findMany()
    * ```
    */
  get tab_usuarios(): Prisma.tab_usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tab_mesas`: Exposes CRUD operations for the **tab_mesas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tab_mesas
    * const tab_mesas = await prisma.tab_mesas.findMany()
    * ```
    */
  get tab_mesas(): Prisma.tab_mesasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tab_reservas`: Exposes CRUD operations for the **tab_reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tab_reservas
    * const tab_reservas = await prisma.tab_reservas.findMany()
    * ```
    */
  get tab_reservas(): Prisma.tab_reservasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tab_relatorio`: Exposes CRUD operations for the **tab_relatorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tab_relatorios
    * const tab_relatorios = await prisma.tab_relatorio.findMany()
    * ```
    */
  get tab_relatorio(): Prisma.tab_relatorioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tab_usuarios: 'tab_usuarios',
    tab_mesas: 'tab_mesas',
    tab_reservas: 'tab_reservas',
    tab_relatorio: 'tab_relatorio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tab_usuarios" | "tab_mesas" | "tab_reservas" | "tab_relatorio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tab_usuarios: {
        payload: Prisma.$tab_usuariosPayload<ExtArgs>
        fields: Prisma.tab_usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tab_usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tab_usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload>
          }
          findFirst: {
            args: Prisma.tab_usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tab_usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload>
          }
          findMany: {
            args: Prisma.tab_usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload>[]
          }
          create: {
            args: Prisma.tab_usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload>
          }
          createMany: {
            args: Prisma.tab_usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tab_usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload>
          }
          update: {
            args: Prisma.tab_usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload>
          }
          deleteMany: {
            args: Prisma.tab_usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tab_usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tab_usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_usuariosPayload>
          }
          aggregate: {
            args: Prisma.Tab_usuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTab_usuarios>
          }
          groupBy: {
            args: Prisma.tab_usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tab_usuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tab_usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<Tab_usuariosCountAggregateOutputType> | number
          }
        }
      }
      tab_mesas: {
        payload: Prisma.$tab_mesasPayload<ExtArgs>
        fields: Prisma.tab_mesasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tab_mesasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tab_mesasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload>
          }
          findFirst: {
            args: Prisma.tab_mesasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tab_mesasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload>
          }
          findMany: {
            args: Prisma.tab_mesasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload>[]
          }
          create: {
            args: Prisma.tab_mesasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload>
          }
          createMany: {
            args: Prisma.tab_mesasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tab_mesasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload>
          }
          update: {
            args: Prisma.tab_mesasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload>
          }
          deleteMany: {
            args: Prisma.tab_mesasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tab_mesasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tab_mesasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_mesasPayload>
          }
          aggregate: {
            args: Prisma.Tab_mesasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTab_mesas>
          }
          groupBy: {
            args: Prisma.tab_mesasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tab_mesasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tab_mesasCountArgs<ExtArgs>
            result: $Utils.Optional<Tab_mesasCountAggregateOutputType> | number
          }
        }
      }
      tab_reservas: {
        payload: Prisma.$tab_reservasPayload<ExtArgs>
        fields: Prisma.tab_reservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tab_reservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tab_reservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload>
          }
          findFirst: {
            args: Prisma.tab_reservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tab_reservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload>
          }
          findMany: {
            args: Prisma.tab_reservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload>[]
          }
          create: {
            args: Prisma.tab_reservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload>
          }
          createMany: {
            args: Prisma.tab_reservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tab_reservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload>
          }
          update: {
            args: Prisma.tab_reservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload>
          }
          deleteMany: {
            args: Prisma.tab_reservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tab_reservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tab_reservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_reservasPayload>
          }
          aggregate: {
            args: Prisma.Tab_reservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTab_reservas>
          }
          groupBy: {
            args: Prisma.tab_reservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tab_reservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tab_reservasCountArgs<ExtArgs>
            result: $Utils.Optional<Tab_reservasCountAggregateOutputType> | number
          }
        }
      }
      tab_relatorio: {
        payload: Prisma.$tab_relatorioPayload<ExtArgs>
        fields: Prisma.tab_relatorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tab_relatorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tab_relatorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload>
          }
          findFirst: {
            args: Prisma.tab_relatorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tab_relatorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload>
          }
          findMany: {
            args: Prisma.tab_relatorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload>[]
          }
          create: {
            args: Prisma.tab_relatorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload>
          }
          createMany: {
            args: Prisma.tab_relatorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tab_relatorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload>
          }
          update: {
            args: Prisma.tab_relatorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload>
          }
          deleteMany: {
            args: Prisma.tab_relatorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tab_relatorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tab_relatorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tab_relatorioPayload>
          }
          aggregate: {
            args: Prisma.Tab_relatorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTab_relatorio>
          }
          groupBy: {
            args: Prisma.tab_relatorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tab_relatorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tab_relatorioCountArgs<ExtArgs>
            result: $Utils.Optional<Tab_relatorioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tab_usuarios?: tab_usuariosOmit
    tab_mesas?: tab_mesasOmit
    tab_reservas?: tab_reservasOmit
    tab_relatorio?: tab_relatorioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Tab_mesasCountOutputType
   */

  export type Tab_mesasCountOutputType = {
    tab_reservas: number
  }

  export type Tab_mesasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab_reservas?: boolean | Tab_mesasCountOutputTypeCountTab_reservasArgs
  }

  // Custom InputTypes
  /**
   * Tab_mesasCountOutputType without action
   */
  export type Tab_mesasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab_mesasCountOutputType
     */
    select?: Tab_mesasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tab_mesasCountOutputType without action
   */
  export type Tab_mesasCountOutputTypeCountTab_reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tab_reservasWhereInput
  }


  /**
   * Count Type Tab_reservasCountOutputType
   */

  export type Tab_reservasCountOutputType = {
    tab_relatorio: number
  }

  export type Tab_reservasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab_relatorio?: boolean | Tab_reservasCountOutputTypeCountTab_relatorioArgs
  }

  // Custom InputTypes
  /**
   * Tab_reservasCountOutputType without action
   */
  export type Tab_reservasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab_reservasCountOutputType
     */
    select?: Tab_reservasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tab_reservasCountOutputType without action
   */
  export type Tab_reservasCountOutputTypeCountTab_relatorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tab_relatorioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tab_usuarios
   */

  export type AggregateTab_usuarios = {
    _count: Tab_usuariosCountAggregateOutputType | null
    _avg: Tab_usuariosAvgAggregateOutputType | null
    _sum: Tab_usuariosSumAggregateOutputType | null
    _min: Tab_usuariosMinAggregateOutputType | null
    _max: Tab_usuariosMaxAggregateOutputType | null
  }

  export type Tab_usuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type Tab_usuariosSumAggregateOutputType = {
    id_usuario: number | null
  }

  export type Tab_usuariosMinAggregateOutputType = {
    id_usuario: number | null
    usuario: string | null
    login: string | null
    senha: string | null
  }

  export type Tab_usuariosMaxAggregateOutputType = {
    id_usuario: number | null
    usuario: string | null
    login: string | null
    senha: string | null
  }

  export type Tab_usuariosCountAggregateOutputType = {
    id_usuario: number
    usuario: number
    login: number
    senha: number
    _all: number
  }


  export type Tab_usuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type Tab_usuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type Tab_usuariosMinAggregateInputType = {
    id_usuario?: true
    usuario?: true
    login?: true
    senha?: true
  }

  export type Tab_usuariosMaxAggregateInputType = {
    id_usuario?: true
    usuario?: true
    login?: true
    senha?: true
  }

  export type Tab_usuariosCountAggregateInputType = {
    id_usuario?: true
    usuario?: true
    login?: true
    senha?: true
    _all?: true
  }

  export type Tab_usuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_usuarios to aggregate.
     */
    where?: tab_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_usuarios to fetch.
     */
    orderBy?: tab_usuariosOrderByWithRelationInput | tab_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tab_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tab_usuarios
    **/
    _count?: true | Tab_usuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tab_usuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tab_usuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tab_usuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tab_usuariosMaxAggregateInputType
  }

  export type GetTab_usuariosAggregateType<T extends Tab_usuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateTab_usuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTab_usuarios[P]>
      : GetScalarType<T[P], AggregateTab_usuarios[P]>
  }




  export type tab_usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tab_usuariosWhereInput
    orderBy?: tab_usuariosOrderByWithAggregationInput | tab_usuariosOrderByWithAggregationInput[]
    by: Tab_usuariosScalarFieldEnum[] | Tab_usuariosScalarFieldEnum
    having?: tab_usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tab_usuariosCountAggregateInputType | true
    _avg?: Tab_usuariosAvgAggregateInputType
    _sum?: Tab_usuariosSumAggregateInputType
    _min?: Tab_usuariosMinAggregateInputType
    _max?: Tab_usuariosMaxAggregateInputType
  }

  export type Tab_usuariosGroupByOutputType = {
    id_usuario: number
    usuario: string
    login: string
    senha: string
    _count: Tab_usuariosCountAggregateOutputType | null
    _avg: Tab_usuariosAvgAggregateOutputType | null
    _sum: Tab_usuariosSumAggregateOutputType | null
    _min: Tab_usuariosMinAggregateOutputType | null
    _max: Tab_usuariosMaxAggregateOutputType | null
  }

  type GetTab_usuariosGroupByPayload<T extends tab_usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tab_usuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tab_usuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tab_usuariosGroupByOutputType[P]>
            : GetScalarType<T[P], Tab_usuariosGroupByOutputType[P]>
        }
      >
    >


  export type tab_usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    usuario?: boolean
    login?: boolean
    senha?: boolean
  }, ExtArgs["result"]["tab_usuarios"]>



  export type tab_usuariosSelectScalar = {
    id_usuario?: boolean
    usuario?: boolean
    login?: boolean
    senha?: boolean
  }

  export type tab_usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "usuario" | "login" | "senha", ExtArgs["result"]["tab_usuarios"]>

  export type $tab_usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tab_usuarios"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: number
      usuario: string
      login: string
      senha: string
    }, ExtArgs["result"]["tab_usuarios"]>
    composites: {}
  }

  type tab_usuariosGetPayload<S extends boolean | null | undefined | tab_usuariosDefaultArgs> = $Result.GetResult<Prisma.$tab_usuariosPayload, S>

  type tab_usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tab_usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tab_usuariosCountAggregateInputType | true
    }

  export interface tab_usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tab_usuarios'], meta: { name: 'tab_usuarios' } }
    /**
     * Find zero or one Tab_usuarios that matches the filter.
     * @param {tab_usuariosFindUniqueArgs} args - Arguments to find a Tab_usuarios
     * @example
     * // Get one Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tab_usuariosFindUniqueArgs>(args: SelectSubset<T, tab_usuariosFindUniqueArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tab_usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tab_usuariosFindUniqueOrThrowArgs} args - Arguments to find a Tab_usuarios
     * @example
     * // Get one Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tab_usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, tab_usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_usuariosFindFirstArgs} args - Arguments to find a Tab_usuarios
     * @example
     * // Get one Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tab_usuariosFindFirstArgs>(args?: SelectSubset<T, tab_usuariosFindFirstArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_usuariosFindFirstOrThrowArgs} args - Arguments to find a Tab_usuarios
     * @example
     * // Get one Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tab_usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, tab_usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tab_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.findMany()
     * 
     * // Get first 10 Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const tab_usuariosWithId_usuarioOnly = await prisma.tab_usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends tab_usuariosFindManyArgs>(args?: SelectSubset<T, tab_usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tab_usuarios.
     * @param {tab_usuariosCreateArgs} args - Arguments to create a Tab_usuarios.
     * @example
     * // Create one Tab_usuarios
     * const Tab_usuarios = await prisma.tab_usuarios.create({
     *   data: {
     *     // ... data to create a Tab_usuarios
     *   }
     * })
     * 
     */
    create<T extends tab_usuariosCreateArgs>(args: SelectSubset<T, tab_usuariosCreateArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tab_usuarios.
     * @param {tab_usuariosCreateManyArgs} args - Arguments to create many Tab_usuarios.
     * @example
     * // Create many Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tab_usuariosCreateManyArgs>(args?: SelectSubset<T, tab_usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tab_usuarios.
     * @param {tab_usuariosDeleteArgs} args - Arguments to delete one Tab_usuarios.
     * @example
     * // Delete one Tab_usuarios
     * const Tab_usuarios = await prisma.tab_usuarios.delete({
     *   where: {
     *     // ... filter to delete one Tab_usuarios
     *   }
     * })
     * 
     */
    delete<T extends tab_usuariosDeleteArgs>(args: SelectSubset<T, tab_usuariosDeleteArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tab_usuarios.
     * @param {tab_usuariosUpdateArgs} args - Arguments to update one Tab_usuarios.
     * @example
     * // Update one Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tab_usuariosUpdateArgs>(args: SelectSubset<T, tab_usuariosUpdateArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tab_usuarios.
     * @param {tab_usuariosDeleteManyArgs} args - Arguments to filter Tab_usuarios to delete.
     * @example
     * // Delete a few Tab_usuarios
     * const { count } = await prisma.tab_usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tab_usuariosDeleteManyArgs>(args?: SelectSubset<T, tab_usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tab_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tab_usuariosUpdateManyArgs>(args: SelectSubset<T, tab_usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tab_usuarios.
     * @param {tab_usuariosUpsertArgs} args - Arguments to update or create a Tab_usuarios.
     * @example
     * // Update or create a Tab_usuarios
     * const tab_usuarios = await prisma.tab_usuarios.upsert({
     *   create: {
     *     // ... data to create a Tab_usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tab_usuarios we want to update
     *   }
     * })
     */
    upsert<T extends tab_usuariosUpsertArgs>(args: SelectSubset<T, tab_usuariosUpsertArgs<ExtArgs>>): Prisma__tab_usuariosClient<$Result.GetResult<Prisma.$tab_usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tab_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_usuariosCountArgs} args - Arguments to filter Tab_usuarios to count.
     * @example
     * // Count the number of Tab_usuarios
     * const count = await prisma.tab_usuarios.count({
     *   where: {
     *     // ... the filter for the Tab_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tab_usuariosCountArgs>(
      args?: Subset<T, tab_usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tab_usuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tab_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tab_usuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tab_usuariosAggregateArgs>(args: Subset<T, Tab_usuariosAggregateArgs>): Prisma.PrismaPromise<GetTab_usuariosAggregateType<T>>

    /**
     * Group by Tab_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tab_usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tab_usuariosGroupByArgs['orderBy'] }
        : { orderBy?: tab_usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tab_usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTab_usuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tab_usuarios model
   */
  readonly fields: tab_usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tab_usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tab_usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tab_usuarios model
   */
  interface tab_usuariosFieldRefs {
    readonly id_usuario: FieldRef<"tab_usuarios", 'Int'>
    readonly usuario: FieldRef<"tab_usuarios", 'String'>
    readonly login: FieldRef<"tab_usuarios", 'String'>
    readonly senha: FieldRef<"tab_usuarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tab_usuarios findUnique
   */
  export type tab_usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tab_usuarios to fetch.
     */
    where: tab_usuariosWhereUniqueInput
  }

  /**
   * tab_usuarios findUniqueOrThrow
   */
  export type tab_usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tab_usuarios to fetch.
     */
    where: tab_usuariosWhereUniqueInput
  }

  /**
   * tab_usuarios findFirst
   */
  export type tab_usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tab_usuarios to fetch.
     */
    where?: tab_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_usuarios to fetch.
     */
    orderBy?: tab_usuariosOrderByWithRelationInput | tab_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_usuarios.
     */
    cursor?: tab_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_usuarios.
     */
    distinct?: Tab_usuariosScalarFieldEnum | Tab_usuariosScalarFieldEnum[]
  }

  /**
   * tab_usuarios findFirstOrThrow
   */
  export type tab_usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tab_usuarios to fetch.
     */
    where?: tab_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_usuarios to fetch.
     */
    orderBy?: tab_usuariosOrderByWithRelationInput | tab_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_usuarios.
     */
    cursor?: tab_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_usuarios.
     */
    distinct?: Tab_usuariosScalarFieldEnum | Tab_usuariosScalarFieldEnum[]
  }

  /**
   * tab_usuarios findMany
   */
  export type tab_usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * Filter, which tab_usuarios to fetch.
     */
    where?: tab_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_usuarios to fetch.
     */
    orderBy?: tab_usuariosOrderByWithRelationInput | tab_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tab_usuarios.
     */
    cursor?: tab_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_usuarios.
     */
    skip?: number
    distinct?: Tab_usuariosScalarFieldEnum | Tab_usuariosScalarFieldEnum[]
  }

  /**
   * tab_usuarios create
   */
  export type tab_usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * The data needed to create a tab_usuarios.
     */
    data: XOR<tab_usuariosCreateInput, tab_usuariosUncheckedCreateInput>
  }

  /**
   * tab_usuarios createMany
   */
  export type tab_usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tab_usuarios.
     */
    data: tab_usuariosCreateManyInput | tab_usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tab_usuarios update
   */
  export type tab_usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * The data needed to update a tab_usuarios.
     */
    data: XOR<tab_usuariosUpdateInput, tab_usuariosUncheckedUpdateInput>
    /**
     * Choose, which tab_usuarios to update.
     */
    where: tab_usuariosWhereUniqueInput
  }

  /**
   * tab_usuarios updateMany
   */
  export type tab_usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tab_usuarios.
     */
    data: XOR<tab_usuariosUpdateManyMutationInput, tab_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tab_usuarios to update
     */
    where?: tab_usuariosWhereInput
    /**
     * Limit how many tab_usuarios to update.
     */
    limit?: number
  }

  /**
   * tab_usuarios upsert
   */
  export type tab_usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * The filter to search for the tab_usuarios to update in case it exists.
     */
    where: tab_usuariosWhereUniqueInput
    /**
     * In case the tab_usuarios found by the `where` argument doesn't exist, create a new tab_usuarios with this data.
     */
    create: XOR<tab_usuariosCreateInput, tab_usuariosUncheckedCreateInput>
    /**
     * In case the tab_usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tab_usuariosUpdateInput, tab_usuariosUncheckedUpdateInput>
  }

  /**
   * tab_usuarios delete
   */
  export type tab_usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
    /**
     * Filter which tab_usuarios to delete.
     */
    where: tab_usuariosWhereUniqueInput
  }

  /**
   * tab_usuarios deleteMany
   */
  export type tab_usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_usuarios to delete
     */
    where?: tab_usuariosWhereInput
    /**
     * Limit how many tab_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tab_usuarios without action
   */
  export type tab_usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_usuarios
     */
    select?: tab_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_usuarios
     */
    omit?: tab_usuariosOmit<ExtArgs> | null
  }


  /**
   * Model tab_mesas
   */

  export type AggregateTab_mesas = {
    _count: Tab_mesasCountAggregateOutputType | null
    _avg: Tab_mesasAvgAggregateOutputType | null
    _sum: Tab_mesasSumAggregateOutputType | null
    _min: Tab_mesasMinAggregateOutputType | null
    _max: Tab_mesasMaxAggregateOutputType | null
  }

  export type Tab_mesasAvgAggregateOutputType = {
    id_mesa: number | null
    numero_mesa: number | null
  }

  export type Tab_mesasSumAggregateOutputType = {
    id_mesa: number | null
    numero_mesa: number | null
  }

  export type Tab_mesasMinAggregateOutputType = {
    id_mesa: number | null
    numero_mesa: number | null
    status: $Enums.StatusMesa | null
  }

  export type Tab_mesasMaxAggregateOutputType = {
    id_mesa: number | null
    numero_mesa: number | null
    status: $Enums.StatusMesa | null
  }

  export type Tab_mesasCountAggregateOutputType = {
    id_mesa: number
    numero_mesa: number
    status: number
    _all: number
  }


  export type Tab_mesasAvgAggregateInputType = {
    id_mesa?: true
    numero_mesa?: true
  }

  export type Tab_mesasSumAggregateInputType = {
    id_mesa?: true
    numero_mesa?: true
  }

  export type Tab_mesasMinAggregateInputType = {
    id_mesa?: true
    numero_mesa?: true
    status?: true
  }

  export type Tab_mesasMaxAggregateInputType = {
    id_mesa?: true
    numero_mesa?: true
    status?: true
  }

  export type Tab_mesasCountAggregateInputType = {
    id_mesa?: true
    numero_mesa?: true
    status?: true
    _all?: true
  }

  export type Tab_mesasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_mesas to aggregate.
     */
    where?: tab_mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_mesas to fetch.
     */
    orderBy?: tab_mesasOrderByWithRelationInput | tab_mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tab_mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tab_mesas
    **/
    _count?: true | Tab_mesasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tab_mesasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tab_mesasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tab_mesasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tab_mesasMaxAggregateInputType
  }

  export type GetTab_mesasAggregateType<T extends Tab_mesasAggregateArgs> = {
        [P in keyof T & keyof AggregateTab_mesas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTab_mesas[P]>
      : GetScalarType<T[P], AggregateTab_mesas[P]>
  }




  export type tab_mesasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tab_mesasWhereInput
    orderBy?: tab_mesasOrderByWithAggregationInput | tab_mesasOrderByWithAggregationInput[]
    by: Tab_mesasScalarFieldEnum[] | Tab_mesasScalarFieldEnum
    having?: tab_mesasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tab_mesasCountAggregateInputType | true
    _avg?: Tab_mesasAvgAggregateInputType
    _sum?: Tab_mesasSumAggregateInputType
    _min?: Tab_mesasMinAggregateInputType
    _max?: Tab_mesasMaxAggregateInputType
  }

  export type Tab_mesasGroupByOutputType = {
    id_mesa: number
    numero_mesa: number
    status: $Enums.StatusMesa
    _count: Tab_mesasCountAggregateOutputType | null
    _avg: Tab_mesasAvgAggregateOutputType | null
    _sum: Tab_mesasSumAggregateOutputType | null
    _min: Tab_mesasMinAggregateOutputType | null
    _max: Tab_mesasMaxAggregateOutputType | null
  }

  type GetTab_mesasGroupByPayload<T extends tab_mesasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tab_mesasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tab_mesasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tab_mesasGroupByOutputType[P]>
            : GetScalarType<T[P], Tab_mesasGroupByOutputType[P]>
        }
      >
    >


  export type tab_mesasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mesa?: boolean
    numero_mesa?: boolean
    status?: boolean
    tab_reservas?: boolean | tab_mesas$tab_reservasArgs<ExtArgs>
    _count?: boolean | Tab_mesasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tab_mesas"]>



  export type tab_mesasSelectScalar = {
    id_mesa?: boolean
    numero_mesa?: boolean
    status?: boolean
  }

  export type tab_mesasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mesa" | "numero_mesa" | "status", ExtArgs["result"]["tab_mesas"]>
  export type tab_mesasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab_reservas?: boolean | tab_mesas$tab_reservasArgs<ExtArgs>
    _count?: boolean | Tab_mesasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tab_mesasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tab_mesas"
    objects: {
      tab_reservas: Prisma.$tab_reservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mesa: number
      numero_mesa: number
      status: $Enums.StatusMesa
    }, ExtArgs["result"]["tab_mesas"]>
    composites: {}
  }

  type tab_mesasGetPayload<S extends boolean | null | undefined | tab_mesasDefaultArgs> = $Result.GetResult<Prisma.$tab_mesasPayload, S>

  type tab_mesasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tab_mesasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tab_mesasCountAggregateInputType | true
    }

  export interface tab_mesasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tab_mesas'], meta: { name: 'tab_mesas' } }
    /**
     * Find zero or one Tab_mesas that matches the filter.
     * @param {tab_mesasFindUniqueArgs} args - Arguments to find a Tab_mesas
     * @example
     * // Get one Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tab_mesasFindUniqueArgs>(args: SelectSubset<T, tab_mesasFindUniqueArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tab_mesas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tab_mesasFindUniqueOrThrowArgs} args - Arguments to find a Tab_mesas
     * @example
     * // Get one Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tab_mesasFindUniqueOrThrowArgs>(args: SelectSubset<T, tab_mesasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_mesasFindFirstArgs} args - Arguments to find a Tab_mesas
     * @example
     * // Get one Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tab_mesasFindFirstArgs>(args?: SelectSubset<T, tab_mesasFindFirstArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_mesas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_mesasFindFirstOrThrowArgs} args - Arguments to find a Tab_mesas
     * @example
     * // Get one Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tab_mesasFindFirstOrThrowArgs>(args?: SelectSubset<T, tab_mesasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tab_mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_mesasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.findMany()
     * 
     * // Get first 10 Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.findMany({ take: 10 })
     * 
     * // Only select the `id_mesa`
     * const tab_mesasWithId_mesaOnly = await prisma.tab_mesas.findMany({ select: { id_mesa: true } })
     * 
     */
    findMany<T extends tab_mesasFindManyArgs>(args?: SelectSubset<T, tab_mesasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tab_mesas.
     * @param {tab_mesasCreateArgs} args - Arguments to create a Tab_mesas.
     * @example
     * // Create one Tab_mesas
     * const Tab_mesas = await prisma.tab_mesas.create({
     *   data: {
     *     // ... data to create a Tab_mesas
     *   }
     * })
     * 
     */
    create<T extends tab_mesasCreateArgs>(args: SelectSubset<T, tab_mesasCreateArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tab_mesas.
     * @param {tab_mesasCreateManyArgs} args - Arguments to create many Tab_mesas.
     * @example
     * // Create many Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tab_mesasCreateManyArgs>(args?: SelectSubset<T, tab_mesasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tab_mesas.
     * @param {tab_mesasDeleteArgs} args - Arguments to delete one Tab_mesas.
     * @example
     * // Delete one Tab_mesas
     * const Tab_mesas = await prisma.tab_mesas.delete({
     *   where: {
     *     // ... filter to delete one Tab_mesas
     *   }
     * })
     * 
     */
    delete<T extends tab_mesasDeleteArgs>(args: SelectSubset<T, tab_mesasDeleteArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tab_mesas.
     * @param {tab_mesasUpdateArgs} args - Arguments to update one Tab_mesas.
     * @example
     * // Update one Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tab_mesasUpdateArgs>(args: SelectSubset<T, tab_mesasUpdateArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tab_mesas.
     * @param {tab_mesasDeleteManyArgs} args - Arguments to filter Tab_mesas to delete.
     * @example
     * // Delete a few Tab_mesas
     * const { count } = await prisma.tab_mesas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tab_mesasDeleteManyArgs>(args?: SelectSubset<T, tab_mesasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tab_mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_mesasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tab_mesasUpdateManyArgs>(args: SelectSubset<T, tab_mesasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tab_mesas.
     * @param {tab_mesasUpsertArgs} args - Arguments to update or create a Tab_mesas.
     * @example
     * // Update or create a Tab_mesas
     * const tab_mesas = await prisma.tab_mesas.upsert({
     *   create: {
     *     // ... data to create a Tab_mesas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tab_mesas we want to update
     *   }
     * })
     */
    upsert<T extends tab_mesasUpsertArgs>(args: SelectSubset<T, tab_mesasUpsertArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tab_mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_mesasCountArgs} args - Arguments to filter Tab_mesas to count.
     * @example
     * // Count the number of Tab_mesas
     * const count = await prisma.tab_mesas.count({
     *   where: {
     *     // ... the filter for the Tab_mesas we want to count
     *   }
     * })
    **/
    count<T extends tab_mesasCountArgs>(
      args?: Subset<T, tab_mesasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tab_mesasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tab_mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tab_mesasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tab_mesasAggregateArgs>(args: Subset<T, Tab_mesasAggregateArgs>): Prisma.PrismaPromise<GetTab_mesasAggregateType<T>>

    /**
     * Group by Tab_mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_mesasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tab_mesasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tab_mesasGroupByArgs['orderBy'] }
        : { orderBy?: tab_mesasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tab_mesasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTab_mesasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tab_mesas model
   */
  readonly fields: tab_mesasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tab_mesas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tab_mesasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab_reservas<T extends tab_mesas$tab_reservasArgs<ExtArgs> = {}>(args?: Subset<T, tab_mesas$tab_reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tab_mesas model
   */
  interface tab_mesasFieldRefs {
    readonly id_mesa: FieldRef<"tab_mesas", 'Int'>
    readonly numero_mesa: FieldRef<"tab_mesas", 'Int'>
    readonly status: FieldRef<"tab_mesas", 'StatusMesa'>
  }
    

  // Custom InputTypes
  /**
   * tab_mesas findUnique
   */
  export type tab_mesasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * Filter, which tab_mesas to fetch.
     */
    where: tab_mesasWhereUniqueInput
  }

  /**
   * tab_mesas findUniqueOrThrow
   */
  export type tab_mesasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * Filter, which tab_mesas to fetch.
     */
    where: tab_mesasWhereUniqueInput
  }

  /**
   * tab_mesas findFirst
   */
  export type tab_mesasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * Filter, which tab_mesas to fetch.
     */
    where?: tab_mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_mesas to fetch.
     */
    orderBy?: tab_mesasOrderByWithRelationInput | tab_mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_mesas.
     */
    cursor?: tab_mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_mesas.
     */
    distinct?: Tab_mesasScalarFieldEnum | Tab_mesasScalarFieldEnum[]
  }

  /**
   * tab_mesas findFirstOrThrow
   */
  export type tab_mesasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * Filter, which tab_mesas to fetch.
     */
    where?: tab_mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_mesas to fetch.
     */
    orderBy?: tab_mesasOrderByWithRelationInput | tab_mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_mesas.
     */
    cursor?: tab_mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_mesas.
     */
    distinct?: Tab_mesasScalarFieldEnum | Tab_mesasScalarFieldEnum[]
  }

  /**
   * tab_mesas findMany
   */
  export type tab_mesasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * Filter, which tab_mesas to fetch.
     */
    where?: tab_mesasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_mesas to fetch.
     */
    orderBy?: tab_mesasOrderByWithRelationInput | tab_mesasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tab_mesas.
     */
    cursor?: tab_mesasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_mesas.
     */
    skip?: number
    distinct?: Tab_mesasScalarFieldEnum | Tab_mesasScalarFieldEnum[]
  }

  /**
   * tab_mesas create
   */
  export type tab_mesasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * The data needed to create a tab_mesas.
     */
    data: XOR<tab_mesasCreateInput, tab_mesasUncheckedCreateInput>
  }

  /**
   * tab_mesas createMany
   */
  export type tab_mesasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tab_mesas.
     */
    data: tab_mesasCreateManyInput | tab_mesasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tab_mesas update
   */
  export type tab_mesasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * The data needed to update a tab_mesas.
     */
    data: XOR<tab_mesasUpdateInput, tab_mesasUncheckedUpdateInput>
    /**
     * Choose, which tab_mesas to update.
     */
    where: tab_mesasWhereUniqueInput
  }

  /**
   * tab_mesas updateMany
   */
  export type tab_mesasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tab_mesas.
     */
    data: XOR<tab_mesasUpdateManyMutationInput, tab_mesasUncheckedUpdateManyInput>
    /**
     * Filter which tab_mesas to update
     */
    where?: tab_mesasWhereInput
    /**
     * Limit how many tab_mesas to update.
     */
    limit?: number
  }

  /**
   * tab_mesas upsert
   */
  export type tab_mesasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * The filter to search for the tab_mesas to update in case it exists.
     */
    where: tab_mesasWhereUniqueInput
    /**
     * In case the tab_mesas found by the `where` argument doesn't exist, create a new tab_mesas with this data.
     */
    create: XOR<tab_mesasCreateInput, tab_mesasUncheckedCreateInput>
    /**
     * In case the tab_mesas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tab_mesasUpdateInput, tab_mesasUncheckedUpdateInput>
  }

  /**
   * tab_mesas delete
   */
  export type tab_mesasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
    /**
     * Filter which tab_mesas to delete.
     */
    where: tab_mesasWhereUniqueInput
  }

  /**
   * tab_mesas deleteMany
   */
  export type tab_mesasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_mesas to delete
     */
    where?: tab_mesasWhereInput
    /**
     * Limit how many tab_mesas to delete.
     */
    limit?: number
  }

  /**
   * tab_mesas.tab_reservas
   */
  export type tab_mesas$tab_reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    where?: tab_reservasWhereInput
    orderBy?: tab_reservasOrderByWithRelationInput | tab_reservasOrderByWithRelationInput[]
    cursor?: tab_reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tab_reservasScalarFieldEnum | Tab_reservasScalarFieldEnum[]
  }

  /**
   * tab_mesas without action
   */
  export type tab_mesasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_mesas
     */
    select?: tab_mesasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_mesas
     */
    omit?: tab_mesasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_mesasInclude<ExtArgs> | null
  }


  /**
   * Model tab_reservas
   */

  export type AggregateTab_reservas = {
    _count: Tab_reservasCountAggregateOutputType | null
    _avg: Tab_reservasAvgAggregateOutputType | null
    _sum: Tab_reservasSumAggregateOutputType | null
    _min: Tab_reservasMinAggregateOutputType | null
    _max: Tab_reservasMaxAggregateOutputType | null
  }

  export type Tab_reservasAvgAggregateOutputType = {
    id_reservas: number | null
    id_mesa: number | null
    quantidade_pessoas: number | null
  }

  export type Tab_reservasSumAggregateOutputType = {
    id_reservas: number | null
    id_mesa: number | null
    quantidade_pessoas: number | null
  }

  export type Tab_reservasMinAggregateOutputType = {
    id_reservas: number | null
    nome_cliente: string | null
    id_mesa: number | null
    quantidade_pessoas: number | null
    data_hora_reserva: Date | null
    status: $Enums.StatusReserva | null
  }

  export type Tab_reservasMaxAggregateOutputType = {
    id_reservas: number | null
    nome_cliente: string | null
    id_mesa: number | null
    quantidade_pessoas: number | null
    data_hora_reserva: Date | null
    status: $Enums.StatusReserva | null
  }

  export type Tab_reservasCountAggregateOutputType = {
    id_reservas: number
    nome_cliente: number
    id_mesa: number
    quantidade_pessoas: number
    data_hora_reserva: number
    status: number
    _all: number
  }


  export type Tab_reservasAvgAggregateInputType = {
    id_reservas?: true
    id_mesa?: true
    quantidade_pessoas?: true
  }

  export type Tab_reservasSumAggregateInputType = {
    id_reservas?: true
    id_mesa?: true
    quantidade_pessoas?: true
  }

  export type Tab_reservasMinAggregateInputType = {
    id_reservas?: true
    nome_cliente?: true
    id_mesa?: true
    quantidade_pessoas?: true
    data_hora_reserva?: true
    status?: true
  }

  export type Tab_reservasMaxAggregateInputType = {
    id_reservas?: true
    nome_cliente?: true
    id_mesa?: true
    quantidade_pessoas?: true
    data_hora_reserva?: true
    status?: true
  }

  export type Tab_reservasCountAggregateInputType = {
    id_reservas?: true
    nome_cliente?: true
    id_mesa?: true
    quantidade_pessoas?: true
    data_hora_reserva?: true
    status?: true
    _all?: true
  }

  export type Tab_reservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_reservas to aggregate.
     */
    where?: tab_reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_reservas to fetch.
     */
    orderBy?: tab_reservasOrderByWithRelationInput | tab_reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tab_reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tab_reservas
    **/
    _count?: true | Tab_reservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tab_reservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tab_reservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tab_reservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tab_reservasMaxAggregateInputType
  }

  export type GetTab_reservasAggregateType<T extends Tab_reservasAggregateArgs> = {
        [P in keyof T & keyof AggregateTab_reservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTab_reservas[P]>
      : GetScalarType<T[P], AggregateTab_reservas[P]>
  }




  export type tab_reservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tab_reservasWhereInput
    orderBy?: tab_reservasOrderByWithAggregationInput | tab_reservasOrderByWithAggregationInput[]
    by: Tab_reservasScalarFieldEnum[] | Tab_reservasScalarFieldEnum
    having?: tab_reservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tab_reservasCountAggregateInputType | true
    _avg?: Tab_reservasAvgAggregateInputType
    _sum?: Tab_reservasSumAggregateInputType
    _min?: Tab_reservasMinAggregateInputType
    _max?: Tab_reservasMaxAggregateInputType
  }

  export type Tab_reservasGroupByOutputType = {
    id_reservas: number
    nome_cliente: string
    id_mesa: number
    quantidade_pessoas: number
    data_hora_reserva: Date
    status: $Enums.StatusReserva
    _count: Tab_reservasCountAggregateOutputType | null
    _avg: Tab_reservasAvgAggregateOutputType | null
    _sum: Tab_reservasSumAggregateOutputType | null
    _min: Tab_reservasMinAggregateOutputType | null
    _max: Tab_reservasMaxAggregateOutputType | null
  }

  type GetTab_reservasGroupByPayload<T extends tab_reservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tab_reservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tab_reservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tab_reservasGroupByOutputType[P]>
            : GetScalarType<T[P], Tab_reservasGroupByOutputType[P]>
        }
      >
    >


  export type tab_reservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reservas?: boolean
    nome_cliente?: boolean
    id_mesa?: boolean
    quantidade_pessoas?: boolean
    data_hora_reserva?: boolean
    status?: boolean
    tab_mesas?: boolean | tab_mesasDefaultArgs<ExtArgs>
    tab_relatorio?: boolean | tab_reservas$tab_relatorioArgs<ExtArgs>
    _count?: boolean | Tab_reservasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tab_reservas"]>



  export type tab_reservasSelectScalar = {
    id_reservas?: boolean
    nome_cliente?: boolean
    id_mesa?: boolean
    quantidade_pessoas?: boolean
    data_hora_reserva?: boolean
    status?: boolean
  }

  export type tab_reservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reservas" | "nome_cliente" | "id_mesa" | "quantidade_pessoas" | "data_hora_reserva" | "status", ExtArgs["result"]["tab_reservas"]>
  export type tab_reservasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab_mesas?: boolean | tab_mesasDefaultArgs<ExtArgs>
    tab_relatorio?: boolean | tab_reservas$tab_relatorioArgs<ExtArgs>
    _count?: boolean | Tab_reservasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tab_reservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tab_reservas"
    objects: {
      tab_mesas: Prisma.$tab_mesasPayload<ExtArgs>
      tab_relatorio: Prisma.$tab_relatorioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reservas: number
      nome_cliente: string
      id_mesa: number
      quantidade_pessoas: number
      data_hora_reserva: Date
      status: $Enums.StatusReserva
    }, ExtArgs["result"]["tab_reservas"]>
    composites: {}
  }

  type tab_reservasGetPayload<S extends boolean | null | undefined | tab_reservasDefaultArgs> = $Result.GetResult<Prisma.$tab_reservasPayload, S>

  type tab_reservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tab_reservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tab_reservasCountAggregateInputType | true
    }

  export interface tab_reservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tab_reservas'], meta: { name: 'tab_reservas' } }
    /**
     * Find zero or one Tab_reservas that matches the filter.
     * @param {tab_reservasFindUniqueArgs} args - Arguments to find a Tab_reservas
     * @example
     * // Get one Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tab_reservasFindUniqueArgs>(args: SelectSubset<T, tab_reservasFindUniqueArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tab_reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tab_reservasFindUniqueOrThrowArgs} args - Arguments to find a Tab_reservas
     * @example
     * // Get one Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tab_reservasFindUniqueOrThrowArgs>(args: SelectSubset<T, tab_reservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_reservasFindFirstArgs} args - Arguments to find a Tab_reservas
     * @example
     * // Get one Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tab_reservasFindFirstArgs>(args?: SelectSubset<T, tab_reservasFindFirstArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_reservasFindFirstOrThrowArgs} args - Arguments to find a Tab_reservas
     * @example
     * // Get one Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tab_reservasFindFirstOrThrowArgs>(args?: SelectSubset<T, tab_reservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tab_reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_reservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.findMany()
     * 
     * // Get first 10 Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.findMany({ take: 10 })
     * 
     * // Only select the `id_reservas`
     * const tab_reservasWithId_reservasOnly = await prisma.tab_reservas.findMany({ select: { id_reservas: true } })
     * 
     */
    findMany<T extends tab_reservasFindManyArgs>(args?: SelectSubset<T, tab_reservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tab_reservas.
     * @param {tab_reservasCreateArgs} args - Arguments to create a Tab_reservas.
     * @example
     * // Create one Tab_reservas
     * const Tab_reservas = await prisma.tab_reservas.create({
     *   data: {
     *     // ... data to create a Tab_reservas
     *   }
     * })
     * 
     */
    create<T extends tab_reservasCreateArgs>(args: SelectSubset<T, tab_reservasCreateArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tab_reservas.
     * @param {tab_reservasCreateManyArgs} args - Arguments to create many Tab_reservas.
     * @example
     * // Create many Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tab_reservasCreateManyArgs>(args?: SelectSubset<T, tab_reservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tab_reservas.
     * @param {tab_reservasDeleteArgs} args - Arguments to delete one Tab_reservas.
     * @example
     * // Delete one Tab_reservas
     * const Tab_reservas = await prisma.tab_reservas.delete({
     *   where: {
     *     // ... filter to delete one Tab_reservas
     *   }
     * })
     * 
     */
    delete<T extends tab_reservasDeleteArgs>(args: SelectSubset<T, tab_reservasDeleteArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tab_reservas.
     * @param {tab_reservasUpdateArgs} args - Arguments to update one Tab_reservas.
     * @example
     * // Update one Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tab_reservasUpdateArgs>(args: SelectSubset<T, tab_reservasUpdateArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tab_reservas.
     * @param {tab_reservasDeleteManyArgs} args - Arguments to filter Tab_reservas to delete.
     * @example
     * // Delete a few Tab_reservas
     * const { count } = await prisma.tab_reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tab_reservasDeleteManyArgs>(args?: SelectSubset<T, tab_reservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tab_reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_reservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tab_reservasUpdateManyArgs>(args: SelectSubset<T, tab_reservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tab_reservas.
     * @param {tab_reservasUpsertArgs} args - Arguments to update or create a Tab_reservas.
     * @example
     * // Update or create a Tab_reservas
     * const tab_reservas = await prisma.tab_reservas.upsert({
     *   create: {
     *     // ... data to create a Tab_reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tab_reservas we want to update
     *   }
     * })
     */
    upsert<T extends tab_reservasUpsertArgs>(args: SelectSubset<T, tab_reservasUpsertArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tab_reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_reservasCountArgs} args - Arguments to filter Tab_reservas to count.
     * @example
     * // Count the number of Tab_reservas
     * const count = await prisma.tab_reservas.count({
     *   where: {
     *     // ... the filter for the Tab_reservas we want to count
     *   }
     * })
    **/
    count<T extends tab_reservasCountArgs>(
      args?: Subset<T, tab_reservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tab_reservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tab_reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tab_reservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tab_reservasAggregateArgs>(args: Subset<T, Tab_reservasAggregateArgs>): Prisma.PrismaPromise<GetTab_reservasAggregateType<T>>

    /**
     * Group by Tab_reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_reservasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tab_reservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tab_reservasGroupByArgs['orderBy'] }
        : { orderBy?: tab_reservasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tab_reservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTab_reservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tab_reservas model
   */
  readonly fields: tab_reservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tab_reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tab_reservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab_mesas<T extends tab_mesasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tab_mesasDefaultArgs<ExtArgs>>): Prisma__tab_mesasClient<$Result.GetResult<Prisma.$tab_mesasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tab_relatorio<T extends tab_reservas$tab_relatorioArgs<ExtArgs> = {}>(args?: Subset<T, tab_reservas$tab_relatorioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tab_reservas model
   */
  interface tab_reservasFieldRefs {
    readonly id_reservas: FieldRef<"tab_reservas", 'Int'>
    readonly nome_cliente: FieldRef<"tab_reservas", 'String'>
    readonly id_mesa: FieldRef<"tab_reservas", 'Int'>
    readonly quantidade_pessoas: FieldRef<"tab_reservas", 'Int'>
    readonly data_hora_reserva: FieldRef<"tab_reservas", 'DateTime'>
    readonly status: FieldRef<"tab_reservas", 'StatusReserva'>
  }
    

  // Custom InputTypes
  /**
   * tab_reservas findUnique
   */
  export type tab_reservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * Filter, which tab_reservas to fetch.
     */
    where: tab_reservasWhereUniqueInput
  }

  /**
   * tab_reservas findUniqueOrThrow
   */
  export type tab_reservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * Filter, which tab_reservas to fetch.
     */
    where: tab_reservasWhereUniqueInput
  }

  /**
   * tab_reservas findFirst
   */
  export type tab_reservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * Filter, which tab_reservas to fetch.
     */
    where?: tab_reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_reservas to fetch.
     */
    orderBy?: tab_reservasOrderByWithRelationInput | tab_reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_reservas.
     */
    cursor?: tab_reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_reservas.
     */
    distinct?: Tab_reservasScalarFieldEnum | Tab_reservasScalarFieldEnum[]
  }

  /**
   * tab_reservas findFirstOrThrow
   */
  export type tab_reservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * Filter, which tab_reservas to fetch.
     */
    where?: tab_reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_reservas to fetch.
     */
    orderBy?: tab_reservasOrderByWithRelationInput | tab_reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_reservas.
     */
    cursor?: tab_reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_reservas.
     */
    distinct?: Tab_reservasScalarFieldEnum | Tab_reservasScalarFieldEnum[]
  }

  /**
   * tab_reservas findMany
   */
  export type tab_reservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * Filter, which tab_reservas to fetch.
     */
    where?: tab_reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_reservas to fetch.
     */
    orderBy?: tab_reservasOrderByWithRelationInput | tab_reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tab_reservas.
     */
    cursor?: tab_reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_reservas.
     */
    skip?: number
    distinct?: Tab_reservasScalarFieldEnum | Tab_reservasScalarFieldEnum[]
  }

  /**
   * tab_reservas create
   */
  export type tab_reservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * The data needed to create a tab_reservas.
     */
    data: XOR<tab_reservasCreateInput, tab_reservasUncheckedCreateInput>
  }

  /**
   * tab_reservas createMany
   */
  export type tab_reservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tab_reservas.
     */
    data: tab_reservasCreateManyInput | tab_reservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tab_reservas update
   */
  export type tab_reservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * The data needed to update a tab_reservas.
     */
    data: XOR<tab_reservasUpdateInput, tab_reservasUncheckedUpdateInput>
    /**
     * Choose, which tab_reservas to update.
     */
    where: tab_reservasWhereUniqueInput
  }

  /**
   * tab_reservas updateMany
   */
  export type tab_reservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tab_reservas.
     */
    data: XOR<tab_reservasUpdateManyMutationInput, tab_reservasUncheckedUpdateManyInput>
    /**
     * Filter which tab_reservas to update
     */
    where?: tab_reservasWhereInput
    /**
     * Limit how many tab_reservas to update.
     */
    limit?: number
  }

  /**
   * tab_reservas upsert
   */
  export type tab_reservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * The filter to search for the tab_reservas to update in case it exists.
     */
    where: tab_reservasWhereUniqueInput
    /**
     * In case the tab_reservas found by the `where` argument doesn't exist, create a new tab_reservas with this data.
     */
    create: XOR<tab_reservasCreateInput, tab_reservasUncheckedCreateInput>
    /**
     * In case the tab_reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tab_reservasUpdateInput, tab_reservasUncheckedUpdateInput>
  }

  /**
   * tab_reservas delete
   */
  export type tab_reservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
    /**
     * Filter which tab_reservas to delete.
     */
    where: tab_reservasWhereUniqueInput
  }

  /**
   * tab_reservas deleteMany
   */
  export type tab_reservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_reservas to delete
     */
    where?: tab_reservasWhereInput
    /**
     * Limit how many tab_reservas to delete.
     */
    limit?: number
  }

  /**
   * tab_reservas.tab_relatorio
   */
  export type tab_reservas$tab_relatorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    where?: tab_relatorioWhereInput
    orderBy?: tab_relatorioOrderByWithRelationInput | tab_relatorioOrderByWithRelationInput[]
    cursor?: tab_relatorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tab_relatorioScalarFieldEnum | Tab_relatorioScalarFieldEnum[]
  }

  /**
   * tab_reservas without action
   */
  export type tab_reservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_reservas
     */
    select?: tab_reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_reservas
     */
    omit?: tab_reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_reservasInclude<ExtArgs> | null
  }


  /**
   * Model tab_relatorio
   */

  export type AggregateTab_relatorio = {
    _count: Tab_relatorioCountAggregateOutputType | null
    _avg: Tab_relatorioAvgAggregateOutputType | null
    _sum: Tab_relatorioSumAggregateOutputType | null
    _min: Tab_relatorioMinAggregateOutputType | null
    _max: Tab_relatorioMaxAggregateOutputType | null
  }

  export type Tab_relatorioAvgAggregateOutputType = {
    id_relatorio: number | null
    id_reservas: number | null
  }

  export type Tab_relatorioSumAggregateOutputType = {
    id_relatorio: number | null
    id_reservas: number | null
  }

  export type Tab_relatorioMinAggregateOutputType = {
    id_relatorio: number | null
    id_reservas: number | null
  }

  export type Tab_relatorioMaxAggregateOutputType = {
    id_relatorio: number | null
    id_reservas: number | null
  }

  export type Tab_relatorioCountAggregateOutputType = {
    id_relatorio: number
    id_reservas: number
    _all: number
  }


  export type Tab_relatorioAvgAggregateInputType = {
    id_relatorio?: true
    id_reservas?: true
  }

  export type Tab_relatorioSumAggregateInputType = {
    id_relatorio?: true
    id_reservas?: true
  }

  export type Tab_relatorioMinAggregateInputType = {
    id_relatorio?: true
    id_reservas?: true
  }

  export type Tab_relatorioMaxAggregateInputType = {
    id_relatorio?: true
    id_reservas?: true
  }

  export type Tab_relatorioCountAggregateInputType = {
    id_relatorio?: true
    id_reservas?: true
    _all?: true
  }

  export type Tab_relatorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_relatorio to aggregate.
     */
    where?: tab_relatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_relatorios to fetch.
     */
    orderBy?: tab_relatorioOrderByWithRelationInput | tab_relatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tab_relatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tab_relatorios
    **/
    _count?: true | Tab_relatorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tab_relatorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tab_relatorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tab_relatorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tab_relatorioMaxAggregateInputType
  }

  export type GetTab_relatorioAggregateType<T extends Tab_relatorioAggregateArgs> = {
        [P in keyof T & keyof AggregateTab_relatorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTab_relatorio[P]>
      : GetScalarType<T[P], AggregateTab_relatorio[P]>
  }




  export type tab_relatorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tab_relatorioWhereInput
    orderBy?: tab_relatorioOrderByWithAggregationInput | tab_relatorioOrderByWithAggregationInput[]
    by: Tab_relatorioScalarFieldEnum[] | Tab_relatorioScalarFieldEnum
    having?: tab_relatorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tab_relatorioCountAggregateInputType | true
    _avg?: Tab_relatorioAvgAggregateInputType
    _sum?: Tab_relatorioSumAggregateInputType
    _min?: Tab_relatorioMinAggregateInputType
    _max?: Tab_relatorioMaxAggregateInputType
  }

  export type Tab_relatorioGroupByOutputType = {
    id_relatorio: number
    id_reservas: number
    _count: Tab_relatorioCountAggregateOutputType | null
    _avg: Tab_relatorioAvgAggregateOutputType | null
    _sum: Tab_relatorioSumAggregateOutputType | null
    _min: Tab_relatorioMinAggregateOutputType | null
    _max: Tab_relatorioMaxAggregateOutputType | null
  }

  type GetTab_relatorioGroupByPayload<T extends tab_relatorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tab_relatorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tab_relatorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tab_relatorioGroupByOutputType[P]>
            : GetScalarType<T[P], Tab_relatorioGroupByOutputType[P]>
        }
      >
    >


  export type tab_relatorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_relatorio?: boolean
    id_reservas?: boolean
    tab_reservas?: boolean | tab_reservasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tab_relatorio"]>



  export type tab_relatorioSelectScalar = {
    id_relatorio?: boolean
    id_reservas?: boolean
  }

  export type tab_relatorioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_relatorio" | "id_reservas", ExtArgs["result"]["tab_relatorio"]>
  export type tab_relatorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab_reservas?: boolean | tab_reservasDefaultArgs<ExtArgs>
  }

  export type $tab_relatorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tab_relatorio"
    objects: {
      tab_reservas: Prisma.$tab_reservasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_relatorio: number
      id_reservas: number
    }, ExtArgs["result"]["tab_relatorio"]>
    composites: {}
  }

  type tab_relatorioGetPayload<S extends boolean | null | undefined | tab_relatorioDefaultArgs> = $Result.GetResult<Prisma.$tab_relatorioPayload, S>

  type tab_relatorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tab_relatorioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tab_relatorioCountAggregateInputType | true
    }

  export interface tab_relatorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tab_relatorio'], meta: { name: 'tab_relatorio' } }
    /**
     * Find zero or one Tab_relatorio that matches the filter.
     * @param {tab_relatorioFindUniqueArgs} args - Arguments to find a Tab_relatorio
     * @example
     * // Get one Tab_relatorio
     * const tab_relatorio = await prisma.tab_relatorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tab_relatorioFindUniqueArgs>(args: SelectSubset<T, tab_relatorioFindUniqueArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tab_relatorio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tab_relatorioFindUniqueOrThrowArgs} args - Arguments to find a Tab_relatorio
     * @example
     * // Get one Tab_relatorio
     * const tab_relatorio = await prisma.tab_relatorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tab_relatorioFindUniqueOrThrowArgs>(args: SelectSubset<T, tab_relatorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_relatorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_relatorioFindFirstArgs} args - Arguments to find a Tab_relatorio
     * @example
     * // Get one Tab_relatorio
     * const tab_relatorio = await prisma.tab_relatorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tab_relatorioFindFirstArgs>(args?: SelectSubset<T, tab_relatorioFindFirstArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab_relatorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_relatorioFindFirstOrThrowArgs} args - Arguments to find a Tab_relatorio
     * @example
     * // Get one Tab_relatorio
     * const tab_relatorio = await prisma.tab_relatorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tab_relatorioFindFirstOrThrowArgs>(args?: SelectSubset<T, tab_relatorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tab_relatorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_relatorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tab_relatorios
     * const tab_relatorios = await prisma.tab_relatorio.findMany()
     * 
     * // Get first 10 Tab_relatorios
     * const tab_relatorios = await prisma.tab_relatorio.findMany({ take: 10 })
     * 
     * // Only select the `id_relatorio`
     * const tab_relatorioWithId_relatorioOnly = await prisma.tab_relatorio.findMany({ select: { id_relatorio: true } })
     * 
     */
    findMany<T extends tab_relatorioFindManyArgs>(args?: SelectSubset<T, tab_relatorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tab_relatorio.
     * @param {tab_relatorioCreateArgs} args - Arguments to create a Tab_relatorio.
     * @example
     * // Create one Tab_relatorio
     * const Tab_relatorio = await prisma.tab_relatorio.create({
     *   data: {
     *     // ... data to create a Tab_relatorio
     *   }
     * })
     * 
     */
    create<T extends tab_relatorioCreateArgs>(args: SelectSubset<T, tab_relatorioCreateArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tab_relatorios.
     * @param {tab_relatorioCreateManyArgs} args - Arguments to create many Tab_relatorios.
     * @example
     * // Create many Tab_relatorios
     * const tab_relatorio = await prisma.tab_relatorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tab_relatorioCreateManyArgs>(args?: SelectSubset<T, tab_relatorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tab_relatorio.
     * @param {tab_relatorioDeleteArgs} args - Arguments to delete one Tab_relatorio.
     * @example
     * // Delete one Tab_relatorio
     * const Tab_relatorio = await prisma.tab_relatorio.delete({
     *   where: {
     *     // ... filter to delete one Tab_relatorio
     *   }
     * })
     * 
     */
    delete<T extends tab_relatorioDeleteArgs>(args: SelectSubset<T, tab_relatorioDeleteArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tab_relatorio.
     * @param {tab_relatorioUpdateArgs} args - Arguments to update one Tab_relatorio.
     * @example
     * // Update one Tab_relatorio
     * const tab_relatorio = await prisma.tab_relatorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tab_relatorioUpdateArgs>(args: SelectSubset<T, tab_relatorioUpdateArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tab_relatorios.
     * @param {tab_relatorioDeleteManyArgs} args - Arguments to filter Tab_relatorios to delete.
     * @example
     * // Delete a few Tab_relatorios
     * const { count } = await prisma.tab_relatorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tab_relatorioDeleteManyArgs>(args?: SelectSubset<T, tab_relatorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tab_relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_relatorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tab_relatorios
     * const tab_relatorio = await prisma.tab_relatorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tab_relatorioUpdateManyArgs>(args: SelectSubset<T, tab_relatorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tab_relatorio.
     * @param {tab_relatorioUpsertArgs} args - Arguments to update or create a Tab_relatorio.
     * @example
     * // Update or create a Tab_relatorio
     * const tab_relatorio = await prisma.tab_relatorio.upsert({
     *   create: {
     *     // ... data to create a Tab_relatorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tab_relatorio we want to update
     *   }
     * })
     */
    upsert<T extends tab_relatorioUpsertArgs>(args: SelectSubset<T, tab_relatorioUpsertArgs<ExtArgs>>): Prisma__tab_relatorioClient<$Result.GetResult<Prisma.$tab_relatorioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tab_relatorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_relatorioCountArgs} args - Arguments to filter Tab_relatorios to count.
     * @example
     * // Count the number of Tab_relatorios
     * const count = await prisma.tab_relatorio.count({
     *   where: {
     *     // ... the filter for the Tab_relatorios we want to count
     *   }
     * })
    **/
    count<T extends tab_relatorioCountArgs>(
      args?: Subset<T, tab_relatorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tab_relatorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tab_relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tab_relatorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tab_relatorioAggregateArgs>(args: Subset<T, Tab_relatorioAggregateArgs>): Prisma.PrismaPromise<GetTab_relatorioAggregateType<T>>

    /**
     * Group by Tab_relatorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tab_relatorioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tab_relatorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tab_relatorioGroupByArgs['orderBy'] }
        : { orderBy?: tab_relatorioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tab_relatorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTab_relatorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tab_relatorio model
   */
  readonly fields: tab_relatorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tab_relatorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tab_relatorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab_reservas<T extends tab_reservasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tab_reservasDefaultArgs<ExtArgs>>): Prisma__tab_reservasClient<$Result.GetResult<Prisma.$tab_reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tab_relatorio model
   */
  interface tab_relatorioFieldRefs {
    readonly id_relatorio: FieldRef<"tab_relatorio", 'Int'>
    readonly id_reservas: FieldRef<"tab_relatorio", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tab_relatorio findUnique
   */
  export type tab_relatorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * Filter, which tab_relatorio to fetch.
     */
    where: tab_relatorioWhereUniqueInput
  }

  /**
   * tab_relatorio findUniqueOrThrow
   */
  export type tab_relatorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * Filter, which tab_relatorio to fetch.
     */
    where: tab_relatorioWhereUniqueInput
  }

  /**
   * tab_relatorio findFirst
   */
  export type tab_relatorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * Filter, which tab_relatorio to fetch.
     */
    where?: tab_relatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_relatorios to fetch.
     */
    orderBy?: tab_relatorioOrderByWithRelationInput | tab_relatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_relatorios.
     */
    cursor?: tab_relatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_relatorios.
     */
    distinct?: Tab_relatorioScalarFieldEnum | Tab_relatorioScalarFieldEnum[]
  }

  /**
   * tab_relatorio findFirstOrThrow
   */
  export type tab_relatorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * Filter, which tab_relatorio to fetch.
     */
    where?: tab_relatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_relatorios to fetch.
     */
    orderBy?: tab_relatorioOrderByWithRelationInput | tab_relatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tab_relatorios.
     */
    cursor?: tab_relatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_relatorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tab_relatorios.
     */
    distinct?: Tab_relatorioScalarFieldEnum | Tab_relatorioScalarFieldEnum[]
  }

  /**
   * tab_relatorio findMany
   */
  export type tab_relatorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * Filter, which tab_relatorios to fetch.
     */
    where?: tab_relatorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tab_relatorios to fetch.
     */
    orderBy?: tab_relatorioOrderByWithRelationInput | tab_relatorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tab_relatorios.
     */
    cursor?: tab_relatorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tab_relatorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tab_relatorios.
     */
    skip?: number
    distinct?: Tab_relatorioScalarFieldEnum | Tab_relatorioScalarFieldEnum[]
  }

  /**
   * tab_relatorio create
   */
  export type tab_relatorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * The data needed to create a tab_relatorio.
     */
    data: XOR<tab_relatorioCreateInput, tab_relatorioUncheckedCreateInput>
  }

  /**
   * tab_relatorio createMany
   */
  export type tab_relatorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tab_relatorios.
     */
    data: tab_relatorioCreateManyInput | tab_relatorioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tab_relatorio update
   */
  export type tab_relatorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * The data needed to update a tab_relatorio.
     */
    data: XOR<tab_relatorioUpdateInput, tab_relatorioUncheckedUpdateInput>
    /**
     * Choose, which tab_relatorio to update.
     */
    where: tab_relatorioWhereUniqueInput
  }

  /**
   * tab_relatorio updateMany
   */
  export type tab_relatorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tab_relatorios.
     */
    data: XOR<tab_relatorioUpdateManyMutationInput, tab_relatorioUncheckedUpdateManyInput>
    /**
     * Filter which tab_relatorios to update
     */
    where?: tab_relatorioWhereInput
    /**
     * Limit how many tab_relatorios to update.
     */
    limit?: number
  }

  /**
   * tab_relatorio upsert
   */
  export type tab_relatorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * The filter to search for the tab_relatorio to update in case it exists.
     */
    where: tab_relatorioWhereUniqueInput
    /**
     * In case the tab_relatorio found by the `where` argument doesn't exist, create a new tab_relatorio with this data.
     */
    create: XOR<tab_relatorioCreateInput, tab_relatorioUncheckedCreateInput>
    /**
     * In case the tab_relatorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tab_relatorioUpdateInput, tab_relatorioUncheckedUpdateInput>
  }

  /**
   * tab_relatorio delete
   */
  export type tab_relatorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
    /**
     * Filter which tab_relatorio to delete.
     */
    where: tab_relatorioWhereUniqueInput
  }

  /**
   * tab_relatorio deleteMany
   */
  export type tab_relatorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tab_relatorios to delete
     */
    where?: tab_relatorioWhereInput
    /**
     * Limit how many tab_relatorios to delete.
     */
    limit?: number
  }

  /**
   * tab_relatorio without action
   */
  export type tab_relatorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tab_relatorio
     */
    select?: tab_relatorioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tab_relatorio
     */
    omit?: tab_relatorioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tab_relatorioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tab_usuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    usuario: 'usuario',
    login: 'login',
    senha: 'senha'
  };

  export type Tab_usuariosScalarFieldEnum = (typeof Tab_usuariosScalarFieldEnum)[keyof typeof Tab_usuariosScalarFieldEnum]


  export const Tab_mesasScalarFieldEnum: {
    id_mesa: 'id_mesa',
    numero_mesa: 'numero_mesa',
    status: 'status'
  };

  export type Tab_mesasScalarFieldEnum = (typeof Tab_mesasScalarFieldEnum)[keyof typeof Tab_mesasScalarFieldEnum]


  export const Tab_reservasScalarFieldEnum: {
    id_reservas: 'id_reservas',
    nome_cliente: 'nome_cliente',
    id_mesa: 'id_mesa',
    quantidade_pessoas: 'quantidade_pessoas',
    data_hora_reserva: 'data_hora_reserva',
    status: 'status'
  };

  export type Tab_reservasScalarFieldEnum = (typeof Tab_reservasScalarFieldEnum)[keyof typeof Tab_reservasScalarFieldEnum]


  export const Tab_relatorioScalarFieldEnum: {
    id_relatorio: 'id_relatorio',
    id_reservas: 'id_reservas'
  };

  export type Tab_relatorioScalarFieldEnum = (typeof Tab_relatorioScalarFieldEnum)[keyof typeof Tab_relatorioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const tab_usuariosOrderByRelevanceFieldEnum: {
    usuario: 'usuario',
    login: 'login',
    senha: 'senha'
  };

  export type tab_usuariosOrderByRelevanceFieldEnum = (typeof tab_usuariosOrderByRelevanceFieldEnum)[keyof typeof tab_usuariosOrderByRelevanceFieldEnum]


  export const tab_reservasOrderByRelevanceFieldEnum: {
    nome_cliente: 'nome_cliente'
  };

  export type tab_reservasOrderByRelevanceFieldEnum = (typeof tab_reservasOrderByRelevanceFieldEnum)[keyof typeof tab_reservasOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'StatusMesa'
   */
  export type EnumStatusMesaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusMesa'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StatusReserva'
   */
  export type EnumStatusReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusReserva'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tab_usuariosWhereInput = {
    AND?: tab_usuariosWhereInput | tab_usuariosWhereInput[]
    OR?: tab_usuariosWhereInput[]
    NOT?: tab_usuariosWhereInput | tab_usuariosWhereInput[]
    id_usuario?: IntFilter<"tab_usuarios"> | number
    usuario?: StringFilter<"tab_usuarios"> | string
    login?: StringFilter<"tab_usuarios"> | string
    senha?: StringFilter<"tab_usuarios"> | string
  }

  export type tab_usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    _relevance?: tab_usuariosOrderByRelevanceInput
  }

  export type tab_usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: number
    AND?: tab_usuariosWhereInput | tab_usuariosWhereInput[]
    OR?: tab_usuariosWhereInput[]
    NOT?: tab_usuariosWhereInput | tab_usuariosWhereInput[]
    usuario?: StringFilter<"tab_usuarios"> | string
    login?: StringFilter<"tab_usuarios"> | string
    senha?: StringFilter<"tab_usuarios"> | string
  }, "id_usuario">

  export type tab_usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    login?: SortOrder
    senha?: SortOrder
    _count?: tab_usuariosCountOrderByAggregateInput
    _avg?: tab_usuariosAvgOrderByAggregateInput
    _max?: tab_usuariosMaxOrderByAggregateInput
    _min?: tab_usuariosMinOrderByAggregateInput
    _sum?: tab_usuariosSumOrderByAggregateInput
  }

  export type tab_usuariosScalarWhereWithAggregatesInput = {
    AND?: tab_usuariosScalarWhereWithAggregatesInput | tab_usuariosScalarWhereWithAggregatesInput[]
    OR?: tab_usuariosScalarWhereWithAggregatesInput[]
    NOT?: tab_usuariosScalarWhereWithAggregatesInput | tab_usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: IntWithAggregatesFilter<"tab_usuarios"> | number
    usuario?: StringWithAggregatesFilter<"tab_usuarios"> | string
    login?: StringWithAggregatesFilter<"tab_usuarios"> | string
    senha?: StringWithAggregatesFilter<"tab_usuarios"> | string
  }

  export type tab_mesasWhereInput = {
    AND?: tab_mesasWhereInput | tab_mesasWhereInput[]
    OR?: tab_mesasWhereInput[]
    NOT?: tab_mesasWhereInput | tab_mesasWhereInput[]
    id_mesa?: IntFilter<"tab_mesas"> | number
    numero_mesa?: IntFilter<"tab_mesas"> | number
    status?: EnumStatusMesaFilter<"tab_mesas"> | $Enums.StatusMesa
    tab_reservas?: Tab_reservasListRelationFilter
  }

  export type tab_mesasOrderByWithRelationInput = {
    id_mesa?: SortOrder
    numero_mesa?: SortOrder
    status?: SortOrder
    tab_reservas?: tab_reservasOrderByRelationAggregateInput
  }

  export type tab_mesasWhereUniqueInput = Prisma.AtLeast<{
    id_mesa?: number
    numero_mesa?: number
    AND?: tab_mesasWhereInput | tab_mesasWhereInput[]
    OR?: tab_mesasWhereInput[]
    NOT?: tab_mesasWhereInput | tab_mesasWhereInput[]
    status?: EnumStatusMesaFilter<"tab_mesas"> | $Enums.StatusMesa
    tab_reservas?: Tab_reservasListRelationFilter
  }, "id_mesa" | "numero_mesa">

  export type tab_mesasOrderByWithAggregationInput = {
    id_mesa?: SortOrder
    numero_mesa?: SortOrder
    status?: SortOrder
    _count?: tab_mesasCountOrderByAggregateInput
    _avg?: tab_mesasAvgOrderByAggregateInput
    _max?: tab_mesasMaxOrderByAggregateInput
    _min?: tab_mesasMinOrderByAggregateInput
    _sum?: tab_mesasSumOrderByAggregateInput
  }

  export type tab_mesasScalarWhereWithAggregatesInput = {
    AND?: tab_mesasScalarWhereWithAggregatesInput | tab_mesasScalarWhereWithAggregatesInput[]
    OR?: tab_mesasScalarWhereWithAggregatesInput[]
    NOT?: tab_mesasScalarWhereWithAggregatesInput | tab_mesasScalarWhereWithAggregatesInput[]
    id_mesa?: IntWithAggregatesFilter<"tab_mesas"> | number
    numero_mesa?: IntWithAggregatesFilter<"tab_mesas"> | number
    status?: EnumStatusMesaWithAggregatesFilter<"tab_mesas"> | $Enums.StatusMesa
  }

  export type tab_reservasWhereInput = {
    AND?: tab_reservasWhereInput | tab_reservasWhereInput[]
    OR?: tab_reservasWhereInput[]
    NOT?: tab_reservasWhereInput | tab_reservasWhereInput[]
    id_reservas?: IntFilter<"tab_reservas"> | number
    nome_cliente?: StringFilter<"tab_reservas"> | string
    id_mesa?: IntFilter<"tab_reservas"> | number
    quantidade_pessoas?: IntFilter<"tab_reservas"> | number
    data_hora_reserva?: DateTimeFilter<"tab_reservas"> | Date | string
    status?: EnumStatusReservaFilter<"tab_reservas"> | $Enums.StatusReserva
    tab_mesas?: XOR<Tab_mesasScalarRelationFilter, tab_mesasWhereInput>
    tab_relatorio?: Tab_relatorioListRelationFilter
  }

  export type tab_reservasOrderByWithRelationInput = {
    id_reservas?: SortOrder
    nome_cliente?: SortOrder
    id_mesa?: SortOrder
    quantidade_pessoas?: SortOrder
    data_hora_reserva?: SortOrder
    status?: SortOrder
    tab_mesas?: tab_mesasOrderByWithRelationInput
    tab_relatorio?: tab_relatorioOrderByRelationAggregateInput
    _relevance?: tab_reservasOrderByRelevanceInput
  }

  export type tab_reservasWhereUniqueInput = Prisma.AtLeast<{
    id_reservas?: number
    AND?: tab_reservasWhereInput | tab_reservasWhereInput[]
    OR?: tab_reservasWhereInput[]
    NOT?: tab_reservasWhereInput | tab_reservasWhereInput[]
    nome_cliente?: StringFilter<"tab_reservas"> | string
    id_mesa?: IntFilter<"tab_reservas"> | number
    quantidade_pessoas?: IntFilter<"tab_reservas"> | number
    data_hora_reserva?: DateTimeFilter<"tab_reservas"> | Date | string
    status?: EnumStatusReservaFilter<"tab_reservas"> | $Enums.StatusReserva
    tab_mesas?: XOR<Tab_mesasScalarRelationFilter, tab_mesasWhereInput>
    tab_relatorio?: Tab_relatorioListRelationFilter
  }, "id_reservas">

  export type tab_reservasOrderByWithAggregationInput = {
    id_reservas?: SortOrder
    nome_cliente?: SortOrder
    id_mesa?: SortOrder
    quantidade_pessoas?: SortOrder
    data_hora_reserva?: SortOrder
    status?: SortOrder
    _count?: tab_reservasCountOrderByAggregateInput
    _avg?: tab_reservasAvgOrderByAggregateInput
    _max?: tab_reservasMaxOrderByAggregateInput
    _min?: tab_reservasMinOrderByAggregateInput
    _sum?: tab_reservasSumOrderByAggregateInput
  }

  export type tab_reservasScalarWhereWithAggregatesInput = {
    AND?: tab_reservasScalarWhereWithAggregatesInput | tab_reservasScalarWhereWithAggregatesInput[]
    OR?: tab_reservasScalarWhereWithAggregatesInput[]
    NOT?: tab_reservasScalarWhereWithAggregatesInput | tab_reservasScalarWhereWithAggregatesInput[]
    id_reservas?: IntWithAggregatesFilter<"tab_reservas"> | number
    nome_cliente?: StringWithAggregatesFilter<"tab_reservas"> | string
    id_mesa?: IntWithAggregatesFilter<"tab_reservas"> | number
    quantidade_pessoas?: IntWithAggregatesFilter<"tab_reservas"> | number
    data_hora_reserva?: DateTimeWithAggregatesFilter<"tab_reservas"> | Date | string
    status?: EnumStatusReservaWithAggregatesFilter<"tab_reservas"> | $Enums.StatusReserva
  }

  export type tab_relatorioWhereInput = {
    AND?: tab_relatorioWhereInput | tab_relatorioWhereInput[]
    OR?: tab_relatorioWhereInput[]
    NOT?: tab_relatorioWhereInput | tab_relatorioWhereInput[]
    id_relatorio?: IntFilter<"tab_relatorio"> | number
    id_reservas?: IntFilter<"tab_relatorio"> | number
    tab_reservas?: XOR<Tab_reservasScalarRelationFilter, tab_reservasWhereInput>
  }

  export type tab_relatorioOrderByWithRelationInput = {
    id_relatorio?: SortOrder
    id_reservas?: SortOrder
    tab_reservas?: tab_reservasOrderByWithRelationInput
  }

  export type tab_relatorioWhereUniqueInput = Prisma.AtLeast<{
    id_relatorio?: number
    AND?: tab_relatorioWhereInput | tab_relatorioWhereInput[]
    OR?: tab_relatorioWhereInput[]
    NOT?: tab_relatorioWhereInput | tab_relatorioWhereInput[]
    id_reservas?: IntFilter<"tab_relatorio"> | number
    tab_reservas?: XOR<Tab_reservasScalarRelationFilter, tab_reservasWhereInput>
  }, "id_relatorio">

  export type tab_relatorioOrderByWithAggregationInput = {
    id_relatorio?: SortOrder
    id_reservas?: SortOrder
    _count?: tab_relatorioCountOrderByAggregateInput
    _avg?: tab_relatorioAvgOrderByAggregateInput
    _max?: tab_relatorioMaxOrderByAggregateInput
    _min?: tab_relatorioMinOrderByAggregateInput
    _sum?: tab_relatorioSumOrderByAggregateInput
  }

  export type tab_relatorioScalarWhereWithAggregatesInput = {
    AND?: tab_relatorioScalarWhereWithAggregatesInput | tab_relatorioScalarWhereWithAggregatesInput[]
    OR?: tab_relatorioScalarWhereWithAggregatesInput[]
    NOT?: tab_relatorioScalarWhereWithAggregatesInput | tab_relatorioScalarWhereWithAggregatesInput[]
    id_relatorio?: IntWithAggregatesFilter<"tab_relatorio"> | number
    id_reservas?: IntWithAggregatesFilter<"tab_relatorio"> | number
  }

  export type tab_usuariosCreateInput = {
    usuario: string
    login: string
    senha: string
  }

  export type tab_usuariosUncheckedCreateInput = {
    id_usuario?: number
    usuario: string
    login: string
    senha: string
  }

  export type tab_usuariosUpdateInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type tab_usuariosUncheckedUpdateInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type tab_usuariosCreateManyInput = {
    id_usuario?: number
    usuario: string
    login: string
    senha: string
  }

  export type tab_usuariosUpdateManyMutationInput = {
    usuario?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type tab_usuariosUncheckedUpdateManyInput = {
    id_usuario?: IntFieldUpdateOperationsInput | number
    usuario?: StringFieldUpdateOperationsInput | string
    login?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type tab_mesasCreateInput = {
    numero_mesa: number
    status: $Enums.StatusMesa
    tab_reservas?: tab_reservasCreateNestedManyWithoutTab_mesasInput
  }

  export type tab_mesasUncheckedCreateInput = {
    id_mesa?: number
    numero_mesa: number
    status: $Enums.StatusMesa
    tab_reservas?: tab_reservasUncheckedCreateNestedManyWithoutTab_mesasInput
  }

  export type tab_mesasUpdateInput = {
    numero_mesa?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusMesaFieldUpdateOperationsInput | $Enums.StatusMesa
    tab_reservas?: tab_reservasUpdateManyWithoutTab_mesasNestedInput
  }

  export type tab_mesasUncheckedUpdateInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    numero_mesa?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusMesaFieldUpdateOperationsInput | $Enums.StatusMesa
    tab_reservas?: tab_reservasUncheckedUpdateManyWithoutTab_mesasNestedInput
  }

  export type tab_mesasCreateManyInput = {
    id_mesa?: number
    numero_mesa: number
    status: $Enums.StatusMesa
  }

  export type tab_mesasUpdateManyMutationInput = {
    numero_mesa?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusMesaFieldUpdateOperationsInput | $Enums.StatusMesa
  }

  export type tab_mesasUncheckedUpdateManyInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    numero_mesa?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusMesaFieldUpdateOperationsInput | $Enums.StatusMesa
  }

  export type tab_reservasCreateInput = {
    nome_cliente: string
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
    tab_mesas: tab_mesasCreateNestedOneWithoutTab_reservasInput
    tab_relatorio?: tab_relatorioCreateNestedManyWithoutTab_reservasInput
  }

  export type tab_reservasUncheckedCreateInput = {
    id_reservas?: number
    nome_cliente: string
    id_mesa: number
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
    tab_relatorio?: tab_relatorioUncheckedCreateNestedManyWithoutTab_reservasInput
  }

  export type tab_reservasUpdateInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    tab_mesas?: tab_mesasUpdateOneRequiredWithoutTab_reservasNestedInput
    tab_relatorio?: tab_relatorioUpdateManyWithoutTab_reservasNestedInput
  }

  export type tab_reservasUncheckedUpdateInput = {
    id_reservas?: IntFieldUpdateOperationsInput | number
    nome_cliente?: StringFieldUpdateOperationsInput | string
    id_mesa?: IntFieldUpdateOperationsInput | number
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    tab_relatorio?: tab_relatorioUncheckedUpdateManyWithoutTab_reservasNestedInput
  }

  export type tab_reservasCreateManyInput = {
    id_reservas?: number
    nome_cliente: string
    id_mesa: number
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
  }

  export type tab_reservasUpdateManyMutationInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
  }

  export type tab_reservasUncheckedUpdateManyInput = {
    id_reservas?: IntFieldUpdateOperationsInput | number
    nome_cliente?: StringFieldUpdateOperationsInput | string
    id_mesa?: IntFieldUpdateOperationsInput | number
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
  }

  export type tab_relatorioCreateInput = {
    tab_reservas: tab_reservasCreateNestedOneWithoutTab_relatorioInput
  }

  export type tab_relatorioUncheckedCreateInput = {
    id_relatorio?: number
    id_reservas: number
  }

  export type tab_relatorioUpdateInput = {
    tab_reservas?: tab_reservasUpdateOneRequiredWithoutTab_relatorioNestedInput
  }

  export type tab_relatorioUncheckedUpdateInput = {
    id_relatorio?: IntFieldUpdateOperationsInput | number
    id_reservas?: IntFieldUpdateOperationsInput | number
  }

  export type tab_relatorioCreateManyInput = {
    id_relatorio?: number
    id_reservas: number
  }

  export type tab_relatorioUpdateManyMutationInput = {

  }

  export type tab_relatorioUncheckedUpdateManyInput = {
    id_relatorio?: IntFieldUpdateOperationsInput | number
    id_reservas?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type tab_usuariosOrderByRelevanceInput = {
    fields: tab_usuariosOrderByRelevanceFieldEnum | tab_usuariosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tab_usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    login?: SortOrder
    senha?: SortOrder
  }

  export type tab_usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type tab_usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    login?: SortOrder
    senha?: SortOrder
  }

  export type tab_usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    usuario?: SortOrder
    login?: SortOrder
    senha?: SortOrder
  }

  export type tab_usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusMesaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMesa | EnumStatusMesaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMesa[]
    notIn?: $Enums.StatusMesa[]
    not?: NestedEnumStatusMesaFilter<$PrismaModel> | $Enums.StatusMesa
  }

  export type Tab_reservasListRelationFilter = {
    every?: tab_reservasWhereInput
    some?: tab_reservasWhereInput
    none?: tab_reservasWhereInput
  }

  export type tab_reservasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tab_mesasCountOrderByAggregateInput = {
    id_mesa?: SortOrder
    numero_mesa?: SortOrder
    status?: SortOrder
  }

  export type tab_mesasAvgOrderByAggregateInput = {
    id_mesa?: SortOrder
    numero_mesa?: SortOrder
  }

  export type tab_mesasMaxOrderByAggregateInput = {
    id_mesa?: SortOrder
    numero_mesa?: SortOrder
    status?: SortOrder
  }

  export type tab_mesasMinOrderByAggregateInput = {
    id_mesa?: SortOrder
    numero_mesa?: SortOrder
    status?: SortOrder
  }

  export type tab_mesasSumOrderByAggregateInput = {
    id_mesa?: SortOrder
    numero_mesa?: SortOrder
  }

  export type EnumStatusMesaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMesa | EnumStatusMesaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMesa[]
    notIn?: $Enums.StatusMesa[]
    not?: NestedEnumStatusMesaWithAggregatesFilter<$PrismaModel> | $Enums.StatusMesa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMesaFilter<$PrismaModel>
    _max?: NestedEnumStatusMesaFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[]
    notIn?: $Enums.StatusReserva[]
    not?: NestedEnumStatusReservaFilter<$PrismaModel> | $Enums.StatusReserva
  }

  export type Tab_mesasScalarRelationFilter = {
    is?: tab_mesasWhereInput
    isNot?: tab_mesasWhereInput
  }

  export type Tab_relatorioListRelationFilter = {
    every?: tab_relatorioWhereInput
    some?: tab_relatorioWhereInput
    none?: tab_relatorioWhereInput
  }

  export type tab_relatorioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tab_reservasOrderByRelevanceInput = {
    fields: tab_reservasOrderByRelevanceFieldEnum | tab_reservasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tab_reservasCountOrderByAggregateInput = {
    id_reservas?: SortOrder
    nome_cliente?: SortOrder
    id_mesa?: SortOrder
    quantidade_pessoas?: SortOrder
    data_hora_reserva?: SortOrder
    status?: SortOrder
  }

  export type tab_reservasAvgOrderByAggregateInput = {
    id_reservas?: SortOrder
    id_mesa?: SortOrder
    quantidade_pessoas?: SortOrder
  }

  export type tab_reservasMaxOrderByAggregateInput = {
    id_reservas?: SortOrder
    nome_cliente?: SortOrder
    id_mesa?: SortOrder
    quantidade_pessoas?: SortOrder
    data_hora_reserva?: SortOrder
    status?: SortOrder
  }

  export type tab_reservasMinOrderByAggregateInput = {
    id_reservas?: SortOrder
    nome_cliente?: SortOrder
    id_mesa?: SortOrder
    quantidade_pessoas?: SortOrder
    data_hora_reserva?: SortOrder
    status?: SortOrder
  }

  export type tab_reservasSumOrderByAggregateInput = {
    id_reservas?: SortOrder
    id_mesa?: SortOrder
    quantidade_pessoas?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[]
    notIn?: $Enums.StatusReserva[]
    not?: NestedEnumStatusReservaWithAggregatesFilter<$PrismaModel> | $Enums.StatusReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusReservaFilter<$PrismaModel>
    _max?: NestedEnumStatusReservaFilter<$PrismaModel>
  }

  export type Tab_reservasScalarRelationFilter = {
    is?: tab_reservasWhereInput
    isNot?: tab_reservasWhereInput
  }

  export type tab_relatorioCountOrderByAggregateInput = {
    id_relatorio?: SortOrder
    id_reservas?: SortOrder
  }

  export type tab_relatorioAvgOrderByAggregateInput = {
    id_relatorio?: SortOrder
    id_reservas?: SortOrder
  }

  export type tab_relatorioMaxOrderByAggregateInput = {
    id_relatorio?: SortOrder
    id_reservas?: SortOrder
  }

  export type tab_relatorioMinOrderByAggregateInput = {
    id_relatorio?: SortOrder
    id_reservas?: SortOrder
  }

  export type tab_relatorioSumOrderByAggregateInput = {
    id_relatorio?: SortOrder
    id_reservas?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tab_reservasCreateNestedManyWithoutTab_mesasInput = {
    create?: XOR<tab_reservasCreateWithoutTab_mesasInput, tab_reservasUncheckedCreateWithoutTab_mesasInput> | tab_reservasCreateWithoutTab_mesasInput[] | tab_reservasUncheckedCreateWithoutTab_mesasInput[]
    connectOrCreate?: tab_reservasCreateOrConnectWithoutTab_mesasInput | tab_reservasCreateOrConnectWithoutTab_mesasInput[]
    createMany?: tab_reservasCreateManyTab_mesasInputEnvelope
    connect?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
  }

  export type tab_reservasUncheckedCreateNestedManyWithoutTab_mesasInput = {
    create?: XOR<tab_reservasCreateWithoutTab_mesasInput, tab_reservasUncheckedCreateWithoutTab_mesasInput> | tab_reservasCreateWithoutTab_mesasInput[] | tab_reservasUncheckedCreateWithoutTab_mesasInput[]
    connectOrCreate?: tab_reservasCreateOrConnectWithoutTab_mesasInput | tab_reservasCreateOrConnectWithoutTab_mesasInput[]
    createMany?: tab_reservasCreateManyTab_mesasInputEnvelope
    connect?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
  }

  export type EnumStatusMesaFieldUpdateOperationsInput = {
    set?: $Enums.StatusMesa
  }

  export type tab_reservasUpdateManyWithoutTab_mesasNestedInput = {
    create?: XOR<tab_reservasCreateWithoutTab_mesasInput, tab_reservasUncheckedCreateWithoutTab_mesasInput> | tab_reservasCreateWithoutTab_mesasInput[] | tab_reservasUncheckedCreateWithoutTab_mesasInput[]
    connectOrCreate?: tab_reservasCreateOrConnectWithoutTab_mesasInput | tab_reservasCreateOrConnectWithoutTab_mesasInput[]
    upsert?: tab_reservasUpsertWithWhereUniqueWithoutTab_mesasInput | tab_reservasUpsertWithWhereUniqueWithoutTab_mesasInput[]
    createMany?: tab_reservasCreateManyTab_mesasInputEnvelope
    set?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    disconnect?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    delete?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    connect?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    update?: tab_reservasUpdateWithWhereUniqueWithoutTab_mesasInput | tab_reservasUpdateWithWhereUniqueWithoutTab_mesasInput[]
    updateMany?: tab_reservasUpdateManyWithWhereWithoutTab_mesasInput | tab_reservasUpdateManyWithWhereWithoutTab_mesasInput[]
    deleteMany?: tab_reservasScalarWhereInput | tab_reservasScalarWhereInput[]
  }

  export type tab_reservasUncheckedUpdateManyWithoutTab_mesasNestedInput = {
    create?: XOR<tab_reservasCreateWithoutTab_mesasInput, tab_reservasUncheckedCreateWithoutTab_mesasInput> | tab_reservasCreateWithoutTab_mesasInput[] | tab_reservasUncheckedCreateWithoutTab_mesasInput[]
    connectOrCreate?: tab_reservasCreateOrConnectWithoutTab_mesasInput | tab_reservasCreateOrConnectWithoutTab_mesasInput[]
    upsert?: tab_reservasUpsertWithWhereUniqueWithoutTab_mesasInput | tab_reservasUpsertWithWhereUniqueWithoutTab_mesasInput[]
    createMany?: tab_reservasCreateManyTab_mesasInputEnvelope
    set?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    disconnect?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    delete?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    connect?: tab_reservasWhereUniqueInput | tab_reservasWhereUniqueInput[]
    update?: tab_reservasUpdateWithWhereUniqueWithoutTab_mesasInput | tab_reservasUpdateWithWhereUniqueWithoutTab_mesasInput[]
    updateMany?: tab_reservasUpdateManyWithWhereWithoutTab_mesasInput | tab_reservasUpdateManyWithWhereWithoutTab_mesasInput[]
    deleteMany?: tab_reservasScalarWhereInput | tab_reservasScalarWhereInput[]
  }

  export type tab_mesasCreateNestedOneWithoutTab_reservasInput = {
    create?: XOR<tab_mesasCreateWithoutTab_reservasInput, tab_mesasUncheckedCreateWithoutTab_reservasInput>
    connectOrCreate?: tab_mesasCreateOrConnectWithoutTab_reservasInput
    connect?: tab_mesasWhereUniqueInput
  }

  export type tab_relatorioCreateNestedManyWithoutTab_reservasInput = {
    create?: XOR<tab_relatorioCreateWithoutTab_reservasInput, tab_relatorioUncheckedCreateWithoutTab_reservasInput> | tab_relatorioCreateWithoutTab_reservasInput[] | tab_relatorioUncheckedCreateWithoutTab_reservasInput[]
    connectOrCreate?: tab_relatorioCreateOrConnectWithoutTab_reservasInput | tab_relatorioCreateOrConnectWithoutTab_reservasInput[]
    createMany?: tab_relatorioCreateManyTab_reservasInputEnvelope
    connect?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
  }

  export type tab_relatorioUncheckedCreateNestedManyWithoutTab_reservasInput = {
    create?: XOR<tab_relatorioCreateWithoutTab_reservasInput, tab_relatorioUncheckedCreateWithoutTab_reservasInput> | tab_relatorioCreateWithoutTab_reservasInput[] | tab_relatorioUncheckedCreateWithoutTab_reservasInput[]
    connectOrCreate?: tab_relatorioCreateOrConnectWithoutTab_reservasInput | tab_relatorioCreateOrConnectWithoutTab_reservasInput[]
    createMany?: tab_relatorioCreateManyTab_reservasInputEnvelope
    connect?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusReservaFieldUpdateOperationsInput = {
    set?: $Enums.StatusReserva
  }

  export type tab_mesasUpdateOneRequiredWithoutTab_reservasNestedInput = {
    create?: XOR<tab_mesasCreateWithoutTab_reservasInput, tab_mesasUncheckedCreateWithoutTab_reservasInput>
    connectOrCreate?: tab_mesasCreateOrConnectWithoutTab_reservasInput
    upsert?: tab_mesasUpsertWithoutTab_reservasInput
    connect?: tab_mesasWhereUniqueInput
    update?: XOR<XOR<tab_mesasUpdateToOneWithWhereWithoutTab_reservasInput, tab_mesasUpdateWithoutTab_reservasInput>, tab_mesasUncheckedUpdateWithoutTab_reservasInput>
  }

  export type tab_relatorioUpdateManyWithoutTab_reservasNestedInput = {
    create?: XOR<tab_relatorioCreateWithoutTab_reservasInput, tab_relatorioUncheckedCreateWithoutTab_reservasInput> | tab_relatorioCreateWithoutTab_reservasInput[] | tab_relatorioUncheckedCreateWithoutTab_reservasInput[]
    connectOrCreate?: tab_relatorioCreateOrConnectWithoutTab_reservasInput | tab_relatorioCreateOrConnectWithoutTab_reservasInput[]
    upsert?: tab_relatorioUpsertWithWhereUniqueWithoutTab_reservasInput | tab_relatorioUpsertWithWhereUniqueWithoutTab_reservasInput[]
    createMany?: tab_relatorioCreateManyTab_reservasInputEnvelope
    set?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    disconnect?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    delete?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    connect?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    update?: tab_relatorioUpdateWithWhereUniqueWithoutTab_reservasInput | tab_relatorioUpdateWithWhereUniqueWithoutTab_reservasInput[]
    updateMany?: tab_relatorioUpdateManyWithWhereWithoutTab_reservasInput | tab_relatorioUpdateManyWithWhereWithoutTab_reservasInput[]
    deleteMany?: tab_relatorioScalarWhereInput | tab_relatorioScalarWhereInput[]
  }

  export type tab_relatorioUncheckedUpdateManyWithoutTab_reservasNestedInput = {
    create?: XOR<tab_relatorioCreateWithoutTab_reservasInput, tab_relatorioUncheckedCreateWithoutTab_reservasInput> | tab_relatorioCreateWithoutTab_reservasInput[] | tab_relatorioUncheckedCreateWithoutTab_reservasInput[]
    connectOrCreate?: tab_relatorioCreateOrConnectWithoutTab_reservasInput | tab_relatorioCreateOrConnectWithoutTab_reservasInput[]
    upsert?: tab_relatorioUpsertWithWhereUniqueWithoutTab_reservasInput | tab_relatorioUpsertWithWhereUniqueWithoutTab_reservasInput[]
    createMany?: tab_relatorioCreateManyTab_reservasInputEnvelope
    set?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    disconnect?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    delete?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    connect?: tab_relatorioWhereUniqueInput | tab_relatorioWhereUniqueInput[]
    update?: tab_relatorioUpdateWithWhereUniqueWithoutTab_reservasInput | tab_relatorioUpdateWithWhereUniqueWithoutTab_reservasInput[]
    updateMany?: tab_relatorioUpdateManyWithWhereWithoutTab_reservasInput | tab_relatorioUpdateManyWithWhereWithoutTab_reservasInput[]
    deleteMany?: tab_relatorioScalarWhereInput | tab_relatorioScalarWhereInput[]
  }

  export type tab_reservasCreateNestedOneWithoutTab_relatorioInput = {
    create?: XOR<tab_reservasCreateWithoutTab_relatorioInput, tab_reservasUncheckedCreateWithoutTab_relatorioInput>
    connectOrCreate?: tab_reservasCreateOrConnectWithoutTab_relatorioInput
    connect?: tab_reservasWhereUniqueInput
  }

  export type tab_reservasUpdateOneRequiredWithoutTab_relatorioNestedInput = {
    create?: XOR<tab_reservasCreateWithoutTab_relatorioInput, tab_reservasUncheckedCreateWithoutTab_relatorioInput>
    connectOrCreate?: tab_reservasCreateOrConnectWithoutTab_relatorioInput
    upsert?: tab_reservasUpsertWithoutTab_relatorioInput
    connect?: tab_reservasWhereUniqueInput
    update?: XOR<XOR<tab_reservasUpdateToOneWithWhereWithoutTab_relatorioInput, tab_reservasUpdateWithoutTab_relatorioInput>, tab_reservasUncheckedUpdateWithoutTab_relatorioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumStatusMesaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMesa | EnumStatusMesaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMesa[]
    notIn?: $Enums.StatusMesa[]
    not?: NestedEnumStatusMesaFilter<$PrismaModel> | $Enums.StatusMesa
  }

  export type NestedEnumStatusMesaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusMesa | EnumStatusMesaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusMesa[]
    notIn?: $Enums.StatusMesa[]
    not?: NestedEnumStatusMesaWithAggregatesFilter<$PrismaModel> | $Enums.StatusMesa
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusMesaFilter<$PrismaModel>
    _max?: NestedEnumStatusMesaFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[]
    notIn?: $Enums.StatusReserva[]
    not?: NestedEnumStatusReservaFilter<$PrismaModel> | $Enums.StatusReserva
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[]
    notIn?: $Enums.StatusReserva[]
    not?: NestedEnumStatusReservaWithAggregatesFilter<$PrismaModel> | $Enums.StatusReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusReservaFilter<$PrismaModel>
    _max?: NestedEnumStatusReservaFilter<$PrismaModel>
  }

  export type tab_reservasCreateWithoutTab_mesasInput = {
    nome_cliente: string
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
    tab_relatorio?: tab_relatorioCreateNestedManyWithoutTab_reservasInput
  }

  export type tab_reservasUncheckedCreateWithoutTab_mesasInput = {
    id_reservas?: number
    nome_cliente: string
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
    tab_relatorio?: tab_relatorioUncheckedCreateNestedManyWithoutTab_reservasInput
  }

  export type tab_reservasCreateOrConnectWithoutTab_mesasInput = {
    where: tab_reservasWhereUniqueInput
    create: XOR<tab_reservasCreateWithoutTab_mesasInput, tab_reservasUncheckedCreateWithoutTab_mesasInput>
  }

  export type tab_reservasCreateManyTab_mesasInputEnvelope = {
    data: tab_reservasCreateManyTab_mesasInput | tab_reservasCreateManyTab_mesasInput[]
    skipDuplicates?: boolean
  }

  export type tab_reservasUpsertWithWhereUniqueWithoutTab_mesasInput = {
    where: tab_reservasWhereUniqueInput
    update: XOR<tab_reservasUpdateWithoutTab_mesasInput, tab_reservasUncheckedUpdateWithoutTab_mesasInput>
    create: XOR<tab_reservasCreateWithoutTab_mesasInput, tab_reservasUncheckedCreateWithoutTab_mesasInput>
  }

  export type tab_reservasUpdateWithWhereUniqueWithoutTab_mesasInput = {
    where: tab_reservasWhereUniqueInput
    data: XOR<tab_reservasUpdateWithoutTab_mesasInput, tab_reservasUncheckedUpdateWithoutTab_mesasInput>
  }

  export type tab_reservasUpdateManyWithWhereWithoutTab_mesasInput = {
    where: tab_reservasScalarWhereInput
    data: XOR<tab_reservasUpdateManyMutationInput, tab_reservasUncheckedUpdateManyWithoutTab_mesasInput>
  }

  export type tab_reservasScalarWhereInput = {
    AND?: tab_reservasScalarWhereInput | tab_reservasScalarWhereInput[]
    OR?: tab_reservasScalarWhereInput[]
    NOT?: tab_reservasScalarWhereInput | tab_reservasScalarWhereInput[]
    id_reservas?: IntFilter<"tab_reservas"> | number
    nome_cliente?: StringFilter<"tab_reservas"> | string
    id_mesa?: IntFilter<"tab_reservas"> | number
    quantidade_pessoas?: IntFilter<"tab_reservas"> | number
    data_hora_reserva?: DateTimeFilter<"tab_reservas"> | Date | string
    status?: EnumStatusReservaFilter<"tab_reservas"> | $Enums.StatusReserva
  }

  export type tab_mesasCreateWithoutTab_reservasInput = {
    numero_mesa: number
    status: $Enums.StatusMesa
  }

  export type tab_mesasUncheckedCreateWithoutTab_reservasInput = {
    id_mesa?: number
    numero_mesa: number
    status: $Enums.StatusMesa
  }

  export type tab_mesasCreateOrConnectWithoutTab_reservasInput = {
    where: tab_mesasWhereUniqueInput
    create: XOR<tab_mesasCreateWithoutTab_reservasInput, tab_mesasUncheckedCreateWithoutTab_reservasInput>
  }

  export type tab_relatorioCreateWithoutTab_reservasInput = {

  }

  export type tab_relatorioUncheckedCreateWithoutTab_reservasInput = {
    id_relatorio?: number
  }

  export type tab_relatorioCreateOrConnectWithoutTab_reservasInput = {
    where: tab_relatorioWhereUniqueInput
    create: XOR<tab_relatorioCreateWithoutTab_reservasInput, tab_relatorioUncheckedCreateWithoutTab_reservasInput>
  }

  export type tab_relatorioCreateManyTab_reservasInputEnvelope = {
    data: tab_relatorioCreateManyTab_reservasInput | tab_relatorioCreateManyTab_reservasInput[]
    skipDuplicates?: boolean
  }

  export type tab_mesasUpsertWithoutTab_reservasInput = {
    update: XOR<tab_mesasUpdateWithoutTab_reservasInput, tab_mesasUncheckedUpdateWithoutTab_reservasInput>
    create: XOR<tab_mesasCreateWithoutTab_reservasInput, tab_mesasUncheckedCreateWithoutTab_reservasInput>
    where?: tab_mesasWhereInput
  }

  export type tab_mesasUpdateToOneWithWhereWithoutTab_reservasInput = {
    where?: tab_mesasWhereInput
    data: XOR<tab_mesasUpdateWithoutTab_reservasInput, tab_mesasUncheckedUpdateWithoutTab_reservasInput>
  }

  export type tab_mesasUpdateWithoutTab_reservasInput = {
    numero_mesa?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusMesaFieldUpdateOperationsInput | $Enums.StatusMesa
  }

  export type tab_mesasUncheckedUpdateWithoutTab_reservasInput = {
    id_mesa?: IntFieldUpdateOperationsInput | number
    numero_mesa?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusMesaFieldUpdateOperationsInput | $Enums.StatusMesa
  }

  export type tab_relatorioUpsertWithWhereUniqueWithoutTab_reservasInput = {
    where: tab_relatorioWhereUniqueInput
    update: XOR<tab_relatorioUpdateWithoutTab_reservasInput, tab_relatorioUncheckedUpdateWithoutTab_reservasInput>
    create: XOR<tab_relatorioCreateWithoutTab_reservasInput, tab_relatorioUncheckedCreateWithoutTab_reservasInput>
  }

  export type tab_relatorioUpdateWithWhereUniqueWithoutTab_reservasInput = {
    where: tab_relatorioWhereUniqueInput
    data: XOR<tab_relatorioUpdateWithoutTab_reservasInput, tab_relatorioUncheckedUpdateWithoutTab_reservasInput>
  }

  export type tab_relatorioUpdateManyWithWhereWithoutTab_reservasInput = {
    where: tab_relatorioScalarWhereInput
    data: XOR<tab_relatorioUpdateManyMutationInput, tab_relatorioUncheckedUpdateManyWithoutTab_reservasInput>
  }

  export type tab_relatorioScalarWhereInput = {
    AND?: tab_relatorioScalarWhereInput | tab_relatorioScalarWhereInput[]
    OR?: tab_relatorioScalarWhereInput[]
    NOT?: tab_relatorioScalarWhereInput | tab_relatorioScalarWhereInput[]
    id_relatorio?: IntFilter<"tab_relatorio"> | number
    id_reservas?: IntFilter<"tab_relatorio"> | number
  }

  export type tab_reservasCreateWithoutTab_relatorioInput = {
    nome_cliente: string
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
    tab_mesas: tab_mesasCreateNestedOneWithoutTab_reservasInput
  }

  export type tab_reservasUncheckedCreateWithoutTab_relatorioInput = {
    id_reservas?: number
    nome_cliente: string
    id_mesa: number
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
  }

  export type tab_reservasCreateOrConnectWithoutTab_relatorioInput = {
    where: tab_reservasWhereUniqueInput
    create: XOR<tab_reservasCreateWithoutTab_relatorioInput, tab_reservasUncheckedCreateWithoutTab_relatorioInput>
  }

  export type tab_reservasUpsertWithoutTab_relatorioInput = {
    update: XOR<tab_reservasUpdateWithoutTab_relatorioInput, tab_reservasUncheckedUpdateWithoutTab_relatorioInput>
    create: XOR<tab_reservasCreateWithoutTab_relatorioInput, tab_reservasUncheckedCreateWithoutTab_relatorioInput>
    where?: tab_reservasWhereInput
  }

  export type tab_reservasUpdateToOneWithWhereWithoutTab_relatorioInput = {
    where?: tab_reservasWhereInput
    data: XOR<tab_reservasUpdateWithoutTab_relatorioInput, tab_reservasUncheckedUpdateWithoutTab_relatorioInput>
  }

  export type tab_reservasUpdateWithoutTab_relatorioInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    tab_mesas?: tab_mesasUpdateOneRequiredWithoutTab_reservasNestedInput
  }

  export type tab_reservasUncheckedUpdateWithoutTab_relatorioInput = {
    id_reservas?: IntFieldUpdateOperationsInput | number
    nome_cliente?: StringFieldUpdateOperationsInput | string
    id_mesa?: IntFieldUpdateOperationsInput | number
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
  }

  export type tab_reservasCreateManyTab_mesasInput = {
    id_reservas?: number
    nome_cliente: string
    quantidade_pessoas: number
    data_hora_reserva: Date | string
    status: $Enums.StatusReserva
  }

  export type tab_reservasUpdateWithoutTab_mesasInput = {
    nome_cliente?: StringFieldUpdateOperationsInput | string
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    tab_relatorio?: tab_relatorioUpdateManyWithoutTab_reservasNestedInput
  }

  export type tab_reservasUncheckedUpdateWithoutTab_mesasInput = {
    id_reservas?: IntFieldUpdateOperationsInput | number
    nome_cliente?: StringFieldUpdateOperationsInput | string
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    tab_relatorio?: tab_relatorioUncheckedUpdateManyWithoutTab_reservasNestedInput
  }

  export type tab_reservasUncheckedUpdateManyWithoutTab_mesasInput = {
    id_reservas?: IntFieldUpdateOperationsInput | number
    nome_cliente?: StringFieldUpdateOperationsInput | string
    quantidade_pessoas?: IntFieldUpdateOperationsInput | number
    data_hora_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
  }

  export type tab_relatorioCreateManyTab_reservasInput = {
    id_relatorio?: number
  }

  export type tab_relatorioUpdateWithoutTab_reservasInput = {

  }

  export type tab_relatorioUncheckedUpdateWithoutTab_reservasInput = {
    id_relatorio?: IntFieldUpdateOperationsInput | number
  }

  export type tab_relatorioUncheckedUpdateManyWithoutTab_reservasInput = {
    id_relatorio?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}