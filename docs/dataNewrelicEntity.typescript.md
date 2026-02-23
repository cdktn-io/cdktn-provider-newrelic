# `dataNewrelicEntity` Submodule <a name="`dataNewrelicEntity` Submodule" id="@cdktn/provider-newrelic.dataNewrelicEntity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicEntity <a name="DataNewrelicEntity" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity newrelic_entity}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

new dataNewrelicEntity.DataNewrelicEntity(scope: Construct, id: string, config: DataNewrelicEntityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig">DataNewrelicEntityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig">DataNewrelicEntityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetEntityTags">resetEntityTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreCase">resetIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreNotFound">resetIgnoreNotFound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTag` <a name="putTag" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag"></a>

```typescript
public putTag(value: IResolvable | DataNewrelicEntityTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.putTag.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetEntityTags` <a name="resetEntityTags" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetEntityTags"></a>

```typescript
public resetEntityTags(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreCase` <a name="resetIgnoreCase" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreCase"></a>

```typescript
public resetIgnoreCase(): void
```

##### `resetIgnoreNotFound` <a name="resetIgnoreNotFound" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetIgnoreNotFound"></a>

```typescript
public resetIgnoreNotFound(): void
```

##### `resetTag` <a name="resetTag" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicEntity resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

dataNewrelicEntity.DataNewrelicEntity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

dataNewrelicEntity.DataNewrelicEntity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataNewrelicEntity resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicEntity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicEntity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicEntity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.applicationId">applicationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.guid">guid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.servingApmApplicationId">servingApmApplicationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList">DataNewrelicEntityTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountIdInput">accountIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTagsInput">entityTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCaseInput">ignoreCaseInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFoundInput">ignoreNotFoundInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tagInput">tagInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountId">accountId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTags">entityTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFound">ignoreNotFound</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.applicationId"></a>

```typescript
public readonly applicationId: number;
```

- *Type:* number

---

##### `guid`<sup>Required</sup> <a name="guid" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.guid"></a>

```typescript
public readonly guid: string;
```

- *Type:* string

---

##### `servingApmApplicationId`<sup>Required</sup> <a name="servingApmApplicationId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.servingApmApplicationId"></a>

```typescript
public readonly servingApmApplicationId: number;
```

- *Type:* number

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tag"></a>

```typescript
public readonly tag: DataNewrelicEntityTagList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList">DataNewrelicEntityTagList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: number;
```

- *Type:* number

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `entityTagsInput`<sup>Optional</sup> <a name="entityTagsInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTagsInput"></a>

```typescript
public readonly entityTagsInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreCaseInput`<sup>Optional</sup> <a name="ignoreCaseInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCaseInput"></a>

```typescript
public readonly ignoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNotFoundInput`<sup>Optional</sup> <a name="ignoreNotFoundInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFoundInput"></a>

```typescript
public readonly ignoreNotFoundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | DataNewrelicEntityTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `entityTags`<sup>Required</sup> <a name="entityTags" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.entityTags"></a>

```typescript
public readonly entityTags: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreCase`<sup>Required</sup> <a name="ignoreCase" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNotFound`<sup>Required</sup> <a name="ignoreNotFound" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.ignoreNotFound"></a>

```typescript
public readonly ignoreNotFound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicEntityConfig <a name="DataNewrelicEntityConfig" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.Initializer"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

const dataNewrelicEntityConfig: dataNewrelicEntity.DataNewrelicEntityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.name">name</a></code> | <code>string</code> | The name of the entity in New Relic One. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.accountId">accountId</a></code> | <code>number</code> | The New Relic account ID; |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.domain">domain</a></code> | <code>string</code> | The entity's domain. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.entityTags">entityTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#id DataNewrelicEntity#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreCase">ignoreCase</a></code> | <code>boolean \| cdktn.IResolvable</code> | Ignore case when searching the entity name. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreNotFound">ignoreNotFound</a></code> | <code>boolean \| cdktn.IResolvable</code> | A boolean attribute which when set to true, does not throw an error if the queried entity is not found. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.tag">tag</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>[]</code> | tag block. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.type">type</a></code> | <code>string</code> | The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the entity in New Relic One.

The first entity matching this name for the given search parameters will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#name DataNewrelicEntity#name}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.accountId"></a>

```typescript
public readonly accountId: number;
```

- *Type:* number

The New Relic account ID;

if specified, constrains the data source to return an entity belonging to the account with this ID, of all matching entities retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#account_id DataNewrelicEntity#account_id}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The entity's domain.

Valid values are APM, BROWSER, INFRA, MOBILE, SYNTH, and EXT. If not specified, all domains are searched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#domain DataNewrelicEntity#domain}

---

##### `entityTags`<sup>Optional</sup> <a name="entityTags" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.entityTags"></a>

```typescript
public readonly entityTags: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#entity_tags DataNewrelicEntity#entity_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#id DataNewrelicEntity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreCase`<sup>Optional</sup> <a name="ignoreCase" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreCase"></a>

```typescript
public readonly ignoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Ignore case when searching the entity name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#ignore_case DataNewrelicEntity#ignore_case}

---

##### `ignoreNotFound`<sup>Optional</sup> <a name="ignoreNotFound" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.ignoreNotFound"></a>

```typescript
public readonly ignoreNotFound: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A boolean attribute which when set to true, does not throw an error if the queried entity is not found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#ignore_not_found DataNewrelicEntity#ignore_not_found}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | DataNewrelicEntityTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#tag DataNewrelicEntity#tag}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The entity's type. Valid values are APPLICATION, DASHBOARD, HOST, MONITOR, SERVICE and WORKLOAD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#type DataNewrelicEntity#type}

---

### DataNewrelicEntityTag <a name="DataNewrelicEntityTag" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.Initializer"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

const dataNewrelicEntityTag: dataNewrelicEntity.DataNewrelicEntityTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#key DataNewrelicEntity#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.80.2/docs/data-sources/entity#value DataNewrelicEntity#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicEntityTagList <a name="DataNewrelicEntityTagList" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

new dataNewrelicEntity.DataNewrelicEntityTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get"></a>

```typescript
public get(index: number): DataNewrelicEntityTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataNewrelicEntityTag[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>[]

---


### DataNewrelicEntityTagOutputReference <a name="DataNewrelicEntityTagOutputReference" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer"></a>

```typescript
import { dataNewrelicEntity } from '@cdktn/provider-newrelic'

new dataNewrelicEntity.DataNewrelicEntityTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataNewrelicEntityTag;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-newrelic.dataNewrelicEntity.DataNewrelicEntityTag">DataNewrelicEntityTag</a>

---



