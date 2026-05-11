# `dataNewrelicFleetConfiguration` Submodule <a name="`dataNewrelicFleetConfiguration` Submodule" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicFleetConfiguration <a name="DataNewrelicFleetConfiguration" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration newrelic_fleet_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer"></a>

```typescript
import { dataNewrelicFleetConfiguration } from '@cdktn/provider-newrelic'

new dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration(scope: Construct, id: string, config?: DataNewrelicFleetConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig">DataNewrelicFleetConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig">DataNewrelicFleetConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId">resetVersionEntityId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetOrganizationId"></a>

```typescript
public resetOrganizationId(): void
```

##### `resetVersionEntityId` <a name="resetVersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.resetVersionEntityId"></a>

```typescript
public resetVersionEntityId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct"></a>

```typescript
import { dataNewrelicFleetConfiguration } from '@cdktn/provider-newrelic'

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement"></a>

```typescript
import { dataNewrelicFleetConfiguration } from '@cdktn/provider-newrelic'

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource"></a>

```typescript
import { dataNewrelicFleetConfiguration } from '@cdktn/provider-newrelic'

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport"></a>

```typescript
import { dataNewrelicFleetConfiguration } from '@cdktn/provider-newrelic'

dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataNewrelicFleetConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicFleetConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicFleetConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicFleetConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent">configurationContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId">latestVersionEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds">versionEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput">organizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput">versionEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId">versionEntityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configurationContent`<sup>Required</sup> <a name="configurationContent" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationContent"></a>

```typescript
public readonly configurationContent: string;
```

- *Type:* string

---

##### `latestVersionEntityId`<sup>Required</sup> <a name="latestVersionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.latestVersionEntityId"></a>

```typescript
public readonly latestVersionEntityId: string;
```

- *Type:* string

---

##### `versionEntityIds`<sup>Required</sup> <a name="versionEntityIds" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIds"></a>

```typescript
public readonly versionEntityIds: string[];
```

- *Type:* string[]

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationIdInput"></a>

```typescript
public readonly organizationIdInput: string;
```

- *Type:* string

---

##### `versionEntityIdInput`<sup>Optional</sup> <a name="versionEntityIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityIdInput"></a>

```typescript
public readonly versionEntityIdInput: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `versionEntityId`<sup>Required</sup> <a name="versionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.versionEntityId"></a>

```typescript
public readonly versionEntityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicFleetConfigurationConfig <a name="DataNewrelicFleetConfigurationConfig" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.Initializer"></a>

```typescript
import { dataNewrelicFleetConfiguration } from '@cdktn/provider-newrelic'

const dataNewrelicFleetConfigurationConfig: dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId">configurationId</a></code> | <code>string</code> | The GUID of the fleet configuration entity. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name">name</a></code> | <code>string</code> | The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId">organizationId</a></code> | <code>string</code> | The organization ID. Resolved automatically from the provider when omitted. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId">versionEntityId</a></code> | <code>string</code> | The GUID of a specific configuration version entity. Returns the content of that exact version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

The GUID of the fleet configuration entity.

Returns the content of the latest version. Populated automatically when looking up by version_entity_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration#configuration_id DataNewrelicFleetConfiguration#configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration#id DataNewrelicFleetConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the fleet configuration. The first matching configuration is returned. Returns the content of its latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration#name DataNewrelicFleetConfiguration#name}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The organization ID. Resolved automatically from the provider when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration#organization_id DataNewrelicFleetConfiguration#organization_id}

---

##### `versionEntityId`<sup>Optional</sup> <a name="versionEntityId" id="@cdktn/provider-newrelic.dataNewrelicFleetConfiguration.DataNewrelicFleetConfigurationConfig.property.versionEntityId"></a>

```typescript
public readonly versionEntityId: string;
```

- *Type:* string

The GUID of a specific configuration version entity. Returns the content of that exact version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.87.2/docs/data-sources/fleet_configuration#version_entity_id DataNewrelicFleetConfiguration#version_entity_id}

---



