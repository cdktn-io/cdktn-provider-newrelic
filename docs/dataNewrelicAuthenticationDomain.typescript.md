# `dataNewrelicAuthenticationDomain` Submodule <a name="`dataNewrelicAuthenticationDomain` Submodule" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicAuthenticationDomain <a name="DataNewrelicAuthenticationDomain" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/authentication_domain newrelic_authentication_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer"></a>

```typescript
import { dataNewrelicAuthenticationDomain } from '@cdktn/provider-newrelic'

new dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain(scope: Construct, id: string, config: DataNewrelicAuthenticationDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig">DataNewrelicAuthenticationDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig">DataNewrelicAuthenticationDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicAuthenticationDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isConstruct"></a>

```typescript
import { dataNewrelicAuthenticationDomain } from '@cdktn/provider-newrelic'

dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformElement"></a>

```typescript
import { dataNewrelicAuthenticationDomain } from '@cdktn/provider-newrelic'

dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformDataSource"></a>

```typescript
import { dataNewrelicAuthenticationDomain } from '@cdktn/provider-newrelic'

dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport"></a>

```typescript
import { dataNewrelicAuthenticationDomain } from '@cdktn/provider-newrelic'

dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataNewrelicAuthenticationDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicAuthenticationDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicAuthenticationDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/authentication_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicAuthenticationDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicAuthenticationDomainConfig <a name="DataNewrelicAuthenticationDomainConfig" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.Initializer"></a>

```typescript
import { dataNewrelicAuthenticationDomain } from '@cdktn/provider-newrelic'

const dataNewrelicAuthenticationDomainConfig: dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.name">name</a></code> | <code>string</code> | The name of the authentication domain to be queried. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicAuthenticationDomain.DataNewrelicAuthenticationDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the authentication domain to be queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.81.0/docs/data-sources/authentication_domain#name DataNewrelicAuthenticationDomain#name}

---



