# `dataNewrelicApiAccessKey` Submodule <a name="`dataNewrelicApiAccessKey` Submodule" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicApiAccessKey <a name="DataNewrelicApiAccessKey" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key newrelic_api_access_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer"></a>

```typescript
import { dataNewrelicApiAccessKey } from '@cdktn/provider-newrelic'

new dataNewrelicApiAccessKey.DataNewrelicApiAccessKey(scope: Construct, id: string, config: DataNewrelicApiAccessKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig">DataNewrelicApiAccessKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig">DataNewrelicApiAccessKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType">resetIngestType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngestType` <a name="resetIngestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetIngestType"></a>

```typescript
public resetIngestType(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.resetUserId"></a>

```typescript
public resetUserId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct"></a>

```typescript
import { dataNewrelicApiAccessKey } from '@cdktn/provider-newrelic'

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement"></a>

```typescript
import { dataNewrelicApiAccessKey } from '@cdktn/provider-newrelic'

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource"></a>

```typescript
import { dataNewrelicApiAccessKey } from '@cdktn/provider-newrelic'

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport"></a>

```typescript
import { dataNewrelicApiAccessKey } from '@cdktn/provider-newrelic'

dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataNewrelicApiAccessKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicApiAccessKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicApiAccessKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicApiAccessKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput">ingestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput">userIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType">ingestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId">userId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingestTypeInput`<sup>Optional</sup> <a name="ingestTypeInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestTypeInput"></a>

```typescript
public readonly ingestTypeInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userIdInput"></a>

```typescript
public readonly userIdInput: number;
```

- *Type:* number

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestType`<sup>Required</sup> <a name="ingestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.ingestType"></a>

```typescript
public readonly ingestType: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicApiAccessKeyConfig <a name="DataNewrelicApiAccessKeyConfig" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.Initializer"></a>

```typescript
import { dataNewrelicApiAccessKey } from '@cdktn/provider-newrelic'

const dataNewrelicApiAccessKeyConfig: dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType">keyType</a></code> | <code>string</code> | The type of the key, one of INGEST or USER. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID the key belongs to. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType">ingestType</a></code> | <code>string</code> | The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId">keyId</a></code> | <code>string</code> | The ID of the key. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name">name</a></code> | <code>string</code> | The name of the key. Used to narrow down the search when `key_id` is not specified. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId">userId</a></code> | <code>number</code> | The ID of the user that owns the key. Only applies when `key_type` is USER. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of the key, one of INGEST or USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#key_type DataNewrelicApiAccessKey#key_type}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID the key belongs to.

Defaults to the account ID configured on the provider when not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#account_id DataNewrelicApiAccessKey#account_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#id DataNewrelicApiAccessKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingestType`<sup>Optional</sup> <a name="ingestType" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.ingestType"></a>

```typescript
public readonly ingestType: string;
```

- *Type:* string

The type of the ingest key, one of LICENSE or BROWSER. Only applies when `key_type` is INGEST.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#ingest_type DataNewrelicApiAccessKey#ingest_type}

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The ID of the key.

When specified, the key is fetched directly by its ID instead of searching by other attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#key_id DataNewrelicApiAccessKey#key_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the key. Used to narrow down the search when `key_id` is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#name DataNewrelicApiAccessKey#name}

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-newrelic.dataNewrelicApiAccessKey.DataNewrelicApiAccessKeyConfig.property.userId"></a>

```typescript
public readonly userId: number;
```

- *Type:* number

The ID of the user that owns the key. Only applies when `key_type` is USER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.97.0/docs/data-sources/api_access_key#user_id DataNewrelicApiAccessKey#user_id}

---



