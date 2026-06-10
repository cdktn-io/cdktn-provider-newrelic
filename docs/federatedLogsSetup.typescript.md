# `federatedLogsSetup` Submodule <a name="`federatedLogsSetup` Submodule" id="@cdktn/provider-newrelic.federatedLogsSetup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FederatedLogsSetup <a name="FederatedLogsSetup" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup newrelic_federated_logs_setup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetup(scope: Construct, id: string, config: FederatedLogsSetupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig">FederatedLogsSetupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig">FederatedLogsSetupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition">putDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder">putForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder">resetForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultPartition` <a name="putDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition"></a>

```typescript
public putDefaultPartition(value: FederatedLogsSetupDefaultPartition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putDefaultPartition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `putForwarder` <a name="putForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder"></a>

```typescript
public putForwarder(value: FederatedLogsSetupForwarder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putForwarder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage"></a>

```typescript
public putStorage(value: FederatedLogsSetupStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetActive` <a name="resetActive" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetActive"></a>

```typescript
public resetActive(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetForwarder` <a name="resetForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetForwarder"></a>

```typescript
public resetForwarder(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

federatedLogsSetup.FederatedLogsSetup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

federatedLogsSetup.FederatedLogsSetup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

federatedLogsSetup.FederatedLogsSetup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

federatedLogsSetup.FederatedLogsSetup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a FederatedLogsSetup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FederatedLogsSetup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FederatedLogsSetup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the FederatedLogsSetup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition">defaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId">defaultPartitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus">lifecycleStatus</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput">activeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput">defaultPartitionInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput">forwarderInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `defaultPartition`<sup>Required</sup> <a name="defaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartition"></a>

```typescript
public readonly defaultPartition: FederatedLogsSetupDefaultPartitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference">FederatedLogsSetupDefaultPartitionOutputReference</a>

---

##### `defaultPartitionId`<sup>Required</sup> <a name="defaultPartitionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionId"></a>

```typescript
public readonly defaultPartitionId: string;
```

- *Type:* string

---

##### `forwarder`<sup>Required</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarder"></a>

```typescript
public readonly forwarder: FederatedLogsSetupForwarderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference">FederatedLogsSetupForwarderOutputReference</a>

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.healthCheck"></a>

```typescript
public readonly healthCheck: FederatedLogsSetupHealthCheckList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList">FederatedLogsSetupHealthCheckList</a>

---

##### `lifecycleStatus`<sup>Required</sup> <a name="lifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.lifecycleStatus"></a>

```typescript
public readonly lifecycleStatus: FederatedLogsSetupLifecycleStatusList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList">FederatedLogsSetupLifecycleStatusList</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storage"></a>

```typescript
public readonly storage: FederatedLogsSetupStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference">FederatedLogsSetupStorageOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.activeInput"></a>

```typescript
public readonly activeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultPartitionInput`<sup>Optional</sup> <a name="defaultPartitionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.defaultPartitionInput"></a>

```typescript
public readonly defaultPartitionInput: FederatedLogsSetupDefaultPartition;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `forwarderInput`<sup>Optional</sup> <a name="forwarderInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.forwarderInput"></a>

```typescript
public readonly forwarderInput: FederatedLogsSetupForwarder;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.storageInput"></a>

```typescript
public readonly storageInput: FederatedLogsSetupStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FederatedLogsSetupConfig <a name="FederatedLogsSetupConfig" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupConfig: federatedLogsSetup.FederatedLogsSetupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition">defaultPartition</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | default_partition block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name">name</a></code> | <code>string</code> | The name of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where the federated logs setup will live. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active">active</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the setup is active. When false, log routing to this setup is turned off. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description">description</a></code> | <code>string</code> | The description of the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder">forwarder</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | forwarder block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultPartition`<sup>Required</sup> <a name="defaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.defaultPartition"></a>

```typescript
public readonly defaultPartition: FederatedLogsSetupDefaultPartition;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

default_partition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#default_partition FederatedLogsSetup#default_partition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#name FederatedLogsSetup#name}

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.storage"></a>

```typescript
public readonly storage: FederatedLogsSetupStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where the federated logs setup will live.

Defaults to the provider's account_id. Changing this after creation is rejected by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#account_id FederatedLogsSetup#account_id}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.active"></a>

```typescript
public readonly active: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the setup is active. When false, log routing to this setup is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#active FederatedLogsSetup#active}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#description FederatedLogsSetup#description}

---

##### `forwarder`<sup>Optional</sup> <a name="forwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.forwarder"></a>

```typescript
public readonly forwarder: FederatedLogsSetupForwarder;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#forwarder FederatedLogsSetup#forwarder}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#id FederatedLogsSetup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### FederatedLogsSetupDefaultPartition <a name="FederatedLogsSetupDefaultPartition" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupDefaultPartition: federatedLogsSetup.FederatedLogsSetupDefaultPartition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | storage block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | data_retention_policy block. |

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.storage"></a>

```typescript
public readonly storage: FederatedLogsSetupDefaultPartitionStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#storage FederatedLogsSetup#storage}

---

##### `dataRetentionPolicy`<sup>Optional</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition.property.dataRetentionPolicy"></a>

```typescript
public readonly dataRetentionPolicy: FederatedLogsSetupDefaultPartitionDataRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

data_retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_retention_policy FederatedLogsSetup#data_retention_policy}

---

### FederatedLogsSetupDefaultPartitionDataRetentionPolicy <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupDefaultPartitionDataRetentionPolicy: federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration">duration</a></code> | <code>number</code> | The duration value for retention. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit">unit</a></code> | <code>string</code> | The time unit for the retention duration. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

The duration value for retention.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#duration FederatedLogsSetup#duration}

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

The time unit for the retention duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#unit FederatedLogsSetup#unit}

---

### FederatedLogsSetupDefaultPartitionStorage <a name="FederatedLogsSetupDefaultPartitionStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupDefaultPartitionStorage: federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri">dataLocationUri</a></code> | <code>string</code> | The URI location of the partition in object storage. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table">table</a></code> | <code>string</code> | The table name associated with the default partition. |

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.dataLocationUri"></a>

```typescript
public readonly dataLocationUri: string;
```

- *Type:* string

The URI location of the partition in object storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_location_uri FederatedLogsSetup#data_location_uri}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The table name associated with the default partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#table FederatedLogsSetup#table}

---

### FederatedLogsSetupForwarder <a name="FederatedLogsSetupForwarder" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupForwarder: federatedLogsSetup.FederatedLogsSetupForwarder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type">type</a></code> | <code>string</code> | The type of forwarder. Currently only PIPELINE_CONTROL is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | pipeline_control block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of forwarder. Currently only PIPELINE_CONTROL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#type FederatedLogsSetup#type}

---

##### `pipelineControl`<sup>Optional</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder.property.pipelineControl"></a>

```typescript
public readonly pipelineControl: FederatedLogsSetupForwarderPipelineControl;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

pipeline_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#pipeline_control FederatedLogsSetup#pipeline_control}

---

### FederatedLogsSetupForwarderPipelineControl <a name="FederatedLogsSetupForwarderPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupForwarderPipelineControl: federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId">fleetId</a></code> | <code>string</code> | The fleet entity GUID used for deploying the pipeline configuration. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule">routingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | routing_rule block. |

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The fleet entity GUID used for deploying the pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#fleet_id FederatedLogsSetup#fleet_id}

---

##### `routingRule`<sup>Optional</sup> <a name="routingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl.property.routingRule"></a>

```typescript
public readonly routingRule: FederatedLogsSetupForwarderPipelineControlRoutingRule;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

routing_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#routing_rule FederatedLogsSetup#routing_rule}

---

### FederatedLogsSetupForwarderPipelineControlRoutingRule <a name="FederatedLogsSetupForwarderPipelineControlRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupForwarderPipelineControlRoutingRule: federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression">expression</a></code> | <code>string</code> | OTTL expression for routing logs to this setup. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

OTTL expression for routing logs to this setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#expression FederatedLogsSetup#expression}

---

### FederatedLogsSetupHealthCheck <a name="FederatedLogsSetupHealthCheck" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupHealthCheck: federatedLogsSetup.FederatedLogsSetupHealthCheck = { ... }
```


### FederatedLogsSetupHealthCheckEnd2EndDataFlow <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupHealthCheckEnd2EndDataFlow: federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow = { ... }
```


### FederatedLogsSetupHealthCheckQueryConnection <a name="FederatedLogsSetupHealthCheckQueryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupHealthCheckQueryConnection: federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection = { ... }
```


### FederatedLogsSetupLifecycleStatus <a name="FederatedLogsSetupLifecycleStatus" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupLifecycleStatus: federatedLogsSetup.FederatedLogsSetupLifecycleStatus = { ... }
```


### FederatedLogsSetupStorage <a name="FederatedLogsSetupStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupStorage: federatedLogsSetup.FederatedLogsSetupStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration">cloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | cloud_provider_configuration block. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database">database</a></code> | <code>string</code> | The database name associated with the federated log setup. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId">dataIngestConnectionId</a></code> | <code>string</code> | The connection manager entity GUID used for writing data. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket">dataLocationBucket</a></code> | <code>string</code> | The object storage bucket where log data is stored. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId">queryConnectionId</a></code> | <code>string</code> | The connection manager entity GUID used by query workers for reading data. |

---

##### `cloudProviderConfiguration`<sup>Required</sup> <a name="cloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.cloudProviderConfiguration"></a>

```typescript
public readonly cloudProviderConfiguration: FederatedLogsSetupStorageCloudProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

cloud_provider_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#cloud_provider_configuration FederatedLogsSetup#cloud_provider_configuration}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database name associated with the federated log setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#database FederatedLogsSetup#database}

---

##### `dataIngestConnectionId`<sup>Required</sup> <a name="dataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataIngestConnectionId"></a>

```typescript
public readonly dataIngestConnectionId: string;
```

- *Type:* string

The connection manager entity GUID used for writing data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_ingest_connection_id FederatedLogsSetup#data_ingest_connection_id}

---

##### `dataLocationBucket`<sup>Required</sup> <a name="dataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.dataLocationBucket"></a>

```typescript
public readonly dataLocationBucket: string;
```

- *Type:* string

The object storage bucket where log data is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#data_location_bucket FederatedLogsSetup#data_location_bucket}

---

##### `queryConnectionId`<sup>Required</sup> <a name="queryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage.property.queryConnectionId"></a>

```typescript
public readonly queryConnectionId: string;
```

- *Type:* string

The connection manager entity GUID used by query workers for reading data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#query_connection_id FederatedLogsSetup#query_connection_id}

---

### FederatedLogsSetupStorageCloudProviderConfiguration <a name="FederatedLogsSetupStorageCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

const federatedLogsSetupStorageCloudProviderConfiguration: federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider">provider</a></code> | <code>string</code> | The cloud provider. Currently only AWS is supported. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region">region</a></code> | <code>string</code> | The cloud provider region. |

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

The cloud provider. Currently only AWS is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#provider FederatedLogsSetup#provider}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The cloud provider region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.92.0/docs/resources/federated_logs_setup#region FederatedLogsSetup#region}

---

## Classes <a name="Classes" id="Classes"></a>

### FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference <a name="FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput">durationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: number;
```

- *Type:* number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupDefaultPartitionDataRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---


### FederatedLogsSetupDefaultPartitionOutputReference <a name="FederatedLogsSetupDefaultPartitionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy">putDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy">resetDataRetentionPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataRetentionPolicy` <a name="putDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy"></a>

```typescript
public putDataRetentionPolicy(value: FederatedLogsSetupDefaultPartitionDataRetentionPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putDataRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage"></a>

```typescript
public putStorage(value: FederatedLogsSetupDefaultPartitionStorage): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `resetDataRetentionPolicy` <a name="resetDataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.resetDataRetentionPolicy"></a>

```typescript
public resetDataRetentionPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy">dataRetentionPolicy</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput">dataRetentionPolicyInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput">storageInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataRetentionPolicy`<sup>Required</sup> <a name="dataRetentionPolicy" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicy"></a>

```typescript
public readonly dataRetentionPolicy: FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference">FederatedLogsSetupDefaultPartitionDataRetentionPolicyOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storage"></a>

```typescript
public readonly storage: FederatedLogsSetupDefaultPartitionStorageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference">FederatedLogsSetupDefaultPartitionStorageOutputReference</a>

---

##### `dataRetentionPolicyInput`<sup>Optional</sup> <a name="dataRetentionPolicyInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.dataRetentionPolicyInput"></a>

```typescript
public readonly dataRetentionPolicyInput: FederatedLogsSetupDefaultPartitionDataRetentionPolicy;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionDataRetentionPolicy">FederatedLogsSetupDefaultPartitionDataRetentionPolicy</a>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.storageInput"></a>

```typescript
public readonly storageInput: FederatedLogsSetupDefaultPartitionStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupDefaultPartition;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartition">FederatedLogsSetupDefaultPartition</a>

---


### FederatedLogsSetupDefaultPartitionStorageOutputReference <a name="FederatedLogsSetupDefaultPartitionStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput">dataLocationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri">dataLocationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table">table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLocationUriInput`<sup>Optional</sup> <a name="dataLocationUriInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUriInput"></a>

```typescript
public readonly dataLocationUriInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `dataLocationUri`<sup>Required</sup> <a name="dataLocationUri" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.dataLocationUri"></a>

```typescript
public readonly dataLocationUri: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupDefaultPartitionStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupDefaultPartitionStorage">FederatedLogsSetupDefaultPartitionStorage</a>

---


### FederatedLogsSetupForwarderOutputReference <a name="FederatedLogsSetupForwarderOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupForwarderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl">putPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl">resetPipelineControl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPipelineControl` <a name="putPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl"></a>

```typescript
public putPipelineControl(value: FederatedLogsSetupForwarderPipelineControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.putPipelineControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `resetPipelineControl` <a name="resetPipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.resetPipelineControl"></a>

```typescript
public resetPipelineControl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl">pipelineControl</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput">pipelineControlInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineControl`<sup>Required</sup> <a name="pipelineControl" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControl"></a>

```typescript
public readonly pipelineControl: FederatedLogsSetupForwarderPipelineControlOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference">FederatedLogsSetupForwarderPipelineControlOutputReference</a>

---

##### `pipelineControlInput`<sup>Optional</sup> <a name="pipelineControlInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.pipelineControlInput"></a>

```typescript
public readonly pipelineControlInput: FederatedLogsSetupForwarderPipelineControl;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupForwarder;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarder">FederatedLogsSetupForwarder</a>

---


### FederatedLogsSetupForwarderPipelineControlOutputReference <a name="FederatedLogsSetupForwarderPipelineControlOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule">putRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule">resetRoutingRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutingRule` <a name="putRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule"></a>

```typescript
public putRoutingRule(value: FederatedLogsSetupForwarderPipelineControlRoutingRule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.putRoutingRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `resetRoutingRule` <a name="resetRoutingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.resetRoutingRule"></a>

```typescript
public resetRoutingRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule">routingRule</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput">routingRuleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routingRule`<sup>Required</sup> <a name="routingRule" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRule"></a>

```typescript
public readonly routingRule: FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference">FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference</a>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `routingRuleInput`<sup>Optional</sup> <a name="routingRuleInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.routingRuleInput"></a>

```typescript
public readonly routingRuleInput: FederatedLogsSetupForwarderPipelineControlRoutingRule;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupForwarderPipelineControl;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControl">FederatedLogsSetupForwarderPipelineControl</a>

---


### FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference <a name="FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupForwarderPipelineControlRoutingRule;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupForwarderPipelineControlRoutingRule">FederatedLogsSetupForwarderPipelineControlRoutingRule</a>

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowList <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get"></a>

```typescript
public get(index: number): FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference <a name="FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupHealthCheckEnd2EndDataFlow;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlow">FederatedLogsSetupHealthCheckEnd2EndDataFlow</a>

---


### FederatedLogsSetupHealthCheckList <a name="FederatedLogsSetupHealthCheckList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupHealthCheckList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get"></a>

```typescript
public get(index: number): FederatedLogsSetupHealthCheckOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsSetupHealthCheckOutputReference <a name="FederatedLogsSetupHealthCheckOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow">end2EndDataFlow</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection">queryConnection</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `end2EndDataFlow`<sup>Required</sup> <a name="end2EndDataFlow" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.end2EndDataFlow"></a>

```typescript
public readonly end2EndDataFlow: FederatedLogsSetupHealthCheckEnd2EndDataFlowList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckEnd2EndDataFlowList">FederatedLogsSetupHealthCheckEnd2EndDataFlowList</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `queryConnection`<sup>Required</sup> <a name="queryConnection" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.queryConnection"></a>

```typescript
public readonly queryConnection: FederatedLogsSetupHealthCheckQueryConnectionList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList">FederatedLogsSetupHealthCheckQueryConnectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheck">FederatedLogsSetupHealthCheck</a>

---


### FederatedLogsSetupHealthCheckQueryConnectionList <a name="FederatedLogsSetupHealthCheckQueryConnectionList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get"></a>

```typescript
public get(index: number): FederatedLogsSetupHealthCheckQueryConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsSetupHealthCheckQueryConnectionOutputReference <a name="FederatedLogsSetupHealthCheckQueryConnectionOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupHealthCheckQueryConnection;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupHealthCheckQueryConnection">FederatedLogsSetupHealthCheckQueryConnection</a>

---


### FederatedLogsSetupLifecycleStatusList <a name="FederatedLogsSetupLifecycleStatusList" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupLifecycleStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get"></a>

```typescript
public get(index: number): FederatedLogsSetupLifecycleStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FederatedLogsSetupLifecycleStatusOutputReference <a name="FederatedLogsSetupLifecycleStatusOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupLifecycleStatus;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupLifecycleStatus">FederatedLogsSetupLifecycleStatus</a>

---


### FederatedLogsSetupStorageCloudProviderConfigurationOutputReference <a name="FederatedLogsSetupStorageCloudProviderConfigurationOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput">providerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider">provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.provider"></a>

```typescript
public readonly provider: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupStorageCloudProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


### FederatedLogsSetupStorageOutputReference <a name="FederatedLogsSetupStorageOutputReference" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer"></a>

```typescript
import { federatedLogsSetup } from '@cdktn/provider-newrelic'

new federatedLogsSetup.FederatedLogsSetupStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration">putCloudProviderConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudProviderConfiguration` <a name="putCloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration"></a>

```typescript
public putCloudProviderConfiguration(value: FederatedLogsSetupStorageCloudProviderConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.putCloudProviderConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration">cloudProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput">cloudProviderConfigurationInput</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput">dataIngestConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput">dataLocationBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput">queryConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId">dataIngestConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket">dataLocationBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId">queryConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudProviderConfiguration`<sup>Required</sup> <a name="cloudProviderConfiguration" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfiguration"></a>

```typescript
public readonly cloudProviderConfiguration: FederatedLogsSetupStorageCloudProviderConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfigurationOutputReference">FederatedLogsSetupStorageCloudProviderConfigurationOutputReference</a>

---

##### `cloudProviderConfigurationInput`<sup>Optional</sup> <a name="cloudProviderConfigurationInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.cloudProviderConfigurationInput"></a>

```typescript
public readonly cloudProviderConfigurationInput: FederatedLogsSetupStorageCloudProviderConfiguration;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageCloudProviderConfiguration">FederatedLogsSetupStorageCloudProviderConfiguration</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dataIngestConnectionIdInput`<sup>Optional</sup> <a name="dataIngestConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionIdInput"></a>

```typescript
public readonly dataIngestConnectionIdInput: string;
```

- *Type:* string

---

##### `dataLocationBucketInput`<sup>Optional</sup> <a name="dataLocationBucketInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucketInput"></a>

```typescript
public readonly dataLocationBucketInput: string;
```

- *Type:* string

---

##### `queryConnectionIdInput`<sup>Optional</sup> <a name="queryConnectionIdInput" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionIdInput"></a>

```typescript
public readonly queryConnectionIdInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dataIngestConnectionId`<sup>Required</sup> <a name="dataIngestConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataIngestConnectionId"></a>

```typescript
public readonly dataIngestConnectionId: string;
```

- *Type:* string

---

##### `dataLocationBucket`<sup>Required</sup> <a name="dataLocationBucket" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.dataLocationBucket"></a>

```typescript
public readonly dataLocationBucket: string;
```

- *Type:* string

---

##### `queryConnectionId`<sup>Required</sup> <a name="queryConnectionId" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.queryConnectionId"></a>

```typescript
public readonly queryConnectionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FederatedLogsSetupStorage;
```

- *Type:* <a href="#@cdktn/provider-newrelic.federatedLogsSetup.FederatedLogsSetupStorage">FederatedLogsSetupStorage</a>

---



