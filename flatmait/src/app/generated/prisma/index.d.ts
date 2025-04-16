
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Connection
 * 
 */
export type Connection = $Result.DefaultSelection<Prisma.$ConnectionPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model MatchResult
 * 
 */
export type MatchResult = $Result.DefaultSelection<Prisma.$MatchResultPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ConnectionStatus: {
  Pending: 'Pending',
  Accepted: 'Accepted',
  Rejected: 'Rejected'
};

export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus]


export const SleepSchedule: {
  EarlyBird: 'EarlyBird',
  NightOwl: 'NightOwl',
  Flexible: 'Flexible'
};

export type SleepSchedule = (typeof SleepSchedule)[keyof typeof SleepSchedule]


export const Gender: {
  Male: 'Male',
  Female: 'Female',
  Others: 'Others'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Role: {
  EndUser: 'EndUser',
  Admin: 'Admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Cleanliness: {
  Messy: 'Messy',
  Average: 'Average',
  CleanFreak: 'CleanFreak'
};

export type Cleanliness = (typeof Cleanliness)[keyof typeof Cleanliness]

}

export type ConnectionStatus = $Enums.ConnectionStatus

export const ConnectionStatus: typeof $Enums.ConnectionStatus

export type SleepSchedule = $Enums.SleepSchedule

export const SleepSchedule: typeof $Enums.SleepSchedule

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Cleanliness = $Enums.Cleanliness

export const Cleanliness: typeof $Enums.Cleanliness

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchResult`: Exposes CRUD operations for the **MatchResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchResults
    * const matchResults = await prisma.matchResult.findMany()
    * ```
    */
  get matchResult(): Prisma.MatchResultDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    User: 'User',
    Connection: 'Connection',
    Location: 'Location',
    MatchResult: 'MatchResult'
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
      modelProps: "user" | "connection" | "location" | "matchResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Connection: {
        payload: Prisma.$ConnectionPayload<ExtArgs>
        fields: Prisma.ConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findFirst: {
            args: Prisma.ConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findMany: {
            args: Prisma.ConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          create: {
            args: Prisma.ConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          createMany: {
            args: Prisma.ConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          delete: {
            args: Prisma.ConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          update: {
            args: Prisma.ConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.ConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      MatchResult: {
        payload: Prisma.$MatchResultPayload<ExtArgs>
        fields: Prisma.MatchResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          findFirst: {
            args: Prisma.MatchResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          findMany: {
            args: Prisma.MatchResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>[]
          }
          create: {
            args: Prisma.MatchResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          createMany: {
            args: Prisma.MatchResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>[]
          }
          delete: {
            args: Prisma.MatchResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          update: {
            args: Prisma.MatchResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          deleteMany: {
            args: Prisma.MatchResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>[]
          }
          upsert: {
            args: Prisma.MatchResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          aggregate: {
            args: Prisma.MatchResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchResult>
          }
          groupBy: {
            args: Prisma.MatchResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchResultCountArgs<ExtArgs>
            result: $Utils.Optional<MatchResultCountAggregateOutputType> | number
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
    user?: UserOmit
    connection?: ConnectionOmit
    location?: LocationOmit
    matchResult?: MatchResultOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentConnections: number
    receivedConnections: number
    matchesAsMatchedUser: number
    matchesAsUser: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentConnections?: boolean | UserCountOutputTypeCountSentConnectionsArgs
    receivedConnections?: boolean | UserCountOutputTypeCountReceivedConnectionsArgs
    matchesAsMatchedUser?: boolean | UserCountOutputTypeCountMatchesAsMatchedUserArgs
    matchesAsUser?: boolean | UserCountOutputTypeCountMatchesAsUserArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsMatchedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesAsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
    minBudget: number | null
    maxBudget: number | null
    socialLevel: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
    minBudget: number | null
    maxBudget: number | null
    socialLevel: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    minBudget: number | null
    maxBudget: number | null
    preferredGender: $Enums.Gender | null
    isSmoker: boolean | null
    bio: string | null
    profilePictureUrl: string | null
    socialLevel: number | null
    petsAllowed: boolean | null
    cleanliness: $Enums.Cleanliness | null
    hobbies: string | null
    sleepSchedule: $Enums.SleepSchedule | null
    profileCompleted: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    minBudget: number | null
    maxBudget: number | null
    preferredGender: $Enums.Gender | null
    isSmoker: boolean | null
    bio: string | null
    profilePictureUrl: string | null
    socialLevel: number | null
    petsAllowed: boolean | null
    cleanliness: $Enums.Cleanliness | null
    hobbies: string | null
    sleepSchedule: $Enums.SleepSchedule | null
    profileCompleted: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    createdAt: number
    name: number
    age: number
    gender: number
    minBudget: number
    maxBudget: number
    preferredGender: number
    isSmoker: number
    bio: number
    profilePictureUrl: number
    socialLevel: number
    petsAllowed: number
    cleanliness: number
    hobbies: number
    sleepSchedule: number
    profileCompleted: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
    minBudget?: true
    maxBudget?: true
    socialLevel?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
    minBudget?: true
    maxBudget?: true
    socialLevel?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
    name?: true
    age?: true
    gender?: true
    minBudget?: true
    maxBudget?: true
    preferredGender?: true
    isSmoker?: true
    bio?: true
    profilePictureUrl?: true
    socialLevel?: true
    petsAllowed?: true
    cleanliness?: true
    hobbies?: true
    sleepSchedule?: true
    profileCompleted?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
    name?: true
    age?: true
    gender?: true
    minBudget?: true
    maxBudget?: true
    preferredGender?: true
    isSmoker?: true
    bio?: true
    profilePictureUrl?: true
    socialLevel?: true
    petsAllowed?: true
    cleanliness?: true
    hobbies?: true
    sleepSchedule?: true
    profileCompleted?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    createdAt?: true
    name?: true
    age?: true
    gender?: true
    minBudget?: true
    maxBudget?: true
    preferredGender?: true
    isSmoker?: true
    bio?: true
    profilePictureUrl?: true
    socialLevel?: true
    petsAllowed?: true
    cleanliness?: true
    hobbies?: true
    sleepSchedule?: true
    profileCompleted?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.Role
    createdAt: Date
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio: string | null
    profilePictureUrl: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    preferredGender?: boolean
    isSmoker?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    socialLevel?: boolean
    petsAllowed?: boolean
    cleanliness?: boolean
    hobbies?: boolean
    sleepSchedule?: boolean
    profileCompleted?: boolean
    sentConnections?: boolean | User$sentConnectionsArgs<ExtArgs>
    receivedConnections?: boolean | User$receivedConnectionsArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    matchesAsMatchedUser?: boolean | User$matchesAsMatchedUserArgs<ExtArgs>
    matchesAsUser?: boolean | User$matchesAsUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    preferredGender?: boolean
    isSmoker?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    socialLevel?: boolean
    petsAllowed?: boolean
    cleanliness?: boolean
    hobbies?: boolean
    sleepSchedule?: boolean
    profileCompleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    createdAt?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    preferredGender?: boolean
    isSmoker?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    socialLevel?: boolean
    petsAllowed?: boolean
    cleanliness?: boolean
    hobbies?: boolean
    sleepSchedule?: boolean
    profileCompleted?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    createdAt?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    minBudget?: boolean
    maxBudget?: boolean
    preferredGender?: boolean
    isSmoker?: boolean
    bio?: boolean
    profilePictureUrl?: boolean
    socialLevel?: boolean
    petsAllowed?: boolean
    cleanliness?: boolean
    hobbies?: boolean
    sleepSchedule?: boolean
    profileCompleted?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "createdAt" | "name" | "age" | "gender" | "minBudget" | "maxBudget" | "preferredGender" | "isSmoker" | "bio" | "profilePictureUrl" | "socialLevel" | "petsAllowed" | "cleanliness" | "hobbies" | "sleepSchedule" | "profileCompleted", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentConnections?: boolean | User$sentConnectionsArgs<ExtArgs>
    receivedConnections?: boolean | User$receivedConnectionsArgs<ExtArgs>
    location?: boolean | User$locationArgs<ExtArgs>
    matchesAsMatchedUser?: boolean | User$matchesAsMatchedUserArgs<ExtArgs>
    matchesAsUser?: boolean | User$matchesAsUserArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentConnections: Prisma.$ConnectionPayload<ExtArgs>[]
      receivedConnections: Prisma.$ConnectionPayload<ExtArgs>[]
      location: Prisma.$LocationPayload<ExtArgs> | null
      matchesAsMatchedUser: Prisma.$MatchResultPayload<ExtArgs>[]
      matchesAsUser: Prisma.$MatchResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      createdAt: Date
      name: string
      age: number
      gender: $Enums.Gender
      minBudget: number
      maxBudget: number
      preferredGender: $Enums.Gender
      isSmoker: boolean
      bio: string | null
      profilePictureUrl: string | null
      socialLevel: number
      petsAllowed: boolean
      cleanliness: $Enums.Cleanliness
      hobbies: string | null
      sleepSchedule: $Enums.SleepSchedule
      profileCompleted: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentConnections<T extends User$sentConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedConnections<T extends User$receivedConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    location<T extends User$locationArgs<ExtArgs> = {}>(args?: Subset<T, User$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    matchesAsMatchedUser<T extends User$matchesAsMatchedUserArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesAsMatchedUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesAsUser<T extends User$matchesAsUserArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesAsUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly minBudget: FieldRef<"User", 'Int'>
    readonly maxBudget: FieldRef<"User", 'Int'>
    readonly preferredGender: FieldRef<"User", 'Gender'>
    readonly isSmoker: FieldRef<"User", 'Boolean'>
    readonly bio: FieldRef<"User", 'String'>
    readonly profilePictureUrl: FieldRef<"User", 'String'>
    readonly socialLevel: FieldRef<"User", 'Int'>
    readonly petsAllowed: FieldRef<"User", 'Boolean'>
    readonly cleanliness: FieldRef<"User", 'Cleanliness'>
    readonly hobbies: FieldRef<"User", 'String'>
    readonly sleepSchedule: FieldRef<"User", 'SleepSchedule'>
    readonly profileCompleted: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentConnections
   */
  export type User$sentConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * User.receivedConnections
   */
  export type User$receivedConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    cursor?: ConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * User.location
   */
  export type User$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * User.matchesAsMatchedUser
   */
  export type User$matchesAsMatchedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    where?: MatchResultWhereInput
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    cursor?: MatchResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * User.matchesAsUser
   */
  export type User$matchesAsUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    where?: MatchResultWhereInput
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    cursor?: MatchResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionAvgAggregateOutputType = {
    compatibilityScore: number | null
  }

  export type ConnectionSumAggregateOutputType = {
    compatibilityScore: number | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: string | null
    status: $Enums.ConnectionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    initiatorId: string | null
    recipientId: string | null
    compatibilityScore: number | null
    notes: string | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: string | null
    status: $Enums.ConnectionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    initiatorId: string | null
    recipientId: string | null
    compatibilityScore: number | null
    notes: string | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    updatedAt: number
    initiatorId: number
    recipientId: number
    compatibilityScore: number
    notes: number
    _all: number
  }


  export type ConnectionAvgAggregateInputType = {
    compatibilityScore?: true
  }

  export type ConnectionSumAggregateInputType = {
    compatibilityScore?: true
  }

  export type ConnectionMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    initiatorId?: true
    recipientId?: true
    compatibilityScore?: true
    notes?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    initiatorId?: true
    recipientId?: true
    compatibilityScore?: true
    notes?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    initiatorId?: true
    recipientId?: true
    compatibilityScore?: true
    notes?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connection to aggregate.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithAggregationInput | ConnectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _avg?: ConnectionAvgAggregateInputType
    _sum?: ConnectionSumAggregateInputType
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: string
    status: $Enums.ConnectionStatus
    createdAt: Date
    updatedAt: Date
    initiatorId: string
    recipientId: string
    compatibilityScore: number | null
    notes: string | null
    _count: ConnectionCountAggregateOutputType | null
    _avg: ConnectionAvgAggregateOutputType | null
    _sum: ConnectionSumAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    initiatorId?: boolean
    recipientId?: boolean
    compatibilityScore?: boolean
    notes?: boolean
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    initiatorId?: boolean
    recipientId?: boolean
    compatibilityScore?: boolean
    notes?: boolean
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    initiatorId?: boolean
    recipientId?: boolean
    compatibilityScore?: boolean
    notes?: boolean
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connection"]>

  export type ConnectionSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    initiatorId?: boolean
    recipientId?: boolean
    compatibilityScore?: boolean
    notes?: boolean
  }

  export type ConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "createdAt" | "updatedAt" | "initiatorId" | "recipientId" | "compatibilityScore" | "notes", ExtArgs["result"]["connection"]>
  export type ConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connection"
    objects: {
      initiator: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.ConnectionStatus
      createdAt: Date
      updatedAt: Date
      initiatorId: string
      recipientId: string
      compatibilityScore: number | null
      notes: string | null
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type ConnectionGetPayload<S extends boolean | null | undefined | ConnectionDefaultArgs> = $Result.GetResult<Prisma.$ConnectionPayload, S>

  type ConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface ConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connection'], meta: { name: 'Connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionFindUniqueArgs>(args: SelectSubset<T, ConnectionFindUniqueArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionFindFirstArgs>(args?: SelectSubset<T, ConnectionFindFirstArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionFindManyArgs>(args?: SelectSubset<T, ConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends ConnectionCreateArgs>(args: SelectSubset<T, ConnectionCreateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionCreateManyArgs>(args?: SelectSubset<T, ConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDeleteArgs>(args: SelectSubset<T, ConnectionDeleteArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionUpdateArgs>(args: SelectSubset<T, ConnectionUpdateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDeleteManyArgs>(args?: SelectSubset<T, ConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionUpdateManyArgs>(args: SelectSubset<T, ConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {ConnectionUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionWithIdOnly = await prisma.connection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionUpsertArgs>(args: SelectSubset<T, ConnectionUpsertArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
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
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connection model
   */
  readonly fields: ConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    initiator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Connection model
   */
  interface ConnectionFieldRefs {
    readonly id: FieldRef<"Connection", 'String'>
    readonly status: FieldRef<"Connection", 'ConnectionStatus'>
    readonly createdAt: FieldRef<"Connection", 'DateTime'>
    readonly updatedAt: FieldRef<"Connection", 'DateTime'>
    readonly initiatorId: FieldRef<"Connection", 'String'>
    readonly recipientId: FieldRef<"Connection", 'String'>
    readonly compatibilityScore: FieldRef<"Connection", 'Float'>
    readonly notes: FieldRef<"Connection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findUniqueOrThrow
   */
  export type ConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findFirstOrThrow
   */
  export type ConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection create
   */
  export type ConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Connection.
     */
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
  }

  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connection createManyAndReturn
   */
  export type ConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection update
   */
  export type ConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Connection.
     */
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connection updateManyAndReturn
   */
  export type ConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Connection to update in case it exists.
     */
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     */
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
  }

  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
    /**
     * Filter which Connection to delete.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connection without action
   */
  export type ConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    city: string | null
    area: string | null
    country: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    city: string | null
    area: string | null
    country: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    userId: number
    city: number
    area: number
    country: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    area?: true
    country?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    area?: true
    country?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    area?: true
    country?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    userId: string
    city: string
    area: string
    country: string
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    city?: boolean
    area?: boolean
    country?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    city?: boolean
    area?: boolean
    country?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    city?: boolean
    area?: boolean
    country?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    userId?: boolean
    city?: boolean
    area?: boolean
    country?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "city" | "area" | "country", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      city: string
      area: string
      country: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly userId: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly area: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model MatchResult
   */

  export type AggregateMatchResult = {
    _count: MatchResultCountAggregateOutputType | null
    _avg: MatchResultAvgAggregateOutputType | null
    _sum: MatchResultSumAggregateOutputType | null
    _min: MatchResultMinAggregateOutputType | null
    _max: MatchResultMaxAggregateOutputType | null
  }

  export type MatchResultAvgAggregateOutputType = {
    compatibilityScore: number | null
  }

  export type MatchResultSumAggregateOutputType = {
    compatibilityScore: number | null
  }

  export type MatchResultMinAggregateOutputType = {
    id: string | null
    userId: string | null
    matchedUserId: string | null
    compatibilityScore: number | null
    createdAt: Date | null
  }

  export type MatchResultMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    matchedUserId: string | null
    compatibilityScore: number | null
    createdAt: Date | null
  }

  export type MatchResultCountAggregateOutputType = {
    id: number
    userId: number
    matchedUserId: number
    compatibilityScore: number
    createdAt: number
    _all: number
  }


  export type MatchResultAvgAggregateInputType = {
    compatibilityScore?: true
  }

  export type MatchResultSumAggregateInputType = {
    compatibilityScore?: true
  }

  export type MatchResultMinAggregateInputType = {
    id?: true
    userId?: true
    matchedUserId?: true
    compatibilityScore?: true
    createdAt?: true
  }

  export type MatchResultMaxAggregateInputType = {
    id?: true
    userId?: true
    matchedUserId?: true
    compatibilityScore?: true
    createdAt?: true
  }

  export type MatchResultCountAggregateInputType = {
    id?: true
    userId?: true
    matchedUserId?: true
    compatibilityScore?: true
    createdAt?: true
    _all?: true
  }

  export type MatchResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchResult to aggregate.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchResults
    **/
    _count?: true | MatchResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchResultMaxAggregateInputType
  }

  export type GetMatchResultAggregateType<T extends MatchResultAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchResult[P]>
      : GetScalarType<T[P], AggregateMatchResult[P]>
  }




  export type MatchResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultWhereInput
    orderBy?: MatchResultOrderByWithAggregationInput | MatchResultOrderByWithAggregationInput[]
    by: MatchResultScalarFieldEnum[] | MatchResultScalarFieldEnum
    having?: MatchResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchResultCountAggregateInputType | true
    _avg?: MatchResultAvgAggregateInputType
    _sum?: MatchResultSumAggregateInputType
    _min?: MatchResultMinAggregateInputType
    _max?: MatchResultMaxAggregateInputType
  }

  export type MatchResultGroupByOutputType = {
    id: string
    userId: string
    matchedUserId: string
    compatibilityScore: number
    createdAt: Date
    _count: MatchResultCountAggregateOutputType | null
    _avg: MatchResultAvgAggregateOutputType | null
    _sum: MatchResultSumAggregateOutputType | null
    _min: MatchResultMinAggregateOutputType | null
    _max: MatchResultMaxAggregateOutputType | null
  }

  type GetMatchResultGroupByPayload<T extends MatchResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchResultGroupByOutputType[P]>
            : GetScalarType<T[P], MatchResultGroupByOutputType[P]>
        }
      >
    >


  export type MatchResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchedUserId?: boolean
    compatibilityScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchResult"]>

  export type MatchResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchedUserId?: boolean
    compatibilityScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchResult"]>

  export type MatchResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchedUserId?: boolean
    compatibilityScore?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchResult"]>

  export type MatchResultSelectScalar = {
    id?: boolean
    userId?: boolean
    matchedUserId?: boolean
    compatibilityScore?: boolean
    createdAt?: boolean
  }

  export type MatchResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "matchedUserId" | "compatibilityScore" | "createdAt", ExtArgs["result"]["matchResult"]>
  export type MatchResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matchedUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      matchedUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      matchedUserId: string
      compatibilityScore: number
      createdAt: Date
    }, ExtArgs["result"]["matchResult"]>
    composites: {}
  }

  type MatchResultGetPayload<S extends boolean | null | undefined | MatchResultDefaultArgs> = $Result.GetResult<Prisma.$MatchResultPayload, S>

  type MatchResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchResultCountAggregateInputType | true
    }

  export interface MatchResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchResult'], meta: { name: 'MatchResult' } }
    /**
     * Find zero or one MatchResult that matches the filter.
     * @param {MatchResultFindUniqueArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchResultFindUniqueArgs>(args: SelectSubset<T, MatchResultFindUniqueArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchResultFindUniqueOrThrowArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchResultFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultFindFirstArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchResultFindFirstArgs>(args?: SelectSubset<T, MatchResultFindFirstArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultFindFirstOrThrowArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchResultFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchResults
     * const matchResults = await prisma.matchResult.findMany()
     * 
     * // Get first 10 MatchResults
     * const matchResults = await prisma.matchResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchResultWithIdOnly = await prisma.matchResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchResultFindManyArgs>(args?: SelectSubset<T, MatchResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchResult.
     * @param {MatchResultCreateArgs} args - Arguments to create a MatchResult.
     * @example
     * // Create one MatchResult
     * const MatchResult = await prisma.matchResult.create({
     *   data: {
     *     // ... data to create a MatchResult
     *   }
     * })
     * 
     */
    create<T extends MatchResultCreateArgs>(args: SelectSubset<T, MatchResultCreateArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchResults.
     * @param {MatchResultCreateManyArgs} args - Arguments to create many MatchResults.
     * @example
     * // Create many MatchResults
     * const matchResult = await prisma.matchResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchResultCreateManyArgs>(args?: SelectSubset<T, MatchResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchResults and returns the data saved in the database.
     * @param {MatchResultCreateManyAndReturnArgs} args - Arguments to create many MatchResults.
     * @example
     * // Create many MatchResults
     * const matchResult = await prisma.matchResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchResults and only return the `id`
     * const matchResultWithIdOnly = await prisma.matchResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchResultCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchResult.
     * @param {MatchResultDeleteArgs} args - Arguments to delete one MatchResult.
     * @example
     * // Delete one MatchResult
     * const MatchResult = await prisma.matchResult.delete({
     *   where: {
     *     // ... filter to delete one MatchResult
     *   }
     * })
     * 
     */
    delete<T extends MatchResultDeleteArgs>(args: SelectSubset<T, MatchResultDeleteArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchResult.
     * @param {MatchResultUpdateArgs} args - Arguments to update one MatchResult.
     * @example
     * // Update one MatchResult
     * const matchResult = await prisma.matchResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchResultUpdateArgs>(args: SelectSubset<T, MatchResultUpdateArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchResults.
     * @param {MatchResultDeleteManyArgs} args - Arguments to filter MatchResults to delete.
     * @example
     * // Delete a few MatchResults
     * const { count } = await prisma.matchResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchResultDeleteManyArgs>(args?: SelectSubset<T, MatchResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchResults
     * const matchResult = await prisma.matchResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchResultUpdateManyArgs>(args: SelectSubset<T, MatchResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchResults and returns the data updated in the database.
     * @param {MatchResultUpdateManyAndReturnArgs} args - Arguments to update many MatchResults.
     * @example
     * // Update many MatchResults
     * const matchResult = await prisma.matchResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchResults and only return the `id`
     * const matchResultWithIdOnly = await prisma.matchResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchResultUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchResult.
     * @param {MatchResultUpsertArgs} args - Arguments to update or create a MatchResult.
     * @example
     * // Update or create a MatchResult
     * const matchResult = await prisma.matchResult.upsert({
     *   create: {
     *     // ... data to create a MatchResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchResult we want to update
     *   }
     * })
     */
    upsert<T extends MatchResultUpsertArgs>(args: SelectSubset<T, MatchResultUpsertArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultCountArgs} args - Arguments to filter MatchResults to count.
     * @example
     * // Count the number of MatchResults
     * const count = await prisma.matchResult.count({
     *   where: {
     *     // ... the filter for the MatchResults we want to count
     *   }
     * })
    **/
    count<T extends MatchResultCountArgs>(
      args?: Subset<T, MatchResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchResultAggregateArgs>(args: Subset<T, MatchResultAggregateArgs>): Prisma.PrismaPromise<GetMatchResultAggregateType<T>>

    /**
     * Group by MatchResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultGroupByArgs} args - Group by arguments.
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
      T extends MatchResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchResultGroupByArgs['orderBy'] }
        : { orderBy?: MatchResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchResult model
   */
  readonly fields: MatchResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matchedUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchResult model
   */
  interface MatchResultFieldRefs {
    readonly id: FieldRef<"MatchResult", 'String'>
    readonly userId: FieldRef<"MatchResult", 'String'>
    readonly matchedUserId: FieldRef<"MatchResult", 'String'>
    readonly compatibilityScore: FieldRef<"MatchResult", 'Float'>
    readonly createdAt: FieldRef<"MatchResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchResult findUnique
   */
  export type MatchResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult findUniqueOrThrow
   */
  export type MatchResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult findFirst
   */
  export type MatchResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchResults.
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchResults.
     */
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * MatchResult findFirstOrThrow
   */
  export type MatchResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchResults.
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchResults.
     */
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * MatchResult findMany
   */
  export type MatchResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResults to fetch.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchResults.
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * MatchResult create
   */
  export type MatchResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchResult.
     */
    data: XOR<MatchResultCreateInput, MatchResultUncheckedCreateInput>
  }

  /**
   * MatchResult createMany
   */
  export type MatchResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchResults.
     */
    data: MatchResultCreateManyInput | MatchResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchResult createManyAndReturn
   */
  export type MatchResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * The data used to create many MatchResults.
     */
    data: MatchResultCreateManyInput | MatchResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchResult update
   */
  export type MatchResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchResult.
     */
    data: XOR<MatchResultUpdateInput, MatchResultUncheckedUpdateInput>
    /**
     * Choose, which MatchResult to update.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult updateMany
   */
  export type MatchResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchResults.
     */
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyInput>
    /**
     * Filter which MatchResults to update
     */
    where?: MatchResultWhereInput
    /**
     * Limit how many MatchResults to update.
     */
    limit?: number
  }

  /**
   * MatchResult updateManyAndReturn
   */
  export type MatchResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * The data used to update MatchResults.
     */
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyInput>
    /**
     * Filter which MatchResults to update
     */
    where?: MatchResultWhereInput
    /**
     * Limit how many MatchResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchResult upsert
   */
  export type MatchResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchResult to update in case it exists.
     */
    where: MatchResultWhereUniqueInput
    /**
     * In case the MatchResult found by the `where` argument doesn't exist, create a new MatchResult with this data.
     */
    create: XOR<MatchResultCreateInput, MatchResultUncheckedCreateInput>
    /**
     * In case the MatchResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchResultUpdateInput, MatchResultUncheckedUpdateInput>
  }

  /**
   * MatchResult delete
   */
  export type MatchResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter which MatchResult to delete.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult deleteMany
   */
  export type MatchResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchResults to delete
     */
    where?: MatchResultWhereInput
    /**
     * Limit how many MatchResults to delete.
     */
    limit?: number
  }

  /**
   * MatchResult without action
   */
  export type MatchResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    createdAt: 'createdAt',
    name: 'name',
    age: 'age',
    gender: 'gender',
    minBudget: 'minBudget',
    maxBudget: 'maxBudget',
    preferredGender: 'preferredGender',
    isSmoker: 'isSmoker',
    bio: 'bio',
    profilePictureUrl: 'profilePictureUrl',
    socialLevel: 'socialLevel',
    petsAllowed: 'petsAllowed',
    cleanliness: 'cleanliness',
    hobbies: 'hobbies',
    sleepSchedule: 'sleepSchedule',
    profileCompleted: 'profileCompleted'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    initiatorId: 'initiatorId',
    recipientId: 'recipientId',
    compatibilityScore: 'compatibilityScore',
    notes: 'notes'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    city: 'city',
    area: 'area',
    country: 'country'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const MatchResultScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    matchedUserId: 'matchedUserId',
    compatibilityScore: 'compatibilityScore',
    createdAt: 'createdAt'
  };

  export type MatchResultScalarFieldEnum = (typeof MatchResultScalarFieldEnum)[keyof typeof MatchResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Cleanliness'
   */
  export type EnumCleanlinessFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cleanliness'>
    


  /**
   * Reference to a field of type 'Cleanliness[]'
   */
  export type ListEnumCleanlinessFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Cleanliness[]'>
    


  /**
   * Reference to a field of type 'SleepSchedule'
   */
  export type EnumSleepScheduleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SleepSchedule'>
    


  /**
   * Reference to a field of type 'SleepSchedule[]'
   */
  export type ListEnumSleepScheduleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SleepSchedule[]'>
    


  /**
   * Reference to a field of type 'ConnectionStatus'
   */
  export type EnumConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionStatus'>
    


  /**
   * Reference to a field of type 'ConnectionStatus[]'
   */
  export type ListEnumConnectionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    minBudget?: IntFilter<"User"> | number
    maxBudget?: IntFilter<"User"> | number
    preferredGender?: EnumGenderFilter<"User"> | $Enums.Gender
    isSmoker?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    socialLevel?: IntFilter<"User"> | number
    petsAllowed?: BoolFilter<"User"> | boolean
    cleanliness?: EnumCleanlinessFilter<"User"> | $Enums.Cleanliness
    hobbies?: StringNullableFilter<"User"> | string | null
    sleepSchedule?: EnumSleepScheduleFilter<"User"> | $Enums.SleepSchedule
    profileCompleted?: BoolFilter<"User"> | boolean
    sentConnections?: ConnectionListRelationFilter
    receivedConnections?: ConnectionListRelationFilter
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    matchesAsMatchedUser?: MatchResultListRelationFilter
    matchesAsUser?: MatchResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    preferredGender?: SortOrder
    isSmoker?: SortOrder
    bio?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    socialLevel?: SortOrder
    petsAllowed?: SortOrder
    cleanliness?: SortOrder
    hobbies?: SortOrderInput | SortOrder
    sleepSchedule?: SortOrder
    profileCompleted?: SortOrder
    sentConnections?: ConnectionOrderByRelationAggregateInput
    receivedConnections?: ConnectionOrderByRelationAggregateInput
    location?: LocationOrderByWithRelationInput
    matchesAsMatchedUser?: MatchResultOrderByRelationAggregateInput
    matchesAsUser?: MatchResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    age?: IntFilter<"User"> | number
    gender?: EnumGenderFilter<"User"> | $Enums.Gender
    minBudget?: IntFilter<"User"> | number
    maxBudget?: IntFilter<"User"> | number
    preferredGender?: EnumGenderFilter<"User"> | $Enums.Gender
    isSmoker?: BoolFilter<"User"> | boolean
    bio?: StringNullableFilter<"User"> | string | null
    profilePictureUrl?: StringNullableFilter<"User"> | string | null
    socialLevel?: IntFilter<"User"> | number
    petsAllowed?: BoolFilter<"User"> | boolean
    cleanliness?: EnumCleanlinessFilter<"User"> | $Enums.Cleanliness
    hobbies?: StringNullableFilter<"User"> | string | null
    sleepSchedule?: EnumSleepScheduleFilter<"User"> | $Enums.SleepSchedule
    profileCompleted?: BoolFilter<"User"> | boolean
    sentConnections?: ConnectionListRelationFilter
    receivedConnections?: ConnectionListRelationFilter
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    matchesAsMatchedUser?: MatchResultListRelationFilter
    matchesAsUser?: MatchResultListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    preferredGender?: SortOrder
    isSmoker?: SortOrder
    bio?: SortOrderInput | SortOrder
    profilePictureUrl?: SortOrderInput | SortOrder
    socialLevel?: SortOrder
    petsAllowed?: SortOrder
    cleanliness?: SortOrder
    hobbies?: SortOrderInput | SortOrder
    sleepSchedule?: SortOrder
    profileCompleted?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringWithAggregatesFilter<"User"> | string
    age?: IntWithAggregatesFilter<"User"> | number
    gender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    minBudget?: IntWithAggregatesFilter<"User"> | number
    maxBudget?: IntWithAggregatesFilter<"User"> | number
    preferredGender?: EnumGenderWithAggregatesFilter<"User"> | $Enums.Gender
    isSmoker?: BoolWithAggregatesFilter<"User"> | boolean
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    socialLevel?: IntWithAggregatesFilter<"User"> | number
    petsAllowed?: BoolWithAggregatesFilter<"User"> | boolean
    cleanliness?: EnumCleanlinessWithAggregatesFilter<"User"> | $Enums.Cleanliness
    hobbies?: StringNullableWithAggregatesFilter<"User"> | string | null
    sleepSchedule?: EnumSleepScheduleWithAggregatesFilter<"User"> | $Enums.SleepSchedule
    profileCompleted?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type ConnectionWhereInput = {
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id?: StringFilter<"Connection"> | string
    status?: EnumConnectionStatusFilter<"Connection"> | $Enums.ConnectionStatus
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
    initiatorId?: StringFilter<"Connection"> | string
    recipientId?: StringFilter<"Connection"> | string
    compatibilityScore?: FloatNullableFilter<"Connection"> | number | null
    notes?: StringNullableFilter<"Connection"> | string | null
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConnectionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    initiatorId?: SortOrder
    recipientId?: SortOrder
    compatibilityScore?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    initiator?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type ConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    initiatorId_recipientId?: ConnectionInitiatorIdRecipientIdCompoundUniqueInput
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    status?: EnumConnectionStatusFilter<"Connection"> | $Enums.ConnectionStatus
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
    initiatorId?: StringFilter<"Connection"> | string
    recipientId?: StringFilter<"Connection"> | string
    compatibilityScore?: FloatNullableFilter<"Connection"> | number | null
    notes?: StringNullableFilter<"Connection"> | string | null
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "initiatorId_recipientId">

  export type ConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    initiatorId?: SortOrder
    recipientId?: SortOrder
    compatibilityScore?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _avg?: ConnectionAvgOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
    _sum?: ConnectionSumOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    OR?: ConnectionScalarWhereWithAggregatesInput[]
    NOT?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Connection"> | string
    status?: EnumConnectionStatusWithAggregatesFilter<"Connection"> | $Enums.ConnectionStatus
    createdAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
    initiatorId?: StringWithAggregatesFilter<"Connection"> | string
    recipientId?: StringWithAggregatesFilter<"Connection"> | string
    compatibilityScore?: FloatNullableWithAggregatesFilter<"Connection"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Connection"> | string | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    userId?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    area?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    area?: SortOrder
    country?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    city?: StringFilter<"Location"> | string
    area?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    area?: SortOrder
    country?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    userId?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    area?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
  }

  export type MatchResultWhereInput = {
    AND?: MatchResultWhereInput | MatchResultWhereInput[]
    OR?: MatchResultWhereInput[]
    NOT?: MatchResultWhereInput | MatchResultWhereInput[]
    id?: StringFilter<"MatchResult"> | string
    userId?: StringFilter<"MatchResult"> | string
    matchedUserId?: StringFilter<"MatchResult"> | string
    compatibilityScore?: FloatFilter<"MatchResult"> | number
    createdAt?: DateTimeFilter<"MatchResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchResultOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedUserId?: SortOrder
    compatibilityScore?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    matchedUser?: UserOrderByWithRelationInput
  }

  export type MatchResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchResultWhereInput | MatchResultWhereInput[]
    OR?: MatchResultWhereInput[]
    NOT?: MatchResultWhereInput | MatchResultWhereInput[]
    userId?: StringFilter<"MatchResult"> | string
    matchedUserId?: StringFilter<"MatchResult"> | string
    compatibilityScore?: FloatFilter<"MatchResult"> | number
    createdAt?: DateTimeFilter<"MatchResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matchedUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchResultOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedUserId?: SortOrder
    compatibilityScore?: SortOrder
    createdAt?: SortOrder
    _count?: MatchResultCountOrderByAggregateInput
    _avg?: MatchResultAvgOrderByAggregateInput
    _max?: MatchResultMaxOrderByAggregateInput
    _min?: MatchResultMinOrderByAggregateInput
    _sum?: MatchResultSumOrderByAggregateInput
  }

  export type MatchResultScalarWhereWithAggregatesInput = {
    AND?: MatchResultScalarWhereWithAggregatesInput | MatchResultScalarWhereWithAggregatesInput[]
    OR?: MatchResultScalarWhereWithAggregatesInput[]
    NOT?: MatchResultScalarWhereWithAggregatesInput | MatchResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchResult"> | string
    userId?: StringWithAggregatesFilter<"MatchResult"> | string
    matchedUserId?: StringWithAggregatesFilter<"MatchResult"> | string
    compatibilityScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MatchResult"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionCreateNestedManyWithoutRecipientInput
    location?: LocationCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionUncheckedCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionUncheckedCreateNestedManyWithoutRecipientInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultUncheckedCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUpdateManyWithoutRecipientNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUncheckedUpdateManyWithoutRecipientNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUncheckedUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConnectionCreateInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    compatibilityScore?: number | null
    notes?: string | null
    initiator: UserCreateNestedOneWithoutSentConnectionsInput
    recipient: UserCreateNestedOneWithoutReceivedConnectionsInput
  }

  export type ConnectionUncheckedCreateInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    initiatorId: string
    recipientId: string
    compatibilityScore?: number | null
    notes?: string | null
  }

  export type ConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    initiator?: UserUpdateOneRequiredWithoutSentConnectionsNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionCreateManyInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    initiatorId: string
    recipientId: string
    compatibilityScore?: number | null
    notes?: string | null
  }

  export type ConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationCreateInput = {
    id?: string
    city: string
    area: string
    country?: string
    user: UserCreateNestedOneWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    userId: string
    city: string
    area: string
    country?: string
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type LocationCreateManyInput = {
    id?: string
    userId: string
    city: string
    area: string
    country?: string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type MatchResultCreateInput = {
    id?: string
    compatibilityScore: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesAsUserInput
    matchedUser: UserCreateNestedOneWithoutMatchesAsMatchedUserInput
  }

  export type MatchResultUncheckedCreateInput = {
    id?: string
    userId: string
    matchedUserId: string
    compatibilityScore: number
    createdAt?: Date | string
  }

  export type MatchResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesAsUserNestedInput
    matchedUser?: UserUpdateOneRequiredWithoutMatchesAsMatchedUserNestedInput
  }

  export type MatchResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedUserId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultCreateManyInput = {
    id?: string
    userId: string
    matchedUserId: string
    compatibilityScore: number
    createdAt?: Date | string
  }

  export type MatchResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchedUserId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCleanlinessFilter<$PrismaModel = never> = {
    equals?: $Enums.Cleanliness | EnumCleanlinessFieldRefInput<$PrismaModel>
    in?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanlinessFilter<$PrismaModel> | $Enums.Cleanliness
  }

  export type EnumSleepScheduleFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepSchedule | EnumSleepScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepScheduleFilter<$PrismaModel> | $Enums.SleepSchedule
  }

  export type ConnectionListRelationFilter = {
    every?: ConnectionWhereInput
    some?: ConnectionWhereInput
    none?: ConnectionWhereInput
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type MatchResultListRelationFilter = {
    every?: MatchResultWhereInput
    some?: MatchResultWhereInput
    none?: MatchResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    preferredGender?: SortOrder
    isSmoker?: SortOrder
    bio?: SortOrder
    profilePictureUrl?: SortOrder
    socialLevel?: SortOrder
    petsAllowed?: SortOrder
    cleanliness?: SortOrder
    hobbies?: SortOrder
    sleepSchedule?: SortOrder
    profileCompleted?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    socialLevel?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    preferredGender?: SortOrder
    isSmoker?: SortOrder
    bio?: SortOrder
    profilePictureUrl?: SortOrder
    socialLevel?: SortOrder
    petsAllowed?: SortOrder
    cleanliness?: SortOrder
    hobbies?: SortOrder
    sleepSchedule?: SortOrder
    profileCompleted?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    preferredGender?: SortOrder
    isSmoker?: SortOrder
    bio?: SortOrder
    profilePictureUrl?: SortOrder
    socialLevel?: SortOrder
    petsAllowed?: SortOrder
    cleanliness?: SortOrder
    hobbies?: SortOrder
    sleepSchedule?: SortOrder
    profileCompleted?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
    minBudget?: SortOrder
    maxBudget?: SortOrder
    socialLevel?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCleanlinessWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cleanliness | EnumCleanlinessFieldRefInput<$PrismaModel>
    in?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanlinessWithAggregatesFilter<$PrismaModel> | $Enums.Cleanliness
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCleanlinessFilter<$PrismaModel>
    _max?: NestedEnumCleanlinessFilter<$PrismaModel>
  }

  export type EnumSleepScheduleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepSchedule | EnumSleepScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepScheduleWithAggregatesFilter<$PrismaModel> | $Enums.SleepSchedule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSleepScheduleFilter<$PrismaModel>
    _max?: NestedEnumSleepScheduleFilter<$PrismaModel>
  }

  export type EnumConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusFilter<$PrismaModel> | $Enums.ConnectionStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConnectionInitiatorIdRecipientIdCompoundUniqueInput = {
    initiatorId: string
    recipientId: string
  }

  export type ConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    initiatorId?: SortOrder
    recipientId?: SortOrder
    compatibilityScore?: SortOrder
    notes?: SortOrder
  }

  export type ConnectionAvgOrderByAggregateInput = {
    compatibilityScore?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    initiatorId?: SortOrder
    recipientId?: SortOrder
    compatibilityScore?: SortOrder
    notes?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    initiatorId?: SortOrder
    recipientId?: SortOrder
    compatibilityScore?: SortOrder
    notes?: SortOrder
  }

  export type ConnectionSumOrderByAggregateInput = {
    compatibilityScore?: SortOrder
  }

  export type EnumConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectionStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    area?: SortOrder
    country?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    area?: SortOrder
    country?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    area?: SortOrder
    country?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MatchResultCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedUserId?: SortOrder
    compatibilityScore?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchResultAvgOrderByAggregateInput = {
    compatibilityScore?: SortOrder
  }

  export type MatchResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedUserId?: SortOrder
    compatibilityScore?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchResultMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchedUserId?: SortOrder
    compatibilityScore?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchResultSumOrderByAggregateInput = {
    compatibilityScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConnectionCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<ConnectionCreateWithoutInitiatorInput, ConnectionUncheckedCreateWithoutInitiatorInput> | ConnectionCreateWithoutInitiatorInput[] | ConnectionUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutInitiatorInput | ConnectionCreateOrConnectWithoutInitiatorInput[]
    createMany?: ConnectionCreateManyInitiatorInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type ConnectionCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ConnectionCreateWithoutRecipientInput, ConnectionUncheckedCreateWithoutRecipientInput> | ConnectionCreateWithoutRecipientInput[] | ConnectionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutRecipientInput | ConnectionCreateOrConnectWithoutRecipientInput[]
    createMany?: ConnectionCreateManyRecipientInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type LocationCreateNestedOneWithoutUserInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    connect?: LocationWhereUniqueInput
  }

  export type MatchResultCreateNestedManyWithoutMatchedUserInput = {
    create?: XOR<MatchResultCreateWithoutMatchedUserInput, MatchResultUncheckedCreateWithoutMatchedUserInput> | MatchResultCreateWithoutMatchedUserInput[] | MatchResultUncheckedCreateWithoutMatchedUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutMatchedUserInput | MatchResultCreateOrConnectWithoutMatchedUserInput[]
    createMany?: MatchResultCreateManyMatchedUserInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type MatchResultCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type ConnectionUncheckedCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<ConnectionCreateWithoutInitiatorInput, ConnectionUncheckedCreateWithoutInitiatorInput> | ConnectionCreateWithoutInitiatorInput[] | ConnectionUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutInitiatorInput | ConnectionCreateOrConnectWithoutInitiatorInput[]
    createMany?: ConnectionCreateManyInitiatorInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type ConnectionUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ConnectionCreateWithoutRecipientInput, ConnectionUncheckedCreateWithoutRecipientInput> | ConnectionCreateWithoutRecipientInput[] | ConnectionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutRecipientInput | ConnectionCreateOrConnectWithoutRecipientInput[]
    createMany?: ConnectionCreateManyRecipientInputEnvelope
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    connect?: LocationWhereUniqueInput
  }

  export type MatchResultUncheckedCreateNestedManyWithoutMatchedUserInput = {
    create?: XOR<MatchResultCreateWithoutMatchedUserInput, MatchResultUncheckedCreateWithoutMatchedUserInput> | MatchResultCreateWithoutMatchedUserInput[] | MatchResultUncheckedCreateWithoutMatchedUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutMatchedUserInput | MatchResultCreateOrConnectWithoutMatchedUserInput[]
    createMany?: MatchResultCreateManyMatchedUserInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type MatchResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCleanlinessFieldUpdateOperationsInput = {
    set?: $Enums.Cleanliness
  }

  export type EnumSleepScheduleFieldUpdateOperationsInput = {
    set?: $Enums.SleepSchedule
  }

  export type ConnectionUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<ConnectionCreateWithoutInitiatorInput, ConnectionUncheckedCreateWithoutInitiatorInput> | ConnectionCreateWithoutInitiatorInput[] | ConnectionUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutInitiatorInput | ConnectionCreateOrConnectWithoutInitiatorInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutInitiatorInput | ConnectionUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: ConnectionCreateManyInitiatorInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutInitiatorInput | ConnectionUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutInitiatorInput | ConnectionUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type ConnectionUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ConnectionCreateWithoutRecipientInput, ConnectionUncheckedCreateWithoutRecipientInput> | ConnectionCreateWithoutRecipientInput[] | ConnectionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutRecipientInput | ConnectionCreateOrConnectWithoutRecipientInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutRecipientInput | ConnectionUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ConnectionCreateManyRecipientInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutRecipientInput | ConnectionUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutRecipientInput | ConnectionUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type LocationUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    upsert?: LocationUpsertWithoutUserInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUserInput, LocationUpdateWithoutUserInput>, LocationUncheckedUpdateWithoutUserInput>
  }

  export type MatchResultUpdateManyWithoutMatchedUserNestedInput = {
    create?: XOR<MatchResultCreateWithoutMatchedUserInput, MatchResultUncheckedCreateWithoutMatchedUserInput> | MatchResultCreateWithoutMatchedUserInput[] | MatchResultUncheckedCreateWithoutMatchedUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutMatchedUserInput | MatchResultCreateOrConnectWithoutMatchedUserInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutMatchedUserInput | MatchResultUpsertWithWhereUniqueWithoutMatchedUserInput[]
    createMany?: MatchResultCreateManyMatchedUserInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutMatchedUserInput | MatchResultUpdateWithWhereUniqueWithoutMatchedUserInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutMatchedUserInput | MatchResultUpdateManyWithWhereWithoutMatchedUserInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type MatchResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutUserInput | MatchResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutUserInput | MatchResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutUserInput | MatchResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type ConnectionUncheckedUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<ConnectionCreateWithoutInitiatorInput, ConnectionUncheckedCreateWithoutInitiatorInput> | ConnectionCreateWithoutInitiatorInput[] | ConnectionUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutInitiatorInput | ConnectionCreateOrConnectWithoutInitiatorInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutInitiatorInput | ConnectionUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: ConnectionCreateManyInitiatorInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutInitiatorInput | ConnectionUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutInitiatorInput | ConnectionUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type ConnectionUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ConnectionCreateWithoutRecipientInput, ConnectionUncheckedCreateWithoutRecipientInput> | ConnectionCreateWithoutRecipientInput[] | ConnectionUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ConnectionCreateOrConnectWithoutRecipientInput | ConnectionCreateOrConnectWithoutRecipientInput[]
    upsert?: ConnectionUpsertWithWhereUniqueWithoutRecipientInput | ConnectionUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ConnectionCreateManyRecipientInputEnvelope
    set?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    disconnect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    delete?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    connect?: ConnectionWhereUniqueInput | ConnectionWhereUniqueInput[]
    update?: ConnectionUpdateWithWhereUniqueWithoutRecipientInput | ConnectionUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ConnectionUpdateManyWithWhereWithoutRecipientInput | ConnectionUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
  }

  export type LocationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    connectOrCreate?: LocationCreateOrConnectWithoutUserInput
    upsert?: LocationUpsertWithoutUserInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutUserInput, LocationUpdateWithoutUserInput>, LocationUncheckedUpdateWithoutUserInput>
  }

  export type MatchResultUncheckedUpdateManyWithoutMatchedUserNestedInput = {
    create?: XOR<MatchResultCreateWithoutMatchedUserInput, MatchResultUncheckedCreateWithoutMatchedUserInput> | MatchResultCreateWithoutMatchedUserInput[] | MatchResultUncheckedCreateWithoutMatchedUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutMatchedUserInput | MatchResultCreateOrConnectWithoutMatchedUserInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutMatchedUserInput | MatchResultUpsertWithWhereUniqueWithoutMatchedUserInput[]
    createMany?: MatchResultCreateManyMatchedUserInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutMatchedUserInput | MatchResultUpdateWithWhereUniqueWithoutMatchedUserInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutMatchedUserInput | MatchResultUpdateManyWithWhereWithoutMatchedUserInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type MatchResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutUserInput | MatchResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutUserInput | MatchResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutUserInput | MatchResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentConnectionsInput = {
    create?: XOR<UserCreateWithoutSentConnectionsInput, UserUncheckedCreateWithoutSentConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedConnectionsInput = {
    create?: XOR<UserCreateWithoutReceivedConnectionsInput, UserUncheckedCreateWithoutReceivedConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedConnectionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumConnectionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ConnectionStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSentConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutSentConnectionsInput, UserUncheckedCreateWithoutSentConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentConnectionsInput
    upsert?: UserUpsertWithoutSentConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentConnectionsInput, UserUpdateWithoutSentConnectionsInput>, UserUncheckedUpdateWithoutSentConnectionsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedConnectionsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedConnectionsInput, UserUncheckedCreateWithoutReceivedConnectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedConnectionsInput
    upsert?: UserUpsertWithoutReceivedConnectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedConnectionsInput, UserUpdateWithoutReceivedConnectionsInput>, UserUncheckedUpdateWithoutReceivedConnectionsInput>
  }

  export type UserCreateNestedOneWithoutLocationInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLocationNestedInput = {
    create?: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationInput
    upsert?: UserUpsertWithoutLocationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationInput, UserUpdateWithoutLocationInput>, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserCreateNestedOneWithoutMatchesAsUserInput = {
    create?: XOR<UserCreateWithoutMatchesAsUserInput, UserUncheckedCreateWithoutMatchesAsUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUserInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesAsMatchedUserInput = {
    create?: XOR<UserCreateWithoutMatchesAsMatchedUserInput, UserUncheckedCreateWithoutMatchesAsMatchedUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsMatchedUserInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMatchesAsUserNestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsUserInput, UserUncheckedCreateWithoutMatchesAsUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsUserInput
    upsert?: UserUpsertWithoutMatchesAsUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsUserInput, UserUpdateWithoutMatchesAsUserInput>, UserUncheckedUpdateWithoutMatchesAsUserInput>
  }

  export type UserUpdateOneRequiredWithoutMatchesAsMatchedUserNestedInput = {
    create?: XOR<UserCreateWithoutMatchesAsMatchedUserInput, UserUncheckedCreateWithoutMatchesAsMatchedUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesAsMatchedUserInput
    upsert?: UserUpsertWithoutMatchesAsMatchedUserInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesAsMatchedUserInput, UserUpdateWithoutMatchesAsMatchedUserInput>, UserUncheckedUpdateWithoutMatchesAsMatchedUserInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCleanlinessFilter<$PrismaModel = never> = {
    equals?: $Enums.Cleanliness | EnumCleanlinessFieldRefInput<$PrismaModel>
    in?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanlinessFilter<$PrismaModel> | $Enums.Cleanliness
  }

  export type NestedEnumSleepScheduleFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepSchedule | EnumSleepScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepScheduleFilter<$PrismaModel> | $Enums.SleepSchedule
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCleanlinessWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Cleanliness | EnumCleanlinessFieldRefInput<$PrismaModel>
    in?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    notIn?: $Enums.Cleanliness[] | ListEnumCleanlinessFieldRefInput<$PrismaModel>
    not?: NestedEnumCleanlinessWithAggregatesFilter<$PrismaModel> | $Enums.Cleanliness
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCleanlinessFilter<$PrismaModel>
    _max?: NestedEnumCleanlinessFilter<$PrismaModel>
  }

  export type NestedEnumSleepScheduleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SleepSchedule | EnumSleepScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    notIn?: $Enums.SleepSchedule[] | ListEnumSleepScheduleFieldRefInput<$PrismaModel>
    not?: NestedEnumSleepScheduleWithAggregatesFilter<$PrismaModel> | $Enums.SleepSchedule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSleepScheduleFilter<$PrismaModel>
    _max?: NestedEnumSleepScheduleFilter<$PrismaModel>
  }

  export type NestedEnumConnectionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusFilter<$PrismaModel> | $Enums.ConnectionStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionStatus | EnumConnectionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionStatus[] | ListEnumConnectionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionStatusFilter<$PrismaModel>
    _max?: NestedEnumConnectionStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConnectionCreateWithoutInitiatorInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    compatibilityScore?: number | null
    notes?: string | null
    recipient: UserCreateNestedOneWithoutReceivedConnectionsInput
  }

  export type ConnectionUncheckedCreateWithoutInitiatorInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    recipientId: string
    compatibilityScore?: number | null
    notes?: string | null
  }

  export type ConnectionCreateOrConnectWithoutInitiatorInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutInitiatorInput, ConnectionUncheckedCreateWithoutInitiatorInput>
  }

  export type ConnectionCreateManyInitiatorInputEnvelope = {
    data: ConnectionCreateManyInitiatorInput | ConnectionCreateManyInitiatorInput[]
    skipDuplicates?: boolean
  }

  export type ConnectionCreateWithoutRecipientInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    compatibilityScore?: number | null
    notes?: string | null
    initiator: UserCreateNestedOneWithoutSentConnectionsInput
  }

  export type ConnectionUncheckedCreateWithoutRecipientInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    initiatorId: string
    compatibilityScore?: number | null
    notes?: string | null
  }

  export type ConnectionCreateOrConnectWithoutRecipientInput = {
    where: ConnectionWhereUniqueInput
    create: XOR<ConnectionCreateWithoutRecipientInput, ConnectionUncheckedCreateWithoutRecipientInput>
  }

  export type ConnectionCreateManyRecipientInputEnvelope = {
    data: ConnectionCreateManyRecipientInput | ConnectionCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutUserInput = {
    id?: string
    city: string
    area: string
    country?: string
  }

  export type LocationUncheckedCreateWithoutUserInput = {
    id?: string
    city: string
    area: string
    country?: string
  }

  export type LocationCreateOrConnectWithoutUserInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
  }

  export type MatchResultCreateWithoutMatchedUserInput = {
    id?: string
    compatibilityScore: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesAsUserInput
  }

  export type MatchResultUncheckedCreateWithoutMatchedUserInput = {
    id?: string
    userId: string
    compatibilityScore: number
    createdAt?: Date | string
  }

  export type MatchResultCreateOrConnectWithoutMatchedUserInput = {
    where: MatchResultWhereUniqueInput
    create: XOR<MatchResultCreateWithoutMatchedUserInput, MatchResultUncheckedCreateWithoutMatchedUserInput>
  }

  export type MatchResultCreateManyMatchedUserInputEnvelope = {
    data: MatchResultCreateManyMatchedUserInput | MatchResultCreateManyMatchedUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchResultCreateWithoutUserInput = {
    id?: string
    compatibilityScore: number
    createdAt?: Date | string
    matchedUser: UserCreateNestedOneWithoutMatchesAsMatchedUserInput
  }

  export type MatchResultUncheckedCreateWithoutUserInput = {
    id?: string
    matchedUserId: string
    compatibilityScore: number
    createdAt?: Date | string
  }

  export type MatchResultCreateOrConnectWithoutUserInput = {
    where: MatchResultWhereUniqueInput
    create: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput>
  }

  export type MatchResultCreateManyUserInputEnvelope = {
    data: MatchResultCreateManyUserInput | MatchResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConnectionUpsertWithWhereUniqueWithoutInitiatorInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutInitiatorInput, ConnectionUncheckedUpdateWithoutInitiatorInput>
    create: XOR<ConnectionCreateWithoutInitiatorInput, ConnectionUncheckedCreateWithoutInitiatorInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutInitiatorInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutInitiatorInput, ConnectionUncheckedUpdateWithoutInitiatorInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutInitiatorInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutInitiatorInput>
  }

  export type ConnectionScalarWhereInput = {
    AND?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    OR?: ConnectionScalarWhereInput[]
    NOT?: ConnectionScalarWhereInput | ConnectionScalarWhereInput[]
    id?: StringFilter<"Connection"> | string
    status?: EnumConnectionStatusFilter<"Connection"> | $Enums.ConnectionStatus
    createdAt?: DateTimeFilter<"Connection"> | Date | string
    updatedAt?: DateTimeFilter<"Connection"> | Date | string
    initiatorId?: StringFilter<"Connection"> | string
    recipientId?: StringFilter<"Connection"> | string
    compatibilityScore?: FloatNullableFilter<"Connection"> | number | null
    notes?: StringNullableFilter<"Connection"> | string | null
  }

  export type ConnectionUpsertWithWhereUniqueWithoutRecipientInput = {
    where: ConnectionWhereUniqueInput
    update: XOR<ConnectionUpdateWithoutRecipientInput, ConnectionUncheckedUpdateWithoutRecipientInput>
    create: XOR<ConnectionCreateWithoutRecipientInput, ConnectionUncheckedCreateWithoutRecipientInput>
  }

  export type ConnectionUpdateWithWhereUniqueWithoutRecipientInput = {
    where: ConnectionWhereUniqueInput
    data: XOR<ConnectionUpdateWithoutRecipientInput, ConnectionUncheckedUpdateWithoutRecipientInput>
  }

  export type ConnectionUpdateManyWithWhereWithoutRecipientInput = {
    where: ConnectionScalarWhereInput
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyWithoutRecipientInput>
  }

  export type LocationUpsertWithoutUserInput = {
    update: XOR<LocationUpdateWithoutUserInput, LocationUncheckedUpdateWithoutUserInput>
    create: XOR<LocationCreateWithoutUserInput, LocationUncheckedCreateWithoutUserInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutUserInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutUserInput, LocationUncheckedUpdateWithoutUserInput>
  }

  export type LocationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type MatchResultUpsertWithWhereUniqueWithoutMatchedUserInput = {
    where: MatchResultWhereUniqueInput
    update: XOR<MatchResultUpdateWithoutMatchedUserInput, MatchResultUncheckedUpdateWithoutMatchedUserInput>
    create: XOR<MatchResultCreateWithoutMatchedUserInput, MatchResultUncheckedCreateWithoutMatchedUserInput>
  }

  export type MatchResultUpdateWithWhereUniqueWithoutMatchedUserInput = {
    where: MatchResultWhereUniqueInput
    data: XOR<MatchResultUpdateWithoutMatchedUserInput, MatchResultUncheckedUpdateWithoutMatchedUserInput>
  }

  export type MatchResultUpdateManyWithWhereWithoutMatchedUserInput = {
    where: MatchResultScalarWhereInput
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyWithoutMatchedUserInput>
  }

  export type MatchResultScalarWhereInput = {
    AND?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
    OR?: MatchResultScalarWhereInput[]
    NOT?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
    id?: StringFilter<"MatchResult"> | string
    userId?: StringFilter<"MatchResult"> | string
    matchedUserId?: StringFilter<"MatchResult"> | string
    compatibilityScore?: FloatFilter<"MatchResult"> | number
    createdAt?: DateTimeFilter<"MatchResult"> | Date | string
  }

  export type MatchResultUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchResultWhereUniqueInput
    update: XOR<MatchResultUpdateWithoutUserInput, MatchResultUncheckedUpdateWithoutUserInput>
    create: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput>
  }

  export type MatchResultUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchResultWhereUniqueInput
    data: XOR<MatchResultUpdateWithoutUserInput, MatchResultUncheckedUpdateWithoutUserInput>
  }

  export type MatchResultUpdateManyWithWhereWithoutUserInput = {
    where: MatchResultScalarWhereInput
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutSentConnectionsInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    receivedConnections?: ConnectionCreateNestedManyWithoutRecipientInput
    location?: LocationCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentConnectionsInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    receivedConnections?: ConnectionUncheckedCreateNestedManyWithoutRecipientInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultUncheckedCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentConnectionsInput, UserUncheckedCreateWithoutSentConnectionsInput>
  }

  export type UserCreateWithoutReceivedConnectionsInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionCreateNestedManyWithoutInitiatorInput
    location?: LocationCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReceivedConnectionsInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionUncheckedCreateNestedManyWithoutInitiatorInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultUncheckedCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReceivedConnectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedConnectionsInput, UserUncheckedCreateWithoutReceivedConnectionsInput>
  }

  export type UserUpsertWithoutSentConnectionsInput = {
    update: XOR<UserUpdateWithoutSentConnectionsInput, UserUncheckedUpdateWithoutSentConnectionsInput>
    create: XOR<UserCreateWithoutSentConnectionsInput, UserUncheckedCreateWithoutSentConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentConnectionsInput, UserUncheckedUpdateWithoutSentConnectionsInput>
  }

  export type UserUpdateWithoutSentConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    receivedConnections?: ConnectionUpdateManyWithoutRecipientNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    receivedConnections?: ConnectionUncheckedUpdateManyWithoutRecipientNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUncheckedUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReceivedConnectionsInput = {
    update: XOR<UserUpdateWithoutReceivedConnectionsInput, UserUncheckedUpdateWithoutReceivedConnectionsInput>
    create: XOR<UserCreateWithoutReceivedConnectionsInput, UserUncheckedCreateWithoutReceivedConnectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedConnectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedConnectionsInput, UserUncheckedUpdateWithoutReceivedConnectionsInput>
  }

  export type UserUpdateWithoutReceivedConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUpdateManyWithoutInitiatorNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUncheckedUpdateManyWithoutInitiatorNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUncheckedUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLocationInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionCreateNestedManyWithoutRecipientInput
    matchesAsMatchedUser?: MatchResultCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionUncheckedCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionUncheckedCreateNestedManyWithoutRecipientInput
    matchesAsMatchedUser?: MatchResultUncheckedCreateNestedManyWithoutMatchedUserInput
    matchesAsUser?: MatchResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
  }

  export type UserUpsertWithoutLocationInput = {
    update: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
    create: XOR<UserCreateWithoutLocationInput, UserUncheckedCreateWithoutLocationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationInput, UserUncheckedUpdateWithoutLocationInput>
  }

  export type UserUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUpdateManyWithoutRecipientNestedInput
    matchesAsMatchedUser?: MatchResultUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUncheckedUpdateManyWithoutRecipientNestedInput
    matchesAsMatchedUser?: MatchResultUncheckedUpdateManyWithoutMatchedUserNestedInput
    matchesAsUser?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMatchesAsUserInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionCreateNestedManyWithoutRecipientInput
    location?: LocationCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultCreateNestedManyWithoutMatchedUserInput
  }

  export type UserUncheckedCreateWithoutMatchesAsUserInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionUncheckedCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionUncheckedCreateNestedManyWithoutRecipientInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
    matchesAsMatchedUser?: MatchResultUncheckedCreateNestedManyWithoutMatchedUserInput
  }

  export type UserCreateOrConnectWithoutMatchesAsUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsUserInput, UserUncheckedCreateWithoutMatchesAsUserInput>
  }

  export type UserCreateWithoutMatchesAsMatchedUserInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionCreateNestedManyWithoutRecipientInput
    location?: LocationCreateNestedOneWithoutUserInput
    matchesAsUser?: MatchResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesAsMatchedUserInput = {
    id: string
    role: $Enums.Role
    createdAt?: Date | string
    name: string
    age: number
    gender: $Enums.Gender
    minBudget: number
    maxBudget: number
    preferredGender: $Enums.Gender
    isSmoker: boolean
    bio?: string | null
    profilePictureUrl?: string | null
    socialLevel: number
    petsAllowed: boolean
    cleanliness: $Enums.Cleanliness
    hobbies?: string | null
    sleepSchedule: $Enums.SleepSchedule
    profileCompleted: boolean
    sentConnections?: ConnectionUncheckedCreateNestedManyWithoutInitiatorInput
    receivedConnections?: ConnectionUncheckedCreateNestedManyWithoutRecipientInput
    location?: LocationUncheckedCreateNestedOneWithoutUserInput
    matchesAsUser?: MatchResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesAsMatchedUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesAsMatchedUserInput, UserUncheckedCreateWithoutMatchesAsMatchedUserInput>
  }

  export type UserUpsertWithoutMatchesAsUserInput = {
    update: XOR<UserUpdateWithoutMatchesAsUserInput, UserUncheckedUpdateWithoutMatchesAsUserInput>
    create: XOR<UserCreateWithoutMatchesAsUserInput, UserUncheckedCreateWithoutMatchesAsUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsUserInput, UserUncheckedUpdateWithoutMatchesAsUserInput>
  }

  export type UserUpdateWithoutMatchesAsUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUpdateManyWithoutRecipientNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUpdateManyWithoutMatchedUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUncheckedUpdateManyWithoutRecipientNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
    matchesAsMatchedUser?: MatchResultUncheckedUpdateManyWithoutMatchedUserNestedInput
  }

  export type UserUpsertWithoutMatchesAsMatchedUserInput = {
    update: XOR<UserUpdateWithoutMatchesAsMatchedUserInput, UserUncheckedUpdateWithoutMatchesAsMatchedUserInput>
    create: XOR<UserCreateWithoutMatchesAsMatchedUserInput, UserUncheckedCreateWithoutMatchesAsMatchedUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesAsMatchedUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesAsMatchedUserInput, UserUncheckedUpdateWithoutMatchesAsMatchedUserInput>
  }

  export type UserUpdateWithoutMatchesAsMatchedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUpdateManyWithoutRecipientNestedInput
    location?: LocationUpdateOneWithoutUserNestedInput
    matchesAsUser?: MatchResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesAsMatchedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    minBudget?: IntFieldUpdateOperationsInput | number
    maxBudget?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isSmoker?: BoolFieldUpdateOperationsInput | boolean
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLevel?: IntFieldUpdateOperationsInput | number
    petsAllowed?: BoolFieldUpdateOperationsInput | boolean
    cleanliness?: EnumCleanlinessFieldUpdateOperationsInput | $Enums.Cleanliness
    hobbies?: NullableStringFieldUpdateOperationsInput | string | null
    sleepSchedule?: EnumSleepScheduleFieldUpdateOperationsInput | $Enums.SleepSchedule
    profileCompleted?: BoolFieldUpdateOperationsInput | boolean
    sentConnections?: ConnectionUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedConnections?: ConnectionUncheckedUpdateManyWithoutRecipientNestedInput
    location?: LocationUncheckedUpdateOneWithoutUserNestedInput
    matchesAsUser?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConnectionCreateManyInitiatorInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    recipientId: string
    compatibilityScore?: number | null
    notes?: string | null
  }

  export type ConnectionCreateManyRecipientInput = {
    id?: string
    status: $Enums.ConnectionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    initiatorId: string
    compatibilityScore?: number | null
    notes?: string | null
  }

  export type MatchResultCreateManyMatchedUserInput = {
    id?: string
    userId: string
    compatibilityScore: number
    createdAt?: Date | string
  }

  export type MatchResultCreateManyUserInput = {
    id?: string
    matchedUserId: string
    compatibilityScore: number
    createdAt?: Date | string
  }

  export type ConnectionUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recipient?: UserUpdateOneRequiredWithoutReceivedConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionUncheckedUpdateManyWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    initiator?: UserUpdateOneRequiredWithoutSentConnectionsNestedInput
  }

  export type ConnectionUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumConnectionStatusFieldUpdateOperationsInput | $Enums.ConnectionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchResultUpdateWithoutMatchedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesAsUserNestedInput
  }

  export type MatchResultUncheckedUpdateWithoutMatchedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUncheckedUpdateManyWithoutMatchedUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchedUser?: UserUpdateOneRequiredWithoutMatchesAsMatchedUserNestedInput
  }

  export type MatchResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedUserId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchedUserId?: StringFieldUpdateOperationsInput | string
    compatibilityScore?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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