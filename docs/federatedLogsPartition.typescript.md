# `federatedLogsPartition` Submodule <a name="`federatedLogsPartition` Submodule" id="@cdktn/provider-newrelic.federatedLogsPartition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsPartition <a name="FederatedLogsPartition" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition newrelic_federated_logs_partition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartition(scope: Construct, id: string, config: FederatedLogsPartitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig">FederatedLogsPartitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig">FederatedLogsPartitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy">putDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration">putForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy">resetDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration">resetForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataRetentionPolicy` <a name="putDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy"></a>

```typescript
public putDataRetentionPolicy(value: FederatedLogsPartitionDataRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putDataRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---

##### `putForwarderConfiguration` <a name="putForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration"></a>

```typescript
public putForwarderConfiguration(value: FederatedLogsPartitionForwarderConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putForwarderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage"></a>

```typescript
public putStorage(value: FederatedLogsPartitionStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetDataRetentionPolicy` <a name="resetDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDataRetentionPolicy"></a>

```typescript
public resetDataRetentionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForwarderConfiguration` <a name="resetForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetForwarderConfiguration"></a>

```typescript
public resetForwarderConfiguration(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

federatedLogsPartition.FederatedLogsPartition.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

federatedLogsPartition.FederatedLogsPartition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

federatedLogsPartition.FederatedLogsPartition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

federatedLogsPartition.FederatedLogsPartition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FederatedLogsPartition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FederatedLogsPartition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FederatedLogsPartition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsPartition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration">forwarderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault">isDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus">lifecycleStatus</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput">dataRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput">forwarderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput">setupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId">setupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataRetentionPolicy`<sup>Required</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicy"></a>

```typescript
public readonly dataRetentionPolicy: FederatedLogsPartitionDataRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference">FederatedLogsPartitionDataRetentionPolicyOutputReference</a>

---

##### `forwarderConfiguration`<sup>Required</sup> <a name="forwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfiguration"></a>

```typescript
public readonly forwarderConfiguration: FederatedLogsPartitionForwarderConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference">FederatedLogsPartitionForwarderConfigurationOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.healthCheck"></a>

```typescript
public readonly healthCheck: FederatedLogsPartitionHealthCheckList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList">FederatedLogsPartitionHealthCheckList</a>

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `lifecycleStatus`<sup>Required</sup> <a name="lifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.lifecycleStatus"></a>

```typescript
public readonly lifecycleStatus: FederatedLogsPartitionLifecycleStatusList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList">FederatedLogsPartitionLifecycleStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storage"></a>

```typescript
public readonly storage: FederatedLogsPartitionStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference">FederatedLogsPartitionStorageOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataRetentionPolicyInput`<sup>Optional</sup> <a name="dataRetentionPolicyInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.dataRetentionPolicyInput"></a>

```typescript
public readonly dataRetentionPolicyInput: FederatedLogsPartitionDataRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forwarderConfigurationInput`<sup>Optional</sup> <a name="forwarderConfigurationInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.forwarderConfigurationInput"></a>

```typescript
public readonly forwarderConfigurationInput: FederatedLogsPartitionForwarderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `setupIdInput`<sup>Optional</sup> <a name="setupIdInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupIdInput"></a>

```typescript
public readonly setupIdInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.storageInput"></a>

```typescript
public readonly storageInput: FederatedLogsPartitionStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `setupId`<sup>Required</sup> <a name="setupId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.setupId"></a>

```typescript
public readonly setupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsPartitionConfig <a name="FederatedLogsPartitionConfig" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionConfig: federatedLogsPartition.FederatedLogsPartitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name">name</a></code> | <code>string</code> | The name of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId">setupId</a></code> | <code>string</code> | The ID of the federated log setup this partition belongs to. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where the federated logs partition will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the partition is active. When false, log routing to this partition is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description">description</a></code> | <code>string</code> | The description of the partition. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration">forwarderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | forwarder_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#name FederatedLogsPartition#name}

---

##### `setupId`<sup>Required</sup> <a name="setupId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.setupId"></a>

```typescript
public readonly setupId: string;
```

- *Type:* string

The ID of the federated log setup this partition belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#setup_id FederatedLogsPartition#setup_id}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.storage"></a>

```typescript
public readonly storage: FederatedLogsPartitionStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#storage FederatedLogsPartition#storage}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where the federated logs partition will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#account_id FederatedLogsPartition#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the partition is active. When false, log routing to this partition is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#active FederatedLogsPartition#active}

---

##### `dataRetentionPolicy`<sup>Optional</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.dataRetentionPolicy"></a>

```typescript
public readonly dataRetentionPolicy: FederatedLogsPartitionDataRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#data_retention_policy FederatedLogsPartition#data_retention_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#description FederatedLogsPartition#description}

---

##### `forwarderConfiguration`<sup>Optional</sup> <a name="forwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.forwarderConfiguration"></a>

```typescript
public readonly forwarderConfiguration: FederatedLogsPartitionForwarderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

forwarder_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#forwarder_configuration FederatedLogsPartition#forwarder_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#id FederatedLogsPartition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsPartitionDataRetentionPolicy <a name="FederatedLogsPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionDataRetentionPolicy: federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration">duration</a></code> | <code>number</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit">unit</a></code> | <code>string</code> | The time unit for the retention duration. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#duration FederatedLogsPartition#duration}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#unit FederatedLogsPartition#unit}

---

### FederatedLogsPartitionForwarderConfiguration <a name="FederatedLogsPartitionForwarderConfiguration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionForwarderConfiguration: federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type">type</a></code> | <code>string</code> | The type of forwarder. Must match the parent setup's forwarder type. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | pipeline_control block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of forwarder. Must match the parent setup's forwarder type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#type FederatedLogsPartition#type}

---

##### `pipelineControl`<sup>Optional</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration.property.pipelineControl"></a>

```typescript
public readonly pipelineControl: FederatedLogsPartitionForwarderConfigurationPipelineControl;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#pipeline_control FederatedLogsPartition#pipeline_control}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControl <a name="FederatedLogsPartitionForwarderConfigurationPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionForwarderConfigurationPipelineControl: federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule">partitionRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | partition_rule block. |

---

##### `partitionRule`<sup>Optional</sup> <a name="partitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl.property.partitionRule"></a>

```typescript
public readonly partitionRule: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

partition_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#partition_rule FederatedLogsPartition#partition_rule}

---

### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule: federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression">expression</a></code> | <code>string</code> | OTTL expression for routing logs to this partition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

OTTL expression for routing logs to this partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#expression FederatedLogsPartition#expression}

---

### FederatedLogsPartitionHealthCheck <a name="FederatedLogsPartitionHealthCheck" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionHealthCheck: federatedLogsPartition.FederatedLogsPartitionHealthCheck = { ... }
```


### FederatedLogsPartitionHealthCheckEnd2EndDataFlow <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionHealthCheckEnd2EndDataFlow: federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow = { ... }
```


### FederatedLogsPartitionHealthCheckQueryConnection <a name="FederatedLogsPartitionHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionHealthCheckQueryConnection: federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection = { ... }
```


### FederatedLogsPartitionLifecycleStatus <a name="FederatedLogsPartitionLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionLifecycleStatus: federatedLogsPartition.FederatedLogsPartitionLifecycleStatus = { ... }
```


### FederatedLogsPartitionStorage <a name="FederatedLogsPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

const federatedLogsPartitionStorage: federatedLogsPartition.FederatedLogsPartitionStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri">dataLocationUri</a></code> | <code>string</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table">table</a></code> | <code>string</code> | The table name associated with the partition. |

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.dataLocationUri"></a>

```typescript
public readonly dataLocationUri: string;
```

- *Type:* string

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#data_location_uri FederatedLogsPartition#data_location_uri}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The table name associated with the partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/resources/federated_logs_partition#table FederatedLogsPartition#table}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionDataRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionDataRetentionPolicy">FederatedLogsPartitionDataRetentionPolicy</a>

---


### FederatedLogsPartitionForwarderConfigurationOutputReference <a name="FederatedLogsPartitionForwarderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl">putPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl">resetPipelineControl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPipelineControl` <a name="putPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl"></a>

```typescript
public putPipelineControl(value: FederatedLogsPartitionForwarderConfigurationPipelineControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.putPipelineControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---

##### `resetPipelineControl` <a name="resetPipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.resetPipelineControl"></a>

```typescript
public resetPipelineControl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput">pipelineControlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineControl`<sup>Required</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControl"></a>

```typescript
public readonly pipelineControl: FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference</a>

---

##### `pipelineControlInput`<sup>Optional</sup> <a name="pipelineControlInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.pipelineControlInput"></a>

```typescript
public readonly pipelineControlInput: FederatedLogsPartitionForwarderConfigurationPipelineControl;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionForwarderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfiguration">FederatedLogsPartitionForwarderConfiguration</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule">putPartitionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule">resetPartitionRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionRule` <a name="putPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule"></a>

```typescript
public putPartitionRule(value: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.putPartitionRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---

##### `resetPartitionRule` <a name="resetPartitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.resetPartitionRule"></a>

```typescript
public resetPartitionRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule">partitionRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput">partitionRuleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionRule`<sup>Required</sup> <a name="partitionRule" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRule"></a>

```typescript
public readonly partitionRule: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference</a>

---

##### `partitionRuleInput`<sup>Optional</sup> <a name="partitionRuleInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.partitionRuleInput"></a>

```typescript
public readonly partitionRuleInput: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionForwarderConfigurationPipelineControl;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControl">FederatedLogsPartitionForwarderConfigurationPipelineControl</a>

---


### FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference <a name="FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule">FederatedLogsPartitionForwarderConfigurationPipelineControlPartitionRule</a>

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowList <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get"></a>

```typescript
public get(index: number): FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionHealthCheckEnd2EndDataFlow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlow">FederatedLogsPartitionHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsPartitionHealthCheckList <a name="FederatedLogsPartitionHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get"></a>

```typescript
public get(index: number): FederatedLogsPartitionHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsPartitionHealthCheckOutputReference <a name="FederatedLogsPartitionHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow">end2EndDataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection">queryConnection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `end2EndDataFlow`<sup>Required</sup> <a name="end2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.end2EndDataFlow"></a>

```typescript
public readonly end2EndDataFlow: FederatedLogsPartitionHealthCheckEnd2EndDataFlowList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckEnd2EndDataFlowList">FederatedLogsPartitionHealthCheckEnd2EndDataFlowList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `queryConnection`<sup>Required</sup> <a name="queryConnection" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.queryConnection"></a>

```typescript
public readonly queryConnection: FederatedLogsPartitionHealthCheckQueryConnectionList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList">FederatedLogsPartitionHealthCheckQueryConnectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheck">FederatedLogsPartitionHealthCheck</a>

---


### FederatedLogsPartitionHealthCheckQueryConnectionList <a name="FederatedLogsPartitionHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get"></a>

```typescript
public get(index: number): FederatedLogsPartitionHealthCheckQueryConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsPartitionHealthCheckQueryConnectionOutputReference <a name="FederatedLogsPartitionHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionHealthCheckQueryConnection;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionHealthCheckQueryConnection">FederatedLogsPartitionHealthCheckQueryConnection</a>

---


### FederatedLogsPartitionLifecycleStatusList <a name="FederatedLogsPartitionLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get"></a>

```typescript
public get(index: number): FederatedLogsPartitionLifecycleStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsPartitionLifecycleStatusOutputReference <a name="FederatedLogsPartitionLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionLifecycleStatus;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionLifecycleStatus">FederatedLogsPartitionLifecycleStatus</a>

---


### FederatedLogsPartitionStorageOutputReference <a name="FederatedLogsPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer"></a>

```typescript
import { federatedLogsPartition } from '@cdktn/provider-newrelic'

new federatedLogsPartition.FederatedLogsPartitionStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput">dataLocationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri">dataLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLocationUriInput`<sup>Optional</sup> <a name="dataLocationUriInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```typescript
public readonly dataLocationUriInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.dataLocationUri"></a>

```typescript
public readonly dataLocationUri: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsPartitionStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsPartition.FederatedLogsPartitionStorage">FederatedLogsPartitionStorage</a>

---



