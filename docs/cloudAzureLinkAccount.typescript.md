# `cloudAzureLinkAccount` Submodule <a name="`cloudAzureLinkAccount` Submodule" id="@cdktn/provider-newrelic.cloudAzureLinkAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudAzureLinkAccount <a name="CloudAzureLinkAccount" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account newrelic_cloud_azure_link_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer"></a>

```typescript
import { cloudAzureLinkAccount } from '@cdktn/provider-newrelic'

new cloudAzureLinkAccount.CloudAzureLinkAccount(scope: Construct, id: string, config: CloudAzureLinkAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig">CloudAzureLinkAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig">CloudAzureLinkAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudAzureLinkAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct"></a>

```typescript
import { cloudAzureLinkAccount } from '@cdktn/provider-newrelic'

cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement"></a>

```typescript
import { cloudAzureLinkAccount } from '@cdktn/provider-newrelic'

cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource"></a>

```typescript
import { cloudAzureLinkAccount } from '@cdktn/provider-newrelic'

cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport"></a>

```typescript
import { cloudAzureLinkAccount } from '@cdktn/provider-newrelic'

cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudAzureLinkAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudAzureLinkAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudAzureLinkAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudAzureLinkAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudAzureLinkAccountConfig <a name="CloudAzureLinkAccountConfig" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.Initializer"></a>

```typescript
import { cloudAzureLinkAccount } from '@cdktn/provider-newrelic'

const cloudAzureLinkAccountConfig: cloudAzureLinkAccount.CloudAzureLinkAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Application ID for Azure account. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Value of the client secret from Azure. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.name">name</a></code> | <code>string</code> | Name of the linked account. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Subscription ID for the Azure account. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.tenantId">tenantId</a></code> | <code>string</code> | Tenant ID for the Azure account. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID where you want to link the Azure account. |
| <code><a href="#@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Application ID for Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#application_id CloudAzureLinkAccount#application_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Value of the client secret from Azure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#client_secret CloudAzureLinkAccount#client_secret}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the linked account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#name CloudAzureLinkAccount#name}

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Subscription ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#subscription_id CloudAzureLinkAccount#subscription_id}

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Tenant ID for the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#tenant_id CloudAzureLinkAccount#tenant_id}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID where you want to link the Azure account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#account_id CloudAzureLinkAccount#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.cloudAzureLinkAccount.CloudAzureLinkAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/resources/cloud_azure_link_account#id CloudAzureLinkAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



