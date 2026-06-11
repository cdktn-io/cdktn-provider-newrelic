# `dataNewrelicFleetMembers` Submodule <a name="`dataNewrelicFleetMembers` Submodule" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataNewrelicFleetMembers <a name="DataNewrelicFleetMembers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers"></a>

Represents a {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/fleet_members newrelic_fleet_members}.

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

new dataNewrelicFleetMembers.DataNewrelicFleetMembers(scope: Construct, id: string, config: DataNewrelicFleetMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig">DataNewrelicFleetMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig">DataNewrelicFleetMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetRing">resetRing</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRing` <a name="resetRing" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.resetRing"></a>

```typescript
public resetRing(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataNewrelicFleetMembers resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isConstruct"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

dataNewrelicFleetMembers.DataNewrelicFleetMembers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformElement"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformDataSource"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataNewrelicFleetMembers resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataNewrelicFleetMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataNewrelicFleetMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/fleet_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataNewrelicFleetMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.members">members</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList">DataNewrelicFleetMembersMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ringInput">ringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ring">ring</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.members"></a>

```typescript
public readonly members: DataNewrelicFleetMembersMembersList;
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList">DataNewrelicFleetMembersMembersList</a>

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ringInput`<sup>Optional</sup> <a name="ringInput" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ringInput"></a>

```typescript
public readonly ringInput: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ring`<sup>Required</sup> <a name="ring" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.ring"></a>

```typescript
public readonly ring: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataNewrelicFleetMembersConfig <a name="DataNewrelicFleetMembersConfig" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.Initializer"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

const dataNewrelicFleetMembersConfig: dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.fleetId">fleetId</a></code> | <code>string</code> | The GUID of the fleet to list members for. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/fleet_members#id DataNewrelicFleetMembers#id}. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.ring">ring</a></code> | <code>string</code> | Filter members by ring name. If omitted, all members across all rings are returned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The GUID of the fleet to list members for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/fleet_members#fleet_id DataNewrelicFleetMembers#fleet_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/fleet_members#id DataNewrelicFleetMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ring`<sup>Optional</sup> <a name="ring" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersConfig.property.ring"></a>

```typescript
public readonly ring: string;
```

- *Type:* string

Filter members by ring name. If omitted, all members across all rings are returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/newrelic/newrelic/3.93.0/docs/data-sources/fleet_members#ring DataNewrelicFleetMembers#ring}

---

### DataNewrelicFleetMembersMembers <a name="DataNewrelicFleetMembersMembers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers.Initializer"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

const dataNewrelicFleetMembersMembers: dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataNewrelicFleetMembersMembersList <a name="DataNewrelicFleetMembersMembersList" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

new dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.get"></a>

```typescript
public get(index: number): DataNewrelicFleetMembersMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataNewrelicFleetMembersMembersOutputReference <a name="DataNewrelicFleetMembersMembersOutputReference" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer"></a>

```typescript
import { dataNewrelicFleetMembers } from '@cdktn/provider-newrelic'

new dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers">DataNewrelicFleetMembersMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataNewrelicFleetMembersMembers;
```

- *Type:* <a href="#@cdktn/provider-newrelic.dataNewrelicFleetMembers.DataNewrelicFleetMembersMembers">DataNewrelicFleetMembersMembers</a>

---



