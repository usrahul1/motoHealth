
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
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model UserVehicles
 * 
 */
export type UserVehicles = $Result.DefaultSelection<Prisma.$UserVehiclesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vehicles
 * const vehicles = await prisma.vehicle.findMany()
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
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
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
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVehicles`: Exposes CRUD operations for the **UserVehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVehicles
    * const userVehicles = await prisma.userVehicles.findMany()
    * ```
    */
  get userVehicles(): Prisma.UserVehiclesDelegate<ExtArgs, ClientOptions>;
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
    Vehicle: 'Vehicle',
    UserVehicles: 'UserVehicles'
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
      modelProps: "vehicle" | "userVehicles"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      UserVehicles: {
        payload: Prisma.$UserVehiclesPayload<ExtArgs>
        fields: Prisma.UserVehiclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVehiclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVehiclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>
          }
          findFirst: {
            args: Prisma.UserVehiclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVehiclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>
          }
          findMany: {
            args: Prisma.UserVehiclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>[]
          }
          create: {
            args: Prisma.UserVehiclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>
          }
          createMany: {
            args: Prisma.UserVehiclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVehiclesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>[]
          }
          delete: {
            args: Prisma.UserVehiclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>
          }
          update: {
            args: Prisma.UserVehiclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>
          }
          deleteMany: {
            args: Prisma.UserVehiclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVehiclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserVehiclesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>[]
          }
          upsert: {
            args: Prisma.UserVehiclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVehiclesPayload>
          }
          aggregate: {
            args: Prisma.UserVehiclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVehicles>
          }
          groupBy: {
            args: Prisma.UserVehiclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVehiclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVehiclesCountArgs<ExtArgs>
            result: $Utils.Optional<UserVehiclesCountAggregateOutputType> | number
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
    vehicle?: VehicleOmit
    userVehicles?: UserVehiclesOmit
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
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    userVehicles: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userVehicles?: boolean | VehicleCountOutputTypeCountUserVehiclesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountUserVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVehiclesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
    mileage: number | null
    service: number | null
    parts: number | null
    insurance: number | null
    safety: number | null
    fuelTankCapacity: number | null
    batteryCapacity: number | null
    price: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    mileage: number | null
    service: number | null
    parts: number | null
    insurance: number | null
    safety: number | null
    fuelTankCapacity: number | null
    batteryCapacity: number | null
    price: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    mileage: number | null
    isElectric: boolean | null
    service: number | null
    parts: number | null
    insurance: number | null
    safety: number | null
    fuelTankCapacity: number | null
    batteryCapacity: number | null
    price: number | null
    imageUrl: string | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    brand: string | null
    model: string | null
    year: number | null
    mileage: number | null
    isElectric: boolean | null
    service: number | null
    parts: number | null
    insurance: number | null
    safety: number | null
    fuelTankCapacity: number | null
    batteryCapacity: number | null
    price: number | null
    imageUrl: string | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    brand: number
    model: number
    year: number
    mileage: number
    isElectric: number
    service: number
    parts: number
    insurance: number
    safety: number
    fuelTankCapacity: number
    batteryCapacity: number
    price: number
    imageUrl: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    mileage?: true
    service?: true
    parts?: true
    insurance?: true
    safety?: true
    fuelTankCapacity?: true
    batteryCapacity?: true
    price?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    mileage?: true
    service?: true
    parts?: true
    insurance?: true
    safety?: true
    fuelTankCapacity?: true
    batteryCapacity?: true
    price?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    mileage?: true
    isElectric?: true
    service?: true
    parts?: true
    insurance?: true
    safety?: true
    fuelTankCapacity?: true
    batteryCapacity?: true
    price?: true
    imageUrl?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    mileage?: true
    isElectric?: true
    service?: true
    parts?: true
    insurance?: true
    safety?: true
    fuelTankCapacity?: true
    batteryCapacity?: true
    price?: true
    imageUrl?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    brand?: true
    model?: true
    year?: true
    mileage?: true
    isElectric?: true
    service?: true
    parts?: true
    insurance?: true
    safety?: true
    fuelTankCapacity?: true
    batteryCapacity?: true
    price?: true
    imageUrl?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    brand: string
    model: string
    year: number
    mileage: number
    isElectric: boolean
    service: number
    parts: number
    insurance: number
    safety: number
    fuelTankCapacity: number | null
    batteryCapacity: number | null
    price: number
    imageUrl: string | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    mileage?: boolean
    isElectric?: boolean
    service?: boolean
    parts?: boolean
    insurance?: boolean
    safety?: boolean
    fuelTankCapacity?: boolean
    batteryCapacity?: boolean
    price?: boolean
    imageUrl?: boolean
    userVehicles?: boolean | Vehicle$userVehiclesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    mileage?: boolean
    isElectric?: boolean
    service?: boolean
    parts?: boolean
    insurance?: boolean
    safety?: boolean
    fuelTankCapacity?: boolean
    batteryCapacity?: boolean
    price?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    mileage?: boolean
    isElectric?: boolean
    service?: boolean
    parts?: boolean
    insurance?: boolean
    safety?: boolean
    fuelTankCapacity?: boolean
    batteryCapacity?: boolean
    price?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    brand?: boolean
    model?: boolean
    year?: boolean
    mileage?: boolean
    isElectric?: boolean
    service?: boolean
    parts?: boolean
    insurance?: boolean
    safety?: boolean
    fuelTankCapacity?: boolean
    batteryCapacity?: boolean
    price?: boolean
    imageUrl?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "model" | "year" | "mileage" | "isElectric" | "service" | "parts" | "insurance" | "safety" | "fuelTankCapacity" | "batteryCapacity" | "price" | "imageUrl", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userVehicles?: boolean | Vehicle$userVehiclesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      userVehicles: Prisma.$UserVehiclesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      brand: string
      model: string
      year: number
      mileage: number
      isElectric: boolean
      service: number
      parts: number
      insurance: number
      safety: number
      fuelTankCapacity: number | null
      batteryCapacity: number | null
      price: number
      imageUrl: string | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userVehicles<T extends Vehicle$userVehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$userVehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly mileage: FieldRef<"Vehicle", 'Int'>
    readonly isElectric: FieldRef<"Vehicle", 'Boolean'>
    readonly service: FieldRef<"Vehicle", 'Float'>
    readonly parts: FieldRef<"Vehicle", 'Float'>
    readonly insurance: FieldRef<"Vehicle", 'Float'>
    readonly safety: FieldRef<"Vehicle", 'Float'>
    readonly fuelTankCapacity: FieldRef<"Vehicle", 'Float'>
    readonly batteryCapacity: FieldRef<"Vehicle", 'Float'>
    readonly price: FieldRef<"Vehicle", 'Float'>
    readonly imageUrl: FieldRef<"Vehicle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.userVehicles
   */
  export type Vehicle$userVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    where?: UserVehiclesWhereInput
    orderBy?: UserVehiclesOrderByWithRelationInput | UserVehiclesOrderByWithRelationInput[]
    cursor?: UserVehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVehiclesScalarFieldEnum | UserVehiclesScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model UserVehicles
   */

  export type AggregateUserVehicles = {
    _count: UserVehiclesCountAggregateOutputType | null
    _min: UserVehiclesMinAggregateOutputType | null
    _max: UserVehiclesMaxAggregateOutputType | null
  }

  export type UserVehiclesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    vehicleId: string | null
  }

  export type UserVehiclesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    vehicleId: string | null
  }

  export type UserVehiclesCountAggregateOutputType = {
    id: number
    userId: number
    vehicleId: number
    _all: number
  }


  export type UserVehiclesMinAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
  }

  export type UserVehiclesMaxAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
  }

  export type UserVehiclesCountAggregateInputType = {
    id?: true
    userId?: true
    vehicleId?: true
    _all?: true
  }

  export type UserVehiclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVehicles to aggregate.
     */
    where?: UserVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehiclesOrderByWithRelationInput | UserVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVehicles
    **/
    _count?: true | UserVehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVehiclesMaxAggregateInputType
  }

  export type GetUserVehiclesAggregateType<T extends UserVehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVehicles[P]>
      : GetScalarType<T[P], AggregateUserVehicles[P]>
  }




  export type UserVehiclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVehiclesWhereInput
    orderBy?: UserVehiclesOrderByWithAggregationInput | UserVehiclesOrderByWithAggregationInput[]
    by: UserVehiclesScalarFieldEnum[] | UserVehiclesScalarFieldEnum
    having?: UserVehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVehiclesCountAggregateInputType | true
    _min?: UserVehiclesMinAggregateInputType
    _max?: UserVehiclesMaxAggregateInputType
  }

  export type UserVehiclesGroupByOutputType = {
    id: string
    userId: string
    vehicleId: string
    _count: UserVehiclesCountAggregateOutputType | null
    _min: UserVehiclesMinAggregateOutputType | null
    _max: UserVehiclesMaxAggregateOutputType | null
  }

  type GetUserVehiclesGroupByPayload<T extends UserVehiclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], UserVehiclesGroupByOutputType[P]>
        }
      >
    >


  export type UserVehiclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVehicles"]>

  export type UserVehiclesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVehicles"]>

  export type UserVehiclesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVehicles"]>

  export type UserVehiclesSelectScalar = {
    id?: boolean
    userId?: boolean
    vehicleId?: boolean
  }

  export type UserVehiclesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "vehicleId", ExtArgs["result"]["userVehicles"]>
  export type UserVehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type UserVehiclesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type UserVehiclesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $UserVehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVehicles"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      vehicleId: string
    }, ExtArgs["result"]["userVehicles"]>
    composites: {}
  }

  type UserVehiclesGetPayload<S extends boolean | null | undefined | UserVehiclesDefaultArgs> = $Result.GetResult<Prisma.$UserVehiclesPayload, S>

  type UserVehiclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVehiclesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVehiclesCountAggregateInputType | true
    }

  export interface UserVehiclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVehicles'], meta: { name: 'UserVehicles' } }
    /**
     * Find zero or one UserVehicles that matches the filter.
     * @param {UserVehiclesFindUniqueArgs} args - Arguments to find a UserVehicles
     * @example
     * // Get one UserVehicles
     * const userVehicles = await prisma.userVehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVehiclesFindUniqueArgs>(args: SelectSubset<T, UserVehiclesFindUniqueArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVehicles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVehiclesFindUniqueOrThrowArgs} args - Arguments to find a UserVehicles
     * @example
     * // Get one UserVehicles
     * const userVehicles = await prisma.userVehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVehiclesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVehiclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehiclesFindFirstArgs} args - Arguments to find a UserVehicles
     * @example
     * // Get one UserVehicles
     * const userVehicles = await prisma.userVehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVehiclesFindFirstArgs>(args?: SelectSubset<T, UserVehiclesFindFirstArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVehicles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehiclesFindFirstOrThrowArgs} args - Arguments to find a UserVehicles
     * @example
     * // Get one UserVehicles
     * const userVehicles = await prisma.userVehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVehiclesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVehiclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehiclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVehicles
     * const userVehicles = await prisma.userVehicles.findMany()
     * 
     * // Get first 10 UserVehicles
     * const userVehicles = await prisma.userVehicles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVehiclesWithIdOnly = await prisma.userVehicles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVehiclesFindManyArgs>(args?: SelectSubset<T, UserVehiclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVehicles.
     * @param {UserVehiclesCreateArgs} args - Arguments to create a UserVehicles.
     * @example
     * // Create one UserVehicles
     * const UserVehicles = await prisma.userVehicles.create({
     *   data: {
     *     // ... data to create a UserVehicles
     *   }
     * })
     * 
     */
    create<T extends UserVehiclesCreateArgs>(args: SelectSubset<T, UserVehiclesCreateArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVehicles.
     * @param {UserVehiclesCreateManyArgs} args - Arguments to create many UserVehicles.
     * @example
     * // Create many UserVehicles
     * const userVehicles = await prisma.userVehicles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVehiclesCreateManyArgs>(args?: SelectSubset<T, UserVehiclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVehicles and returns the data saved in the database.
     * @param {UserVehiclesCreateManyAndReturnArgs} args - Arguments to create many UserVehicles.
     * @example
     * // Create many UserVehicles
     * const userVehicles = await prisma.userVehicles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVehicles and only return the `id`
     * const userVehiclesWithIdOnly = await prisma.userVehicles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVehiclesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVehiclesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserVehicles.
     * @param {UserVehiclesDeleteArgs} args - Arguments to delete one UserVehicles.
     * @example
     * // Delete one UserVehicles
     * const UserVehicles = await prisma.userVehicles.delete({
     *   where: {
     *     // ... filter to delete one UserVehicles
     *   }
     * })
     * 
     */
    delete<T extends UserVehiclesDeleteArgs>(args: SelectSubset<T, UserVehiclesDeleteArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVehicles.
     * @param {UserVehiclesUpdateArgs} args - Arguments to update one UserVehicles.
     * @example
     * // Update one UserVehicles
     * const userVehicles = await prisma.userVehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVehiclesUpdateArgs>(args: SelectSubset<T, UserVehiclesUpdateArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVehicles.
     * @param {UserVehiclesDeleteManyArgs} args - Arguments to filter UserVehicles to delete.
     * @example
     * // Delete a few UserVehicles
     * const { count } = await prisma.userVehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVehiclesDeleteManyArgs>(args?: SelectSubset<T, UserVehiclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVehicles
     * const userVehicles = await prisma.userVehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVehiclesUpdateManyArgs>(args: SelectSubset<T, UserVehiclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVehicles and returns the data updated in the database.
     * @param {UserVehiclesUpdateManyAndReturnArgs} args - Arguments to update many UserVehicles.
     * @example
     * // Update many UserVehicles
     * const userVehicles = await prisma.userVehicles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserVehicles and only return the `id`
     * const userVehiclesWithIdOnly = await prisma.userVehicles.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserVehiclesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserVehiclesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserVehicles.
     * @param {UserVehiclesUpsertArgs} args - Arguments to update or create a UserVehicles.
     * @example
     * // Update or create a UserVehicles
     * const userVehicles = await prisma.userVehicles.upsert({
     *   create: {
     *     // ... data to create a UserVehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVehicles we want to update
     *   }
     * })
     */
    upsert<T extends UserVehiclesUpsertArgs>(args: SelectSubset<T, UserVehiclesUpsertArgs<ExtArgs>>): Prisma__UserVehiclesClient<$Result.GetResult<Prisma.$UserVehiclesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehiclesCountArgs} args - Arguments to filter UserVehicles to count.
     * @example
     * // Count the number of UserVehicles
     * const count = await prisma.userVehicles.count({
     *   where: {
     *     // ... the filter for the UserVehicles we want to count
     *   }
     * })
    **/
    count<T extends UserVehiclesCountArgs>(
      args?: Subset<T, UserVehiclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserVehiclesAggregateArgs>(args: Subset<T, UserVehiclesAggregateArgs>): Prisma.PrismaPromise<GetUserVehiclesAggregateType<T>>

    /**
     * Group by UserVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVehiclesGroupByArgs} args - Group by arguments.
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
      T extends UserVehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVehiclesGroupByArgs['orderBy'] }
        : { orderBy?: UserVehiclesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserVehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVehiclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVehicles model
   */
  readonly fields: UserVehiclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVehiclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserVehicles model
   */
  interface UserVehiclesFieldRefs {
    readonly id: FieldRef<"UserVehicles", 'String'>
    readonly userId: FieldRef<"UserVehicles", 'String'>
    readonly vehicleId: FieldRef<"UserVehicles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserVehicles findUnique
   */
  export type UserVehiclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicles to fetch.
     */
    where: UserVehiclesWhereUniqueInput
  }

  /**
   * UserVehicles findUniqueOrThrow
   */
  export type UserVehiclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicles to fetch.
     */
    where: UserVehiclesWhereUniqueInput
  }

  /**
   * UserVehicles findFirst
   */
  export type UserVehiclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicles to fetch.
     */
    where?: UserVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehiclesOrderByWithRelationInput | UserVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVehicles.
     */
    cursor?: UserVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVehicles.
     */
    distinct?: UserVehiclesScalarFieldEnum | UserVehiclesScalarFieldEnum[]
  }

  /**
   * UserVehicles findFirstOrThrow
   */
  export type UserVehiclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicles to fetch.
     */
    where?: UserVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehiclesOrderByWithRelationInput | UserVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVehicles.
     */
    cursor?: UserVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVehicles.
     */
    distinct?: UserVehiclesScalarFieldEnum | UserVehiclesScalarFieldEnum[]
  }

  /**
   * UserVehicles findMany
   */
  export type UserVehiclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * Filter, which UserVehicles to fetch.
     */
    where?: UserVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVehicles to fetch.
     */
    orderBy?: UserVehiclesOrderByWithRelationInput | UserVehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVehicles.
     */
    cursor?: UserVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVehicles.
     */
    skip?: number
    distinct?: UserVehiclesScalarFieldEnum | UserVehiclesScalarFieldEnum[]
  }

  /**
   * UserVehicles create
   */
  export type UserVehiclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVehicles.
     */
    data: XOR<UserVehiclesCreateInput, UserVehiclesUncheckedCreateInput>
  }

  /**
   * UserVehicles createMany
   */
  export type UserVehiclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVehicles.
     */
    data: UserVehiclesCreateManyInput | UserVehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVehicles createManyAndReturn
   */
  export type UserVehiclesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * The data used to create many UserVehicles.
     */
    data: UserVehiclesCreateManyInput | UserVehiclesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVehicles update
   */
  export type UserVehiclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVehicles.
     */
    data: XOR<UserVehiclesUpdateInput, UserVehiclesUncheckedUpdateInput>
    /**
     * Choose, which UserVehicles to update.
     */
    where: UserVehiclesWhereUniqueInput
  }

  /**
   * UserVehicles updateMany
   */
  export type UserVehiclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVehicles.
     */
    data: XOR<UserVehiclesUpdateManyMutationInput, UserVehiclesUncheckedUpdateManyInput>
    /**
     * Filter which UserVehicles to update
     */
    where?: UserVehiclesWhereInput
    /**
     * Limit how many UserVehicles to update.
     */
    limit?: number
  }

  /**
   * UserVehicles updateManyAndReturn
   */
  export type UserVehiclesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * The data used to update UserVehicles.
     */
    data: XOR<UserVehiclesUpdateManyMutationInput, UserVehiclesUncheckedUpdateManyInput>
    /**
     * Filter which UserVehicles to update
     */
    where?: UserVehiclesWhereInput
    /**
     * Limit how many UserVehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVehicles upsert
   */
  export type UserVehiclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVehicles to update in case it exists.
     */
    where: UserVehiclesWhereUniqueInput
    /**
     * In case the UserVehicles found by the `where` argument doesn't exist, create a new UserVehicles with this data.
     */
    create: XOR<UserVehiclesCreateInput, UserVehiclesUncheckedCreateInput>
    /**
     * In case the UserVehicles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVehiclesUpdateInput, UserVehiclesUncheckedUpdateInput>
  }

  /**
   * UserVehicles delete
   */
  export type UserVehiclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
    /**
     * Filter which UserVehicles to delete.
     */
    where: UserVehiclesWhereUniqueInput
  }

  /**
   * UserVehicles deleteMany
   */
  export type UserVehiclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVehicles to delete
     */
    where?: UserVehiclesWhereInput
    /**
     * Limit how many UserVehicles to delete.
     */
    limit?: number
  }

  /**
   * UserVehicles without action
   */
  export type UserVehiclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVehicles
     */
    select?: UserVehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVehicles
     */
    omit?: UserVehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVehiclesInclude<ExtArgs> | null
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


  export const VehicleScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    model: 'model',
    year: 'year',
    mileage: 'mileage',
    isElectric: 'isElectric',
    service: 'service',
    parts: 'parts',
    insurance: 'insurance',
    safety: 'safety',
    fuelTankCapacity: 'fuelTankCapacity',
    batteryCapacity: 'batteryCapacity',
    price: 'price',
    imageUrl: 'imageUrl'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const UserVehiclesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    vehicleId: 'vehicleId'
  };

  export type UserVehiclesScalarFieldEnum = (typeof UserVehiclesScalarFieldEnum)[keyof typeof UserVehiclesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    mileage?: IntFilter<"Vehicle"> | number
    isElectric?: BoolFilter<"Vehicle"> | boolean
    service?: FloatFilter<"Vehicle"> | number
    parts?: FloatFilter<"Vehicle"> | number
    insurance?: FloatFilter<"Vehicle"> | number
    safety?: FloatFilter<"Vehicle"> | number
    fuelTankCapacity?: FloatNullableFilter<"Vehicle"> | number | null
    batteryCapacity?: FloatNullableFilter<"Vehicle"> | number | null
    price?: FloatFilter<"Vehicle"> | number
    imageUrl?: StringNullableFilter<"Vehicle"> | string | null
    userVehicles?: UserVehiclesListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    isElectric?: SortOrder
    service?: SortOrder
    parts?: SortOrder
    insurance?: SortOrder
    safety?: SortOrder
    fuelTankCapacity?: SortOrderInput | SortOrder
    batteryCapacity?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    userVehicles?: UserVehiclesOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    brand?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    mileage?: IntFilter<"Vehicle"> | number
    isElectric?: BoolFilter<"Vehicle"> | boolean
    service?: FloatFilter<"Vehicle"> | number
    parts?: FloatFilter<"Vehicle"> | number
    insurance?: FloatFilter<"Vehicle"> | number
    safety?: FloatFilter<"Vehicle"> | number
    fuelTankCapacity?: FloatNullableFilter<"Vehicle"> | number | null
    batteryCapacity?: FloatNullableFilter<"Vehicle"> | number | null
    price?: FloatFilter<"Vehicle"> | number
    imageUrl?: StringNullableFilter<"Vehicle"> | string | null
    userVehicles?: UserVehiclesListRelationFilter
  }, "id">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    isElectric?: SortOrder
    service?: SortOrder
    parts?: SortOrder
    insurance?: SortOrder
    safety?: SortOrder
    fuelTankCapacity?: SortOrderInput | SortOrder
    batteryCapacity?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    mileage?: IntWithAggregatesFilter<"Vehicle"> | number
    isElectric?: BoolWithAggregatesFilter<"Vehicle"> | boolean
    service?: FloatWithAggregatesFilter<"Vehicle"> | number
    parts?: FloatWithAggregatesFilter<"Vehicle"> | number
    insurance?: FloatWithAggregatesFilter<"Vehicle"> | number
    safety?: FloatWithAggregatesFilter<"Vehicle"> | number
    fuelTankCapacity?: FloatNullableWithAggregatesFilter<"Vehicle"> | number | null
    batteryCapacity?: FloatNullableWithAggregatesFilter<"Vehicle"> | number | null
    price?: FloatWithAggregatesFilter<"Vehicle"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
  }

  export type UserVehiclesWhereInput = {
    AND?: UserVehiclesWhereInput | UserVehiclesWhereInput[]
    OR?: UserVehiclesWhereInput[]
    NOT?: UserVehiclesWhereInput | UserVehiclesWhereInput[]
    id?: StringFilter<"UserVehicles"> | string
    userId?: StringFilter<"UserVehicles"> | string
    vehicleId?: StringFilter<"UserVehicles"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type UserVehiclesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type UserVehiclesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_vehicleId?: UserVehiclesUserIdVehicleIdCompoundUniqueInput
    AND?: UserVehiclesWhereInput | UserVehiclesWhereInput[]
    OR?: UserVehiclesWhereInput[]
    NOT?: UserVehiclesWhereInput | UserVehiclesWhereInput[]
    userId?: StringFilter<"UserVehicles"> | string
    vehicleId?: StringFilter<"UserVehicles"> | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id" | "userId_vehicleId">

  export type UserVehiclesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
    _count?: UserVehiclesCountOrderByAggregateInput
    _max?: UserVehiclesMaxOrderByAggregateInput
    _min?: UserVehiclesMinOrderByAggregateInput
  }

  export type UserVehiclesScalarWhereWithAggregatesInput = {
    AND?: UserVehiclesScalarWhereWithAggregatesInput | UserVehiclesScalarWhereWithAggregatesInput[]
    OR?: UserVehiclesScalarWhereWithAggregatesInput[]
    NOT?: UserVehiclesScalarWhereWithAggregatesInput | UserVehiclesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserVehicles"> | string
    userId?: StringWithAggregatesFilter<"UserVehicles"> | string
    vehicleId?: StringWithAggregatesFilter<"UserVehicles"> | string
  }

  export type VehicleCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    mileage: number
    isElectric: boolean
    service: number
    parts: number
    insurance: number
    safety: number
    fuelTankCapacity?: number | null
    batteryCapacity?: number | null
    price: number
    imageUrl?: string | null
    userVehicles?: UserVehiclesCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    brand: string
    model: string
    year: number
    mileage: number
    isElectric: boolean
    service: number
    parts: number
    insurance: number
    safety: number
    fuelTankCapacity?: number | null
    batteryCapacity?: number | null
    price: number
    imageUrl?: string | null
    userVehicles?: UserVehiclesUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    isElectric?: BoolFieldUpdateOperationsInput | boolean
    service?: FloatFieldUpdateOperationsInput | number
    parts?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    safety?: FloatFieldUpdateOperationsInput | number
    fuelTankCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userVehicles?: UserVehiclesUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    isElectric?: BoolFieldUpdateOperationsInput | boolean
    service?: FloatFieldUpdateOperationsInput | number
    parts?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    safety?: FloatFieldUpdateOperationsInput | number
    fuelTankCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userVehicles?: UserVehiclesUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    brand: string
    model: string
    year: number
    mileage: number
    isElectric: boolean
    service: number
    parts: number
    insurance: number
    safety: number
    fuelTankCapacity?: number | null
    batteryCapacity?: number | null
    price: number
    imageUrl?: string | null
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    isElectric?: BoolFieldUpdateOperationsInput | boolean
    service?: FloatFieldUpdateOperationsInput | number
    parts?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    safety?: FloatFieldUpdateOperationsInput | number
    fuelTankCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    isElectric?: BoolFieldUpdateOperationsInput | boolean
    service?: FloatFieldUpdateOperationsInput | number
    parts?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    safety?: FloatFieldUpdateOperationsInput | number
    fuelTankCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserVehiclesCreateInput = {
    id?: string
    userId: string
    vehicle: VehicleCreateNestedOneWithoutUserVehiclesInput
  }

  export type UserVehiclesUncheckedCreateInput = {
    id?: string
    userId: string
    vehicleId: string
  }

  export type UserVehiclesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicle?: VehicleUpdateOneRequiredWithoutUserVehiclesNestedInput
  }

  export type UserVehiclesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserVehiclesCreateManyInput = {
    id?: string
    userId: string
    vehicleId: string
  }

  export type UserVehiclesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserVehiclesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserVehiclesListRelationFilter = {
    every?: UserVehiclesWhereInput
    some?: UserVehiclesWhereInput
    none?: UserVehiclesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserVehiclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    isElectric?: SortOrder
    service?: SortOrder
    parts?: SortOrder
    insurance?: SortOrder
    safety?: SortOrder
    fuelTankCapacity?: SortOrder
    batteryCapacity?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
    service?: SortOrder
    parts?: SortOrder
    insurance?: SortOrder
    safety?: SortOrder
    fuelTankCapacity?: SortOrder
    batteryCapacity?: SortOrder
    price?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    isElectric?: SortOrder
    service?: SortOrder
    parts?: SortOrder
    insurance?: SortOrder
    safety?: SortOrder
    fuelTankCapacity?: SortOrder
    batteryCapacity?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    year?: SortOrder
    mileage?: SortOrder
    isElectric?: SortOrder
    service?: SortOrder
    parts?: SortOrder
    insurance?: SortOrder
    safety?: SortOrder
    fuelTankCapacity?: SortOrder
    batteryCapacity?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    mileage?: SortOrder
    service?: SortOrder
    parts?: SortOrder
    insurance?: SortOrder
    safety?: SortOrder
    fuelTankCapacity?: SortOrder
    batteryCapacity?: SortOrder
    price?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type UserVehiclesUserIdVehicleIdCompoundUniqueInput = {
    userId: string
    vehicleId: string
  }

  export type UserVehiclesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
  }

  export type UserVehiclesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
  }

  export type UserVehiclesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    vehicleId?: SortOrder
  }

  export type UserVehiclesCreateNestedManyWithoutVehicleInput = {
    create?: XOR<UserVehiclesCreateWithoutVehicleInput, UserVehiclesUncheckedCreateWithoutVehicleInput> | UserVehiclesCreateWithoutVehicleInput[] | UserVehiclesUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: UserVehiclesCreateOrConnectWithoutVehicleInput | UserVehiclesCreateOrConnectWithoutVehicleInput[]
    createMany?: UserVehiclesCreateManyVehicleInputEnvelope
    connect?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
  }

  export type UserVehiclesUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<UserVehiclesCreateWithoutVehicleInput, UserVehiclesUncheckedCreateWithoutVehicleInput> | UserVehiclesCreateWithoutVehicleInput[] | UserVehiclesUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: UserVehiclesCreateOrConnectWithoutVehicleInput | UserVehiclesCreateOrConnectWithoutVehicleInput[]
    createMany?: UserVehiclesCreateManyVehicleInputEnvelope
    connect?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserVehiclesUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<UserVehiclesCreateWithoutVehicleInput, UserVehiclesUncheckedCreateWithoutVehicleInput> | UserVehiclesCreateWithoutVehicleInput[] | UserVehiclesUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: UserVehiclesCreateOrConnectWithoutVehicleInput | UserVehiclesCreateOrConnectWithoutVehicleInput[]
    upsert?: UserVehiclesUpsertWithWhereUniqueWithoutVehicleInput | UserVehiclesUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: UserVehiclesCreateManyVehicleInputEnvelope
    set?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    disconnect?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    delete?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    connect?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    update?: UserVehiclesUpdateWithWhereUniqueWithoutVehicleInput | UserVehiclesUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: UserVehiclesUpdateManyWithWhereWithoutVehicleInput | UserVehiclesUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: UserVehiclesScalarWhereInput | UserVehiclesScalarWhereInput[]
  }

  export type UserVehiclesUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<UserVehiclesCreateWithoutVehicleInput, UserVehiclesUncheckedCreateWithoutVehicleInput> | UserVehiclesCreateWithoutVehicleInput[] | UserVehiclesUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: UserVehiclesCreateOrConnectWithoutVehicleInput | UserVehiclesCreateOrConnectWithoutVehicleInput[]
    upsert?: UserVehiclesUpsertWithWhereUniqueWithoutVehicleInput | UserVehiclesUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: UserVehiclesCreateManyVehicleInputEnvelope
    set?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    disconnect?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    delete?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    connect?: UserVehiclesWhereUniqueInput | UserVehiclesWhereUniqueInput[]
    update?: UserVehiclesUpdateWithWhereUniqueWithoutVehicleInput | UserVehiclesUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: UserVehiclesUpdateManyWithWhereWithoutVehicleInput | UserVehiclesUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: UserVehiclesScalarWhereInput | UserVehiclesScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutUserVehiclesInput = {
    create?: XOR<VehicleCreateWithoutUserVehiclesInput, VehicleUncheckedCreateWithoutUserVehiclesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutUserVehiclesInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutUserVehiclesNestedInput = {
    create?: XOR<VehicleCreateWithoutUserVehiclesInput, VehicleUncheckedCreateWithoutUserVehiclesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutUserVehiclesInput
    upsert?: VehicleUpsertWithoutUserVehiclesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutUserVehiclesInput, VehicleUpdateWithoutUserVehiclesInput>, VehicleUncheckedUpdateWithoutUserVehiclesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserVehiclesCreateWithoutVehicleInput = {
    id?: string
    userId: string
  }

  export type UserVehiclesUncheckedCreateWithoutVehicleInput = {
    id?: string
    userId: string
  }

  export type UserVehiclesCreateOrConnectWithoutVehicleInput = {
    where: UserVehiclesWhereUniqueInput
    create: XOR<UserVehiclesCreateWithoutVehicleInput, UserVehiclesUncheckedCreateWithoutVehicleInput>
  }

  export type UserVehiclesCreateManyVehicleInputEnvelope = {
    data: UserVehiclesCreateManyVehicleInput | UserVehiclesCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserVehiclesUpsertWithWhereUniqueWithoutVehicleInput = {
    where: UserVehiclesWhereUniqueInput
    update: XOR<UserVehiclesUpdateWithoutVehicleInput, UserVehiclesUncheckedUpdateWithoutVehicleInput>
    create: XOR<UserVehiclesCreateWithoutVehicleInput, UserVehiclesUncheckedCreateWithoutVehicleInput>
  }

  export type UserVehiclesUpdateWithWhereUniqueWithoutVehicleInput = {
    where: UserVehiclesWhereUniqueInput
    data: XOR<UserVehiclesUpdateWithoutVehicleInput, UserVehiclesUncheckedUpdateWithoutVehicleInput>
  }

  export type UserVehiclesUpdateManyWithWhereWithoutVehicleInput = {
    where: UserVehiclesScalarWhereInput
    data: XOR<UserVehiclesUpdateManyMutationInput, UserVehiclesUncheckedUpdateManyWithoutVehicleInput>
  }

  export type UserVehiclesScalarWhereInput = {
    AND?: UserVehiclesScalarWhereInput | UserVehiclesScalarWhereInput[]
    OR?: UserVehiclesScalarWhereInput[]
    NOT?: UserVehiclesScalarWhereInput | UserVehiclesScalarWhereInput[]
    id?: StringFilter<"UserVehicles"> | string
    userId?: StringFilter<"UserVehicles"> | string
    vehicleId?: StringFilter<"UserVehicles"> | string
  }

  export type VehicleCreateWithoutUserVehiclesInput = {
    id?: string
    brand: string
    model: string
    year: number
    mileage: number
    isElectric: boolean
    service: number
    parts: number
    insurance: number
    safety: number
    fuelTankCapacity?: number | null
    batteryCapacity?: number | null
    price: number
    imageUrl?: string | null
  }

  export type VehicleUncheckedCreateWithoutUserVehiclesInput = {
    id?: string
    brand: string
    model: string
    year: number
    mileage: number
    isElectric: boolean
    service: number
    parts: number
    insurance: number
    safety: number
    fuelTankCapacity?: number | null
    batteryCapacity?: number | null
    price: number
    imageUrl?: string | null
  }

  export type VehicleCreateOrConnectWithoutUserVehiclesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserVehiclesInput, VehicleUncheckedCreateWithoutUserVehiclesInput>
  }

  export type VehicleUpsertWithoutUserVehiclesInput = {
    update: XOR<VehicleUpdateWithoutUserVehiclesInput, VehicleUncheckedUpdateWithoutUserVehiclesInput>
    create: XOR<VehicleCreateWithoutUserVehiclesInput, VehicleUncheckedCreateWithoutUserVehiclesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutUserVehiclesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutUserVehiclesInput, VehicleUncheckedUpdateWithoutUserVehiclesInput>
  }

  export type VehicleUpdateWithoutUserVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    isElectric?: BoolFieldUpdateOperationsInput | boolean
    service?: FloatFieldUpdateOperationsInput | number
    parts?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    safety?: FloatFieldUpdateOperationsInput | number
    fuelTankCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUncheckedUpdateWithoutUserVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    mileage?: IntFieldUpdateOperationsInput | number
    isElectric?: BoolFieldUpdateOperationsInput | boolean
    service?: FloatFieldUpdateOperationsInput | number
    parts?: FloatFieldUpdateOperationsInput | number
    insurance?: FloatFieldUpdateOperationsInput | number
    safety?: FloatFieldUpdateOperationsInput | number
    fuelTankCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    batteryCapacity?: NullableFloatFieldUpdateOperationsInput | number | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserVehiclesCreateManyVehicleInput = {
    id?: string
    userId: string
  }

  export type UserVehiclesUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserVehiclesUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserVehiclesUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
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