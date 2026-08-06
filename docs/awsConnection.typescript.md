# `awsConnection` Submodule <a name="`awsConnection` Submodule" id="@cdktn/provider-newrelic.awsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsConnection <a name="AwsConnection" id="@cdktn/provider-newrelic.awsConnection.AwsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection newrelic_aws_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

new awsConnection.AwsConnection(scope: Construct, id: string, config: AwsConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig">AwsConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig">AwsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.putCredential">putCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeId">resetScopeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeType">resetScopeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetSettings">resetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.resetTag">resetTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredential` <a name="putCredential" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putCredential"></a>

```typescript
public putCredential(value: AwsConnectionCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

---

##### `putSettings` <a name="putSettings" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putSettings"></a>

```typescript
public putSettings(value: IResolvable | AwsConnectionSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>[]

---

##### `putTag` <a name="putTag" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putTag"></a>

```typescript
public putTag(value: IResolvable | AwsConnectionTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.putTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScopeId` <a name="resetScopeId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeId"></a>

```typescript
public resetScopeId(): void
```

##### `resetScopeType` <a name="resetScopeType" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetScopeType"></a>

```typescript
public resetScopeType(): void
```

##### `resetSettings` <a name="resetSettings" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetSettings"></a>

```typescript
public resetSettings(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.resetTag"></a>

```typescript
public resetTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AwsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isConstruct"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

awsConnection.AwsConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformElement"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

awsConnection.AwsConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformResource"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

awsConnection.AwsConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

awsConnection.AwsConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AwsConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AwsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference">AwsConnectionCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settings">settings</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList">AwsConnectionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList">AwsConnectionTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credentialInput">credentialInput</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeIdInput">scopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeTypeInput">scopeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settingsInput">settingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tagInput">tagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeId">scopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeType">scopeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credential"></a>

```typescript
public readonly credential: AwsConnectionCredentialOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference">AwsConnectionCredentialOutputReference</a>

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settings"></a>

```typescript
public readonly settings: AwsConnectionSettingsList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList">AwsConnectionSettingsList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tag"></a>

```typescript
public readonly tag: AwsConnectionTagList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList">AwsConnectionTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.credentialInput"></a>

```typescript
public readonly credentialInput: AwsConnectionCredential;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scopeIdInput`<sup>Optional</sup> <a name="scopeIdInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeIdInput"></a>

```typescript
public readonly scopeIdInput: string;
```

- *Type:* string

---

##### `scopeTypeInput`<sup>Optional</sup> <a name="scopeTypeInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeTypeInput"></a>

```typescript
public readonly scopeTypeInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.settingsInput"></a>

```typescript
public readonly settingsInput: IResolvable | AwsConnectionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>[]

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | AwsConnectionTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

---

##### `scopeType`<sup>Required</sup> <a name="scopeType" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.scopeType"></a>

```typescript
public readonly scopeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.awsConnection.AwsConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsConnectionConfig <a name="AwsConnectionConfig" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

const awsConnectionConfig: awsConnection.AwsConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.credential">credential</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a></code> | credential block. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.name">name</a></code> | <code>string</code> | The name of the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.accountId">accountId</a></code> | <code>number</code> | The account ID where the AWS connection will be created. Used when scope_type is ACCOUNT. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.description">description</a></code> | <code>string</code> | The description of the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to indicate if the connection is enabled. True by default. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.externalId">externalId</a></code> | <code>string</code> | Optional field representing an identifier managed by the consumer. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#id AwsConnection#id}. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.region">region</a></code> | <code>string</code> | Default region for this connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeId">scopeId</a></code> | <code>string</code> | The scope ID (account ID or organization ID) for the AWS connection. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeType">scopeType</a></code> | <code>string</code> | The scope type for the AWS connection. Valid values are ACCOUNT and ORGANIZATION. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.settings">settings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>[]</code> | settings block. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.tag">tag</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>[]</code> | tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.credential"></a>

```typescript
public readonly credential: AwsConnectionCredential;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#credential AwsConnection#credential}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#name AwsConnection#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The account ID where the AWS connection will be created. Used when scope_type is ACCOUNT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#account_id AwsConnection#account_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#description AwsConnection#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to indicate if the connection is enabled. True by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#enabled AwsConnection#enabled}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Optional field representing an identifier managed by the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#external_id AwsConnection#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#id AwsConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Default region for this connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#region AwsConnection#region}

---

##### `scopeId`<sup>Optional</sup> <a name="scopeId" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The scope ID (account ID or organization ID) for the AWS connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#scope_id AwsConnection#scope_id}

---

##### `scopeType`<sup>Optional</sup> <a name="scopeType" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.scopeType"></a>

```typescript
public readonly scopeType: string;
```

- *Type:* string

The scope type for the AWS connection. Valid values are ACCOUNT and ORGANIZATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#scope_type AwsConnection#scope_type}

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.settings"></a>

```typescript
public readonly settings: IResolvable | AwsConnectionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>[]

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#settings AwsConnection#settings}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | AwsConnectionTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#tag AwsConnection#tag}

---

### AwsConnectionCredential <a name="AwsConnectionCredential" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

const awsConnectionCredential: awsConnection.AwsConnectionCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a></code> | assume_role block. |

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential.property.assumeRole"></a>

```typescript
public readonly assumeRole: AwsConnectionCredentialAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#assume_role AwsConnection#assume_role}

---

### AwsConnectionCredentialAssumeRole <a name="AwsConnectionCredentialAssumeRole" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

const awsConnectionCredentialAssumeRole: awsConnection.AwsConnectionCredentialAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.roleArn">roleArn</a></code> | <code>string</code> | ARN of the IAM role New Relic should assume. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.externalId">externalId</a></code> | <code>string</code> | External ID supplied by New Relic during AssumeRole. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

ARN of the IAM role New Relic should assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#role_arn AwsConnection#role_arn}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External ID supplied by New Relic during AssumeRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#external_id AwsConnection#external_id}

---

### AwsConnectionSettings <a name="AwsConnectionSettings" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

const awsConnectionSettings: awsConnection.AwsConnectionSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.key">key</a></code> | <code>string</code> | The key or name of the setting. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.value">value</a></code> | <code>string</code> | The value of the setting. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key or name of the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#key AwsConnection#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#value AwsConnection#value}

---

### AwsConnectionTag <a name="AwsConnectionTag" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

const awsConnectionTag: awsConnection.AwsConnectionTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.values">values</a></code> | <code>string[]</code> | The tag values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#key AwsConnection#key}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTag.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.96.0/docs/resources/aws_connection#values AwsConnection#values}

---

## Classes <a name="Classes" id="Classes"></a>

### AwsConnectionCredentialAssumeRoleOutputReference <a name="AwsConnectionCredentialAssumeRoleOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

new awsConnection.AwsConnectionCredentialAssumeRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AwsConnectionCredentialAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

---


### AwsConnectionCredentialOutputReference <a name="AwsConnectionCredentialOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

new awsConnection.AwsConnectionCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.putAssumeRole">putAssumeRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAssumeRole` <a name="putAssumeRole" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.putAssumeRole"></a>

```typescript
public putAssumeRole(value: AwsConnectionCredentialAssumeRole): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.putAssumeRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference">AwsConnectionCredentialAssumeRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Required</sup> <a name="assumeRole" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRole"></a>

```typescript
public readonly assumeRole: AwsConnectionCredentialAssumeRoleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRoleOutputReference">AwsConnectionCredentialAssumeRoleOutputReference</a>

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: AwsConnectionCredentialAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialAssumeRole">AwsConnectionCredentialAssumeRole</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AwsConnectionCredential;
```

- *Type:* <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionCredential">AwsConnectionCredential</a>

---


### AwsConnectionSettingsList <a name="AwsConnectionSettingsList" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

new awsConnection.AwsConnectionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.get"></a>

```typescript
public get(index: number): AwsConnectionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsConnectionSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>[]

---


### AwsConnectionSettingsOutputReference <a name="AwsConnectionSettingsOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

new awsConnection.AwsConnectionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsConnectionSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionSettings">AwsConnectionSettings</a>

---


### AwsConnectionTagList <a name="AwsConnectionTagList" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

new awsConnection.AwsConnectionTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.get"></a>

```typescript
public get(index: number): AwsConnectionTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsConnectionTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>[]

---


### AwsConnectionTagOutputReference <a name="AwsConnectionTagOutputReference" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer"></a>

```typescript
import { awsConnection } from '@cdktn/provider-newrelic'

new awsConnection.AwsConnectionTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.awsConnection.AwsConnectionTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AwsConnectionTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.awsConnection.AwsConnectionTag">AwsConnectionTag</a>

---



