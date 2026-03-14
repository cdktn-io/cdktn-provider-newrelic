# `cloudAwsEuSovereignLinkAccount` Submodule <a name="`cloudAwsEuSovereignLinkAccount` Submodule" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAwsEuSovereignLinkAccount <a name="CloudAwsEuSovereignLinkAccount" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account newrelic_cloud_aws_eu_sovereign_link_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer"></a>

```typescript
import { cloudAwsEuSovereignLinkAccount } from '@cdktn/provider-newrelic'

new cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount(scope: Construct, id: string, config: CloudAwsEuSovereignLinkAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig">CloudAwsEuSovereignLinkAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig">CloudAwsEuSovereignLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetMetricCollectionMode">resetMetricCollectionMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetricCollectionMode` <a name="resetMetricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.resetMetricCollectionMode"></a>

```typescript
public resetMetricCollectionMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudAwsEuSovereignLinkAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isConstruct"></a>

```typescript
import { cloudAwsEuSovereignLinkAccount } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformElement"></a>

```typescript
import { cloudAwsEuSovereignLinkAccount } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformResource"></a>

```typescript
import { cloudAwsEuSovereignLinkAccount } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport"></a>

```typescript
import { cloudAwsEuSovereignLinkAccount } from '@cdktn/provider-newrelic'

cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudAwsEuSovereignLinkAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAwsEuSovereignLinkAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAwsEuSovereignLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudAwsEuSovereignLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionModeInput">metricCollectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionMode">metricCollectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricCollectionModeInput`<sup>Optional</sup> <a name="metricCollectionModeInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionModeInput"></a>

```typescript
public readonly metricCollectionModeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricCollectionMode`<sup>Required</sup> <a name="metricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.metricCollectionMode"></a>

```typescript
public readonly metricCollectionMode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAwsEuSovereignLinkAccountConfig <a name="CloudAwsEuSovereignLinkAccountConfig" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.Initializer"></a>

```typescript
import { cloudAwsEuSovereignLinkAccount } from '@cdktn/provider-newrelic'

const cloudAwsEuSovereignLinkAccountConfig: cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.arn">arn</a></code> | <code>string</code> | The ARN of the IAM role. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.name">name</a></code> | <code>string</code> | The name of the AWS EU Sovereign account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.accountId">accountId</a></code> | <code>number</code> | The ID of the account in New Relic. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account#id CloudAwsEuSovereignLinkAccount#id}. |
| <code><a href="#@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.metricCollectionMode">metricCollectionMode</a></code> | <code>string</code> | How metrics are collected. PULL or PUSH. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account#arn CloudAwsEuSovereignLinkAccount#arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AWS EU Sovereign account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account#name CloudAwsEuSovereignLinkAccount#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The ID of the account in New Relic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account#account_id CloudAwsEuSovereignLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account#id CloudAwsEuSovereignLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metricCollectionMode`<sup>Optional</sup> <a name="metricCollectionMode" id="@cdktn/provider-newrelic.cloudAwsEuSovereignLinkAccount.CloudAwsEuSovereignLinkAccountConfig.property.metricCollectionMode"></a>

```typescript
public readonly metricCollectionMode: string;
```

- *Type:* string

How metrics are collected. PULL or PUSH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_aws_eu_sovereign_link_account#metric_collection_mode CloudAwsEuSovereignLinkAccount#metric_collection_mode}

---



